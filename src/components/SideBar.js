import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import { Create } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SideBarOption from "./SideBarOption";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function SideBar() {
  const [channels, loading, errors] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>{user?.email}</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SideBarInfo>
        <Create />
      </SideBarHeader>
      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & Reactions" />
      <SideBarOption Icon={Drafts} title="Saved Items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File Browser" />
      <SideBarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  max-width: 260px;
  margin-top: 55px;
  border: 1px solid #49274b;
  > hr {
    margin: 10px 0;
    border: solid 1px #49274b;
  }
`;
const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 3px;
    font-size: 24px;
    background-color: white;
    color: #49274b;
    border-radius: 50%;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
    > .MuiSvgIcon-root {
      font-size: 14px;
      margin: 1px 2px 0 0;
      color: green;
    }
  }
`;
