import { memo } from "react";
import {
  useColorModeValue as mode,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
  Link
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

import { useCurrencyFormatter } from "../../../hooks/useCurrencyFormatter";

type Props = {
  onClickProducts: () => void;
  totalPrice: number;
};

export const OrderSummary = memo((props: Props) => {
  const { onClickProducts, totalPrice } = props;
  return (
    <Flex direction="column" align="center" flex="1">
      <Box>
        <Stack
          spacing="8"
          borderWidth="2px"
          rounded="lg"
          padding="8"
          width="full"
        >
          <Heading size="md">Order Summary</Heading>
          <Stack spacing="6">
            <Flex justify="space-between">
              <Text>Total</Text>
              <Text ml="8">{useCurrencyFormatter(totalPrice)}</Text>
            </Flex>
          </Stack>
          <Button
            colorScheme="yellow"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
          >
            お支払いに進む
          </Button>
        </Stack>
      </Box>
      <HStack mt="2" fontWeight="semibold">
        <p>or</p>
        <Link
          color={mode("yellow.500", "yellow.200")}
          onClick={onClickProducts}
        >
          お買い物を続ける
        </Link>
      </HStack>
    </Flex>
  );
});
