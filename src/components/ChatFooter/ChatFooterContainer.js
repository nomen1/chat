import { connect } from "react-redux";
import {ChatFooter} from "./ChatFooter";
import {sendMessageAC, receiveMessageTC} from "./../../redux/appReducer"
  
  const mapDispatchToProps = (dispatch) => {
    return {
      sendMessage: (message, id) => {
        dispatch(sendMessageAC(message, id));
      },
      receiveMessage: (id, sender) =>{
        dispatch(receiveMessageTC(id, sender));
      }
    };
  };
  
  export const ChatFooterContainer = connect(null, mapDispatchToProps)(ChatFooter);



