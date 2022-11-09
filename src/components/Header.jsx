import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

import logo from "../assets/images/logo.svg";
import GithubIcon from "../assets/images/github-icon.svg";
import { navLinks } from "../data";

// Header
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // check user login state
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) setUser(user);
    });
  }, [userName]); // eslint-disable-line react-hooks/exhaustive-deps

  // handle google auth
  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
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
        <Link to="/">
          <img src={logo} alt="Disney+" />
        </Link>
      </Logo>

      {!userName ? (
        // Login Button
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          {/* Nav Menu */}
          <NavMenu>
            {navLinks.map(({ name, icon, url }, i) => (
              <Link to={url} key={`Link-${i}`}>
                {/* Icon */}
                <img src={icon} alt={name} />
                {/* Name */}
                <span>{name}</span>
              </Link>
            ))}

            {/* Github Source Code */}
            <a
              href="https://github.com/Technical-Shubham-tech/disney-clone"
              target="_blank"
              rel="noreferrer noopener"
              title="View Source Code"
            >
              {/* Icon */}
              <img src={GithubIcon} alt="Github" />
              {/* Name */}
              <span>Github</span>
            </a>
          </NavMenu>
          <SignOut>
            {/* user image */}
            <UserImg
              src={userPhoto}
              referrerPolicy="no-referrer"
              alt={userName}
              title={userName}
            />
            {/* Sign out */}
            <DropDown>
              <span onClick={handleAuth} title="Sign out">
                Sign out
              </span>
            </DropDown>
          </SignOut>
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
const Logo = styled.div`
  padding: 0;
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
      padding: 8px;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

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
  width: 100%;
  border-radius: 50%;
`;

// Drop Down styles
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 0 18px 0;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

// Sign Out styles
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
