import API, { graphqlOperation } from '@aws-amplify/api';

import * as queries from 'graphqlApi/queries';
import * as mutations from 'graphqlApi/mutations';
import * as subscriptions from 'graphqlApi/subscriptions';

export const getUsers = async () => {
  try {
    const response = await API.graphql(graphqlOperation(queries.listUsers));
    return response.data.listUsers.items;
  } catch {
    //
  }
};
