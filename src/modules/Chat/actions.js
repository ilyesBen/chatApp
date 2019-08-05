import actionTypes from './actionTypes';

const setMessages = message => ({ payload: { message }, type: actionTypes.SEND_MESSAGE });

export const sendMessage = (message, receiverId) => dispatch => {
  const {
    user: { _id: id },
  } = message;
  dispatch(
    setMessages({
      ...message,
      authorId: id,
      receiverId,
    })
  );
};
