import React from 'react';
import 'react-native-gesture-handler';
import AuthStack from './src/navigations/AuthStackNavigation';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MypageTop from './src/navigations/MypageTopNavigation';
import PickStack from './src/navigations/PickStackNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {/* <AuthStack /> */}
        <PickStack />
      </NavigationContainer>
    </>
  );
};

export default App;
