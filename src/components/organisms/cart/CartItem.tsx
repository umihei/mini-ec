import { memo } from "react";
import {
  Flex,
  Stack,
  Image,
  Box,
  Text,
  CloseButton,
  Link,
  useColorModeValue as mode,
  Select,
  SelectProps
} from "@chakra-ui/react";

import { ProductInCart } from "../../../types/productInCart";
import { useCurrencyFormatter } from "../../../hooks/useCurrencyFormatter";

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={mode("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

type Props = {
  product: ProductInCart;
  onQuantityChange: (itemId: number, newQuantity: number) => void;
  handleRemoveProduct: (productId: number) => void;
};

export const CartItem = memo((props: Props) => {
  const { product, onQuantityChange, handleRemoveProduct } = props;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={product.image}
          alt="test"
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{product.name}</Text>
            <Text color={mode("gray.600", "gray.400")} fontSize="sm">
              {""}
            </Text>
          </Stack>
        </Box>
      </Stack>

      {/* desktop mode */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect
          value={product.quantity}
          onChange={(e) => {
            onQuantityChange(product.id, parseInt(e.target.value));
          }}
        />
        <Text>{useCurrencyFormatter(product.price)}</Text>
        {/* <PriceTag price={price} currency={currency} /> */}
        <CloseButton
          aria-label={`Delete ${product.name} from cart`}
          onClick={() => handleRemoveProduct(product.id)}
        />
      </Flex>

      {/* mobile mode */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link
          fontSize="sm"
          textDecor="underline"
          onClick={() => handleRemoveProduct(product.id)}
        >
          Delete
        </Link>
        <QuantitySelect
          value={product.quantity}
          onChange={(e) => {
            onQuantityChange(product.id, parseInt(e.target.value));
          }}
        />
        <Text>{useCurrencyFormatter(product.price)}</Text>
        {/* <PriceTag price={price} currency={currency} /> */}
      </Flex>
    </Flex>
  );
});
