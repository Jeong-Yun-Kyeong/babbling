import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './BottomNavigation';
import SignStack from './SignStackNavigation';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={SignStack} />
      <Stack.Screen name="Main" component={Header} />
    </Stack.Navigator>
  );
};

export default AuthStack;
