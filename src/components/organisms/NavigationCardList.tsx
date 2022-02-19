import React from "react";

import { BoxProps, Stack } from "@chakra-ui/react";
import {
  NavigationCard,
  NavigationCardProps,
} from "../molecules/NavigationCard";

type Props = {
  cards: NavigationCardProps[];
};

export const NavigationCardList: React.FC<Props & BoxProps> = ({
  cards,
  ...props
}) => {
  return (
    <Stack {...props}>
      {cards.map((card, index) => (
        <NavigationCard key={`${card.title}-${index}`} {...card} />
      ))}
    </Stack>
  );
};
