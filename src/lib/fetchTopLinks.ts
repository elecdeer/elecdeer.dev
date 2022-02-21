import { client, MicroCMSAPISchema } from "./microcmsAPI";

export type TopLinkItem = MicroCMSAPISchema["top-links"];

export const fetchTopLinks = async (): Promise<TopLinkItem[]> => {
  const res = await client.getList<MicroCMSAPISchema["top-links"]>({
    endpoint: "top-links",
    queries: {
      limit: 100,
    },
  });
  return res.contents;
};
