import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";

import { CartContext } from "@/contexts/CartContext";
import CartButton from "@/components/CartButton";
import Container from "@/components/Container";
import Logo from "@/components/Logo";

import * as S from "./styles";

const Header = () => {
  const { totalQuantityInCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleNavigateToCheckout() {
    return navigate("/checkout");
  }

  const ifQuantityIsGreaterThanZero = totalQuantityInCart > 0;
  const disabledIfQuantityIsEqualToZero = totalQuantityInCart === 0;

  return (
    <S.Wrapper>
      <Container>
        <Logo />
        <S.Group>
          <S.Location>
            <MapPin size={22} weight="fill" />
            <S.City>Porto Alegre, RS</S.City>
          </S.Location>
          <CartButton
            $theme="light"
            $quantity={totalQuantityInCart}
            $showQuantity={ifQuantityIsGreaterThanZero}
            onClick={handleNavigateToCheckout}
            disabled={disabledIfQuantityIsEqualToZero}
            title="Meu carrinho"
          />
        </S.Group>
      </Container>
    </S.Wrapper>
  );
};

export default Header;
