import SMTPTransport from "nodemailer/lib/smtp-transport";

export interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
    text?: string; // opcional, pois pode ser gerado automaticamente
}

export interface IMailer {
    sendMail(options: SendEmailOptions): Promise<SMTPTransport.SentMessageInfo>;
}