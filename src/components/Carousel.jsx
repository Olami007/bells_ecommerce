import React, { useState, useMemo, useEffect } from "react";

const Carousel = () => {
  let imgStyle = {
    height: "0500px",
  };

  const imgs = useMemo(
    () => [
      "./images/a.jpg",
      "./images/b.jpg",
      "./images/c.jpg",
      "./images/d.jpg",
      "./images/e.jpg",
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, [imgs, currentIndex]);

  return (
    <>
      <section className="d-flex align-items-center justify-content-center pb-5">
        <img
          src={imgs[currentIndex]}
          alt="carousel item"
          className="img-fluid"
          style={imgStyle}
        />
      </section>
    </>
  );
};

export default Carousel;
