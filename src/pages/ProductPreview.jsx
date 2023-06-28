import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import store from "store";
import { publicRequest } from "../services/request";

const ProductPreview = () => {
  const { productid } = useParams();
  const [Product, setProduct] = useState("");
  // const [baseQty, setBaseQty] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [cartItems, setCartItems] = useState("");

  useEffect(() => {
    async function getProduct() {
      try {
        // fetch(`http://127.0.0.1:4100/eachProduct/${productid}`)
        //   .then((res) => res.json())
        //   .then((json) => {
        //     setProduct(json.products);
        // });
        const publicReq = publicRequest();

        let res = await publicReq.get(`/eachProduct/${productid}`);

        setProduct(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [productid]);
  // console.log(Product);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % Product.images.length
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? Product.images.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = () => {
    const cart = store.get("cart") || [];
    const existingItem = cart.find((cartItem) => cartItem.id === Product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...Product, quantity: 1 };
      cart.push(newItem);
    }

    store.set("cart", cart);
    // setCartItems(cart);
  };

  return (
    <>
      <Navbar />

      {Product !== "" && (
        <div className="container-fluid d-flex my-5 justify-content-around">
          <div className="row">
            <div className="px-5 col-md-6 col-sm-6">
              <img
                className="preview"
                src={Product.images[currentImageIndex]}
                alt={`product ${currentImageIndex + 1}`}
              />
              <div className="text-center">
                <button
                  className="btn btn-primary m-2"
                  onClick={handlePreviousImage}
                >
                  Previous
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={handleNextImage}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 pt-3">
              <h1 className="text-center">{Product.title}</h1>
              <h3 className="text-center">${Product.price}</h3>
              <h4 className="pt-5 pb-4 text-center">{Product.description}</h4>
              <p className="py-1">Category: {Product.category}</p>

              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary mx-3"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductPreview;
