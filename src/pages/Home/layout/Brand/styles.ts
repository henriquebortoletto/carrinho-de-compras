import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  padding-block: 9.2rem;
  width: 100%;

  &::before {
    content: "";
    background: url(/bg-hero.png) no-repeat center center;
    background-size: cover;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  > * {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1092px) {
      flex-direction: column;
      align-items: center;
      gap: 4rem;
    }
  }
`;

export const Brand = styled.div`
  width: 100%;
  max-width: 58.8rem;
`;

export const Content = styled.div`
  margin-bottom: 6.6rem;
`;

export const Heading = styled.h1`
  line-height: 130%;
  margin-bottom: 1.6rem;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.massive};
    font-weight: ${theme.font.weight.extraBold};
    color: ${theme.colors.gray[900]};
  `}
`;

export const Text = styled.p`
  line-height: 130%;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.larger};
    color: ${theme.colors.gray[800]};
  `}
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 33.6rem;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 2rem 4rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
