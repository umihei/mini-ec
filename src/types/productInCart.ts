import { Product } from "./product";

export type ProductInCart = Product & {
  quantity: number;
};
