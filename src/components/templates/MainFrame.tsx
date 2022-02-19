import React, { useContext } from "react";
import {
  Box,
  BoxProps,
  Center,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
import { RouteDepthChangeContext } from "../../pages/_app";
import Link from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  backLink?: {
    displayTitle: string;
    url: string;
  };
  children?: React.ReactChild;
};

const MotionBox = motion<BoxProps>(Box);

const transition: Transition = {
  ease: "easeOut",
  duration: "1",
};

export const MainFrame: React.FC<Props> = ({ title, backLink, children }) => {
  //fullなCenterはブラウザ画面サイズ変えるときになんか重いので止めた方がいいかも
  //そういう話でも無いか？

  const leftContent = (
    <>
      <VStack h={"full"} w={"full"}>
        <Center h={"full"}>
          <Heading size={"2xl"} textColor={"white"}>
            {title}
          </Heading>
        </Center>
        <Spacer />
        <Box h={40}>
          {backLink && (
            <LinkBox>
              <HStack>
                <ChevronLeftIcon boxSize={8} color={"white"} />
                <Heading size={"lg"} textColor={"white"}>
                  {/* eslint-disable-next-line @next/next/link-passhref */}
                  <Link href={backLink.url}>
                    <LinkOverlay href={backLink.url}>
                      {backLink.displayTitle}
                    </LinkOverlay>
                  </Link>
                </Heading>
              </HStack>
            </LinkBox>
          )}
        </Box>
      </VStack>
    </>
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
          overflowY={"scroll"}
        >
          {rightContent}
        </MotionBox>
      </Flex>
    </HStack>
  );
};
