import React from "react";
import styled from "styled-components";

// Images
import DisneyView from "../assets/images/viewers-disney.png";
import MarvelView from "../assets/images/viewers-marvel.png";
import NationalView from "../assets/images/viewers-national.png";
import PixarView from "../assets/images/viewers-pixar.png";
import StarwarsView from "../assets/images/viewers-starwars.png";

// Videos
import DisneyVideo from "../assets/videos/video-disney.mp4";
import MarvelVideo from "../assets/videos/video-marvel.mp4";
import NationalVideo from "../assets/videos/video-national.mp4";
import PixarVideo from "../assets/videos/video-pixar.mp4";
import StarwarsVideo from "../assets/videos/video-starwars.mp4";

// Viewers
const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={DisneyView} alt="Disney" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={DisneyVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={MarvelView} alt="Marvel" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={MarvelVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={NationalView} alt="National" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={NationalVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={PixarView} alt="Pixar" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={PixarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={StarwarsView} alt="Starwars" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={StarwarsVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

// Wrap styles
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
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

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default Viewers;
