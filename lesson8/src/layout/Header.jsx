import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {

  const {totalItems} = useCart()
  return (
    <>
    <span>{totalItems}</span>
      <NavLink to="/" className='m-3'>Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </>
  );
};

export default Header;
