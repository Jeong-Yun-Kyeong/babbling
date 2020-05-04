import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import EvaluationGroup from '../screens/EvaluationGroupScreen';
import MyPosting from '../screens/MyPostingScreen';
import MyTalk from '../screens/MyTalkScreen';
const Tab = createMaterialTopTabNavigator();

function ScrapTop() {
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
      <Tab.Screen name="포스팅" component={MyPosting} />
      <Tab.Screen name="수다톡" component={MyTalk} />
    </Tab.Navigator>
  );
}

export default ScrapTop;
