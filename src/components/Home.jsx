import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db, { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { selectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/movie/movieSlice";
import {
  ImgSlider,
  Viewers,
  Recommends,
  NewDisney,
  Originals,
  Trending,
} from ".";

import bg from "../assets/images/home-bg.png";

// Home
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // select user name from redux store
  const userName = useSelector(selectUserName);

  // declare movies array
  const [recommends, setRecommends] = useState([]);
  const [newDisney, setNewDisney] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);

  // redirect if not logged in
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [userName, navigate]);

  useEffect(() => {
    // fetch movies form firestore
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            setRecommends((prevRecommends) => [
              ...prevRecommends,
              { id: doc.id, ...doc.data() },
            ]);
            break;
          case "new":
            setNewDisney((prevNewDisney) => [
              ...prevNewDisney,
              { id: doc.id, ...doc.data() },
            ]);
            break;
          case "original":
            setOriginals((prevOriginal) => [
              ...prevOriginal,
              { id: doc.id, ...doc.data() },
            ]);
            break;
          case "trending":
            setTrending((prevTrending) => [
              ...prevTrending,
              { id: doc.id, ...doc.data() },
            ]);
            break;
          default:
            console.log("Recieved Unwanted data from firestore!");
        }
      });

      // set movies
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName, dispatch, newDisney, originals, recommends, trending]);

  return (
    <Container>
      {/* Slider */}
      <ImgSlider />
      {/* Viewers */}
      <Viewers />
      {/* Recommendations */}
      <Recommends />
      {/* New Disney */}
      <NewDisney />
      {/* Originals */}
      <Originals />
      {/* Trending */}
      <Trending />
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
