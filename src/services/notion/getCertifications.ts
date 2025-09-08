import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";

export type Certifications = {
  id: string;
  certifications: {
    id: string;
    description: string;
  }[];
  courses: {
    id: string;
    description: string;
  }[];
};

type NotionDatabaseInfoOfCertifications = {
  id: string;
  created_time: string;
  last_edited_time: string;
  properties: {
    Title: {
      type: "title";
      title: {
        plain_text: string;
        text: { content: string };
      }[];
    };

    Order: {
      type: "number";
      number: number | null;
    };
    Year: {
      type: "number";
      number: number | null;
    };
    Hours: {
      type: "number";
      number: number | null;
    };
    Institution: {
      type: "select";
      select: {
        id: string;
        name: string;
        color: string;
      };
    };
    Type: {
      type: "select";
      select: {
        id: string;
        name: string;
        color: string;
      };
    };
  };
};

type GetCertificationsResponse = [Error, null] | [null, Certifications];

export async function getCertifications(): Promise<GetCertificationsResponse> {
  return await notionClient(
    "getCertifications",
    async () => {
      const response = await notion.databases.query({
        database_id: "26076eb72c638048a967d8fa7f43e035",
        sorts: [{ property: "Order", direction: "ascending" }],
      });

      const certifications = response.results.map((page) => {
        const pageInfo = page as unknown as NotionDatabaseInfoOfCertifications;
        const attribute = pageInfo.properties;
        const title = attribute.Title?.title?.[0]?.plain_text || "";
        const institution = attribute.Institution?.select.name || "";
        const hours = attribute.Hours?.number || 0;
        const year = attribute.Year?.number || 0;
        const type = attribute.Type?.select.name || "Course";
        return {
          id: title.toLowerCase().replace(/\s+/g, "-"),
          description: `${title} - ${institution} - ${year} (${hours})`,
          type,
        };
      });

      const groupedCertifications = {
        id: "certifications-root",
        certifications: certifications
          .filter((c) => c.type === "Certification")
          .map((c) => ({ id: c.id, description: String(c.description) })),
        courses: certifications
          .filter((c) => c.type === "Course")
          .map((c) => ({ id: c.id, description: String(c.description) })),
      };

      groupedCertifications.certifications[0] =
        groupedCertifications.courses[0];

      return groupedCertifications;
    },
    {
      tags: ["certifications"],
    }
  );
}
