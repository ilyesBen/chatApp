import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginScreen from 'screens/login';
import ChatScreen from 'screens/chat';
import UsersListScreen from 'screens/users';
import ConvsListScreen from 'screens/conversations';

const HomeTabNavigator = createBottomTabNavigator({
  ConvsList: ConvsListScreen,
  Users: UsersListScreen,
});

const HomeStackNavigator = createStackNavigator(
  {
    ChatUserTab: HomeTabNavigator,
    Chat: ChatScreen,
  },
  {
    headerMode: 'none',
  }
);

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeStackNavigator,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default AppNavigator;
