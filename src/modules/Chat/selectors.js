import { createSelector } from 'reselect';

const chatSate = state => state.Chat;

export const selectMessages = createSelector(
  chatSate,
  state => state.messages
);
