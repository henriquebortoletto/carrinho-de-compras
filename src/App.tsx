import { ThemeProvider } from "styled-components";

import CartContextProvider from "@/contexts/CartContext";
import Router from "@/Router";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
