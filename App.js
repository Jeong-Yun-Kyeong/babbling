import React from 'react';
import 'react-native-gesture-handler';
import AuthStack from './src/navigations/AuthStackNavigation';
// import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthStack />
      {/* <Settings /> */}
    </>
  );
};

export default App;
