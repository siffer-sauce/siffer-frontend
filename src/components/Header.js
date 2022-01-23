import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import { VscThreeBars } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  padding: 20px;
  padding-top: 40px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed !important;
  .right {
    display: flex;
    align-items: center;
  }
  ${(props) =>
    props.background && "background-color: rgba(255, 255, 255, 0.5);"}
  z-index: 10;
`;

const SignUpButton = styled.button`
  background-color: white;
  border: 2px solid black;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 15px;
  color: black;
  cursor: pointer;
  font-weight: 700;
  margin-right: 20px;
`;

const Header = ({ background, setSideBar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/signup" && (
        <Container background={background}>
          <img
            src={Logo}
            style={{ zIndex: 12 }}
            onClick={() => navigate("/")}
          />
          <span className="right">
            <SignUpButton onClick={() => navigate("/signup")}>
              Sign up
            </SignUpButton>
            <VscThreeBars onClick={() => setSideBar(true)} />
          </span>
        </Container>
      )}
    </>
  );
};

export default Header;
