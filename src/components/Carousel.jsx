import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const { data } = useContext(ProductsContext);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, idx) => (
          <div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
