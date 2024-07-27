import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: max-content;
  border-radius: 6px;
  padding: 0.8rem;

  display: flex;
  gap: 0.4rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[400]};
  `}
`;

export const Button = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;

  cursor: pointer;
  transition: color 0.2s;

  ${({ theme }) => css`
    color: ${theme.colors.purple[500]};

    &:hover {
      color: ${theme.colors.purple[700]};
    }
  `}
`;

export const Quantity = styled.span`
  text-align: center;
  line-height: 2rem;

  width: 2rem;
  height: 2rem;

  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
  `}
`;
