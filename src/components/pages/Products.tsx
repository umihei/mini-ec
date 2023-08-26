import { memo } from "react";
import { Stack, Wrap, WrapItem } from "@chakra-ui/react";

import { ProductCard } from "../../components/organisms/product/ProductCard";
import { productsData } from "../../data/_data";

export const Products = memo(() => {
  return (
    <Wrap
      p={{ base: 6, md: 12 }}
      spacing={{ base: 6, md: 12 }}
      justify="center"
    >
      {productsData.map((product, id) => (
        <WrapItem key={id}>
          <Stack spacing={7}>
            <ProductCard product={product} />
          </Stack>
        </WrapItem>
      ))}
    </Wrap>
  );
});
