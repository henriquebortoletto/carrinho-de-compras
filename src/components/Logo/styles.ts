import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Logo = styled(Link)`
  line-height: 0;

  ${({ theme }) => css`
    color: ${theme.colors.purple[500]};
  `}
`;
