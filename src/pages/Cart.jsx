import React, { useEffect, useState } from "react";
import store from "store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  // Get the cart
  const getCart = () => {
    return store.get("cart") || [];
  };

  // Update the cart
  const updateCart = (cart) => {
    store.set("cart", cart);
  };

  //   Clear the cart
  const handleResetCart = () => {
    updateCart([]);
    setCartItems([]);
  };
  const [cartItems, setCartItems] = useState(getCart());

  const handleRemoveFromCart = (item) => {
    const updatedCart = [...cartItems]; // Create a copy of the cart array
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id); // Find index of the clicked item
    if (index !== -1) {
      updatedCart.splice(index, 1); // Remove the clicked item from the copy of the cart array
      updateCart(updatedCart); // Update the cart in the store
      setCartItems(updatedCart); // Update the cartItems state
    }
  };

  //

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  });

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(totalPrice);
  };

  const handleIncreaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    updateCart(updatedCart);
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    updateCart(updatedCart);
    setCartItems(updatedCart);
  };

  //

  //   console.log(store.get("cart"));
  return (
    <>
      <Navbar />

      <h2 className="text-center pt-3">Cart</h2>
      <div className="container-fluid d-flex justify-content-around align-items-center">
        <div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, i) => (
                <li key={i}>
                  <img
                    style={{ width: "60px", height: "40px", margin: "10px" }}
                    src={item.thumbnail}
                    alt="product thumbnail"
                  />
                  {/* {item.title} - ${item.price}{" "} */}
                  {item.title} - ${item.price * item.quantity}
                  <span className="px-2">
                    Quantity
                    <span className="px-2">
                      <button
                        // className="btn btn-primary"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                    </span>
                    {item.quantity}
                    <span className="px-2">
                      <button
                        // className="btn btn-primary"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </span>
                  </span>
                  <button
                    className="btn btn-danger m-3"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card p-5">
          <h2>CART TOTAL</h2>
          <p>Subtotal: ${totalPrice}</p>
          <button className="btn-dark px-5 p-2">
            <Link to="/checkout">Proceed to checkout</Link>
          </button>
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleResetCart} className="btn btn-danger my-3">
          Reset Cart
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
