import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";


export const Dialog = (props) => {
  const lastMessage =
    props.dialog.messageHistory[props.dialog.messageHistory.length - 1];
    const date = lastMessage.date.split(",")[0]

  return (
    <div className={s.dialogContainer}>

<NavLink  to={"/" + props.dialog.id} className = {s.dialog}>


      
        <div className={s.dialogPhoto}>
          <div
            style={{
              backgroundImage: `url(${props.dialog.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            class={s.dialogPhotoContent}
            src={props.dialog.img}
          ></div>
        </div>
        <div className={s.messageContent}>
          <span class={s.dialogName}>{props.dialog.name}</span>
          <div class={s.dialogMessageText}>{lastMessage.messageText}</div>
        </div>
        <div className={s.dialogDate}>{date}</div>
      
      </NavLink>
    </div>
  );
};
