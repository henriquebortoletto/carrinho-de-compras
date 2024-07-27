import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  margin-block: 3.2rem;
`;

export const Heading = styled.h2`
  line-height: 130%;
  margin-bottom: 5.4rem;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weight.extraBold};
    color: ${theme.colors.gray[800]};
  `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 3.2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 25.6rem;
    margin-inline: auto;
  }
`;
