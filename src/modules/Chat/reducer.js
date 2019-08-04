import actionTypes from './actionTypes';

// test data. TO BE REMOVED
const dummyMessages = [
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
];

const dummyUsers = [
  {
    id: 1,
    name: 'React Native',
    avatar: 'https://miro.medium.com/max/2400/1*y6C4nSvy2Woe0m7bWEn4BA.png',
  },
  {
    id: 2,
    name: 'Ilyes Ben',
    avatar: 'https://img.bfmtv.com/c/1000/600/bcd/e29aa26799b117643a786cd5eab95.jpeg',
  },
  { id: 3, name: '3ngrouch bel3abou', avatar: 'https://i.ytimg.com/vi/jYFZbUcHP_A/hqdefault.jpg' },
  { id: 4, name: 'Sofiane Lemkawad', avatar: 'https://i.ytimg.com/vi/lUwzmrDN_Zo/hqdefault.jpg' },
];

const initialState = {
  messages: dummyMessages,
  users: dummyUsers,
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
