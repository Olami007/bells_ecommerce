import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { useState } from "react";
import { useEffect } from "react";
import "../components/Style.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [authenticatedUser, setAuthenticatedUser] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    let isLoggedin = localStorage.getItem("token");
    setAuthenticatedUser(isLoggedin);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  let toggle = () => {
    let x = document.getElementById("root");
    x.classList.toggle("night");
  };
  return (
    <>
      {/* <nav className="px-3 py-3 mb-3 d-flex justify-content-between align-items-center bg-dark text-primary shadow">
        <div className="px-5">
          <Link to={"/"}>
            <h1>BELLS</h1>
          </Link>
        </div>
        <div className="px-5">
          <Link to={"/"} className="px-3">
            Pages
          </Link>

          <Link to={"/about"} className="px-3">
            About
          </Link>

          {!authenticatedUser && (
            <a href="/register" className="px-3">
              SignUp
            </a>
          )}
          {authenticatedUser && (
            <span onClick={logout} className="px-3 hover">
              Logout
            </span>
          )}
          {!authenticatedUser && (
            <a href="/login" className="px-3">
              SignIn
            </a>
          )}
        </div>
        <div className="form-check form-switch">
          <Link to={"/cart"} className="px-3">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          {authenticatedUser && (
            <span>
              <Link to="/dashboard">{user.last_name}</Link>
            </span>
          )}
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={toggle}
          />
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <h1>BELLS</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item px-2">
                <Link to={"/"} className="nav-link">
                  Pages
                </Link>
              </li>

              <li className="nav-item px-2">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              {!authenticatedUser && (
                <li className="nav-item px-2">
                  <a href="/register" className="nav-link">
                    SignUp
                  </a>
                </li>
              )}

              {!authenticatedUser && (
                <li className="nav-item px-2">
                  <a href="/login" className="nav-link">
                    SignIn
                  </a>
                </li>
              )}
              <li className="nav-item px-2">
                <Link to={"/cart"} className="nav-link">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              {authenticatedUser && (
                <li className="nav-item px-2">
                  <Link to="/dashboard" className="nav-link">
                    {user.last_name}
                  </Link>
                </li>
              )}
              {authenticatedUser && (
                <li className="nav-item px-2">
                  <span onClick={logout} className="nav-link hover">
                    Logout
                  </span>
                </li>
              )}
              <li className="nav-item px-2 form-check form-switch">
                <input
                  className="form-check-input my-3 mx-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={toggle}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
