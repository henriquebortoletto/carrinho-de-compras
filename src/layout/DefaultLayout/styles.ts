import styled from "styled-components";

export const Grid = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "header"
    "content";
`;

export const Wrapper = styled.main`
  grid-area: content;
  overflow-y: scroll;
`;
