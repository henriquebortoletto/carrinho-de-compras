import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  height: calc(100vh - 10.4rem);
  display: flex;

  > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    max-width: 56rem;
  }
`;

export const Heading = styled.h1`
  line-height: 120%;
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
  margin-bottom: 3.2rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.larger};
    color: ${theme.colors.gray[600]};
  `}
`;

export const NavLink = styled(Link)`
  padding: 1.2rem 3.2rem;
  border-radius: 6px;
  transition: background-color 0.2s;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};
    background-color: ${theme.colors.purple[500]};
    color: ${theme.colors.gray[100]};

    &:hover {
      background-color: ${theme.colors.purple[700]};
    }
  `}
`;

export const Image = styled.img`
  width: 42rem;
  height: 42rem;
`;
