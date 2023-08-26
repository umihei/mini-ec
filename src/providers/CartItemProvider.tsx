import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

type CartItemType = {
  productId: number;
  quantity: number;
};

type CartItemContextType = {
  cartItems: CartItemType[] | [];
  setCartItems: Dispatch<SetStateAction<CartItemType[] | []>>;
};

export const CartItemContext = createContext<CartItemContextType>(
  {} as CartItemContextType
);

export const CartItemProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [cartItems, setCartItems] = useState<CartItemType[] | []>([]);

  return (
    <CartItemContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemContext.Provider>
  );
};
