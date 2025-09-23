import { envVariables } from "@/env";
import { Hr, Text } from "@react-email/components";

type EmailSubscriptionCancel = {
  subscriptionId: string;
};

export function EmailSubscriptionCancel({
  subscriptionId,
}: EmailSubscriptionCancel) {
  const cancelSubscriptionUrl = `${envVariables.BASE_URL}/api/newsletter/cancel/${subscriptionId}`;

  return (
    <>
      <Hr className="my-6 border-gray-200" />
      <Text className="text-[12px] text-center text-gray-500 leading-[20px]">
        Você está recebendo este email porque confirmou sua inscrição na nossa
        newsletter.
        <br />
        Não quer mais receber nossos emails?{" "}
        <a
          href={cancelSubscriptionUrl}
          className="font-semibold no-underline text-gray-500 "
        >
          Cancele sua inscrição aqui
        </a>
        .
      </Text>
    </>
  );
}
