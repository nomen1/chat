import React from "react";
import userPhoto from "./../../img/user.jpeg";
import s from "./DialogsHeader.module.css";

export const DialogsHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div class={s.userPhoto}>
          <img class={s.userPhotoImg} src={userPhoto}></img>
        </div>
        <div class={s.search}>
          <input
            className={s.searchInput}
            placeholder="Search or start new chat"
          ></input>
        </div>
      </div>
    </div>
  );
};
