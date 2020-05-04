import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import RealTimeSearch from '../screens/RealTimeSearchScreen';
import RecentSearch from '../screens/RecentSearchScreen';
const Tab = createMaterialTopTabNavigator();

function HomeSearchTop() {
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
      <Tab.Screen name="실시간 인기 검색어" component={RealTimeSearch} />
      <Tab.Screen name="최근 검색 내역" component={RecentSearch} />
    </Tab.Navigator>
  );
}

export default HomeSearchTop;
