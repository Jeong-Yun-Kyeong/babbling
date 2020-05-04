import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

// import Login from '../screens/LoginScreen';
import Header from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SignStack from './SignStackNavigation';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={SignStack} />
        <Stack.Screen name="Main" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
