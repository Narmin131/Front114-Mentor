import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Header from "../layout/Header";
import { CartProvider } from "react-use-cart";
import TopToBtn from "../components/TopToBtn";
import Wishlist from "../pages/Wishlist";
import { WishlistProvider } from "react-use-wishlist";
import { ToastContainer } from "react-toastify";
const AppRouter = () => {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <TopToBtn />
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="light"
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </>
  );
};

export default AppRouter;
