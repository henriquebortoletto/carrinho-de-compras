import { useCallback, useContext, useState } from "react";

import { Product } from "@/model/product";
import { CartContext } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatter";

import CartButton from "@/components/CartButton";
import Counter from "@/components/Counter";

import * as S from "./styles";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const { cartState, insertProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(() => {
    const productHasInCart = cartState.cart.find((cart) => {
      return cart.id === product.id;
    });

    if (productHasInCart) {
      return productHasInCart.quantity;
    } else {
      return product.quantity;
    }
  });

  function handleIncrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecrementQuantity() {
    if (quantity <= 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function handleAddProductToCart() {
    insertProductToCart(product, quantity);
  }

  const renderTags = useCallback(function (tags: string[]) {
    return tags.map((tag: string) => <S.CardTag key={tag}>{tag}</S.CardTag>);
  }, []);

  return (
    <S.Wrapper>
      <S.CardImage
        src={product.image}
        alt={product.title}
        title={product.title}
      />
      <S.CardTags>{renderTags(product.tags)}</S.CardTags>
      <S.CardHeading>{product.title}</S.CardHeading>
      <S.CardDescription>{product.description}</S.CardDescription>
      <S.CardBuy>
        <S.CardPrice>
          R$ <strong>{formatPrice(product.price, "decimal")}</strong>
        </S.CardPrice>
        <S.CardActions>
          <Counter
            $quantity={quantity}
            onIncrement={handleIncrementQuantity}
            onDecrement={handleDecrementQuantity}
          />
          <CartButton
            $theme="dark"
            onClick={handleAddProductToCart}
            title="Adicionar ao carrinho"
          />
        </S.CardActions>
      </S.CardBuy>
    </S.Wrapper>
  );
};

export default Card;
