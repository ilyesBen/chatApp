import actionTypes from './actionTypes';

const initialState = {
  // test data. TO BE REMOVED
  messages: [
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ],
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return { ...state, messages: [...action.payload.messages, ...state.messages] };
    default:
      return state;
  }
};

export default chatReducer;
