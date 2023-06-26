import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  // console.log(cart);

  const [authenticatedUser, setAuthenticatedUser] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    let isLoggedin = localStorage.getItem("token");
    setAuthenticatedUser(isLoggedin);
  }, []);

  const handleCheckout = () => {
    // Logic for handling the checkout process
  };

  const calculateTotal = () => {
    const total = {
      quantity: 0,
      price: 0,
    };

    cart.forEach((item) => {
      total.quantity += item.quantity;
      total.price += item.price * item.quantity;
    });

    return total;
  };

  const total = calculateTotal();

  return (
    <>
      <Navbar />

      <h2 className="text-center py-3">Checkout</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h4>Order Summary</h4>
              <ul className="list-group">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>{item.title}</h6>
                        <p>Price: ${item.price * item.quantity}</p>
                      </div>
                      <div>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className=" text-center">
                <p className="mt-3 ">Total Items: {total.quantity}</p>
                <p>Subtotal: ${total.price}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-4">
              <h4 className="text-center">Shipping Information</h4>
              {authenticatedUser ? (
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      defaultValue={`${user.first_name} ${user.last_name}`}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      defaultValue={user.address}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      defaultValue={user.phone}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      defaultValue={user.region}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      defaultValue={user.nationality}
                    />
                  </div>
                  <div className="text-center ">
                    <button
                      className="btn btn-primary btn-block mt-3 px-5"
                      onClick={handleCheckout}
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              ) : (
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                    />
                  </div>
                  <div className="text-center ">
                    <button
                      className="btn btn-primary btn-block mt-3 px-5"
                      onClick={handleCheckout}
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              )}

              {/* <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                  />
                </div>
                <div className="text-center ">
                  <button
                    className="btn btn-primary btn-block mt-3 px-5"
                    onClick={handleCheckout}
                  >
                    Place Order
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-3">
        <Link to="/cart" className="btn btn-secondary">
          Back to Cart
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
