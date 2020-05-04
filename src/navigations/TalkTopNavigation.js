import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Talk from '../screens/TalkScreen';
import Post from '../screens/PostScreen';
const Tab = createMaterialTopTabNavigator();

function TalkTop() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#32cc73',
        inactiveTintColor: 'gray',
        indicatorStyle: {
          backgroundColor: '#32cc73',
          height: 5,
          top: 45.5,
        },
      }}>
      <Tab.Screen name="수다톡" component={Talk} />
      <Tab.Screen name="포스팅" component={Post} />
    </Tab.Navigator>
  );
}

export default TalkTop;
