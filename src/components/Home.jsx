import React from "react";
import styled from "styled-components";

import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";

import bg from "../assets/images/home-bg.png";

// Home
const Home = () => {
  return (
    <Container>
      {/* Slider */}
      <ImgSlider />
      {/* Viewers */}
      <Viewers />
      {/* Recommendations */}
      <Recommends />
    </Container>
  );
};

// Container styles
const Container = styled.main`
  position: relative;
  min-height: calc(100% - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: calc(3.5vw + 5px);

  &:after {
    background: url(${bg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
