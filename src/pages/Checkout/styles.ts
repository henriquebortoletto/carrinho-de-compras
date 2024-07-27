import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  padding-block: 4rem;

  > * {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3.2rem;

    @media (max-width: 1160px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const OrderContainer = styled.div`
  width: 100%;
  max-width: 64rem;
`;

export const CartContainer = styled.div`
  flex: 1;

  @media (max-width: 1160px) {
    width: 100%;
    max-width: 64rem;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1.6rem;
  line-height: 130%;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.gray[800]};
  `}
`;

export const Cart = styled.div`
  border-radius: 6px;
  padding: 4rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[200]};
  `}

  @media (max-width: 1160px) {
    padding: 4rem 2rem;
  }
`;

export const CartTotalContainer = styled.div`
  margin-bottom: 2.4rem;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  ${({ theme }) => css`
    .small {
      font-size: ${theme.font.sizes.small};
    }

    strong {
      font-size: ${theme.font.sizes.larger};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.gray[800]};
    }
  `}
`;
