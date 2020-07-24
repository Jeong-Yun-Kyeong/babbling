import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CategoryScreen from '../../screens/CategoryScreen';

const Tab = createMaterialTopTabNavigator();

const DRYMILK = ['ALL', '조제분유', '액상분유', '특수분유'];
const WEANINGFOODBABYFOOD = [
  'ALL',
  '수제/배달',
  '반고형',
  '레토르트',
  '분말',
  '액상',
];
const SNACK = [
  'ALL',
  '쌀과자,떡뻥',
  '곡물과자',
  '과일칩,과자',
  '씨리얼,퍼프',
  '퓨레,푸딩',
  '사탕,젤리',
  '기타',
];
const MILKPRODUCT = ['ALL', '우유', '치즈', '요구르트'];
const DRINK = ['ALL', '생수/보리차/차', '과일/음료/주스', '두유'];
const FOODINGREDIENTS = [
  'ALL',
  '참기름/오일',
  '부침/밀가루',
  '간장/된장류',
  '쌀/찹쌀/현미가루',
  '기타',
];
const HEALTHFOOD = [
  'ALL',
  '비타민/미네랄',
  '홍삼',
  '유산균/초유',
  '기타 건강식품',
];
const COSMETICS = [
  'ALL',
  '유아크림',
  '유아스킨',
  '유아로션',
  '유아선크림',
  '유아오일',
  '기저귀크림',
  '유아파우더',
  '기타',
];
const BATH = ['ALL', '유아비누', '유아워시', '유아샴푸,린스', '유아입욕제'];
const WETTISSUE = ['ALL', '물티슈'];
const DETERGENT = ['ALL', '세제', '섬유유연제'];
const KITCHENDETERGENT = ['ALL', '주방세제', '젖병세정제'];
const DEODORANT = ['ALL', '탈취,방향제', '기타'];
const TOOTHPASTE = ['ALL', '치약'];
const IMPORT = ['ALL', '장난감'];
const Cate = {
  분유: DRYMILK,
  이유식: WEANINGFOODBABYFOOD,
  간식: SNACK,
  유제품: MILKPRODUCT,
  음료: DRINK,
  식재료: FOODINGREDIENTS,
  건강식품: HEALTHFOOD,
  '스킨,로션,바디': COSMETICS,
  목욕: BATH,
  물티슈: WETTISSUE,
  세제: DETERGENT,
  주방세제: KITCHENDETERGENT,
  '탈취,방향제': DEODORANT,
  치약: TOOTHPASTE,
  수입관: IMPORT,
};

const getNav = (datas) => {
  return datas.map((data, i) => {
    console.log(data);
    return <Tab.Screen name={data} component={CategoryScreen} key={i} />;
  });
};

function PowderedMilk({navigation, route}) {
  let Data = Cate[route.name];
  console.log(route.name);

  return (
    <Tab.Navigator
      lazy={true}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#32cc73',
        inactiveTintColor: '#666666',
        tabStyle: {
          width: 'auto',
        },
        indicatorStyle: {
          height: 0,
        },
        style: {
          shadowOffset: {
            height: 0,
          },
        },
      }}>
      {getNav(Data)}
    </Tab.Navigator>
  );
}

export default PowderedMilk;
