import { useFormContext } from "react-hook-form";
import { MapPin } from "@phosphor-icons/react";

import { Address } from "@/model/address";
import theme from "@/styles/theme";

import * as S from "./styles";

interface AddressProps {
  address: Address;
}

const AddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddressProps>();

  return (
    <S.Wrapper>
      <S.AddressInfoContainer>
        <MapPin size={22} color={theme.colors.yellow[700]} />
        <S.AddressInfo>
          <S.AddressHeading>Endereço de Entrega</S.AddressHeading>
          <S.AddressText>
            Informe o endereço onde deseja receber seu pedido
          </S.AddressText>
        </S.AddressInfo>
      </S.AddressInfoContainer>

      <S.AddressForm>
        <S.InputGroup style={{ gridArea: "zipcode" }}>
          <S.InputWrapper>
            <S.Input
              type="text"
              placeholder="CEP"
              {...register("address.zipcode")}
            />
          </S.InputWrapper>
          {errors.address?.zipcode?.message && (
            <S.Error>{errors.address.zipcode.message}</S.Error>
          )}
        </S.InputGroup>
        <S.InputGroup style={{ gridArea: "street" }}>
          <S.InputWrapper>
            <S.Input
              type="text"
              placeholder="Rua"
              {...register("address.street")}
            />
          </S.InputWrapper>
          {errors?.address?.street?.message && (
            <S.Error>{errors.address.street.message}</S.Error>
          )}
        </S.InputGroup>
        <S.InputGroup style={{ gridArea: "number" }}>
          <S.InputWrapper>
            <S.Input
              type="number"
              placeholder="Número"
              {...register("address.number", { valueAsNumber: true })}
            />
          </S.InputWrapper>
          {errors?.address?.number?.message && (
            <S.Error>{errors.address.number.message}</S.Error>
          )}
        </S.InputGroup>
        <S.InputGroup style={{ gridArea: "complement" }}>
          <S.InputWrapper>
            <S.Input
              type="text"
              placeholder="Complemento"
              {...register("address.complement")}
            />
            <S.Optional>Opcional</S.Optional>
          </S.InputWrapper>
        </S.InputGroup>
        <S.InputGroup style={{ gridArea: "neighborhood" }}>
          <S.InputWrapper>
            <S.Input
              type="text"
              placeholder="Bairro"
              {...register("address.neighborhood")}
            />
          </S.InputWrapper>
          {errors?.address?.neighborhood?.message && (
            <S.Error>{errors.address.neighborhood?.message}</S.Error>
          )}
        </S.InputGroup>
        <S.InputGroup style={{ gridArea: "city" }}>
          <S.InputWrapper>
            <S.Input
              type="text"
              placeholder="Cidade"
              {...register("address.city")}
            />
          </S.InputWrapper>
          {errors?.address?.city?.message && (
            <S.Error>{errors.address.city.message}</S.Error>
          )}
        </S.InputGroup>
        <S.InputGroup style={{ gridArea: "uf" }}>
          <S.InputWrapper>
            <S.Input type="text" placeholder="UF" {...register("address.uf")} />
          </S.InputWrapper>
          {errors?.address?.uf?.message && (
            <S.Error>{errors.address.uf.message}</S.Error>
          )}
        </S.InputGroup>
      </S.AddressForm>
    </S.Wrapper>
  );
};

export default AddressForm;
