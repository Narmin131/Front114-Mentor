import React from "react";
import { useCart } from "react-use-cart";
import WishlistBtn from "./WishlistBtn";
import { toast } from 'react-toastify';
const SingleProduct = ({ product }) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="col-lg-3 p-3">
        <div className="card" style={{ width: "100%" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h5 className="card-title">{product.description}</h5>
            <p className="card-text">{product.price}$</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                addItem(product)
                toast.success('elvae edilid')
              }}
            >
              add to cart
            </button>
            <WishlistBtn  product={product}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
