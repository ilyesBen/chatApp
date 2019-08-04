import actionTypes from './actionTypes';

const setMessages = messages => ({ payload: { messages }, type: actionTypes.SEND_MESSAGE });

export const sendMessage = messages => dispatch => {
  dispatch(setMessages(messages));
};
