import { Body, Container, Html, Tailwind } from "@react-email/components";
import { ReactNode } from "react";
import { EmailHeader } from "./EmailHeader";
import { EmailFooter } from "./EmailFooter";

type EmailContainerProps = {
    children: ReactNode
}

export function EmailContainer({ children }: EmailContainerProps) {
    return (
        <Html>
            <Tailwind>
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
                        <EmailHeader />
                        {children}
                        <EmailFooter />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}