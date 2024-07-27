import Container from "@/components/Container";
import * as S from "./styles";

const CartEmpty = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Heading>Nenhum produto foi encontrado no carrinho :(</S.Heading>
        <S.Text>Adicione itens ao seu carrinho para continuar comprando</S.Text>
        <S.NavLink to="/">Ir para a loja</S.NavLink>
      </S.Content>
      <S.Image src="/cart.svg" alt="Ilustração de um carrinho vazio." />
    </Container>
  </S.Wrapper>
);

export default CartEmpty;
