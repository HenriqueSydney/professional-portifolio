import { SpanStatusCode, trace } from "@opentelemetry/api";
import { htmlToText } from "html-to-text";

import Mailer from "@/lib/mailer/mailer-factory";

type SendEmail = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: SendEmail) {
  const tracer = trace.getTracer("mailer");

  return tracer.startActiveSpan("send-email", async (span) => {
    span.setAttribute("email.to", to);
    span.setAttribute("email.subject", subject);
    const start = performance.now();

    try {
      const text = htmlToText(html, {
        wordwrap: 130,
        selectors: [
          { selector: "a", options: { hideLinkHrefIfSameAsText: true } },
        ],
      });

      const mailer = Mailer.getInstance();
      const response = await mailer.sendMail({
        to,
        subject,
        html,
        text,
        attachments: [
          {
            filename: "Logo.png",
            path: "./public/Logo.png",
            cid: "logo",
          },
        ],
      });

      span.setStatus({ code: SpanStatusCode.OK });
      span.setAttribute("email.messageId", JSON.stringify(response.messageId));

      return response;
    } catch (error) {
      span.recordException(error as Error);
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error instanceof Error ? error.message : "Unknown error",
      });
      throw error;
    } finally {
      span.setAttribute("execution.ms", performance.now() - start);
      span.end();
    }
  });
}
