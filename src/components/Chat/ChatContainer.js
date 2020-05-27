import React from "react";
import Chat from "./Chat";
import s from "./Chat.module.css";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getChatTC } from "./../../redux/appReducer";

const ChatContainer = (props) => {
  const { dialogId } = useParams();

  useEffect(() => {
    dialogId !== undefined && props.getChat(dialogId);
  }, [dialogId]);

  return dialogId !== undefined ? (
    <Chat chat={props.chat} />
  ) : (
    <div class={s.selectDialog}> Please, select dialog.</div>
  );
};

const mapStateToProps = (state) => {
  return {
    chat: state.app.chat
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChat: (id) => {
      dispatch(getChatTC(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
