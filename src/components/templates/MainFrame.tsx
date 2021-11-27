import React from "react";
import {Box, BoxProps, Center, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";

type Props = {
  title: string;
  children?: React.ReactChild;
};

const MotionBox = motion<BoxProps>(Box);

export const MainFrame: React.FC<Props> = ({ title, children }) => {
  //fullなCenterはブラウザ画面サイズ変えるときになんか重いので止めた方がいいかも
  //そういう話でも無いか？

  //exit: 右半分をrotateY

  return (
    // <motion.div
    //   style={{
    //     position: "absolute",
    //     WebkitBackfaceVisibility: "hidden",
    //   }}
    //   initial={{ rotateY: -180 }}
    //   animate={{ rotateY: 0 }}
    //   exit={{ rotateY: 0 }}
    //   transition={{ duration: 2 }}
    // >
    //
    // </motion.div>

    <HStack h={"100vh"} w={"100vw"} position={"absolute"} spacing={"0px"}>
      <Flex h={"full"} w={"50%"}>
        <motion.div
          style={{
            position: "absolute",
            WebkitBackfaceVisibility: "hidden",
            height: "100%",
            width: "50%",
            transformOrigin: "right",
            translateX: "0%",
            zIndex: 10,
            backgroundColor: "#68D391",
          }}
          initial={{ rotateY: -180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 0 }}
          transition={{ duration: 2 }}
        >
          <Center h={"full"} w={"full"}>
            <Heading size={"2xl"} textColor={"white"}>
              {title}
            </Heading>
          </Center>
        </motion.div>
      </Flex>

      <Flex h={"full"} w={"50%"}>
        <motion.div
          style={{
            position: "absolute",
            WebkitBackfaceVisibility: "hidden",
            height: "100%",
            width: "50%",
            transformOrigin: "left",
            translateX: "0%",
            zIndex: 10,
            backgroundColor: "#ffffff",
          }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 180, zIndex: 100 }}
          transition={{ duration: 2 }}
        >
          {children}
          <Heading>RIGHTRIGHTRIGHTRIGHTRIGHTRIGHT</Heading>
        </motion.div>
      </Flex>
    </HStack>
  );
};
