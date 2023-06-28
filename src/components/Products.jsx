import React, { useEffect, useState } from "react";
import "../components/Style.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import { publicRequest } from "../services/request";

const Products = () => {
  const [Product, setProduct] = useState([]);
  const [selectedOption, setSelectedOption] = useState("smartphones");
  const [cardBg, setCardBg] = useState({
    backgroundColor: "white",
  });

  useEffect(() => {
    let x = document.getElementById("root");
    if (x.classList.contains("night")) {
      setCardBg({
        backgroundColor: "black",
      });
    }

    async function getProduct() {
      try {
        // fetch("http://127.0.0.1:4100/products")
        //   .then((res) => res.json())
        //   .then((json) => {
        //     setProduct(json.products);
        //   });
        const publicReq = publicRequest();
        const response = await publicReq.get("/products");

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, []);
  // console.log(Product);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const publicReq = publicRequest();
      const response = await publicReq.post("/category", {
        category: selectedOption,
      });
      setProduct(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-center">
        <Link to="/" className="bg-dark text-light p-3">
          Shopping everyday
        </Link>

        <p className="py-4 w-50 m-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
          voluptatem deserunt voluptas repellat modi impedit, harum nam esse
          officia labore praesentium? Quod tempore illo pariatur ipsa totam
          asperiores molestias nisi?
        </p>
      </div>

      <h1 className="text-center pb-3">Products</h1>

      <div className="text-center my-5">
        <form onSubmit={handleSubmit}>
          <select
            className="mx-3 p-3 text-light bg-dark"
            name=""
            id=""
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="smartphones">Phones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Perfumes</option>
            <option value="skincare">SkinCare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decors</option>
          </select>
          <button className="btn btn-dark" type="submit">
            Go
          </button>
        </form>
      </div>

      <div className="product-container pb-5">
        {Product?.length > 0 &&
          Product?.map((product, i) => (
            <div key={i} className="card product" style={cardBg}>
              <Link to={`product/${product._id}`}>
                <img src={product.images[0]} alt="" />
                <p>
                  <b>{product.title}</b>
                </p>
                <div className="d-flex justify-content-between">
                  <p>Category: {product.category}</p>
                  <p>
                    <b>${product.price}</b>
                  </p>
                </div>
                <p>Rating:{product.rating}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
