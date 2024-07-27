import { Product } from "@/model/product";
import { Order } from "@/model/order";

export enum ACTIONS_TYPE {
  INSERT_PRODUCT_TO_CART = "INSERT_PRODUCT_TO_CART",
  DELETE_ALL_PRODUCTS_FROM_CART = "DELETE_ALL_PRODUCTS_FROM_CART",
  DELETE_PRODUCT_TO_CART_BY_ID = "DELETE_PRODUCT_TO_CART_BY_ID",
  INCREASE_PRODUCT_QUANTITY = "INCREASE_PRODUCT_QUANTITY",
  DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY",
  CREATE_NEW_ORDER = "CREATE_NEW_ORDER",
}

interface insertProductToCartProps {
  type: ACTIONS_TYPE.INSERT_PRODUCT_TO_CART;
  payload: {
    product: Product;
  };
}

interface deleteAllProductsFromCartProps {
  type: ACTIONS_TYPE.DELETE_ALL_PRODUCTS_FROM_CART;
}

interface deleteProductToCartByIdProps {
  type: ACTIONS_TYPE.DELETE_PRODUCT_TO_CART_BY_ID;
  payload: {
    productId: number;
  };
}

interface increaseProductQuantityProps {
  type: ACTIONS_TYPE.INCREASE_PRODUCT_QUANTITY;
  payload: {
    productId: number;
  };
}

interface decreaseProductQuantityProps {
  type: ACTIONS_TYPE.DECREASE_PRODUCT_QUANTITY;
  payload: {
    productId: number;
  };
}

interface createNewOrderProps {
  type: ACTIONS_TYPE.CREATE_NEW_ORDER;
  payload: {
    order: Order;
  };
}

export type ActionsTypesProps =
  | insertProductToCartProps
  | deleteAllProductsFromCartProps
  | deleteProductToCartByIdProps
  | increaseProductQuantityProps
  | decreaseProductQuantityProps
  | createNewOrderProps;

export function insertProductToCartAction(
  product: Product
): insertProductToCartProps {
  return {
    type: ACTIONS_TYPE.INSERT_PRODUCT_TO_CART,
    payload: {
      product,
    },
  };
}

export function deleteAllProductsFromCartAction(): deleteAllProductsFromCartProps {
  return {
    type: ACTIONS_TYPE.DELETE_ALL_PRODUCTS_FROM_CART,
  };
}

export function deleteProductToCartByIdAction(
  productId: number
): deleteProductToCartByIdProps {
  return {
    type: ACTIONS_TYPE.DELETE_PRODUCT_TO_CART_BY_ID,
    payload: {
      productId,
    },
  };
}

export function increaseProductQuantityAction(
  productId: number
): increaseProductQuantityProps {
  return {
    type: ACTIONS_TYPE.INCREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  };
}

export function decreaseProductQuantityAction(
  productId: number
): decreaseProductQuantityProps {
  return {
    type: ACTIONS_TYPE.DECREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  };
}

export function createNewOrderAction(order: Order): createNewOrderProps {
  return {
    type: ACTIONS_TYPE.CREATE_NEW_ORDER,
    payload: {
      order,
    },
  };
}
