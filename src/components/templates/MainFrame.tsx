import React from "react";
import { Center, Flex, Heading, HStack } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const MainFrame: React.FC<Props> = ({ title }) => {
  //fullなCenterはブラウザ画面サイズ変えるときになんか重いので止めた方がいいかも
  //そういう話でも無いか？

  return (
    <HStack h={"100vh"} w={"100vw"}>
      <Flex h={"full"} w={"50%"} backgroundColor={"green.300"}>
        <Center h={"full"} w={"full"}>
          <Heading size={"2xl"} textColor={"white"}>
            {title}
          </Heading>
        </Center>
      </Flex>
      <Flex h={"full"} w={"50%"} backgroundColor={"white"}>
        right
      </Flex>
    </HStack>
  );
};
