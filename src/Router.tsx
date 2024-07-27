import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "@/layout/DefaultLayout";

import Home from "@/pages/Home";
import Checkout from "@/pages/Checkout";
import Payment from "@/pages/Payment";
import NotFound from "@/pages/404";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
