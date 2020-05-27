import React from "react";
import s from "./Message.module.css";

export const Message = (props) => {
  return (
    <div
      className={
        s.message +
        " " +
        (props.messageInfo.sender === "me" ? s.messageOut : s.messageIn)
      }
    >
      {props.messageInfo.sender !== "me" && (
        <div className={s.dialogPhoto}>
          <div
            style={{
              backgroundImage: `url(${props.dialogPhoto})`
            }}
            class={s.dialogPhotoContent}
          ></div>
        </div>
      )}
      <div className={s.messageContent}>
        <div className={s.messageText}>{props.messageInfo.messageText}</div>
        <div className={s.messageDate}>{props.messageInfo.date}</div>
      </div>
    </div>
  );
};
