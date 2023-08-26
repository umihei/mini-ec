import { memo } from "react";
import { Stack, Heading, useColorModeValue } from "@chakra-ui/react";

import { DiscoverLink } from "../../atoms/link/DiscoverLink";

type Props = {
  onClickProducts: () => void;
};

export const GuidePanel = memo((props: Props) => {
  const { onClickProducts } = props;
  return (
    <Stack spacing={{ base: "8", lg: "10" }}>
      <Stack spacing={{ base: "2", lg: "4" }}>
        <Heading size="xl" color={useColorModeValue("red.500", "red.300")}>
          T-shirts
        </Heading>
        <Heading size="xl" fontWeight="normal">
          お気に入りを見つけよう
        </Heading>
      </Stack>
      <DiscoverLink onClickProducts={onClickProducts} />
    </Stack>
  );
});
