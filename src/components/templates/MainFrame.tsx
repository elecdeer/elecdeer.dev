import React, { useContext } from "react";
import { Box, BoxProps, Center, Flex, Heading, HStack } from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
import { RouteDepthChangeContext } from "../../pages/_app";

type Props = {
  title: string;
  children?: React.ReactChild;
};

const MotionBox = motion<BoxProps>(Box);

const transition: Transition = {
  ease: "easeOut",
  duration: "1",
};

export const MainFrame: React.FC<Props> = ({ title, children }) => {
  //fullなCenterはブラウザ画面サイズ変えるときになんか重いので止めた方がいいかも
  //そういう話でも無いか？

  const leftContent = (
    <Center h={"full"} w={"full"}>
      <Heading size={"2xl"} textColor={"white"}>
        {title}
      </Heading>
    </Center>
  );

  const rightContent = (
    <>
      {children}
      {/*<Heading>RIGHTRIGHTRIGHTRIGHTRIGHTRIGHT</Heading>*/}
    </>
  );

  const depthChange = useContext(RouteDepthChangeContext);

  return (
    <HStack h={"100vh"} w={"100vw"} position={"absolute"} spacing={"0px"}>
      <Flex h={"full"} w={"50%"}>
        <MotionBox
          p={4}
          position={"absolute"}
          h={"100%"}
          w={"50%"}
          transformOrigin={"right"}
          translateX={"0%"}
          zIndex={10}
          style={{
            WebkitBackfaceVisibility: "hidden",
          }}
          backgroundColor={"green.300"}
          initial={depthChange === "DEEP" ? { rotateY: -180 } : { rotateY: 0 }}
          animate={{ rotateY: 0 }}
          exit={
            depthChange === "DEEP"
              ? { rotateY: 0 }
              : { rotateY: -180, zIndex: 100 }
          }
          transition={transition}
        >
          {leftContent}
        </MotionBox>
      </Flex>
      <Flex h={"full"} w={"50%"}>
        <MotionBox
          p={4}
          position={"absolute"}
          h={"100%"}
          w={"50%"}
          transformOrigin={"left"}
          translateX={"0%"}
          zIndex={10}
          style={{
            WebkitBackfaceVisibility: "hidden",
          }}
          backgroundColor={"white"}
          initial={depthChange === "DEEP" ? { rotateY: 0 } : { rotateY: -180 }}
          animate={{ rotateY: 0 }}
          exit={
            depthChange === "DEEP"
              ? { rotateY: -180, zIndex: 100 }
              : { rotateY: 0 }
          }
          transition={transition}
        >
          {rightContent}
        </MotionBox>
      </Flex>
    </HStack>
  );
};
