import React, {PureComponent} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './BottomNavigation';
import SignStack from './SignStackNavigation';
import AuthCheck from '../screens/AuthCheck';

const Stack = createStackNavigator();

class AuthStack extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="Auth" component={AuthCheck} />
        <Stack.Screen name="Sign" component={SignStack} />
        <Stack.Screen name="Main" component={MainStack} />
      </Stack.Navigator>
    );
  }
}
export default AuthStack;
