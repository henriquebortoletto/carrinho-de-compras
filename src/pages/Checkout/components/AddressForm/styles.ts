import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  border-radius: 6px;
  padding: 4rem;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[200]};
  `}

  @media (max-width: 1160px) {
    padding: 4rem 2rem;
  }
`;

export const AddressInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  > svg {
    flex-shrink: 0;
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const AddressHeading = styled.h3`
  line-height: 130%;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.regular};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.gray[800]};
  `}
`;

export const AddressText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr 6rem;
  grid-template-areas:
    "zipcode . ."
    "street street street"
    "number complement complement"
    "neighborhood city uf";
  gap: 1.6rem 1.2rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "zipcode"
      "street"
      "number"
      "complement"
      "neighborhood"
      "city"
      "uf";
  }
`;

export const InputGroup = styled.div``;

export const InputWrapper = styled.div`
  border-radius: 4px;
  padding-inline: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray[400]};
    background-color: ${theme.colors.gray[300]};

    &:focus-within {
      border-color: ${theme.colors.yellow[700]};
    }
  `}
`;

export const Input = styled.input`
  line-height: 130%;

  width: 100%;
  flex: 1;

  border: none;
  background: transparent;
  padding-block: 1.2rem;

  &:focus {
    outline: none;
  }

  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.gray[700]};

    &::placeholder {
      color: ${theme.colors.gray[600]};
    }
  `}
`;

export const Optional = styled.span`
  font-style: italic;
  line-height: 130%;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.smaller};
    color: ${theme.colors.gray[600]};
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.smaller};
    color: ${theme.colors.red[500]};
  `}
`;
