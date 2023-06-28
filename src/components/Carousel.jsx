import React, { useState, useEffect } from "react";

const Carousel = () => {
  let imgStyle = {
    height: "500px",
  };

  // const imgs = useMemo(
  //   () => [
  //     "./images/a.jpg",
  //     "./images/b.jpg",
  //     "./images/c.jpg",
  //     "./images/d.jpg",
  //     "./images/e.jpg",
  //   ],
  //   []
  // );
  const imgs = [
    "https://i.postimg.cc/9QBd3m4m/a.jpg",
    "https://i.postimg.cc/hPLxxD1L/b.jpg",
    "https://i.postimg.cc/9Xqymt4N/c.jpg",
    "https://i.postimg.cc/MpzBmC9h/d.jpg",
    "https://i.postimg.cc/gkF8nX8c/e.jpg",
  ];
  // const imgs = [
  //   "/images/a.jpg",
  //   "/images/b.jpg",
  //   "/images/c.jpg",
  //   "/images/d.jpg",
  //   "/images/e.jpg",
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, [imgs.length, currentIndex]);

  return (
    <>
      <section className="d-flex align-items-center justify-content-center pb-5">
        <img
          src={imgs[currentIndex]}
          alt="carousel item"
          className="img-fluid "
          style={imgStyle}
        />
      </section>
    </>
  );
};

export default Carousel;
