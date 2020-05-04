import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Event from '../screens/EventScreen';
import EvaluationGroup from '../screens/EvaluationGroupScreen';
import UserLog from '../screens/UserLogScreen';
import JjimList from '../screens/JjimListScreen';
import News from '../screens/NewsScreen';
const Tab = createMaterialTopTabNavigator();

function MypageTop() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        indicatorStyle: {
          backgroundColor: '#32cc73',
          height: 5,
          top: 45.5,
        },
      }}>
      <Tab.Screen name="사용로그" component={UserLog} />
      <Tab.Screen name="찜목록" component={JjimList} />
      <Tab.Screen name="소식받기" component={News} />
    </Tab.Navigator>
  );
}

export default MypageTop;
