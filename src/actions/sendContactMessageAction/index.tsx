'use server'

import { sendEmail } from "@/lib/mailer/sendEmail";
import { ContactMessageData, contactMessageSchema } from "./contactFormSchema";
import { render } from "@react-email/components";
import ContactEmail from "@/email/ContactEmail";

export async function sendContactMessageAction(params: ContactMessageData) {
  try {
    // Validação runtime
    const { name, email, subject, message } = contactMessageSchema.parse(params);

    // Aqui você executaria a lógica (ex.: salvar no banco, enviar e-mail, etc.)
    console.log('Mensagem recebida:', { name, email, subject, message });

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

    return {
      success: true,
      message: 'Mensagem enviada com sucesso!'
    };

  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message
      };
    }

    return {
      success: false,
      message: 'Ocorreu um erro desconhecido.'
    };
  }
}

