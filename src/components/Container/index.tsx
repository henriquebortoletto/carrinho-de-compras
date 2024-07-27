import * as S from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default Container;
