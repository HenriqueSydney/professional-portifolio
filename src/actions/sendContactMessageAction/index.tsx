"use server";

import { randomUUID } from "node:crypto";

import { render } from "@react-email/components";

import ContactEmail from "@/email/ContactEmail";
import { apiLogger } from "@/lib/logger";
import { sendEmail } from "@/lib/mailer/sendEmail";

import { ContactMessageData, contactMessageSchema } from "./contactFormSchema";
import { handleErrors } from "@/errors/handleErrors";
import { addSendEmailJob } from "@/queues/jobs/sendEmail";

export async function sendContactMessageAction(params: ContactMessageData) {
  const traceId = randomUUID();
  try {
    const { name, email, subject, message } =
      contactMessageSchema.parse(params);

    apiLogger.debug({ name, email, subject, message }, "Mensagem recebida");

    apiLogger.info(
      { name, email, subject, message, traceId },
      "Contact message received"
    );

    const html = await render(
      <ContactEmail
        name={name}
        email={email}
        subject={subject}
        message={message}
      />
    );

    await addSendEmailJob({
      email,
      html,
      subject,
      logMessage: "Contact message sent",
      traceId,
    });

    return {
      success: true,
      message: "Mensagem enviada com sucesso!",
    };
  } catch (error) {
    const errorMessage = handleErrors(error, null, {
      message: "Error sending Contact message ",
    });

    return {
      success: false,
      message: errorMessage,
    };
  }
}
