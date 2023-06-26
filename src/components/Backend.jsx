import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Backend = () => {
  const [products, setProducts] = useState([]);
  const getFromServer = async () => {
    try {
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      let response = await axios.get("http://127.0.0.1:4100/products");
      setProducts(response.data.products[0].products);
      //   console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFromServer();
  }, []);

  //   getFromServer();
  return (
    <>
      <div>Backend</div>
      <ul>
        {products.map((el, i) => {
          return (
            <li className="p-4" key={i}>
              <div>{i}</div>
              <div>{el.brand}</div>
              <div>{el.title}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Backend;
