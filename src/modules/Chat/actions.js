import * as api from 'api';
import actionTypes from './actionTypes';

const setMessages = message => ({ payload: { message }, type: actionTypes.SEND_MESSAGE });
const setUsers = users => ({ payload: { users }, type: actionTypes.SET_USERS });

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
  } catch {
    // Error handling needed
  }
};

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
