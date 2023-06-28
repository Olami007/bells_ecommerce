import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/Style.css";
const Footer = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(false);

  useEffect(() => {
    let isLoggedin = localStorage.getItem("token");
    // setAuthenticatedUser(localStorage.getItem("token"));
    setAuthenticatedUser(isLoggedin);
  }, []);
  return (
    <>
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row pt-4">
            <div className="col-lg-4">
              <Link to="/" className="text-light">
                <h1>BELLS</h1>
              </Link>
              <img
                src="https://i.postimg.cc/6Q5dtkRd/payment.png"
                alt="payment"
                id="paymentLogo"
              />
              <div className="social-links">
                <Link
                  to="https://github.com/Olami007"
                  className="fa-brands fa-github"
                ></Link>
                <Link
                  to="https://www.youtube.com/channel/UC78la7YXaBP09wlaJ0jJYtA"
                  className="fa-brands fa-youtube"
                ></Link>
                <Link
                  to="https://www.twitter.com/olami_bells"
                  className="fa-brands fa-twitter"
                ></Link>
                <Link className="fa-brands fa-facebook"></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h2>Locate us</h2>
              <ul>
                <li>IBADAN, NIGERIA</li>
                <li>Mobile: +234 81 417 67300</li>
                <li>Email: oladimejibells@gmail.com</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h2>Profile</h2>
              <ul>
                {authenticatedUser && (
                  <li>
                    <Link to="/dashboard">My Account</Link>
                  </li>
                )}
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link>Order tracking</Link>
                </li>
                <li>
                  <Link>Help & support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
