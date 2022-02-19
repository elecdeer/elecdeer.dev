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
      {cards.map((card) => (
        <NavigationCard key={card.title} {...card} />
      ))}
    </Stack>
  );
};
