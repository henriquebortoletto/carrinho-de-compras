import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

import { CartContext } from "@/contexts/CartContext";
import { paymentMethods } from "@/utils/payments";

import Container from "@/components/Container";

import * as S from "./styles";

const Payment = () => {
  const { cartState } = useContext(CartContext);
  const { paymentMethod, address } = cartState.order;
  const navigate = useNavigate();

  useEffect(() => {
    if (cartState.order.products.length >= 1) return;
    navigate("/");
  }, [cartState, navigate]);

  return (
    <S.Wrapper>
      <Container>
        <div>
          <S.Success>
            <S.Title>Uhu! Pedido confirmado</S.Title>
            <S.Description>
              Agora é só aguardar que logo o café chegará até você
            </S.Description>
          </S.Success>
          <S.Order>
            <S.OrderInfo>
              <S.Icon $color="purple">
                <MapPin size={16} weight="fill" />
              </S.Icon>
              <S.Item>
                <span>
                  Entrega em{" "}
                  <strong>
                    {address?.street}, {address?.number}
                  </strong>
                </span>
                <span>
                  {address?.neighborhood} - {address?.city}, {address?.uf}
                </span>
              </S.Item>
            </S.OrderInfo>

            <S.OrderInfo>
              <S.Icon $color="yellow-light">
                <Timer size={16} weight="fill" />
              </S.Icon>
              <S.Item>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min </strong>
              </S.Item>
            </S.OrderInfo>

            <S.OrderInfo>
              <S.Icon $color="yellow-dark">
                <CurrencyDollar size={16} />
              </S.Icon>
              <S.Item>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethods[paymentMethod]}</strong>
              </S.Item>
            </S.OrderInfo>
          </S.Order>
        </div>
        <img
          src="/illustration.svg"
          alt="Ilustração de um homem pilotando uma moto com uma entrega"
        />
      </Container>
    </S.Wrapper>
  );
};

export default Payment;
