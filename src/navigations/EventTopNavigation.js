import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Event from '../screens/EventScreen';
import EvaluationGroup from '../screens/EvaluationGroupScreen';
const Tab = createMaterialTopTabNavigator();

function EventTop() {
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
      <Tab.Screen name="이벤트" component={Event} />
      <Tab.Screen name="평가단" component={EvaluationGroup} />
    </Tab.Navigator>
  );
}

export default EventTop;
