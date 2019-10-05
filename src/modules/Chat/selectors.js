import { createSelector } from 'reselect';
import { sortByDate } from 'utils/arrays';
import { currentUser } from 'constants';

const chatSate = state => state.Chat;

export const selectMessagesLoading = createSelector(
  chatSate,
  state => state.messages.loading
);

export const selectUsersLoading = createSelector(
  chatSate,
  state => state.users.loading
);

export const selectMessages = createSelector(
  [
    chatSate,
    (state, userId) => ({
      userId,
    }),
  ],
  (state, { userId }) => {
    const { users, messages } = state;

    if (!messages.list[userId]) return [];

    const messagesToDisplay = messages.list[userId].map(message => ({
      ...message,
      _id: message.id,
      user: {
        ...users.list[message.authorId],
        _id: message.authorId,
      },
    }));
    return sortByDate(messagesToDisplay);
  }
);

export const selectUsers = createSelector(
  chatSate,
  state => Object.values(state.users.list).filter(user => user.id !== currentUser.id)
);

export const selectUsersWithLastMessage = createSelector(
  chatSate,
  state => {
    const { messages, users } = state;
    if (!Object.keys(users.list).length || !Object.keys(messages.list).length) return [];
    return Object.keys(messages.list).map(userId => ({
      lastMessage: sortByDate(messages.list[userId])[0],
      name: users.list[userId].name,
      avatar: users.list[userId].avatar,
      id: userId,
    }));
  }
);
