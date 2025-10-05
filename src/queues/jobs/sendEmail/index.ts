import { addJob } from "@/queues";
import { IHandleData } from "./sendEmailConfig";
import { apiLogger } from "@/lib/logger";

export async function addSendEmailJob(data: IHandleData) {
  try {
    const { email, html, subject, traceId = 0, logMessage } = data;

    const job = await addJob("sendEmail", {
      email,
      html,
      subject,
      traceId,
      logMessage,
    });

    apiLogger.info({
      message: "[SENDEMAIL] Job added successfully",
      jobId: job.id,
      email,
      traceId,
    });

    return job;
  } catch (error) {
    apiLogger.error({
      message: "[SENDEMAIL] Failed to add sendEmail job",
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}
