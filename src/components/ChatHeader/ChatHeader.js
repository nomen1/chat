import React from "react";
import s from "./ChatHeader.module.css";

const ChatHeader = (props) => {
  return (
    <div className={s.chatHeaderContainer}>
      <div className={s.dialogPhoto}>
        <div
          className={s.dialogPhotoContent}
          style={{
            backgroundImage: `url(${props.chat.img})`
          }}
          src={props.chat.img}
        ></div>
      </div>

      <div className={s.dialogName}>{props.chat.name}</div>
    </div>
  );
};

export default ChatHeader;
