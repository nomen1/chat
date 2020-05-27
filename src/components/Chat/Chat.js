import React from "react";
import s from "./Chat.module.css";
import { ChatMessages } from "./../ChatMessages/ChatMessages";
import ChatHeader from "./../ChatHeader/ChatHeader";
import { ChatFooterContainer } from "./../ChatFooter/ChatFooterContainer";

const Chat = (props) => {
  return (
    <div className={s.container}>
      {props.chat !== null ? (
        <div className={s.chat}>
          <ChatHeader chat={props.chat} />
          <ChatMessages chat={props.chat} />
          <ChatFooterContainer chat={props.chat} />
        </div>
      ) : (
        <div> Please, wait...</div>
      )}
    </div>
  );
};

export default Chat;
