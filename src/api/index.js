import API, { graphqlOperation } from '@aws-amplify/api';

import * as queries from 'graphqlApi/queries';
import * as mutations from 'graphqlApi/mutations';
// import * as subscriptions from 'graphqlApi/subscriptions';

export const getUsers = async () => {
  const response = await API.graphql(graphqlOperation(queries.listUsers));
  return response.data.listUsers.items;
};

export const getMessages = async currentUserId => {
  const response = await API.graphql(
    graphqlOperation(queries.listMessages, {
      filter: { or: [{ authorId: { eq: currentUserId } }, { receiverId: { eq: currentUserId } }] },
      limit: 100,
    })
  );
  return response.data.listMessages.items;
};

export const sendMessage = async message => {
  const response = await API.graphql(graphqlOperation(mutations.createMessage, { input: message }));
  return response.data.createMessage;
};
