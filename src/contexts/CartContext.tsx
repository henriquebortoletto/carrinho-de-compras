import { useReducer, createContext, useEffect } from "react";

import { Order as CreateOrder, PaymentMethod } from "@/model/order";
import { Product } from "@/model/product";
import { Address } from "@/model/address";
import { Cart } from "@/model/cart";

import { initialState, cartReducer } from "@/reducers/cart/reducer";

import {
  insertProductToCartAction,
  deleteAllProductsFromCartAction,
  deleteProductToCartByIdAction,
  increaseProductQuantityAction,
  decreaseProductQuantityAction,
  createNewOrderAction,
} from "@/reducers/cart/actions";

const deliveryRate = 3.5;

interface OrderFormData {
  address: Address;
  paymentMethod: PaymentMethod;
}

interface CartContextType {
  cartState: Cart;
  deliveryRate: number;
  totalQuantityInCart: number;
  totalAmountInCart: number;
  insertProductToCart: (product: Product, quantity: number) => void;
  deleteAllProductsFromCart: () => void;
  deleteProductToCartById: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
  createNewOrder: (data: OrderFormData) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: React.ReactNode;
}

function initialReducer(initialState: Cart): Cart {
  const storedStateAsJSON = localStorage.getItem(
    "@coffee-delivery:cart-state:1.0.0"
  );

  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON);
  }

  return initialState;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
    initialReducer
  );

  const totalQuantityInCart = cartState.cart.reduce(
    (acc: number, curr: Product) => {
      return acc + curr.quantity;
    },
    0
  );

  const totalAmountInCart = cartState.cart.reduce(
    (acc: number, curr: Product) => {
      return acc + curr.price * curr.quantity;
    },
    0
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffee-delivery:cart-state:1.0.0", stateJSON);
  }, [cartState]);

  function insertProductToCart(product: Product, quantity: number) {
    const newProductInCart: Product = {
      ...product,
      quantity,
    };
    dispatch(insertProductToCartAction(newProductInCart));
  }

  function deleteAllProductsFromCart() {
    dispatch(deleteAllProductsFromCartAction());
  }

  function deleteProductToCartById(productId: number) {
    dispatch(deleteProductToCartByIdAction(productId));
  }

  function increaseProductQuantity(productId: number) {
    dispatch(increaseProductQuantityAction(productId));
  }

  function decreaseProductQuantity(productId: number) {
    dispatch(decreaseProductQuantityAction(productId));
  }

  function createNewOrder(data: OrderFormData) {
    const newOrder: CreateOrder = {
      address: data.address,
      paymentMethod: data.paymentMethod,
      products: cartState.cart,
      totalAmount: totalAmountInCart,
      totalAmountWithDeliveryRate: totalAmountInCart + deliveryRate,
    };
    dispatch(createNewOrderAction(newOrder));
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        deliveryRate,
        totalQuantityInCart,
        totalAmountInCart,
        insertProductToCart,
        deleteAllProductsFromCart,
        deleteProductToCartById,
        increaseProductQuantity,
        decreaseProductQuantity,
        createNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
