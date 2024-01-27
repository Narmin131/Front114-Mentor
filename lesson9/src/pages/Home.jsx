import React, { useState } from "react";
import { products } from "../data/Data";
import SingleProduct from "../components/SingleProduct";
import { Select, Space } from "antd";

const Home = () => {
  const [state, setState] = useState(products);

  // sort
  const sortProduct = (value) => {
    if (value == "all") {
      setState(products);
      return;
    } else if (value == "azalan") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    } else if (value == "artan") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    } else if (value == "a-z") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortedProducts);
    } else if (value == "z-a") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortedProducts);
    }
  };

  // category

  const categories = [
    "all",
    "jewelery",
    "electronics",
    "men's clothing",
    "women's clothing",
  ];

  const filterCategory = (myCategory) => {
    if (myCategory === "all") {
      setState(products);
      return;
    }
    const filterArray = products.filter((item) => item.category === myCategory);
    setState(filterArray);
  };

  return (
    <>
      <div className="container">
        {categories.map((item) => {
          return (
            <button
              onClick={() => filterCategory(item)}
              className="btn btn-dark m-2"
            >
              {item}
            </button>
          );
        })}
        <Select
          defaultValue="All"
          style={{
            width: 120,
          }}
          onChange={sortProduct}
          options={[
            {
              value: "a-z",
              label: "A-Z",
            },
            {
              value: "z-a",
              label: "Z-A",
            },
            {
              value: "azalan",
              label: "Azalan",
            },
            {
              value: "artan",
              label: "Artan",
            },
            {
              value: "all",
              label: "All",
            },
          ]}
        />
        <div className="row">
          {state.map((item, index) => {
            return <SingleProduct product={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
