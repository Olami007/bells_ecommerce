import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const UnauthorizedPage = () => {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-center pt-5">
          You're not authorized to enter this page
        </h1>
        <h1 className="text-center py-5">
          Please <Link to="/login">Login</Link>
        </h1>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default UnauthorizedPage;
