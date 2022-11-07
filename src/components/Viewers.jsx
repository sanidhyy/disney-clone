import React from "react";
import styled from "styled-components";

import DisneyView from "../assets/images/viewers-disney.png";
import MarvelView from "../assets/images/viewers-marvel.png";
import NationalView from "../assets/images/viewers-national.png";
import PixarView from "../assets/images/viewers-pixar.png";
import StarwarsView from "../assets/images/viewers-starwars.png";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={DisneyView} alt="Disney" />
      </Wrap>
      <Wrap>
        <img src={MarvelView} alt="Marvel" />
      </Wrap>
      <Wrap>
        <img src={NationalView} alt="National" />
      </Wrap>
      <Wrap>
        <img src={PixarView} alt="Pixar" />
      </Wrap>
      <Wrap>
        <img src={StarwarsView} alt="Starwars" />
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 0.5s ease-in 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;

// Container styles
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Viewers;
