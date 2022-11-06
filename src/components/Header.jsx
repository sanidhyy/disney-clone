import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";

import logo from "../assets/images/logo.svg";
import HomeIcon from "../assets/images/home-icon.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import WatchlistIcon from "../assets/images/watchlist-icon.svg";
import OriginalsIcon from "../assets/images/original-icon.svg";
import MoviesIcon from "../assets/images/movie-icon.svg";
import SeriesIcon from "../assets/images/series-icon.svg";

// Header
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // redirect if already logged in
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  // handle google auth
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // set user details
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      {/* Brand Logo */}
      <Logo>
        <img src={logo} alt="Disney+" />
      </Logo>

      {!userName ? (
        // Login Button
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          {/* Nav Menu */}
          <NavMenu>
            <a href="/home">
              <img src={HomeIcon} alt="Home" />
              <span>HOME</span>
            </a>
            <a>
              <img src={SearchIcon} alt="Search" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src={WatchlistIcon} alt="Watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={OriginalsIcon} alt="Originals" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={MoviesIcon} alt="Movies" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src={SeriesIcon} alt="Series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg
            src={userPhoto}
            referrerPolicy="no-referrer"
            alt={userName}
          />
        </>
      )}
    </Nav>
  );
};

// Nav styles
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

// Logo styles
const Logo = styled.a`
  padding: 0;
  cursor: pointer;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

// Nav Menu styles
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// Login styles
const Login = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  color: #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
    border-color: transparent;
  }
`;

// User image styles
const UserImg = styled.img`
  height: 100%;
`;

export default Header;
