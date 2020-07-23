import React, {PureComponent} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './BottomNavigation';
import SignStack from './SignStackNavigation';
import AsyncStorage from '@react-native-community/async-storage';
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
        <Stack.Screen name="LoginMain" component={SignStack} />
        <Stack.Screen name="Main" component={Header} />
      </Stack.Navigator>
    );
  }
}
export default AuthStack;
