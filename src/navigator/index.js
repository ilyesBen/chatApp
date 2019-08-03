import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'screens/home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default AppNavigator;
