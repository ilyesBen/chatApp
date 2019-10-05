import actionTypes from './actionTypes';

const initialState = {
  messages: {
    list: {},
    loading: false,
    error: '',
  },
  users: {
    list: {},
    loading: false,
    error: '',
  },
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          list: {
            ...state.messages.list,
            [action.payload.receiverId]: [
              ...(state.messages.list[action.payload.receiverId] || []),
              action.payload.message,
            ],
          },
        },
      };
    case actionTypes.GET_USERS_LOAD:
      return {
        ...state,
        users: { ...state.users, loading: true },
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          list: { ...state.users.list, ...action.payload.users },
        },
      };
    case actionTypes.GET_MESSAGES_LOAD:
      return {
        ...state,
        messages: { ...state.messages, loading: true },
      };
    case actionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: {
          ...state.messages,
          loading: false,
          list: { ...state.messages.list, ...action.payload.messages },
        },
      };
    default:
      return state;
  }
};

export default chatReducer;
