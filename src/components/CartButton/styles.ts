import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { CartButtonProps } from ".";

const styleModifiers = {
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray[200]};
    background-color: ${theme.colors.purple[700]};
    &:hover {
      background-color: ${theme.colors.purple[500]};
    }
  `,

  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.yellow[700]};
    background-color: ${theme.colors.yellow[300]};
  `,
};

export const Wrapper = styled.button<CartButtonProps>`
  line-height: 0;
  border: none;
  border-radius: 6px;
  position: relative;
  padding: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ theme, $theme }) => css`
    ${$theme && styleModifiers[$theme](theme)}
  `}
`;

export const Quantity = styled.span`
  position: absolute;
  top: -1rem;
  right: -1rem;

  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.smaller};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow[700]};
  `}
`;
