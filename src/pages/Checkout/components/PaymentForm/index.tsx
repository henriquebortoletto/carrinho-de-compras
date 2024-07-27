import { useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";

import theme from "@/styles/theme";
import * as S from "./styles";

const PaymentForm = () => {
  const { register, watch } = useFormContext();
  const payment = watch("paymentMethod");

  return (
    <S.Wrapper>
      <S.PaymentInfoContainer>
        <CurrencyDollar size={22} color={theme.colors.purple[500]} />
        <S.PaymentInfo>
          <S.PaymentHeading>Pagamento</S.PaymentHeading>
          <S.PaymentText>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </S.PaymentText>
        </S.PaymentInfo>
      </S.PaymentInfoContainer>
      <S.PaymentOptionsContainer>
        <S.InputGroup $checked={payment === "credit-card"}>
          <S.Input
            type="radio"
            id="credit-card"
            value="credit-card"
            defaultChecked
            {...register("paymentMethod")}
          />
          <S.Label htmlFor="credit-card">
            <CreditCard size={16} />
            Cartão de crédito
          </S.Label>
        </S.InputGroup>
        <S.InputGroup $checked={payment === "debit-card"}>
          <S.Input
            type="radio"
            id="debit-card"
            value="debit-card"
            {...register("paymentMethod")}
          />
          <S.Label htmlFor="debit-card">
            <Bank size={16} />
            Cartão de débito
          </S.Label>
        </S.InputGroup>
        <S.InputGroup $checked={payment === "money"}>
          <S.Input
            type="radio"
            id="money"
            value="money"
            {...register("paymentMethod")}
          />
          <S.Label htmlFor="money">
            <Money size={16} />
            Dinheiro
          </S.Label>
        </S.InputGroup>
      </S.PaymentOptionsContainer>
    </S.Wrapper>
  );
};

export default PaymentForm;
