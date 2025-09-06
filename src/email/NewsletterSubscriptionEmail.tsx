
import { Button, Heading, Preview, Text } from "@react-email/components";

import { EmailContainer } from "./components/EmailContainer";
import { EmailStrongTag } from "./components/EmailStrongTag";

type NewsletterEmailProps = {
    name?: string;
    confirmationId: string;
};


const BASE_URL = 'http://localhost:3000'


export default function NewsletterSubscriptionEmail({
  name = "Henrique Sydney Ribeiro Lima",
  confirmationId,
}: NewsletterEmailProps) {
  const confirmationUrl = `${BASE_URL}/api/confirm/${confirmationId}`;

  return (
    <EmailContainer>
      <Preview className="text-[12px] text-gray-600 leading-[20px] text-center mb-2">
                Você está a um passo de confirmar sua inscrição ✨
      </Preview>
      <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
                Obrigado por se inscrever,  <EmailStrongTag>{name.split(" ")[0]}</EmailStrongTag>! 🎉
      </Heading>
      <Text className="text-[14px] text-black leading-[24px]">
                Estamos muito felizes em ter você na nossa newsletter. 🎊
        <br />
        <br />
                Em breve você receberá conteúdos exclusivos, novidades e atualizações
                diretamente no seu e-mail.
      </Text>
      <Text className="text-[14px] text-black leading-[24px]">
        <EmailStrongTag>Para confirmar sua inscrição, clique no botão abaixo:</EmailStrongTag>
      </Text>
      {/* Call to Action */}
      <div className="text-center mb-6">
        <Button
          href={confirmationUrl}
          className="bg-[hsl(142,70%,45%)] text-white px-6 py-3 rounded-lg font-semibold no-underline"
        >
                    Confirmar inscrição
        </Button>
      </div>
      <Text className="text-[14px] text-black leading-[24px]">
                Obs: Se não foi você que solicitou a inscrição, por favor ignore este e-mail.
      </Text>
    </EmailContainer>
  );
}
