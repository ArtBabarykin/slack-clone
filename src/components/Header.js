import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <Avatar
            onClick={() => auth.signOut()}
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </IconButton>
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input placeholder="Search..." type="text" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 0; */
  position: fixed;
  width: 100%;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  background-color: #421f44;
  text-align: center;
  border-radius: 6px;
  padding: 0 50px;
  color: gray;
  border: solid 1px gray;

  > input {
    background: transparent;
    border: none;
    min-width: 30vw;
    outline: none;
    color: white;
    text-align: center;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  text-align: right;
  margin-right: 20px;
`;
