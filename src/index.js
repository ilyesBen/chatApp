import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import Auth from '@aws-amplify/auth';
import AppNavigator from './navigator';
import config from '../aws-exports';

// **** Amplify Config ***** //
API.configure(config);
PubSub.configure(config);
Auth.configure(config);
// ************************ //

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
