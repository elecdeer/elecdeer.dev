import { WorkPageHeadlineItem } from "./fetchWorkPagesHeadline";

export type WorkPageItem = WorkPageHeadlineItem & {
  content: WorkPageContent;
  links: LinkItem[];
};

export type LinkItem = {
  name: string;
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
    links: [],
  };
};
