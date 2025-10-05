import { apiLogger } from "@/lib/logger";
import { sendEmail } from "@/lib/mailer/sendEmail";

export interface IHandleData {
  email: string;
  html: string;
  subject: string;
  traceId?: string;
  logMessage: string;
}

export default {
  key: "sendEmail",
  async handle(job: { data: IHandleData }) {
    const { email, html, subject, traceId = 0, logMessage } = job.data;

    await sendEmail({
      to: email,
      html,
      subject,
    });

    apiLogger.info({ email, traceId }, logMessage);
  },
};
