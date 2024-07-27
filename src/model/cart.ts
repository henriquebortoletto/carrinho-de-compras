import { Product } from "./product";
import { Order } from "./order";

export interface Cart {
  cart: Product[];
  order: Order;
}
