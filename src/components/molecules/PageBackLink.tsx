import React from "react";
import { Heading, HStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

type Props = {
  url: string;
  displayName: string;
};

export const PageBackLink: React.FC<Props> = ({ url, displayName }) => {
  return (
    <LinkBox>
      <HStack>
        <ChevronLeftIcon boxSize={8} color={"white"} />
        <Heading size={"lg"} textColor={"white"}>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href={url}>
            <LinkOverlay href={url}>{displayName}</LinkOverlay>
          </Link>
        </Heading>
      </HStack>
    </LinkBox>
  );
};
