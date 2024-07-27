import { produce } from "immer";

import { Product } from "@/model/product";
import { Cart } from "@/model/cart";
import { ACTIONS_TYPE, ActionsTypesProps } from "@/reducers/cart/actions";

export const initialState: Cart = {
  cart: [],
  order: {
    address: {
      number: 0,
      zipcode: "",
      street: "",
      complement: null,
      neighborhood: "",
      city: "",
      uf: "",
    },
    products: [],
    paymentMethod: "credit-card",
    totalAmount: 0,
    totalAmountWithDeliveryRate: 0,
  },
};

export function cartReducer(state: Cart, action: ActionsTypesProps) {
  switch (action.type) {
    case ACTIONS_TYPE.INSERT_PRODUCT_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const productHasInCartIndex = state.cart.findIndex((product: Product) => {
        return product.id === action.payload.product.id;
      });

      if (productHasInCartIndex === -1) {
        return produce(state, (draft) => {
          draft.cart.push(action.payload.product);
        });
      }

      return produce(state, (draft) => {
        draft.cart[productHasInCartIndex].quantity +=
          action.payload.product.quantity;
      });

    case ACTIONS_TYPE.DELETE_ALL_PRODUCTS_FROM_CART:
      return produce(state, (draft) => {
        draft.cart = [];
      });

    case ACTIONS_TYPE.DELETE_PRODUCT_TO_CART_BY_ID:
      return produce(state, (draft) => {
        draft.cart = state.cart.filter((product: Product) => {
          return product.id !== action.payload.productId;
        });
      });

    case ACTIONS_TYPE.INCREASE_PRODUCT_QUANTITY:
      // eslint-disable-next-line no-case-declarations
      const increaseProductIndex = state.cart.findIndex((product: Product) => {
        return product.id === action.payload.productId;
      });

      if (increaseProductIndex === -1) {
        return produce(state, () => {});
      }

      return produce(state, (draft) => {
        draft.cart[increaseProductIndex].quantity += 1;
      });

    case ACTIONS_TYPE.DECREASE_PRODUCT_QUANTITY:
      // eslint-disable-next-line no-case-declarations
      const decreaseProductIndex = state.cart.findIndex((product: Product) => {
        return product.id === action.payload.productId;
      });

      if (decreaseProductIndex === -1) {
        return produce(state, () => {});
      }

      if (state.cart[decreaseProductIndex].quantity <= 1) {
        return produce(state, () => {});
      }

      return produce(state, (draft) => {
        draft.cart[decreaseProductIndex].quantity -= 1;
      });

    case ACTIONS_TYPE.CREATE_NEW_ORDER:
      return produce(state, (draft) => {
        draft.order = action.payload.order;
        draft.cart = state.cart;
      });

    default:
      throw new Error("Invalid action type");
  }
}
