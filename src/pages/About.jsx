import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "animate.css";

const About = () => {
  // const [cardBg, setCardBg] = useState({
  //   backgroundColor: "white",
  // });

  // let x = document.getElementById("root");
  // useEffect(() => {
  //   if (x.classList.contains("night")) {
  //     setCardBg({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //   } else {
  //     setCardBg({
  //       backgroundColor: "white",
  //     });
  //   }
  // }, [x]);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <h1 className="mb-4 text-center animate__animated animate__flip">
            Welcome to BELLS
          </h1>
          <div className="col-lg-6">
            <p>
              At BELLS, our mission is to make ecommerce easy and affordable for
              everyone. With a deep-rooted passion for bringing comfort to the
              world, we have turned our childhood dream into a reality. We
              understand the importance of convenience and accessibility in
              today's fast-paced digital era, and we strive to provide an
              exceptional online shopping experience that caters to your needs.
            </p>
            <h4>Our Story:</h4>
            <p>
              BELLS was born out of our childhood dreams and the desire to make
              a positive impact on people's lives. Growing up, we always
              envisioned a world where everyone could enjoy the convenience of
              shopping from the comfort of their homes. We wanted to create an
              ecommerce platform that not only offered a wide range of products
              but also made them accessible to all, regardless of budget
              constraints. With this vision in mind, we embarked on a journey to
              revolutionize the way people shop online.
            </p>
            <h4>Our Commitment:</h4>
            <p>
              At BELLS, we are committed to delivering on our promise of making
              ecommerce easy and affordable. We understand the challenges and
              frustrations that can arise when shopping online, such as
              complicated processes, hidden costs, and limited options. That's
              why we have meticulously crafted our platform to address these
              concerns and provide a seamless shopping experience. From
              intuitive navigation to transparent pricing, we prioritize
              simplicity and clarity in every aspect of our website.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://i.postimg.cc/26gvd3tw/cart.png"
              alt="Bells Cart"
              className="img-fluid rounded animate__heartBeat"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <h4 className="text-center">Why Choose BELLS?</h4>
            <ol className="list-group ">
              <li className="list-group-item">
                Easy-to-Use Interface: We have designed our website with
                user-friendliness in mind, ensuring that even those new to
                online shopping can navigate effortlessly. Finding your desired
                products, placing orders, and managing your account has never
                been easier.
              </li>
              <li className="list-group-item">
                Affordable Prices: We believe that everyone deserves access to
                quality products at affordable prices. Through our strong
                partnerships with trusted suppliers and strategic pricing
                strategies, we are able to offer competitive prices without
                compromising on quality.
              </li>
              <li className="list-group-item">
                Wide Product Selection: At BELLS, we offer a diverse range of
                products carefully curated to cater to different needs and
                preferences. From trendy fashion items to home essentials and
                electronics, you'll find everything you need in one convenient
                place.
              </li>
              <li className="list-group-item">
                Secure and Reliable: Your safety and security are of utmost
                importance to us. We employ the latest encryption technology and
                stringent security measures to safeguard your personal and
                financial information. Rest assured, your shopping experience at
                BELLS is protected and reliable.
              </li>
              <li className="list-group-item">
                Exceptional Customer Support: We take pride in providing
                outstanding customer support every step of the way. Our friendly
                and knowledgeable support team is ready to assist you with any
                inquiries or concerns you may have, ensuring that you have a
                hassle-free shopping experience.
              </li>
            </ol>
            <p className="py-5 ">
              Join us at BELLS and embark on a journey of effortless and
              affordable ecommerce. Together, let's bring comfort and
              convenience to the world. Start exploring our wide range of
              products today and experience a new way to shop online.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
