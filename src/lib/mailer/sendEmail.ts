
import Mailer from '@/lib/mailer/mailer-factory'
import { htmlToText } from "html-to-text";

type SendEmail = {
    to: string
    subject: string
    html: string
}

export async function sendEmail({ to, subject, html }: SendEmail) {

    const text = htmlToText(html, {
        wordwrap: 130,
        selectors: [
            { selector: "a", options: { hideLinkHrefIfSameAsText: true } },
        ],
    })


    try {
        const mailer = Mailer.getInstance();
        await mailer.sendMail({ to, subject, html, text });

        console.log('Email sent: ', { to, subject })
    } catch (error) {
        console.error(error)
        throw error
    }


}