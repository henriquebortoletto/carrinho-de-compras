import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  grid-area: header;
  padding-block: 3.2rem;

  > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  border-radius: 6px;
  padding: 0.8rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.purple[300]};
    > svg {
      color: ${theme.colors.purple[500]};
    }
  `}
`;

export const City = styled.span`
  line-height: 130%;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.purple[700]};
  `}
`;
