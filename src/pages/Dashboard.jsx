import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import { UserRequest } from "../services/request";
import Footer from "../components/Footer";

const Dashboard = () => {
  let [userFullName, setUserFullName] = useState("");
  let [user, setUser] = useState("");

  const getUser = async () => {
    try {
      const userRequest = UserRequest();

      const res = await userRequest.get("/user");
      console.log(res.data);
      setUserFullName(`${res.data.user.first_name} ${res.data.user.last_name}`);
      setUser(res.data.user);
    } catch (error) {
      console.log(error, "it meee");
    }
  };

  useEffect(() => {
    getUser();
  }, [userFullName]);
  return (
    <>
      <Navbar />

      <div className="container d-flex justify-content-between align-items-center">
        <h3>Dashboard</h3>
      </div>
      <h1 className="text-center p-3">Welcome {userFullName}</h1>

      <div className="container d-flex justify-content-around align-items-center">
        <div>
          <h3>Your Profile</h3>
          <div className="card p-4 m-2">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 p-2">
                  <h5 className="card-title">First Name</h5>
                  <p className="card-text">{user.first_name}</p>
                </div>
                <div className="col-md-6 p-2">
                  <h5 className="card-title">Last Name</h5>
                  <p className="card-text">{user.last_name}</p>
                </div>
                <div className="col-md-6 p-2">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">{user.email}</p>
                </div>
                <div className="col-md-6 p-2">
                  <h5 className="card-title">Sex</h5>
                  <p className="card-text">{user.sex}</p>
                </div>
                <div className="col-md-6 p-2">
                  <h5 className="card-title">Address</h5>
                  <p className="card-text">{user.address}</p>
                </div>
                <div className="col-md-6 p-2">
                  <h5 className="card-title">Nationality</h5>
                  <p className="card-text">{user.nationality}</p>
                </div>
                <div className="col-md-6 p-2">
                  <h5 className="card-title">Region</h5>
                  <p className="card-text">{user.region}</p>
                </div>
                <div className="col-md-6 p-2">
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text">{user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <h1>Your Orders</h1>
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div> */}
      </div>
      <Outlet />

      <Footer />
    </>
  );
};

export default Dashboard;
