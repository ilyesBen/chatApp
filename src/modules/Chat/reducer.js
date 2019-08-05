import actionTypes from './actionTypes';
import { dummyMessages } from './dummyMessages';

// test Data. TO BE Removed
const dummyUsers = {
  1: {
    id: 1,
    name: 'React Native',
    avatar: 'https://miro.medium.com/max/2400/1*y6C4nSvy2Woe0m7bWEn4BA.png',
  },
  2: {
    id: 2,
    name: 'Ilyes Ben',
    avatar: 'https://img.bfmtv.com/c/1000/600/bcd/e29aa26799b117643a786cd5eab95.jpeg',
  },
  3: {
    id: 3,
    name: '3ngrouch bel3abou',
    avatar: 'https://i.ytimg.com/vi/jYFZbUcHP_A/hqdefault.jpg',
  },
  4: {
    id: 4,
    name: 'Sofiane Lemkawad',
    avatar: 'https://i.ytimg.com/vi/lUwzmrDN_Zo/hqdefault.jpg',
  },

  // Current user
  99: {
    id: 99,
    name: 'Ana Houwa',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGqKkt_LRV7co8maLFEvlOH-WzjZriCr6IVqnB4LFTtzvS9Om',
  },
};

const initialState = {
  messages: dummyMessages,
  users: dummyUsers,
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return { ...state, messages: [action.payload.message, ...state.messages] };
    default:
      return state;
  }
};

export default chatReducer;
