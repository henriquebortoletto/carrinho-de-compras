import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0.8rem 0.4rem 2.4rem;
  margin-bottom: 2.4rem;

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray[400]};
  `}
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex: 1;
`;

export const CartItemImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

export const CartItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const CartItemActions = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const CartItemPrice = styled.strong`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
  `}
`;
