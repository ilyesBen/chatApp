import { createSelector } from 'reselect';
import { sortByDate } from 'utils/arrays';

const chatSate = state => state.Chat;

const currentUser = {
  id: '99',
};

export const selectMessages = createSelector(
  [
    chatSate,
    (state, userId) => ({
      userId,
    }),
  ],
  (state, { userId }) => {
    const { users, messages } = state;
    const messagesToDisplay = messages.reduce((acc, message) => {
      const { authorId, receiverId } = message;
      const { id, ...messageRest } = message;
      return (authorId === userId && receiverId === currentUser.id) ||
        (authorId === currentUser.id && receiverId === userId)
        ? [
            ...acc,
            {
              _id: id,
              ...messageRest,
              user: {
                _id: users[authorId].id,
                name: users[authorId].name,
                avatar: users[authorId].avatar,
              },
            },
          ]
        : acc;
    }, []);
    console.log('sortByDate(messagesToDisplay)', sortByDate(messagesToDisplay));
    return sortByDate(messagesToDisplay);
  }
);

export const selectUsers = createSelector(
  chatSate,
  state => Object.values(state.users).filter(user => user.id !== currentUser.id)
);
