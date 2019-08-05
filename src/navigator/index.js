import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginScreen from 'screens/login';
import ChatScreen from 'screens/chat';
import UsersListScreen from 'screens/users';
import ConvsListScreen from 'screens/conversations';

const ChatStackNavigator = createStackNavigator(
  {
    ConvsList: { screen: ConvsListScreen },
    Chat: ChatScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => navigation.state.index > 0 && { tabBarVisible: false },
  }
);

const HomeTabNavigator = createBottomTabNavigator({
  Chat: ChatStackNavigator,
  Users: UsersListScreen,
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