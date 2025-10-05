import { addJob } from "@/queues";
import { apiLogger } from "@/lib/logger";

export async function addSendNewsletterJob() {
  try {
    const job = await addJob(
      "sendNewsletter",
      {},
      {
        repeat: {
          pattern: "0 8 * * 1",
          tz: "America/Sao_Paulo",
        },
      }
    );

    apiLogger.info({
      message: "[SENDNEWSLETTER] Job added successfully",
      jobId: job.id,
    });

    return job;
  } catch (error) {
    apiLogger.error({
      message: "[SENDNEWSLETTER] Failed to add sendEmail job",
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}
