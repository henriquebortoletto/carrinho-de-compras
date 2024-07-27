import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { ItemProps } from ".";

interface StyleModifiersProps {
  [key: string]: (theme: DefaultTheme) => ReturnType<typeof css>;
}

const styleModifiers: StyleModifiersProps = {
  "yellow-dark": (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow[700]};
  `,
  "gray-dark": (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray[700]};
  `,
  "yellow-light": (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow[500]};
  `,
  "purple-light": (theme: DefaultTheme) => css`
    background-color: ${theme.colors.purple[500]};
  `,
};

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Icon = styled.div<Pick<ItemProps, "$color">>`
  width: 3.2rem;
  height: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  ${({ theme, $color }) => css`
    > svg {
      color: ${theme.colors.gray[100]};
    }

    ${$color && styleModifiers[$color](theme)}
  `}
`;

export const Title = styled.span`
  line-height: 100%;

  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
  `}
`;
