import { Minus, Plus } from "@phosphor-icons/react";

import * as S from "./styles";

interface CounterProps {
  $quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ $quantity, onIncrement, onDecrement }: CounterProps) => (
  <S.Wrapper>
    <S.Button onClick={onDecrement}>
      <Minus size={14} />
    </S.Button>
    <S.Quantity>{$quantity}</S.Quantity>
    <S.Button onClick={onIncrement}>
      <Plus size={14} />
    </S.Button>
  </S.Wrapper>
);

export default Counter;
