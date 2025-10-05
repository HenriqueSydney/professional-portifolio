// src/queues/index.ts
import { Queue, Worker, JobsOptions, ConnectionOptions } from "bullmq";
import { apiLogger } from "@/lib/logger";
import * as Jobs from "./jobs";
import { envVariables } from "@/env";

const jobs = [...Object.values(Jobs)];

// Configuração do Redis específica para BullMQ
export const redisConnection: ConnectionOptions = {
  host: "localhost", //envVariables.REDIS_HOST,
  port: parseInt(envVariables.REDIS_PORT),
  password: envVariables.REDIS_PASSWORD,
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
  retryStrategy: (times: number) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
};

const queues = jobs.map((job) => {
  const queue = new Queue(job.key, {
    connection: redisConnection,
    defaultJobOptions: {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
      removeOnComplete: {
        count: 100, // mantém últimos 100 jobs completados
      },
      removeOnFail: {
        count: 50, // mantém últimos 50 jobs falhados
      },
    },
  });

  // Log de eventos da queue
  queue.on("error", (error) => {
    apiLogger.error({
      message: `[QUEUE][${job.key}][ERROR]`,
      error: error.message,
    });
  });

  return {
    queue,
    name: job.key,
    handle: job.handle,
  };
});

// Exporta a função para adicionar jobs (usada na aplicação)
export async function addJob<T>(name: string, data: T, config?: JobsOptions) {
  const q = queues.find((q) => q.name === name);

  if (!q) {
    throw new Error(`Queue "${name}" not found`);
  }

  apiLogger.info({
    message: `[QUEUE] Adding job to "${name}"`,
    data,
  });

  try {
    const job = await q.queue.add(name, data, config);

    apiLogger.info({
      message: `[QUEUE] Job added successfully to "${name}"`,
      jobId: job.id,
      jobName: job.name,
    });

    // Verificar se o job foi realmente adicionado
    const jobCount = await q.queue.count();
    apiLogger.info({
      message: `[QUEUE] Total jobs in "${name}"`,
      count: jobCount,
    });

    return job;
  } catch (error) {
    apiLogger.error({
      message: `[QUEUE] Failed to add job to "${name}"`,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

// Exporta a função para iniciar os workers (usada apenas no worker)
export function startWorkers() {
  apiLogger.info({ message: "[API] Starting workers..." });

  const workers: Worker[] = [];

  queues.forEach(({ name, handle, queue }) => {
    const worker = new Worker(
      name,
      async (job) => {
        apiLogger.info({
          message: `[JOB][${name}][PROCESSING]`,
          jobId: job.id,
        });

        try {
          const result = await handle(job);
          return result;
        } catch (error) {
          apiLogger.error({
            message: `[JOB][${name}][HANDLER_ERROR]`,
            jobId: job.id,
            error: error instanceof Error ? error.message : String(error),
          });
          throw error;
        }
      },
      {
        connection: redisConnection,
        concurrency: 5,
        lockDuration: 30000,
        autorun: true,
      }
    );

    worker.on("completed", (job) => {
      apiLogger.info({
        message: `[JOB][${name}][COMPLETED]`,
        jobId: job.id,
      });
    });

    worker.on("failed", (job, err) => {
      apiLogger.error({
        message: `[JOB][${name}][FAILED]`,
        jobId: job?.id,
        error: err.message,
        stack: err.stack,
      });
    });

    worker.on("error", (err) => {
      apiLogger.error({
        message: `[JOB][${name}][WORKER_ERROR]`,
        error: err.message,
        stack: err.stack,
      });
    });

    // Log quando o worker está pronto
    worker.on("ready", async () => {
      apiLogger.info({
        message: `[API] Worker "${name}" ready ✅`,
      });

      try {
        const waiting = await queue.getWaitingCount();
        const active = await queue.getActiveCount();
        const delayed = await queue.getDelayedCount();
        const failed = await queue.getFailedCount();

        apiLogger.info({
          message: `[API] Queue "${name}" status`,
          waiting,
          active,
          delayed,
          failed,
        });
      } catch (error) {
        apiLogger.error({
          message: `[API] Failed to get queue status for "${name}"`,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    });

    workers.push(worker);

    apiLogger.info({
      message: `[API] Worker "${name}" registered`,
    });
  });

  return workers;
}

// Função auxiliar para debug
export async function getQueueStatus(queueName: string) {
  const q = queues.find((q) => q.name === queueName);

  if (!q) {
    throw new Error(`Queue "${queueName}" not found`);
  }

  const waiting = await q.queue.getWaitingCount();
  const active = await q.queue.getActiveCount();
  const delayed = await q.queue.getDelayedCount();
  const failed = await q.queue.getFailedCount();
  const completed = await q.queue.getCompletedCount();

  return {
    waiting,
    active,
    delayed,
    failed,
    completed,
  };
}
