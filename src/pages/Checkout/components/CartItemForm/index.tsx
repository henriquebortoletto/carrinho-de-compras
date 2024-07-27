import { useContext } from "react";

import { Product } from "@/model/product";
import { CartContext } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatter";

import Button from "@/components/Button";
import Counter from "@/components/Counter";

import * as S from "./styles";

interface CartItemProps {
  product: Product;
}

const CartItemForm = ({ product }: CartItemProps) => {
  const {
    deleteProductToCartById,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useContext(CartContext);

  function handleIncrementQuantity() {
    increaseProductQuantity(product.id);
  }

  function handleDecrementQuantity() {
    decreaseProductQuantity(product.id);
  }

  function handleDeleteProductInShoppingCart() {
    deleteProductToCartById(product.id);
  }

  return (
    <S.Wrapper>
      <S.CartItemContainer>
        <S.CartItemImage
          src={product.image}
          alt={product.description}
          title={product.title}
        />
        <S.CartItemDetail>
          <span>{product.title}</span>
          <S.CartItemActions>
            <Counter
              $quantity={product.quantity}
              onIncrement={handleIncrementQuantity}
              onDecrement={handleDecrementQuantity}
            />
            <Button
              $size="small"
              $hasIcon
              onClick={handleDeleteProductInShoppingCart}
            >
              Remover
            </Button>
          </S.CartItemActions>
        </S.CartItemDetail>
      </S.CartItemContainer>
      <S.CartItemPrice>
        {formatPrice(product.price * product.quantity)}
      </S.CartItemPrice>
    </S.Wrapper>
  );
};

export default CartItemForm;
