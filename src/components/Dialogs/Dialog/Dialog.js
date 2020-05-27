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
            className={s.dialogPhotoContent}
            
          ></div>
        </div>
        <div className={s.messageContent}>
          <span className={s.dialogName}>{props.dialog.name}</span>
          <div className={s.dialogMessageText}>{lastMessage.messageText}</div>
        </div>
        <div className={s.dialogDate}>{date}</div>
      
      </NavLink>
    </div>
  );
};
