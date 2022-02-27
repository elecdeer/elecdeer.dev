import { MainFrame } from "../../components/templates/MainFrame";
import { Box, Stack } from "@chakra-ui/react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchWorkPagesHeadline } from "../../lib/fetchWorkPagesHeadline";
import { fetchWorkPage, WorkPageItem } from "../../lib/fetchWorkPage";
import React from "react";
import { LinkWithIcon } from "../../components/molecules/LinkWithIcon";
import { RichText } from "../../components/templates/RichText";
import NextImage from "next/image";

type Props = {
  pageItem: WorkPageItem;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const WorkPage: React.VFC<Props> = ({ pageItem }) => {
  return (
    <MainFrame
      title={pageItem.title}
      backLink={{
        url: "/works",
        displayName: "Works",
      }}
    >
      <Box h={"full"}>
        <Stack>
          {pageItem.headingImg && (
            <NextImage
              src={pageItem.headingImg.url}
              width={pageItem.headingImg.width}
              height={pageItem.headingImg.height}
            />
          )}

          <Stack py={2}>
            {pageItem.links.map((item, index) => (
              <LinkWithIcon
                url={item.url}
                displayName={item.name}
                key={`work-page-link-${item.url}-${index}`}
              />
            ))}
          </Stack>
          <RichText html={pageItem.content} />
        </Stack>
      </Box>
    </MainFrame>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const page = await fetchWorkPage(params!.id);
  return {
    props: {
      pageItem: page,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const pages = await fetchWorkPagesHeadline();
  const paths = pages.map((pageHeadline) => ({
    params: {
      id: pageHeadline.id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default WorkPage;
