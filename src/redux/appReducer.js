import { messagesAPI } from "../api";
import moment from "moment";
const SET_CHAT = "SET_CHAT";
const SEND_MESSAGE = "SEND_MESSAGE";
const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const initialState = {
  dialogs: [
    {
      id: "1",
      name: "Velazquez",
      img:
        "https://www.pnp.ru/upload/entities/2017/12/04/article/detailPicture/16/0e/06/22/19de7995e55dc70227809059f9b31bd5.jpg",
      messageHistory: [
        {
          date: "May 27th 2020, 11:38:50 am",
          sender: "Velazquez",
          messageText: "How are you?"
        }
      ]
    },
    {
      id: "2",
      name: "Josefina",
      img:
        "https://www.aimwomenscenter.com/wp-content/uploads/2014/04/opening-image.jpg",
      messageHistory: [
        {
          date: "May 27th 2020, 11:38:50 am",
          sender: "Josefina",
          messageText: "Lorem Ipsum."
        }
      ]
    },
    {
      id: "3",
      name: "Jack",
      img: "https://glavcom.ua/img/article/6795/60_main.jpg",
      messageHistory: [
        {
          date: "May 27th 2020, 11:38:50 am",
          sender: "Josefina",
          messageText: "Lorem Ipsum."
        }
      ]
    },
    {
      id: "4",
      name: "Josefina",
      img:
        "https://avatars.mds.yandex.net/get-zen_doc/1546191/pub_5d973d6992414d00b1d73365_5d973dc6ba281e00af415e69/scale_1200",
      messageHistory: [
        {
          date: "May 27th 2020, 11:38:50 am",
          sender: "Josefina",
          messageText: "Lorem Ipsum."
        },
        {
          date: "May 28th 2020, 11:38:50 am",
          sender: "me",
          messageText: "Hi!!"
        }
      ]
    }
  ],
  chat: null
};

export const setChatAC = (chat) => {
  return {
    type: SET_CHAT,
    chat
  };
};

export const sendMessageAC = (message, id) => {
  return {
    type: SEND_MESSAGE,
    message,
    id
  };
};

export let getChatTC = (id) => {
  return (dispatch, state) => {
    const chat = state().app.dialogs.find((item) => {

      return item.id === id;
    });

    dispatch(setChatAC(chat));
  };
};

export const receiveMessageAC = (id, sender, message) => {
  return {
    type: RECEIVE_MESSAGE,
    id,
    sender,
    message,
    date: moment().format("MMMM Do YYYY, h:mm:ss a")
  };
};

export const receiveMessageTC = (id, sender) => {
  return async (dispatch) => {
    let response = await messagesAPI.getRandomJoke();

    if (response.status === 200) {
      dispatch(receiveMessageAC(id, sender, response.data.value));
    }
  };
};










const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT:
      return {
        ...state,
        chat: action.chat
      };

    case RECEIVE_MESSAGE: {
      const message = {
        date: action.date,
        sender: action.sender,
        messageText: action.message
      };

      return {
        chat: { ...state.chat },
        dialogs: state.dialogs.map((item) => {
          if (item.id === action.id) {
            item.messageHistory.push(message);

            return { ...item };
          } else {
            return item;
          }
        })
      };
    }

    case SEND_MESSAGE:
      const message = {
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        sender: "me",
        messageText: action.message
      };

      return {
        chat: { ...state.chat },
        dialogs: state.dialogs.map((item) => {
          if (item.id === action.id) {
            item.messageHistory.push(message);

            return { ...item };
          } else {
            return item;
          }
        })
      };

    default:
      return state;
  }
};

export default cartReducer;
