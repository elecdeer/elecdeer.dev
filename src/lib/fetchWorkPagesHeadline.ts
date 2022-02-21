import { client, MicroCMSAPISchema } from "./microcmsAPI";

export type WorkPageHeadlineItem = Omit<
  MicroCMSAPISchema["work-pages"],
  "headingImg" | "linkListRaw" | "content"
>;

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
