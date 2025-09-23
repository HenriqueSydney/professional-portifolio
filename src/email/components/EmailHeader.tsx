import { Img, Section } from "@react-email/components";
const BASE_URL = "http://localhost:3000";

export function EmailHeader() {
  return (
    <Section className="mt-[32px]">
      <Img
        src="cid:logo"
        width="200"
        height="auto"
        alt="Henrique Lima logo"
        className="mx-auto my-0"
      />
    </Section>
  );
}
