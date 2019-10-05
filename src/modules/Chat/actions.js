import * as api from 'api';
import { currentUser } from 'constants';
import actionTypes from './actionTypes';

const getUsersLoad = () => ({ type: actionTypes.GET_USERS_LOAD });

const getUsersSuccess = users => ({ payload: { users }, type: actionTypes.GET_USERS_SUCCESS });

const getMessagesLoad = () => ({ type: actionTypes.GET_MESSAGES_LOAD });

const getMessagesSuccess = messages => ({
  payload: { messages },
  type: actionTypes.GET_MESSAGES_SUCCESS,
});

const setMessage = (message, receiverId) => ({
  payload: { message, receiverId },
  type: actionTypes.SEND_MESSAGE,
});

export const getUsers = () => async dispatch => {
  dispatch(getUsersLoad());
  try {
    const users = await api.getUsers();
    const usersToSet = users.reduce(
      (acc, user) => ({
        ...acc,
        [user.id]: user,
      }),
      {}
    );
    dispatch(getUsersSuccess(usersToSet));
  } catch (e) {
    // Error handling needed
    console.log('error ', e);
  }
};

export const getAllMessages = () => async dispatch => {
  dispatch(getMessagesLoad());
  try {
    const messages = await api.getMessages(currentUser.id);
    console.log('messages  ', messages);
    const messagesToSet = messages.reduce((acc, message) => {
      const { receiverId, authorId, text, createdAt, id } = message;
      const userId = authorId === currentUser.id ? receiverId : authorId;
      return {
        ...acc,
        [userId]: [
          ...(acc[userId] || []),
          {
            id,
            text,
            createdAt,
            receiverId,
            authorId,
          },
        ],
      };
    }, {});
    dispatch(getMessagesSuccess(messagesToSet));
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

  console.log('message ', message);
  console.log('messageRest ', { authorId, receiverId, ...messageRest });

  try {
    const messageResponse = await api.sendMessage({
      id: _id,
      authorId,
      receiverId,
      ...messageRest,
    });
    console.log('messageResponse ', messageResponse);
    dispatch(setMessage(messageResponse, receiverId));
  } catch (e) {
    // Error handling needed
    console.log('error sendMessage', e);
  }
};
