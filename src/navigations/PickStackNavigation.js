import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import Pick from '../screens/PickTwoScreen';
import Category from '../screens/CategoryScreen';
import CategoryTab from '../navigations/CatogoryTopNavigation';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import Detail from '../screens/DetailTestScreen';
import Compare from '../screens/CompareScreen';

const Stack = createStackNavigator();

const PickHeader = {
  headerShown: false,
  // headerLeft: () => (
  //   <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft: 24}}>PICK</Text>
  // ),
  // headerTitle: () => null,
  // headerRight: () => (
  //   <View style={{flexDirection: 'row', marginRight: 24}}>
  //     <View style={{flex: 1, padding: 5}}>
  //       <SvgXml xml={SVG('HEART')} />
  //     </View>
  //     <View style={{flex: 1, padding: 5}}>
  //       <SvgXml xml={SVG('MYPAGE')} />
  //     </View>
  //   </View>
  // ),
  // headerStyle: {
  //   height: Platform.OS === 'ios' ? getStatusBarHeight() + 50 : 50,
  //   shadowOffset: {height: 0},
  //   elevation: 0,
  // },
};

const PickInnerHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => (
    <View>
      <View
        style={{
          borderRadius: 50,
          borderWidth: 2,
          borderColor: '#31CC73',
          margin: 10,
          padding: 3,
          paddingLeft: 15,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          width: Dimensions.get('screen').width * (60 / 100),
          marginLeft: -15,
        }}>
        <Text style={{flex: 9}}>수딩내추럴 ...</Text>

        <SvgXml xml={SVG('SEARCH')} width="24" height="24" style={{flex: 1}} />
      </View>
    </View>
  ),
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24}}>
      <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('HEART')} />
      </View>
      <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('MYPAGE')} />
      </View>
    </View>
  ),
  headerStyle: {
    height: Platform.OS === 'ios' ? getStatusBarHeight() + 62 : 62,
  },
});

const DetailHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => <Text style={{fontSize: 17}}>상세페이지</Text>,
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24}}>
      <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('HELP')} />
      </View>
      <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('SHARE')} />
      </View>
    </View>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
  },
});

const CompareHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => <Text style={{fontSize: 17}}>비교</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    shadowOffset: {
      height: 2,
    },
  },
});

const PickStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
      }}>
      <Stack.Screen name="Pick" component={Pick} options={() => PickHeader} />
      <Stack.Screen
        name="Category"
        component={CategoryTab}
        options={({navigation}) => PickInnerHeader(navigation)}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({navigation}) => DetailHeader(navigation)}
      />
      <Stack.Screen
        name="Compare"
        component={Compare}
        options={({navigation}) => CompareHeader(navigation)}
      />
    </Stack.Navigator>
  );
};

export default PickStack;
