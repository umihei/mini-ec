import { memo } from "react";
import { HStack, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  onClickProducts: () => void;
};

export const DiscoverLink = memo((props: Props) => {
  const { onClickProducts } = props;
  return (
    <HStack spacing="3">
      <Link
        color={useColorModeValue("red.500", "red.300")}
        fontWeight="bold"
        fontSize="lg"
        onClick={onClickProducts}
      >
        Discover now
      </Link>
      <Icon color={useColorModeValue("red.500", "red.300")} as={FaArrowRight} />
    </HStack>
  );
});
