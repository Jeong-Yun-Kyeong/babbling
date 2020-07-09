import React from 'react';
import 'react-native-gesture-handler';
import AuthStack from './src/navigations/AuthStackNavigation';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigations/HomeNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {/* <AuthStack /> */}
        {/* <PickStack /> */}
        <HomeStack />
      </NavigationContainer>
    </>
  );
};

export default App;
