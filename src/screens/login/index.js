import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Item, Input, Title, Body, Button, Text } from 'native-base';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import theme from 'config/theme';
import Auth from '@aws-amplify/auth';

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

const login = (username, password) => {
  Auth.signIn({
    username, // Required, the username
    password, // Optional, the password
  })
    .then(user => console.log('user ', user))
    .catch(err => console.log('error', err));
};

const LoginScreen = ({ navigation }) => {
  // console.log('subscription ', subscription);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Header style={styles.header}>
        <Body>
          <Title>Chat App</Title>
        </Body>
      </Header>
      <KeyboardAvoidingView flex={1} keyboardVerticalOffset={20} behavior="padding">
        <Container style={styles.formContainer}>
          <Item style={styles.emailInput}>
            <Input placeholder="Username" onChangeText={text => setUsername(text)} />
          </Item>
          <Item style={styles.passwordInput}>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
          </Item>
          <Button style={styles.button} onPress={() => login(username, password)}>
            <Body>
              <Text>Log in</Text>
            </Body>
          </Button>
          <Button transparent onPress={() => navigation.navigate('SignUp')}>
            <Body>
              <Text>Sign Up</Text>
            </Body>
          </Button>
        </Container>
      </KeyboardAvoidingView>
    </Container>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LoginScreen;
