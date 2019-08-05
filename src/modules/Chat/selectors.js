import { createSelector } from 'reselect';

const chatSate = state => state.Chat;

const currentUser = {
  id: 99,
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
    return messages.reduce((acc, message) => {
      const { authorId, receiverId } = message;
      return (authorId === userId && receiverId === currentUser.id) ||
        (authorId === currentUser.id && receiverId === userId)
        ? [
            ...acc,
            {
              ...message,
              user: {
                _id: users[authorId].id,
                name: users[authorId].name,
                avatar: users[authorId].avatar,
              },
            },
          ]
        : acc;
    }, []);
  }
);

export const selectUsers = createSelector(
  chatSate,
  state => Object.values(state.users).filter(user => user.id !== currentUser.id)
);
