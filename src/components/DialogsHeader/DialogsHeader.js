import React from "react";
import userPhoto from "./../../img/user.jpeg";
import s from "./DialogsHeader.module.css";

export const DialogsHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.userPhoto}>
          <img className={s.userPhotoImg} src={userPhoto} alt = "userPhoto"></img>
        </div>
        <div className={s.search}>
          <input
            className={s.searchInput}
            placeholder="Search or start new chat"
          ></input>
        </div>
      </div>
    </div>
  );
};
