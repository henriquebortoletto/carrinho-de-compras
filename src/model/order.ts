import { Address } from "./address";
import { Product } from "./product";

export type PaymentMethod = "credit-card" | "debit-card" | "money";

export interface Order {
  products: Product[];
  address: Address;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  totalAmountWithDeliveryRate: number;
}
