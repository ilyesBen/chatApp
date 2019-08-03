import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
