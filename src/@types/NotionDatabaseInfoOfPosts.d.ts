export type NotionDatabaseInfoOfPosts = {
  id: string;
  created_time: string;
  last_edited_time: string;
  url: string;
  cover: {
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string };
  } | null;
  properties: {
    Title: {
      type: "title";
      title: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Slug: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Excerpt: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    "Read Time"?: {
      type: "number";
      number: number | null;
    };
    Published: {
      type: "checkbox";
      checkbox: boolean;
    };
    Date: {
      type: "date";
      date: {
        start: string;
        end: string | null;
        time_zone: string | null;
      } | null;
    };
    Homepage: {
      type: "checkbox";
      checkbox: boolean;
    };
    Cover: {
      type: "files";
      url?: string | null
      files: {
        name: string;
        type: "external" | "file";
        external?: { url: string };
        file?: { url: string };

      }[];
    };
    Priority: {
      type: "number";
      number: number | null;
    };
    Tags: {
      type: "multi_select";
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
    Category: {
      type: "select",
      select: {
        id: string;
        name: string;
        color: string;
      };
    }
  };
};
