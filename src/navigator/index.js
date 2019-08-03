import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginScreen from 'screens/login';
import ChatScreen from 'screens/chat';
import UsersScreen from 'screens/users';

const HomeTabNavigator = createBottomTabNavigator({
  Chat: ChatScreen,
  Users: UsersScreen,
});

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeTabNavigator,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
