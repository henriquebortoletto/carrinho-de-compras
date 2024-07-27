import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  max-width: 56rem;
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
  width: 52rem;
  height: 52rem;
`;
