import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CategoryScreen from '../../screens/CategoryScreen';

const Tab = createMaterialTopTabNavigator();

function BabyFood() {
  return (
    <Tab.Navigator tabBarOptions={{scrollEnabled: true}}>
      <Tab.Screen name="수제/배달" component={CategoryScreen} />
      <Tab.Screen name="반고형" component={CategoryScreen} />
      <Tab.Screen name="레토르트(면/국수)" component={CategoryScreen} />
      <Tab.Screen name="분말" component={CategoryScreen} />
      <Tab.Screen name="액상" component={CategoryScreen} />
    </Tab.Navigator>
  );
}

export default BabyFood;
