import { memo, useContext, useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { FaCartArrowDown } from "react-icons/fa";
import { CartItemContext } from "../../../providers/CartItemProvider";

type Props = {
  id: number;
};

export const AddCartButton = memo((props: Props) => {
  const { cartItems, setCartItems } = useContext(CartItemContext);
  const { id } = props;
  const navigate = useNavigate();

  const onClickCart = useCallback(() => navigate("/cart"), [navigate]);

  const onClickCartButton = () => {
    // cartItems内に，今追加しようとしているProductIDの商品がすでにあれば，その商品のQuantityを＋１する
    // そうでなければ，新しいProductオブジェクトをAppendする

    const targetProduct = cartItems.find((product) => product.productId === id);
    if (targetProduct) {
      targetProduct.quantity = targetProduct.quantity + 1;
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, { productId: id, quantity: 1 }]);
    }
    onClickCart();
  };

  return (
    <Button
      colorScheme="yellow"
      rightIcon={<FaCartArrowDown />}
      onClick={onClickCartButton}
    >
      カートに入れる
    </Button>
  );
});
