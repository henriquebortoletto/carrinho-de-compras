import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Product } from "@/model/product";
import { CartContext } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatter";
import { delay } from "@/utils/timer";

import CartEmpty from "@/components/CartEmpty";
import Container from "@/components/Container";
import Button from "@/components/Button";

import AddressForm from "@/pages/Checkout/components/AddressForm";
import PaymentForm from "@/pages/Checkout/components/PaymentForm";
import CartItemForm from "@/pages/Checkout/components/CartItemForm";

import * as S from "./styles";

const newOrderFormValidationSchema = zod.object({
  paymentMethod: zod.enum(["credit-card", "debit-card", "money"]),
  address: zod.object({
    zipcode: zod.string().length(8, {
      message: "O campo precisa ter 8 digitos.",
    }),
    street: zod.string().min(1, {
      message: "Esse campo é obrigatório.",
    }),
    number: zod.number({
      message: "Esse campo é obrigatório.",
    }),
    complement: zod.string().nullable(),
    neighborhood: zod.string().min(1, {
      message: "Esse campo é obrigatório.",
    }),
    city: zod.string().min(3, {
      message: "Esse campo é obrigatório.",
    }),
    uf: zod.string().length(2, {
      message: "O campo precisa ter 2 digitos.",
    }),
  }),
});

export type newOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const newOrderForm = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: "credit-card",
      address: {
        neighborhood: "",
        complement: "",
        zipcode: "",
        street: "",
        city: "",
        uf: "",
      },
    },
  });

  const {
    cartState,
    deliveryRate,
    totalAmountInCart,
    deleteAllProductsFromCart,
    createNewOrder,
  } = useContext(CartContext);

  const { handleSubmit } = newOrderForm;
  const navigate = useNavigate();

  async function createNewOrderForm(data: newOrderFormData) {
    setLoading(true);
    createNewOrder(data);

    await delay(5000);
    setLoading(false);

    deleteAllProductsFromCart();
    return navigate("/payment");
  }

  return cartState.cart.length === 0 ? (
    <CartEmpty />
  ) : (
    <S.Wrapper>
      <Container>
        <S.OrderContainer>
          <S.Heading>Complete seu pedido</S.Heading>
          <FormProvider {...newOrderForm}>
            <form id="my-form" onSubmit={handleSubmit(createNewOrderForm)}>
              <AddressForm />
              <PaymentForm />
            </form>
          </FormProvider>
        </S.OrderContainer>
        <S.CartContainer>
          <S.Heading>Cafés selecionados</S.Heading>
          <S.Cart>
            {cartState.cart.map((product: Product) => (
              <CartItemForm key={product.id} product={product} />
            ))}
            <S.CartTotalContainer>
              <S.CartTotal>
                <span className="small">Total de itens</span>
                <span>{formatPrice(totalAmountInCart)}</span>
              </S.CartTotal>
              <S.CartTotal>
                <span className="small">Entrega</span>
                <span>{formatPrice(deliveryRate)}</span>
              </S.CartTotal>
              <S.CartTotal>
                <strong>Total</strong>
                <strong>{formatPrice(totalAmountInCart + deliveryRate)}</strong>
              </S.CartTotal>
            </S.CartTotalContainer>
            <Button
              $fullWidth
              $primary
              $size="medium"
              type="submit"
              form="my-form"
              disabled={loading}
            >
              {loading ? "Finalizando o pedido..." : "confirmar pedido"}
            </Button>
          </S.Cart>
        </S.CartContainer>
      </Container>
    </S.Wrapper>
  );
};

export default Checkout;
