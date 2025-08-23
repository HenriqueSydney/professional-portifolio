export interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
    text?: string; // opcional, pois pode ser gerado automaticamente
}

export interface IMailer {
    sendMail(options: SendEmailOptions): Promise<void>;
}