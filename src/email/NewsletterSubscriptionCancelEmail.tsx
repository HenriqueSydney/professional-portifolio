import { Button, Heading, Preview, Text } from "@react-email/components";

import { EmailContainer } from "./components/EmailContainer";
import { EmailStrongTag } from "./components/EmailStrongTag";
import { envVariables } from "@/env";

type NewsletterSubscriptionCancelEmail = {
  name?: string;
  confirmationId: string;
};

export default function NewsletterSubscriptionCancelEmail({
  name = "Henrique Sydney Ribeiro Lima",
  confirmationId,
}: NewsletterSubscriptionCancelEmail) {
  const cancelUrl = `${envVariables.BASE_URL}/api/newsletter/cancel/confirm/${confirmationId}`;

  return (
    <EmailContainer>
      <Preview className="text-[12px] text-gray-600 leading-[20px] text-center mb-2">
        😔 Que pena... você cancelou sua inscrição
      </Preview>

      <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
        Até logo, <EmailStrongTag>{name.split(" ")[0]}</EmailStrongTag>... 😢
      </Heading>

      <Text className="text-[14px] text-black leading-[24px]">
        Espero que meu conteúdo tenha te ajudado de alguma forma durante o tempo
        que estivemos conectados. 💙
      </Text>

      <Text className="text-[14px] text-black leading-[24px]">
        Se você puder me ajudar,{" "}
        <a
          href="mailto:contato@henriquelima.dev"
          className="text-blue-600 no-underline"
        >
          mande uma mensagem pelo meu blog
        </a>{" "}
        com um feedback:
        <br />
        • Talvez eu tenha enviado muitos emails?
        <br />
        • O conteúdo não era relevante?
        <br />
        • Mudou de interesse?
        <br />• Problemas técnicos?
      </Text>

      <Text className="text-[14px] text-black leading-[24px]">
        <EmailStrongTag>
          Me ajude a melhorar! Serei eternamente grato!
        </EmailStrongTag>
      </Text>

      <Text className="text-[14px] text-black leading-[24px]">
        Hmm... É isso, então 😞. Muito obrigado por ter acompanhado meu
        trabalho. Foi um prazer ter você na minha jornada, mesmo que por pouco
        tempo.
        <br />
        <br />
        Desejo muito sucesso na sua carreira! 🚀
        <br />
        <br />
        Com carinho,
        <br />
        <EmailStrongTag>Henrique</EmailStrongTag>
      </Text>
    </EmailContainer>
  );
}
