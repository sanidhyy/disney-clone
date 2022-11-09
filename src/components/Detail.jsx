import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import db from "../firebase";
import { PlayBlack, PlayWhite, GroupIcon } from "../assets/images";

// Detail
const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailData, setDetailData] = useState({});

  // fetch movie details
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No Such Document in firebase!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      {/* Background Image */}
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      {/* Title */}
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      {/* Content */}
      <ContentMeta>
        {/* Controls */}
        <Controls>
          {/* Play */}
          <Player>
            <img src={PlayBlack} alt="Play" />
            <span>Play</span>
          </Player>
          {/* Play Trailer */}
          <Trailer>
            <img src={PlayWhite} alt="Play Trailer" />
            <span>Trailer</span>
          </Trailer>
          {/* Add List */}
          <AddList title="Add to List">
            <span />
            <span />
          </AddList>
          {/* Group Watch */}
          <GroupWatch title="Watch with others">
            <div>
              <img src={GroupIcon} alt="Group Icon" />
            </div>
          </GroupWatch>
        </Controls>
        {/* Sub title */}
        <SubTitle>{detailData.subtitle}</SubTitle>

        {/* Description */}
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

// Container styles
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

// Background styles
const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media only screen and (max-width: 768px) {
      width: initial;
    }
  }
`;

// Image title styles
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

// Content Meta styles
const ContentMeta = styled.div`
  max-width: 874px;
`;

// Controls styles
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

// PlayerButton
const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media screen and (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }
`;

// Trailer styles
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

// Add List styles
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

// Group watch styles
const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

// Sub title styles
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// Description styles
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  color: rgb(249, 249, 249);

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
