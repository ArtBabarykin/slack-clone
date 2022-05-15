import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
          alt=""
        />
        <h1>Welcome to Slack</h1>
        <p>cloned by Art B.</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginInnerContainer = styled.div`
  padding: 60px;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 30px;
  }
  > button {
    text-transform: inherit;
    margin-top: 30px;
    background-color: #0a8d48;
    color: white;
    :hover {
      border: #0a8d48 0.1px solid;
      color: #0a8d48;
    }
  }
`;
