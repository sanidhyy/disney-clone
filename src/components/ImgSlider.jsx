import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderData } from "../data";

// Image Slider
const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {sliderData.map((slide, i) => (
        <Wrap key={`slide-${i}`}>
          <img src={slide.src} alt={slide.name} title={slide.name} />
        </Wrap>
      ))}
    </Carousel>
  );
};

// Carousel styles
const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button:before {
    font-size: 10px;
    color: rgb(150, 158, 171);
  }

  ul li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

// Wrap styles
const Wrap = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  display: block;
  position: relative;
  padding: 4px;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.6);
    transition-duration: 0.3s;
  }
`;

export default ImgSlider;
