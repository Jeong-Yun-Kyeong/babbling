import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CategoryScreen from '../../screens/CategoryScreen';

const Tab = createMaterialTopTabNavigator();

function Snack() {
  return (
    <Tab.Navigator tabBarOptions={{scrollEnabled: true}}>
      <Tab.Screen name="우유" component={CategoryScreen} />
      <Tab.Screen name="치즈" component={CategoryScreen} />
      <Tab.Screen name="요구르트" component={CategoryScreen} />
    </Tab.Navigator>
  );
}

export default Snack;
