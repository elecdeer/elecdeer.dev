import React from "react";
import {
  Box,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NavigationCardIcon } from "./NavigationCardIcon";

export type NavigationCardProps = {
  title: string;
  description?: string;
  linkUrl: string;
};

export const NavigationCard: React.VFC<NavigationCardProps> = ({
  title,
  description,
  linkUrl,
}) => {
  return (
    <LinkBox
      borderWidth={2}
      rounded={"md"}
      px={4}
      py={2}
      h={"full"}
      minH={32}
      display={"flex"}
      _hover={{ borderColor: "green.400", borderWidth: "2" }}
    >
      <HStack w={"full"}>
        <Stack>
          <Heading size="lg">
            <NextLink href={linkUrl}>
              <LinkOverlay href={linkUrl}>{title}</LinkOverlay>
            </NextLink>
          </Heading>
          {description && <Box>{description}</Box>}
        </Stack>
        <Spacer />
        <Box>
          <NavigationCardIcon url={linkUrl} boxSize={"8"} />
        </Box>
      </HStack>
    </LinkBox>
  );
};
