/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageByAuthorId = `subscription OnCreateMessageByAuthorId($authorId: ID!) {
  onCreateMessageByAuthorId(authorId: $authorId) {
    id
    text
    authorId
    receiverId
    createdAt
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name
    avatar
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    name
    avatar
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    name
    avatar
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
    id
    text
    authorId
    receiverId
    createdAt
  }
}
`;
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
    id
    text
    authorId
    receiverId
    createdAt
  }
}
`;
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
    id
    text
    authorId
    receiverId
    createdAt
  }
}
`;
