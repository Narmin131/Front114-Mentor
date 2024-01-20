import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalItems } = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span>{totalItems}</span>
                <NavLink to="/" className="m-3">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishlist">Wishlist</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
