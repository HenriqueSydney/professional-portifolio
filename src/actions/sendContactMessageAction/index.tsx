'use server'

import { sendEmail } from "@/lib/mailer/sendEmail";
import { ContactMessageData, contactMessageSchema } from "./contactFormSchema";
import { render } from "@react-email/components";
import ContactEmail from "@/email/ContactEmail";
import { apiLogger } from "@/lib/logger";
import { randomUUID } from "node:crypto";

export async function sendContactMessageAction(params: ContactMessageData) {
  const traceId = randomUUID()
  try {
    const { name, email, subject, message } = contactMessageSchema.parse(params);

    apiLogger.debug({ name, email, subject, message }, 'Mensagem recebida',);


    apiLogger.info({ name, email, subject, message, traceId }, 'Contact message received')

    const html = await render(
      <ContactEmail
        name={name}
        email={email}
        subject={subject}
        message={message}
      />
    );

    await sendEmail({
      to: email,
      html,
      subject
    })


    apiLogger.info({ email, subject, traceId }, 'Contact message sent')

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!'
    };

  } catch (error) {
    if (error instanceof Error) {
      apiLogger.warn({ stackTrace: error, traceId }, 'Error sending Contact message ')
      return {
        success: false,
        message: error.message
      };
    }

    apiLogger.error({ stackTrace: error, traceId }, 'Error sending Contact message ')
    return {
      success: false,
      message: 'Ocorreu um erro desconhecido.'
    };
  }
}

