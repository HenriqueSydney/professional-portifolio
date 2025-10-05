// src/queues/worker/index.ts
import { startWorkers } from "../index";
import { apiLogger } from "@/lib/logger";
import { addSendNewsletterJob } from "../jobs/sendNewsletter";

let workers: any[] = [];

async function start() {
  try {
    apiLogger.info({ message: "[WORKER] Initializing workers..." });
    workers = startWorkers();
    apiLogger.info({
      message: "[WORKER] All workers initialized successfully",
      count: workers.length,
    });

    await addSendNewsletterJob();
  } catch (error) {
    apiLogger.error({
      message: "[WORKER] Failed to initialize workers",
      error: error instanceof Error ? error.message : String(error),
    });
    process.exit(1);
  }
}

async function shutdown() {
  apiLogger.info({ message: "[WORKER] Starting graceful shutdown..." });

  try {
    // Fechar todos os workers
    await Promise.all(
      workers.map(async (worker) => {
        try {
          await worker.close();
          apiLogger.info({
            message: `[WORKER] Worker "${worker.name}" closed successfully`,
          });
        } catch (error) {
          apiLogger.error({
            message: `[WORKER] Error closing worker "${worker.name}"`,
            error: error instanceof Error ? error.message : String(error),
          });
        }
      })
    );

    apiLogger.info({ message: "[WORKER] Graceful shutdown completed" });
    process.exit(0);
  } catch (error) {
    apiLogger.error({
      message: "[WORKER] Error during shutdown",
      error: error instanceof Error ? error.message : String(error),
    });
    process.exit(1);
  }
}

process.on("SIGTERM", () => {
  apiLogger.info({ message: "[WORKER] SIGTERM received" });
  shutdown();
});

process.on("SIGINT", () => {
  apiLogger.info({ message: "[WORKER] SIGINT received" });
  shutdown();
});

process.on("unhandledRejection", (reason, promise) => {
  apiLogger.error({
    message: "[WORKER] Unhandled Rejection",
    reason: String(reason),
    promise: String(promise),
  });
});

process.on("uncaughtException", (error) => {
  apiLogger.error({
    message: "[WORKER] Uncaught Exception",
    error: error.message,
    stack: error.stack,
  });
  shutdown();
});

// Iniciar workers
start();
