import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import Container from "@/components/Container";
import Item from "@/pages/Home/components/Item";

import * as S from "./styles";

const Brand = () => (
  <S.Wrapper>
    <Container>
      <S.Brand>
        <S.Content>
          <S.Heading>
            Encontre o café perfeito para qualquer hora do dia
          </S.Heading>
          <S.Text>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Text>
        </S.Content>
        <S.Grid>
          <Item
            $title="Compra simples e segura"
            $icon={<ShoppingCart size={16} weight="fill" />}
            $color="yellow-dark"
          />
          <Item
            $title="Embalagem mantém o café intacto"
            $icon={<Package size={16} weight="fill" />}
            $color="gray-dark"
          />
          <Item
            $title="Entrega rápida e rastreada"
            $icon={<Timer size={16} weight="fill" />}
            $color="yellow-light"
          />
          <Item
            $title="O café chega fresquinho até você"
            $icon={<Coffee size={16} weight="fill" />}
            $color="purple-light"
          />
        </S.Grid>
      </S.Brand>
      <img
        src="/brand.png"
        alt="Imagem de um copo de café escrito Coffee Delivery ao lado de grãos de café."
      />
    </Container>
  </S.Wrapper>
);

export default Brand;
