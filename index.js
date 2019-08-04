import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  // generated by chat-gifted module. Still using componentWillMount and componentWillReceiveProps
  'Warning: componentWillMount is deprecated and will be removed in the next major version. Use componentDidMount instead. As a temporary workaround, you can rename to UNSAFE_componentWillMount.',
  'Warning: componentWillReceiveProps is deprecated and will be removed in the next major version. Use static getDerivedStateFromProps instead.',

  // when remote debugger is active
  'Remote debugger',
]);

AppRegistry.registerComponent(appName, () => App);
