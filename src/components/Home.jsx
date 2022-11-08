import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db, { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { selectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/movie/movieSlice";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import bg from "../assets/images/home-bg.png";

// Home
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // select user name from redux store
  const userName = useSelector(selectUserName);

  // declare movies array
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

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
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
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
  }, [userName]);

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
