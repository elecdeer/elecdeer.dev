import { MainFrame } from "../../components/templates/MainFrame";
import { Box } from "@chakra-ui/react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchWorkPagesHeadline } from "../../lib/fetchWorkPagesHeadline";
import { fetchWorkPage, WorkPageItem } from "../../lib/fetchWorkPage";
import React from "react";

type Props = {
  pageItem: WorkPageItem;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const WorkPage: React.VFC<Props> = ({ pageItem }) => {
  return (
    <MainFrame title={pageItem.title}>
      <Box h={"full"}>{pageItem.content}</Box>
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