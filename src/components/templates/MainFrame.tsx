import React, { useContext } from "react";
import {
  Box,
  BoxProps,
  Center,
  Flex,
  Heading,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
import { RouteDepthChangeContext } from "../../pages/_app";
import { PageBackLink } from "../molecules/PageBackLink";
import Head from "next/head";

type Props = {
  title: string;
  backLink?: {
    displayName: string;
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
  const leftContent = (
    <>
      <VStack h={"full"} w={"full"}>
        <Center h={"full"}>
          <Heading size={"2xl"} textColor={"white"}>
            {title}
          </Heading>
        </Center>
        <Spacer />
        <Box h={40}>{backLink && <PageBackLink {...backLink} />}</Box>
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
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
            initial={
              depthChange === "DEEP" ? { rotateY: -180 } : { rotateY: 0 }
            }
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
            initial={
              depthChange === "DEEP" ? { rotateY: 0 } : { rotateY: -180 }
            }
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
    </>
  );
};
