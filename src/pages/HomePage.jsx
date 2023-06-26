import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "../components/Style.css";
import Products from "../components/Products";
// import { useState } from "react";
// import axios from "axios";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <Carousel />

      <Products />

      <Footer />

      <Outlet />
    </>
  );
};

export default HomePage;
