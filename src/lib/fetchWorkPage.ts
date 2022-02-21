import { client, MicroCMSAPISchema } from "./microcmsAPI";

export type WorkPageItem = MicroCMSAPISchema["work-pages"] & {
  links: LinkItem[];
};

export type LinkItem = {
  name?: string;
  url: string;
};

export const fetchWorkPage = async (
  id: WorkPageItem["id"]
): Promise<WorkPageItem> => {
  const res = await client.get<MicroCMSAPISchema["work-pages"]>({
    endpoint: "work-pages",
    contentId: id,
  });

  return {
    links: parseLinks(res.linkListRaw),
    ...res,
  };
};

const markdownLinkParseReg = /\[([^\[]+)]\((.*)\)/;

/**
 * markdownリンクまたはURLを改行区切りで列挙したstringをパースする
 * @param linkListRaw
 */
const parseLinks = (linkListRaw: string): LinkItem[] => {
  const items = linkListRaw.split("\n");
  return items
    .filter((item) => !!item)
    .map((item) => {
      const markdownLinkParsed = markdownLinkParseReg.exec(item);
      if (markdownLinkParsed) {
        return {
          name: markdownLinkParsed[1],
          url: markdownLinkParsed[2],
        };
      } else {
        return {
          name: item,
          url: item,
        };
      }
    });
};
