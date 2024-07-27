import { ShoppingCart } from "@phosphor-icons/react";

import * as S from "./styles";

export interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $theme: "light" | "dark";
  $quantity?: number;
  $showQuantity?: boolean;
}

const CartButton = ({
  $theme = "dark",
  $quantity,
  $showQuantity = false,
  ...rest
}: CartButtonProps) => (
  <S.Wrapper {...rest} $theme={$theme}>
    {$showQuantity && <S.Quantity>{$quantity}</S.Quantity>}
    <ShoppingCart size={22} weight="fill" />
  </S.Wrapper>
);

export default CartButton;
