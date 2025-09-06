
import { envVariables } from "@/env";

import { Client } from "@notionhq/client";

export const notion = new Client({ auth: envVariables.NOTION_API_KEY });
