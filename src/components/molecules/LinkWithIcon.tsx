import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconProps } from "@chakra-ui/icon";
import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

type Props = {
  url: string;
  displayName?: string;
};

type URLType = "GitHub" | "Twitter" | "Youtube" | "Other";

const distinctUrlType = (url: string): URLType => {
  const parsedUrl = new URL(url);
  const host = parsedUrl.host.replace("www.", "");
  switch (host) {
    case "github.com":
    case "gist.github.com":
      return "GitHub";
    case "twitter.com":
      return "Twitter";
    case "youtube.com":
      return "Youtube";
    default:
      return "Other";
  }
};

export const LinkWithIcon: React.VFC<Props> = ({ url, displayName }) => {
  const type = distinctUrlType(url);

  return (
    <Link href={url} passHref>
      <HStack cursor={"pointer"} role={"group"}>
        <InnerIcon urlType={type} boxSize={6} />
        <Text
          fontSize={"md"}
          isTruncated
          _groupHover={{
            textDecoration: "underline",
          }}
        >
          <a href={url}>{displayName ?? url}</a>
        </Text>
      </HStack>
    </Link>
  );
};

const InnerIcon: React.VFC<{ urlType: URLType } & IconProps> = ({
  urlType,
  ...props
}) => {
  switch (urlType) {
    case "GitHub":
      return <Icon as={BsGithub} {...props} />;
    case "Twitter":
      return <Icon as={BsTwitter} {...props} />;
    case "Youtube":
      return <Icon as={BsYoutube} {...props} />;
    case "Other":
      return <ExternalLinkIcon {...props} />;
  }
};
