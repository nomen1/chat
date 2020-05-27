import React from "react";
import s from "./ChatFooter.module.css";
import { useState } from "react";

export const ChatFooter = (props) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const handleSetValue = (value) => {
    setTextAreaValue(value);
  };
  const handleSendMessage = (message) => {
    if (message !== "" && message !== " ") {
      props.sendMessage(message, props.chat.id);
      setTextAreaValue("");
      props.receiveMessage(props.chat.id, props.chat.name);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.createMessageAreaWrap}>
        <textarea
          onChange={(e) => {
            handleSetValue(e.target.value);
          }}
          className={s.createMessageArea}
          value={textAreaValue}
          placeholder="Type your message"
        ></textarea>
        <div
          onClick={() => {
            handleSendMessage(textAreaValue);
          }}
          className={s.sendBtn}
        ></div>
      </div>
    </div>
  );
};
