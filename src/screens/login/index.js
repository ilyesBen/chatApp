import React from 'react';
import { View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createUser, createMessage } from 'graphqlApi/mutations';
import { listUsers } from 'graphqlApi/queries';
// import * as subscriptions from 'graphqlApi/subscriptions';

// test mutation
const createNewUser = async () => {
  const user = {
    name: 'React Native',
    id: 10909,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGqKkt_LRV7co8maLFEvlOH-WzjZriCr6IVqnB4LFTtzvS9Om',
  };

  await API.graphql(graphqlOperation(createUser, { input: user }));
};

const createNewMessage = async () => {
  const message = {
    id: '830912830210332323',
    text: 'ca va chwiya ?',
    authorId: '10',
    receiverId: '99',
    createdAt: new Date(),
  };

  const responseMessage = await API.graphql(graphqlOperation(createMessage, { input: message }));
  console.log('Message succesfuly created ', responseMessage);
};

// test queries
const getUsers = async () => {
  const users = await API.graphql(graphqlOperation(listUsers));
  console.log('users ', users);
};

const LoginScreen = () => {
  // test subscription
  // const subscription = API.graphql(
  //   graphqlOperation(subscriptions.onCreateMessageByAuthorId, { authorId: '7' })
  // ).subscribe({
  //   next: eventData => console.log('event from subscription ', eventData),
  // });

  // console.log('subscription ', subscription);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={createNewUser} title="Test graphQl Create User" />
      <Button onPress={getUsers} title="Test graphQl list Users" />
      <Button onPress={createNewMessage} title="Test graphQl create message" />
    </View>
  );
};

export default LoginScreen;
