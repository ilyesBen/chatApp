import actionTypes from './actionTypes';

const initialState = {
  messages: [],
  users: {},
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return { ...state, messages: [action.payload.message, ...state.messages] };
    case actionTypes.SET_USERS:
      return { ...state, users: { ...state.users, ...action.payload.users } };
    case actionTypes.SET_MESSAGES:
      return { ...state, messages: [...state.messages, ...action.payload.messages] };
    default:
      return state;
  }
};

export default chatReducer;
