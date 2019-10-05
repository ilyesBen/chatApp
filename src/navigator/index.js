import React from 'react';
import {
  SafeAreaView,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import LoginScreen from 'screens/login';
import ChatScreen from 'screens/chat';
import UsersListScreen from 'screens/users';
import ConvsListScreen from 'screens/conversations';
import theme from 'config/theme';
import { Icons } from 'components';

const HomeTabNavigator = createBottomTabNavigator(
  {
    ConvsList: {
      screen: ConvsListScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => (
          <Icons.Chat color={focused ? theme.secondary : theme.disabled} />
        ),
      },
    },
    Users: {
      screen: UsersListScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => (
          <Icons.Users color={focused ? theme.secondary : theme.disabled} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    ChatUserTab: HomeTabNavigator,
    Chat: ChatScreen,
  },
  {
    headerMode: 'none',
  }
);

const Screens = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeStackNavigator,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(Screens);

const AppNavigator = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ bottom: 'never' }}
      backgroundColor={theme.primary}
    >
      <AppContainer />
    </SafeAreaView>
  );
};

export default AppNavigator;
