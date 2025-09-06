
import { Heading, Preview, Text } from "@react-email/components";

import { EmailContainer } from "./components/EmailContainer";
import { EmailStrongTag } from "./components/EmailStrongTag";
import { EmailSubscriptionCancel } from "./components/EmailSubscriptionCancel";

type NewsletterConfirmationEmailProps = {
        name?: string;
        confirmationId: string
};


export default function NewsletterConfirmationEmail({
  name = "",
  confirmationId = 'a090e2b3-3064-4b7d-8e74-762972c27c6c',
}: NewsletterConfirmationEmailProps) {

  return (
    <EmailContainer>
      <Preview className="text-[12px] text-gray-600 leading-[20px] text-center mb-2">
                                🚀 Confirmado! Agora você acompanha minha jornada tech!
      </Preview>
      <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
        <EmailStrongTag>Inscrição confirmada!</EmailStrongTag> Bem-vindo(a){name.split(" ")[0]}! ✨
      </Heading>
      <Text className="text-[14px] text-black leading-[24px]">
        <EmailStrongTag>Parabéns!</EmailStrongTag> Sua inscrição foi confirmada com sucesso e você agora
                                vai acompanhar minha jornada no mundo do desenvolvimento e DevOps. 🔧
      </Text>
      <Text className="text-[14px] text-black leading-[24px]">
        <EmailStrongTag>O que você pode esperar:</EmailStrongTag>
        <br />
                                • Minhas experiências reais com desenvolvimento e DevOps
        <br />
                                • Aprendizados e erros que cometi pelo caminho
        <br />
                                • Reviews honestas de ferramentas que uso no dia a dia
        <br />
                                • Dicas práticas que realmente funcionaram para mim
        <br />
                                • Projetos pessoais e experimentos que estou fazendo
      </Text>

      <Text className="text-[14px] text-black leading-[24px]">
        <EmailStrongTag>Próximos passos:</EmailStrongTag>
        <br />
                                📧 Fique de olho na sua caixa de entrada - compartilho conteúdo quando tenho algo interessante
        <br />
                                📱 Adicione meu email aos seus contatos para não perder nenhum post
        <br />
                                🔗 Me siga nas redes sociais para atualizações mais frequentes e bastidores
      </Text>

      <Text className="text-[14px] text-black leading-[24px] bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
        <EmailStrongTag>💡 Dica pessoal:</EmailStrongTag> Configure um filtro no seu email para marcar
                                meus conteúdos como importantes. Assim você não vai perder aquela solução que pode te salvar
                                em um projeto futuro (já aconteceu comigo várias vezes)!
      </Text>

      <Text className="text-[14px] text-black leading-[24px]">
                                Muito obrigado por se interessar pelo meu trabalho! Espero que minha experiência
                                possa te ajudar de alguma forma na sua jornada.
        <br />
        <br />
                                Até o próximo post! 🚀👨‍💻
      </Text>


      <EmailSubscriptionCancel subscriptionId={confirmationId} />

    </EmailContainer>
  );
}
