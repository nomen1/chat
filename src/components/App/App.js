import React from "react";
import { DialogsContainer } from "./../Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import ChatContainer from "./../Chat/ChatContainer";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <DialogsContainer />
      <Route exact path="/:dialogId?" render={() => <ChatContainer />} />
    </div>
  );
};


