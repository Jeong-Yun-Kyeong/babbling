import React from 'react';
import 'react-native-gesture-handler';
import AuthStack from './src/navigations/AuthStackNavigation';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import EventStack from './src/navigations/EventStackNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AuthStack />
        {/* <EventStack /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
