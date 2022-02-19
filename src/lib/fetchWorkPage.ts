import { WorkPageHeadlineItem } from "./fetchWorkPagesHeadline";

export type WorkPageItem = WorkPageHeadlineItem & {
  content: WorkPageContent;
  links: LinkItem[];
};

export type LinkItem = {
  name?: string;
  url: string;
};

export type WorkPageContent = string;

export const fetchWorkPage = async (
  id: WorkPageItem["id"]
): Promise<WorkPageItem> => {
  return {
    id: "dummy",
    shortDescription: "this is dummy",
    title: "dummy",
    content: "dummy",
    links: [
      {
        url: "https://github.com/elecdeer/elecdeer.dev",
        name: "github.com/elecdeer/elecdeer.dev",
      },
      {
        url: "https://twitter.com/elecdeerdev",
        name: "twitter.com/elecdeerdev",
      },
      {
        url: "https://www.google.com",
        name: "www.google.com",
      },
    ],
  };
};
