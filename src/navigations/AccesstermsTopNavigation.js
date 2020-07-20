import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Acessterms from '../screens/AccesstermsScreen';
import PersonalDatapolicies from '../screens/PersonalDatapoliciesScreen';
const Tab = createMaterialTopTabNavigator();

function AccesstermsTop() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black87',
        inactiveTintColor: 'gray',
        indicatorStyle: {
          backgroundColor: '#32cc73',
          height: 5,
          top: 45.5,
        },
      }}>
      <Tab.Screen name="이용약관" component={Acessterms} />
      <Tab.Screen name="개인정보 처리방침" component={PersonalDatapolicies} />
    </Tab.Navigator>
  );
}

export default AccesstermsTop;
