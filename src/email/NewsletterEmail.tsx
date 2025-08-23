import * as React from "react";
import {
    Button,
    Heading,
    Hr,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { EmailContainer } from "./components/EmailContainer";
import { EmailStrongTag } from "./components/EmailStrongTag";
import { EmailSubscriptionCancel } from "./components/EmailSubscriptionCancel";
import { newsletterMockData } from "./mocks/newsletterDataMock";

interface NewsletterEmailProps {
    title: string;
    subscriptionId: string;
    articles: {
        title: string;
        description: string;
        url: string;
        image?: string;
    }[];
}

export default function NewsletterEmail({
    title = 'teste',
    subscriptionId = "1312321sadf",
    articles = [],
}: NewsletterEmailProps) {
    if (title == 'teste') {
        title = newsletterMockData.title
        subscriptionId = newsletterMockData.subscriptionId
        articles = newsletterMockData.articles
    }

    return (
        <EmailContainer>
            <Preview className="text-[12px] text-gray-600 leading-[20px] text-center mb-2">
                🚀 Novos posts quentinhos!! Segue o fio!
            </Preview>
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
                <EmailStrongTag>{title}</EmailStrongTag>
            </Heading>


            {/* Destaque principal */}
            {articles[0] && (
                <Section className="mb-8">
                    {articles[0].image && (
                        <Img
                            src={articles[0].image}
                            alt={articles[0].title}
                            className="rounded-xl w-full mb-4"
                        />
                    )}
                    <Heading className="text-xl font-semibold text-gray-800 mb-2">
                        {articles[0].title}
                    </Heading>
                    <Text className="text-gray-600 mb-4">
                        {articles[0].description}
                    </Text>
                    <div className="text-right mb-6">
                        <Button
                            href={articles[0].url}
                            className="bg-[hsl(142,70%,45%)] rounded-xl px-6 py-2 text-white text-sm font-medium "
                        >
                            Leia mais
                        </Button>
                    </div>
                </Section>
            )}

            <Hr className="my-1 border-gray-200" />
            {articles.slice(1).map((article, idx) => (
                <Section
                    key={idx}
                    className="flex items-start gap-4 border-t border-gray-200 pt-4 mt-4"
                >
                    {article.image && (
                        <Img
                            src={article.image}
                            alt={article.title}
                            className="w-24 h-24 object-cover rounded-lg"
                        />
                    )}
                    <div>
                        <Heading className="text-base font-semibold text-gray-800 mb-1">
                            {article.title}
                        </Heading>
                        <Text className="text-gray-600 text-sm mb-2">
                            {article.description}
                        </Text>
                        <Button
                            href={article.url}
                            className="rounded-lg bg-gray-800 px-4 py-1 text-white text-xs "
                        >
                            Leia mais
                        </Button>
                    </div>
                </Section>
            ))}

            <EmailSubscriptionCancel subscriptionId={subscriptionId} />
        </EmailContainer>
    );
}
