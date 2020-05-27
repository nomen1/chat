import React from "react";
import { Dialog } from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import { DialogsHeader } from "./../DialogsHeader/DialogsHeader";

const Dialogs = (props) => {
  let dialogs = props.dialogs.map((item) => {
    return <Dialog dialog={item} />;
  });

  return (
    <div className={s.dialogs}>
      <DialogsHeader />
      <div className={s.container}>{dialogs}</div>
    </div>
  );
};

export default Dialogs;