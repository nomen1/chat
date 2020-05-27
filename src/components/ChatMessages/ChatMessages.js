import React from "react";
import s from "./ChatMessages.module.css";
import {Message} from "./Message/Message";

export const ChatMessages = (props) => {
  const messages = props.chat.messageHistory.map((item, key) => {
    return <Message messageInfo={item} dialogPhoto={props.chat.img} key = {key} />;
  });

  return <div className={s.container}>{messages}</div>;
};
