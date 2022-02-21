import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
} from "html-react-parser";
import {
  Box,
  Code,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

type Props = {
  html: string;
};

export const RichText: React.VFC<Props> = ({ html }) => {
  return <Box>{htmlToChakraParser(html)}</Box>;
};

const headingSizeMap = {
  h1: "lg",
  h2: "md",
  h3: "sm",
};

const parseOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!(domNode instanceof Element && domNode.attributes)) {
      return;
    }

    const children = domToReact(domNode.children, parseOptions);

    switch (domNode.name) {
      case "h1":
      case "h2":
      case "h3":
        return (
          <Heading as={domNode.name} size={headingSizeMap[domNode.name]}>
            {children}
          </Heading>
        );
      case "p":
      case "strong":
      case "em":
      case "s":
      case "sub":
      case "sup":
        return <Text as={domNode.name}>{children}</Text>;
      case "ul":
        return <UnorderedList>{children}</UnorderedList>;
      case "ol":
        return <OrderedList>{children}</OrderedList>;
      case "li":
        return <ListItem>{children}</ListItem>;
      case "a":
        return <Link href={domNode.attribs.href}>{children}</Link>;
      case "code":
        return <Code>{children}</Code>;
      case "blockquote":
        return (
          <Text
            bg={"gray.100"}
            borderLeft={"4px"}
            borderLeftColor={"gray.400"}
            paddingLeft={"4px"}
            my={1}
          >
            {children}
          </Text>
        );
      case "img":
        return (
          <NextImage
            src={domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width}
            height={domNode.attribs.height}
          />
        );
    }
  },
};

const htmlToChakraParser = (html: string) => {
  const parsed = parse(html, parseOptions);
  console.log(parsed);
  return parsed;
};
