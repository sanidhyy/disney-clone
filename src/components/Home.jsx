import React, { useEffect } from "react";
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

import { HomeBg } from "../assets/images";

// Home
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  // check user login state
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [userName, navigate]);

  // fetch movies from firebase
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            console.log("Unwanted data recieved from firebase!");
        }
      });

      // set movies to redux store
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
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
      {/* Recommended */}
      <Recommends />
      {/* New to disney+ */}
      <NewDisney />
      {/* Disney originals */}
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
    background: url(${HomeBg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
