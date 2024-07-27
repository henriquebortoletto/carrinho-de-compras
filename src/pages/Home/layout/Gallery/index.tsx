import { Product } from "@/model/product";
import { products } from "@/data/products.json";

import Container from "@/components/Container";
import Card from "@/pages/Home/components/Card";

import * as S from "./styles";

const Gallery = () => (
  <S.Wrapper>
    <Container>
      <S.Heading>Nossos cafés</S.Heading>
      <S.Content>
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default Gallery;
