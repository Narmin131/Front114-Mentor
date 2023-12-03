import React from "react";
import { products } from "../data/Data";
import SingleProduct from "../components/SingleProduct";
const Home = () => {
  return (
    <>
      {products.map((item, index) => {
        return <SingleProduct product={item} />;
      })}
    </>
  );
};

export default Home;
