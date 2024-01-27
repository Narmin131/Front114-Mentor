import React from "react";
import { useWishlist } from "react-use-wishlist";
import { toast } from 'react-toastify';
const WishlistBtn = ({ product }) => {
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

  const toggleWisht = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      toast.error('solindi')

    } else {
      addWishlistItem(myProduct);
      toast.success('elave edildi')
    }
  };

  return (
    <>
      <button onClick={() => toggleWisht(product)}>
        {inWishlist(product.id) ? (
          <i class="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </button>
    </>
  );
};

export default WishlistBtn;
