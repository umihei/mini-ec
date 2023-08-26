import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Products } from "../components/pages/Products";
import { Cart } from "../components/pages/Cart";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        }
      />
      <Route
        path="/home"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        }
      />
      <Route
        path="/products"
        element={
          <HeaderLayout>
            <Products />
          </HeaderLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <HeaderLayout>
            <Cart />
          </HeaderLayout>
        }
      />
    </Routes>
  );
});
