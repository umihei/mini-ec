import { memo, useContext, useCallback, useState, useEffect } from "react";
import { Stack, Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { CartItem } from "../organisms/cart/CartItem";
import { CartItemContext } from "../../providers/CartItemProvider";
import { productsData } from "../../data/_data";
import { OrderSummary } from "../molecules/cart/OrderSummary";
import { NoItemInCart } from "../molecules/cart/NoItemInCart";

export const Cart = memo(() => {
  const { cartItems, setCartItems } = useContext(CartItemContext);
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const getProductInCart = () => {
    return cartItems.map((product) => {
      const targetProduct = productsData.find(
        (_product) => _product.id === product.productId
      );
      return {
        id: targetProduct!.id,
        name: targetProduct!.name,
        image: targetProduct!.image,
        price: targetProduct!.price,
        quantity: product.quantity
      };
    });
  };

  const productsInCart = getProductInCart();

  const getTotalAmount = () => {
    const newTotalAmount = productsInCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalAmount(newTotalAmount);
  };

  useEffect(() => {
    getTotalAmount();
  }, [cartItems]);

  const onClickProducts = useCallback(() => navigate("/products"), [navigate]);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((_product) =>
      _product.productId === productId
        ? { ..._product, quantity: newQuantity }
        : _product
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveProduct = (productId: number) => {
    // 特定の商品を削除するロジック
    const updatedCartItems = cartItems.filter(
      (_product) => _product.productId !== productId
    );
    setCartItems(updatedCartItems);
  };

  return (
    <>
      {productsInCart.length > 0 ? (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart
              </Heading>
              <Stack spacing="6">
                {productsInCart.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    onQuantityChange={handleQuantityChange}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                ))}
              </Stack>
            </Stack>
            <OrderSummary
              onClickProducts={onClickProducts}
              totalPrice={totalAmount}
            />
          </Stack>
        </Box>
      ) : (
        <NoItemInCart onClickProducts={onClickProducts} />
      )}
    </>
  );
});
