import * as api from 'api';
import actionTypes from './actionTypes';

const currentUser = {
  id: '99',
};

const setMessage = message => ({ payload: { message }, type: actionTypes.SEND_MESSAGE });
const setUsers = users => ({ payload: { users }, type: actionTypes.SET_USERS });
const setMessages = messages => ({ payload: { messages }, type: actionTypes.SET_MESSAGES });

export const getUsers = () => async dispatch => {
  try {
    const users = await api.getUsers();
    const usersToSet = users.reduce(
      (acc, user) => ({
        ...acc,
        [user.id]: user,
      }),
      {}
    );
    dispatch(setUsers(usersToSet));
  } catch (e) {
    // Error handling needed
    console.log('error ', e);
  }
};

export const getAllMessages = () => async dispatch => {
  try {
    const messages = await api.getMessages(currentUser.id);
    console.log('messages ', messages);
    dispatch(setMessages(messages));
  } catch (e) {
    // Error handling needed
    console.log('error ', e);
  }
};

export const sendMessage = (message, receiverId) => async dispatch => {
  const {
    _id,
    user: { _id: authorId },
    ...messageRest
  } = message;

  try {
    const messageResponse = await api.sendMessage({
      authorId,
      receiverId,
      ...messageRest,
    });
    dispatch(setMessage(messageResponse));
  } catch (e) {
    // Error handling needed
    console.log('error sendMessage', e);
  }
};
