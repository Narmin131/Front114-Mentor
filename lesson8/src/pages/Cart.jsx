import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
  return (
    <>
      {items.length == 0 ? (
        "Your cart is empty"
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">img</th>
              
              <th scope="col">price</th>
              <th scope="col">quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image} alt="" style={{width:"100px"}}/>
                  </td>
                  <td>{item.price * item.quantity}$</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <h1>Cart total :{cartTotal}$</h1>
        </table>
      )}
    </>
  );
};

export default Cart;
