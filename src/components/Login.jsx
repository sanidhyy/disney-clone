import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUserName } from "../features/user/userSlice";

import { LoginBg, CTALogo1, CTALogo2 } from "../assets/images";

// Login
const Login = () => {
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  // redirect if already logged in
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        navigate("/home");
      }
    });
  }, [userName, navigate]);

  return (
    <Container>
      <Content>
        <CTA>
          {/* CTA Logo 1 */}
          <CTALogoOne src={CTALogo1} alt="CTA Logo 1" />
          {/* Sign Up Button */}
          <SignUp>GET ALL THERE</SignUp>
          {/* Description */}
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          {/* CTA Logo 2 */}
          <CTALogoTwo src={CTALogo2} alt="CTA Logo 2" />
        </CTA>
        {/* Background Image */}
        <BgImage />
      </Content>
    </Container>
  );
};

// Container styles
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

// Content styles
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

// Background image styles
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${LoginBg});
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  top: 0;
  z-index: -1;
`;

// CTA styles
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

// CTA Logo 1 styles
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

// Sign Up styles
const SignUp = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

// Description styles
const Description = styled.p`
  color: hsla(0, 0, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

// CTA Logo 2 styles
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
