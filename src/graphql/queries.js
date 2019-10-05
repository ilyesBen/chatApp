/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    avatar
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      avatar
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!, $createdAt: AWSDateTime!) {
  getMessage(id: $id, createdAt: $createdAt) {
    id
    text
    authorId
    receiverId
    createdAt
  }
}
`;
export const listMessages = `query ListMessages(
  $id: ID
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMessages(
    id: $id
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      text
      authorId
      receiverId
      createdAt
    }
    nextToken
  }
}
`;
