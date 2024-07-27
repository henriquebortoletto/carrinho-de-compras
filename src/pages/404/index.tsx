import Container from "@/components/Container";
import * as S from "./styles";

const NotFound = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Heading>
          Ooops :( <br />
          Página não encontrada
        </S.Heading>
        <S.Text>
          Desculpe, a página que você procura não existe ou foi movida, clique
          para voltar a home.
        </S.Text>
        <S.NavLink to="/">Ir para a home</S.NavLink>
      </S.Content>
      <S.Image src="/not-found.svg" alt="Página não encontrada" />
    </Container>
  </S.Wrapper>
);

export default NotFound;
