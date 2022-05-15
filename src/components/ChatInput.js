import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ chatRef, channelName, channelId }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) return false;
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={channelName ? `Message #${channelName}` : "Message..."}
          type="text"
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  position: relative;
  > form {
    position: fixed;
    bottom: 30px;
    display: flex;
    justify-content: center;
    right: 0;
    left: 0;
    transform: translate(0, -30px);

    > input {
      width: 50%;
      padding: 10px;
      outline: none;
      border-radius: 5px;
      border: solid 1px gray;
    }
  }
`;
