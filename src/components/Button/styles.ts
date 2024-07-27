import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { ButtonProps } from ".";

const styleModifiers = {
  primary: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow[500]};
    &:hover {
      background-color: ${theme.colors.yellow[700]};
    }
  `,
  default: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.smaller};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.gray[700]};
    background-color: ${theme.colors.gray[400]};
    &:hover {
      background-color: ${theme.colors.gray[500]};
    }
  `,
  medium: () => css`
    padding: 1.2rem 0.8rem;
  `,
  small: () => css`
    padding: 0.6rem 0.8rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

const ButtonShared = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const Button = styled(ButtonShared)<ButtonProps>`
  transition: background-color 0.2s;
  width: fit-content;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ theme, $primary, $fullWidth, $size }) => css`
    font-family: ${theme.font.family.primary};
    text-transform: uppercase;

    > svg {
      color: ${theme.colors.purple[500]};
    }

    ${$size && styleModifiers[$size]()}
    ${$fullWidth && styleModifiers.fullWidth()}
    ${$primary && styleModifiers.primary(theme)}
    ${!$primary && styleModifiers.default(theme)}
  `}
`;
