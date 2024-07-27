import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

interface InputGroupProps {
  $checked: boolean;
}

const styleModifiers = {
  checked: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.purple[300]};
    border-color: ${theme.colors.purple[500]};
  `,
};

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

export const PaymentInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  > svg {
    flex-shrink: 0;
  }
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const PaymentHeading = styled.h3`
  line-height: 130%;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.regular};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.gray[800]};
  `}
`;

export const PaymentText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div<InputGroupProps>`
  border-radius: 6px;
  position: relative;
  flex: 1;

  ${({ theme, $checked }) => css`
    background-color: ${theme.colors.gray[400]};
    border: 1px solid transparent;

    ${$checked && styleModifiers.checked(theme)}
  `}
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Label = styled.label`
  text-transform: uppercase;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  padding: 1.6rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.smaller};
    > svg {
      color: ${theme.colors.purple[500]};
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.smaller};
    color: ${theme.colors.red[500]};
  `}
`;
