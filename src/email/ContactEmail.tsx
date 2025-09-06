import { Heading, Hr, Preview, Text } from "@react-email/components";

import { EmailContainer } from "./components/EmailContainer";
import { EmailStrongTag } from "./components/EmailStrongTag";

type ContactEmailProps = {
  name: string
  email: string
  subject: string
  message: string
};


export default function ContactEmail({
  name = 'Henrique Sydney Ribeiro Lima',
  email = 'exemple@exemple.com',
  subject = 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic numquam consectetur dolores odio dicta mollitia pariatur blanditiis, cumque esse quaerat alias velit. Eos eaque voluptate ratione? Excepturi, hic reiciendis.',
}: ContactEmailProps) {

  return (
    <EmailContainer>
      <Preview className="text-[12px] text-gray-600 leading-[20px] text-center mb-2">
        Opa! Um novo contato te espera ✨
      </Preview>
      <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
        <EmailStrongTag>Novo contato</EmailStrongTag>
      </Heading>
      <Text className="text-[14px] text-black leading-[24px]">
        O(a) <EmailStrongTag>{name}</EmailStrongTag> lhe enviou uma mensagem de contato.
      </Text>
      <Hr className="mx-0 my-[12px] w-full border border-[#eaeaea] border-solid" />
      <Text className="text-[14px] text-black leading-[24px]">
        <strong>Email para contato: </strong><a href="mailto:exemple@exemple.com" className="text-[hsl(270,85%,65%)] font-semibold">{email}</a>
      </Text>
      <Hr className="mx-0 my-[12px] w-full border border-[#eaeaea] border-solid" />
      <Text className="text-[14px] text-black leading-[24px]">
        <strong>Assunto: </strong>{subject}
      </Text>
      <Hr className="mx-0 my-[12px] w-full border border-[#eaeaea] border-solid" />
      <Text className="text-[14px] text-black leading-[24px]">
        <strong>Mensagem: </strong>{message}
      </Text>
    </EmailContainer>
  );
}
