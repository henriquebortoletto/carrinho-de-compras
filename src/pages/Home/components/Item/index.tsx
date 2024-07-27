import * as S from "./styles";

export interface ItemProps {
  $title: string;
  $icon: JSX.Element;
  $color: string;
}

const Item = ({ $title, $icon, $color }: ItemProps) => (
  <S.Wrapper>
    <S.Icon $color={$color}>{$icon}</S.Icon>
    <S.Title>{$title}</S.Title>
  </S.Wrapper>
);

export default Item;
