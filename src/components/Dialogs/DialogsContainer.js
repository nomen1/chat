import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs:state.app.dialogs
  };
};


export const DialogsContainer =  connect(mapStateToProps)(Dialogs);