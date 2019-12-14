import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Item,
  Input,
  Title,
  Body,
  Button,
  Text,
  Left,
  Icon,
  Right,
} from 'native-base';
import Auth from '@aws-amplify/auth';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import theme from 'config/theme';

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    backgroundColor: theme.primary,
  },
  emailInput: {
    marginBottom: 10,
  },
  passwordInput: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

// // After retrieving the confirmation code from the user
// Auth.confirmSignUp(username, code, {
//   // Optional. Force user confirmation irrespective of existing alias. By default set to True.
//   forceAliasCreation: true,
// })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Auth.resendSignUp(username)
//   .then(() => {
//     console.log('code resent successfully');
//   })
//   .catch(e => {
//     console.log(e);
//   });

const signUp = (username, password, attributes) => {
  const { email } = attributes;
  Auth.signUp({
    username,
    password,
    autoConfirmUser: true,
    attributes: {
      email,
    },
  })
    .then(data => console.log('data', data))
    .catch(err => console.log('error', err));
};

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Chat App</Title>
        </Body>
        <Right />
      </Header>
      <KeyboardAvoidingView flex={1} keyboardVerticalOffset={20} behavior="padding">
        <Container style={styles.formContainer}>
          <Item style={styles.emailInput}>
            <Input placeholder="Username" onChangeText={text => setUsername(text)} />
          </Item>
          <Item style={styles.emailInput}>
            <Input placeholder="Email" onChangeText={text => setEmail(text)} />
          </Item>
          <Item style={styles.passwordInput}>
            <Input
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </Item>
          <Button style={styles.button} onPress={() => signUp(username, password, { email })}>
            <Body>
              <Text>Sign up</Text>
            </Body>
          </Button>
        </Container>
      </KeyboardAvoidingView>
    </Container>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SignUpScreen;
