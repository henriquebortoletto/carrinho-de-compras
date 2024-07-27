import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.sizes.regular};
      font-weight: ${theme.font.weight.regular};
      color: ${theme.colors.gray[700]};
      background-color: ${theme.colors.gray[100]};
    `}

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }
`;

export default GlobalStyles;
