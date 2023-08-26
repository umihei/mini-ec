import { memo } from "react";
import { Box, AspectRatio, Image, Stack, Text } from "@chakra-ui/react";

import { AddCartButton } from "../../atoms/button/AddCartButton";
import { Product } from "../../../types/product";
import { useCurrencyFormatter } from "../../../hooks/useCurrencyFormatter";

type Props = {
  product: Product;
};

export const ProductCard = memo((props: Props) => {
  const { product } = props;
  return (
    <Box w="260px" h="350px">
      <AspectRatio ratio={4 / 3}>
        <Image
          src={product.image}
          alt={product.name}
          draggable="false"
          borderRadius={{ base: "md", md: "xl" }}
        />
      </AspectRatio>
      <Stack spacing={5}>
        <Text fontWeight="medium" color="gray.800" mt="4">
          {product.name}
        </Text>
        <Text fontWeight="extrabold" color="gray.800" fontSize="lg">
          {useCurrencyFormatter(product.price)}
        </Text>
        <AddCartButton id={product.id} />
      </Stack>
    </Box>
  );
});
