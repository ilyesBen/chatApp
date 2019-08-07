import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from 'store';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import AppNavigator from './navigator';
import config from '../aws-exports';

API.configure(config); // Configure Amplify
PubSub.configure(config);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
