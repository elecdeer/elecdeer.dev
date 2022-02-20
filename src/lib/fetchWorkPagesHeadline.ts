import { client } from "./microcmsAPI";

export type WorkPageHeadlineItem = {
  id: string;
  title: string;
  shortDescription: string;
};

export const fetchWorkPagesHeadline = async (): Promise<
  WorkPageHeadlineItem[]
> => {
  const res = await client.getList<WorkPageHeadlineItem>({
    endpoint: "work-pages",
    queries: {
      limit: 100,
      fields: ["title", "shortDescription", "id"],
    },
  });
  return res.contents;
};
