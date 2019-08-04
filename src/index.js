import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from 'store';
import AppNavigator from './navigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
