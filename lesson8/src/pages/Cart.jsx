import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
  return (
    <>
      <div className="container-fluid mt-5">
        {items.length === 0 ? (
          <section
            style={{ width: "100%", height: "100vh", }}
          >
            <h1>Your cart is empyt</h1>
          </section>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "120px" }}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price * item.quantity} azn</td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        {item.quantity}
                        <button
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
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>

            <h1>Cart Total : {cartTotal} azn</h1>
            <button className="btn btn-success">Buy Now</button>
          </table>
        )}
      </div>
    </>
  );
};

export default Cart;
