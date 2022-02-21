import { MainFrame } from "../components/templates/MainFrame";
import { Box } from "@chakra-ui/react";
import { NavigationCardList } from "../components/organisms/NavigationCardList";
import { GetStaticProps } from "next";
import { fetchTopLinks, TopLinkItem } from "../lib/fetchTopLinks";
import React from "react";

type Props = {
  topLinks: TopLinkItem[];
};

const Home: React.VFC<Props> = ({ topLinks }) => {
  return (
    <MainFrame title={"elecdeer.dev"}>
      <Box h={"full"}>
        <NavigationCardList h={"full"} cards={topLinks} />
      </Box>
    </MainFrame>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const linkItems = await fetchTopLinks();
  return {
    props: {
      topLinks: linkItems,
    },
  };
};

export default Home;
