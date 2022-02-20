import { WorkPageHeadlineItem } from "./fetchWorkPagesHeadline";
import { client } from "./microcmsAPI";

export type WorkPageItem = WorkPageHeadlineItem & {
  content: WorkPageContent;
  links: LinkItem[];
};

export type LinkItem = {
  name?: string;
  url: string;
};

export type WorkPageContent = string;

type FetchedWorkPageItem = Omit<WorkPageItem, "links"> & {
  linkListRaw: string;
};

export const fetchWorkPage = async (
  id: WorkPageItem["id"]
): Promise<WorkPageItem> => {
  const res = await client.get<FetchedWorkPageItem>({
    endpoint: "work-pages",
    contentId: id,
  });
  console.log(parseLinks(res.linkListRaw));

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
  return items.map((item) => {
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
