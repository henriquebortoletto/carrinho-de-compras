import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

interface IconProps {
  $color: string;
}

interface WrapperModifiersProps {
  [key: string]: (theme: DefaultTheme) => ReturnType<typeof css>;
}

const wrapperModifiers: WrapperModifiersProps = {
  purple: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.purple[500]};
  `,
  "yellow-dark": (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow[700]};
  `,
  "yellow-light": (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow[500]};
  `,
};

export const Wrapper = styled.div`
  padding-block: 8rem;

  > * {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
      gap: 4rem;
    }
  }
`;

export const Success = styled.div`
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  line-height: 130%;
  margin-bottom: 0.4rem;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weight.extraBold};
    color: ${theme.colors.yellow[700]};
  `}
`;

export const Description = styled.p`
  line-height: 130%;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.larger};
    color: ${theme.colors.gray[800]};
  `}
`;

export const Order = styled.div`
  border-radius: 6px 36px;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.yellow[500]};
  `}
`;

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }
`;

export const Icon = styled.div<IconProps>`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, $color }) => css`
    color: ${theme.colors.white};

    ${$color && wrapperModifiers[$color](theme)}
  `}
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`;
