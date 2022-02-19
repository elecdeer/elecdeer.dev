import { MainFrame } from "../components/templates/MainFrame";
import { Box } from "@chakra-ui/react";
import { NavigationCardList } from "../components/organisms/NavigationCardList";

export default function Home() {
  return (
    <MainFrame title={"elecdeer.dev"}>
      <Box h={"full"}>
        <NavigationCardList
          h={"full"}
          cards={[
            {
              title: "Work",
              description: "制作物",
              linkUrl: "/test/pageA",
            },
            {
              title: "Blog",
              description: "ブログ&備忘録",
              linkUrl: "https://scrapbox.io/elecdeer-pub/",
            },
            {
              title: "GitHub",
              linkUrl: "https://github.com/elecdeer",
            },
          ]}
        />
      </Box>
    </MainFrame>
  );
}
