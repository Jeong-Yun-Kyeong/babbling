import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CategoryScreen from '../../screens/CategoryScreen';

const Tab = createMaterialTopTabNavigator();

function Snack() {
  return (
    <Tab.Navigator tabBarOptions={{scrollEnabled: true}}>
      <Tab.Screen name="쌀과자,떡뻥" component={CategoryScreen} />
      <Tab.Screen name="곡물과자" component={CategoryScreen} />
      <Tab.Screen name="과일칩,과자" component={CategoryScreen} />
      <Tab.Screen name="씨리얼,퍼프" component={CategoryScreen} />
      <Tab.Screen name="퓨레,푸딩" component={CategoryScreen} />
      <Tab.Screen name="사탕,젤리" component={CategoryScreen} />
      <Tab.Screen name="기타" component={CategoryScreen} />
    </Tab.Navigator>
  );
}

export default Snack;
