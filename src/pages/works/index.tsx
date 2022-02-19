import { MainFrame } from "../../components/templates/MainFrame";
import { Box } from "@chakra-ui/react";
import { NavigationCardList } from "../../components/organisms/NavigationCardList";
import { GetStaticProps } from "next";
import {
  fetchWorkPagesHeadline,
  WorkPageHeadlineItem,
} from "../../lib/fetchWorkPagesHeadline";
import React, { useMemo } from "react";

type Props = {
  workPages: WorkPageHeadlineItem[];
};

const Index: React.VFC<Props> = ({ workPages }) => {
  const cards = useMemo(() => {
    return workPages.map((item) => {
      const url = `/works/${item.id}`;
      return {
        title: item.title,
        description: item.shortDescription,
        linkUrl: url,
      };
    });
  }, [workPages]);

  return (
    <MainFrame
      title={"Works"}
      backLink={{
        displayTitle: "Top",
        url: "/",
      }}
    >
      <Box h={"full"}>
        <NavigationCardList h={"full"} cards={cards} />
      </Box>
    </MainFrame>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pages = await fetchWorkPagesHeadline();
  return {
    props: {
      workPages: pages,
    },
  };
};

export default Index;
