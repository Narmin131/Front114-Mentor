import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleProduct from "../components/SingleProduct";

const Wishlist = () => {
  const { items } = useWishlist();
  return (
    <>
      <div className="container">
        <div className="row">
          {items.map((item) => {
            return <SingleProduct product={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
