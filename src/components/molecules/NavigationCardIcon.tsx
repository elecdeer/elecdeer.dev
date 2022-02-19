import React from "react";
import { IconProps } from "@chakra-ui/icon";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  url: string;
};

export const NavigationCardIcon: React.FC<Props & IconProps> = ({
  url,
  ...props
}) => {
  return isInternalLink(url) ? (
    <ChevronRightIcon {...props} />
  ) : (
    <ExternalLinkIcon {...props} />
  );
};

/**
 * 内部リンクかどうか
 * @param url
 */
const isInternalLink = (url: string) => {
  //シンプルに
  return url.startsWith("/");
};
