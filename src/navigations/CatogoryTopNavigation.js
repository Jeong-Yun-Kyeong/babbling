import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CategoryScreen from '../screens/CategoryScreen';
import PowderedMilk from '../navigations/category/PowderedMilkTopTabNavigation';
import BabyFood from '../navigations/category/BabyFoodTopTabNavigation';
import Snack from '../navigations/category/SnackTopTabNavigation';
import DiaryProduct from '../navigations/category/DairyProductTopTabNavigation';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

const Tab = createMaterialTopTabNavigator();
const Icon = (svg, label) => {
  return {
    tabBarLabel: ({focused, color}) => {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <SvgXml xml={focused ? SVG(svg) : SVG(svg + '_GRAY')} />
          <Text style={{fontWeight: '500', fontSize: 12, color: color}}>
            {label}
          </Text>
        </View>
      );
    },
  };
};

function CategoryTop() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#32cc73',
        inactiveTintColor: '#666666',
        tabStyle: {
          width: 70,
          height: 70,
        },
        indicatorStyle: {
          height: 0,
        },
        style: {
          height: 70,
          shadowOffset: {
            height: 0,
          },
        },
      }}>
      <Tab.Screen
        name="분유"
        component={PowderedMilk}
        options={() => Icon('DRYMILK', '분유')}
      />
      <Tab.Screen
        name="이유식"
        component={PowderedMilk}
        options={() => Icon('WEANINGFOODBABYFOOD', '이유식')}
      />
      <Tab.Screen
        name="간식"
        component={PowderedMilk}
        options={() => Icon('SNACK', '간식')}
      />
      <Tab.Screen
        name="유제품"
        component={PowderedMilk}
        options={() => Icon('MILKPRODUCT', '유제품')}
      />
      <Tab.Screen
        name="음료"
        component={PowderedMilk}
        options={() => Icon('DRINK', '음료')}
      />
      <Tab.Screen
        name="식재료"
        component={PowderedMilk}
        options={() => Icon('FOODINGREDIENTS', '식재료')}
      />
      <Tab.Screen
        name="건강식품"
        component={PowderedMilk}
        options={() => Icon('HEALTHFOOD', '건강식품')}
      />
      <Tab.Screen
        name="스킨,로션,바디"
        component={PowderedMilk}
        options={() => Icon('COSMETICS', '스킨로션바디')}
      />
      <Tab.Screen
        name="목욕"
        component={PowderedMilk}
        options={() => Icon('BATH', '목욕')}
      />
      <Tab.Screen
        name="물티슈"
        component={PowderedMilk}
        options={() => Icon('WETTISSUE', '물티슈')}
      />
      <Tab.Screen
        name="세제"
        component={PowderedMilk}
        options={() => Icon('DETERGENT', '세제')}
      />
      <Tab.Screen
        name="주방세제"
        component={PowderedMilk}
        options={() => Icon('KITCHENDETERGENT', '주방세제')}
      />
      <Tab.Screen
        name="탈취,방향제"
        component={PowderedMilk}
        options={() => Icon('DEODORANT', '탈취방향제')}
      />
      <Tab.Screen
        name="치약"
        component={PowderedMilk}
        options={() => Icon('TOOTHPASTE', '치약')}
      />
      <Tab.Screen
        name="수입관"
        component={PowderedMilk}
        options={() => Icon('IMPORT', '수입관')}
      />
    </Tab.Navigator>
  );
}

export default CategoryTop;
