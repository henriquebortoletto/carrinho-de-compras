import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import * as S from "./styles";

const DefaultLayout = () => (
  <S.Grid>
    <Header />
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  </S.Grid>
);

export default DefaultLayout;
