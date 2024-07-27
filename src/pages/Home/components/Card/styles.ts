import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 6px 36px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[200]};
  `}
`;

export const CardImage = styled.img`
  margin: -4rem auto 1.2rem;
`;

export const CardHeading = styled.h3`
  text-align: center;
  line-height: 130%;
  margin-bottom: 0.8rem;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.larger};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.gray[800]};
  `}
`;

export const CardDescription = styled.p`
  text-align: center;
  line-height: 130%;
  margin-bottom: 3.3rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray[600]};
  `}
`;

export const CardBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrice = styled.span`
  font-weight: 400;

  ${({ theme }) => css`
    color: ${theme.colors.gray[700]};
    font-size: ${theme.font.sizes.small};
  `}

  > strong {
    ${({ theme }) => css`
      font-family: ${theme.font.family.secondary};
      font-size: ${theme.font.sizes.big};
      font-weight: ${theme.font.weight.extraBold};
    `}
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const CardTags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1.6rem;
`;

export const CardTag = styled.span`
  line-height: 130%;
  text-transform: uppercase;
  border-radius: 100px;
  padding: 0.4rem 0.8rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.tiny};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.yellow[700]};
    background-color: ${theme.colors.yellow[300]};
  `}
`;
