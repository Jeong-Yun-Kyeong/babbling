import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImagePropTypes,
  Platform,
} from 'react-native';
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

//footer screen,navigation 추가
import ACCESSTERMS from '../screens/AccesstermsScreen';
import AccesstermsTop from './AccesstermsTopNavigation';
import CompanyProfile from '../screens/CompanyProfileScreen';
import FAQ from '../screens/FAQScreen';
import QnA from '../screens/QnAScreen';
import Settings from '../screens/SettingScreen';
//header추가
import {
  FAQHeader,
  QnAHeader,
  ACCESSTERMSHeader,
  CompanyProfileHeader,
} from '../components/molecule/HeaderOptions';
const Stack = createStackNavigator();

const PickHeader = (navigation) => ({
  headerShown: false,
  headerLeft: () => (
    <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft: 24}}>PICK</Text>
  ),
  headerTitle: () => null,
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24}}>
      {/* <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('HEART')} />
      </View>
      <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('MYPAGE')} />
      </View> */}
    </View>
  ),
  headerStyle: {
    height: Platform.OS === 'ios' ? getStatusBarHeight() + 50 : 50,
    //   shadowOffset: {height: 0},
    //   elevation: 0,
  },
});

const PickInnerHeader = (navigation) => ({
  headerShown: false,
  // headerLeft: () => (
  //   <TouchableOpacity
  //     style={{marginLeft: 24}}
  //     onPress={() => {
  //       navigation.goBack();
  //     }}>
  //     <SvgXml xml={SVG('BACKIOS')} />
  //   </TouchableOpacity>
  // ),
  // headerTitle: () => (
  //   <View>
  //     <View
  //       style={{
  //         borderRadius: 50,
  //         borderWidth: 2,
  //         borderColor: '#31CC73',
  //         margin: 10,
  //         padding: 3,
  //         paddingLeft: 15,
  //         justifyContent: 'center',
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         // width: Dimensions.get('screen').width * (60 / 100),
  //         // marginLeft: -15,
  //         width: '100%',
  //       }}>
  //       <Text style={{flex: 9}} numberOfLines={1}>
  //         제품 홍보 글귀
  //       </Text>

  //       <SvgXml xml={SVG('SEARCH')} width="24" height="24" style={{flex: 1}} />
  //     </View>
  //   </View>
  // ),
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
  //   height: Platform.OS === 'ios' ? getStatusBarHeight() + 62 : 62,
  // },
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
  headerTitleAlign: 'center',
  headerTitle: () => (
    <Text
      style={{
        fontSize: 17,
        alignItems: 'center',
      }}>
      상세페이지
    </Text>
  ),
  // pick상세페이지 help,share 주석
  // headerRight: () => (
  //   <View style={{flexDirection: 'row', marginRight: 24}}>
  //     <View style={{flex: 1, padding: 5}}>
  //       <SvgXml xml={SVG('HELP')} />
  //     </View>
  //     <View style={{flex: 1, padding: 5}}>
  //       <SvgXml xml={SVG('SHARE')} />
  //     </View>
  //   </View>
  // ),
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
//
const SettingsHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>설정</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
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
      <Stack.Screen
        name="Pick"
        component={Pick}
        options={({navigation}) => PickHeader(navigation)}
      />
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
      {/* Footer*/}
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={({navigation}) => FAQHeader(navigation)}
      />
      <Stack.Screen
        name="QnA"
        component={QnA}
        options={({navigation}) => QnAHeader(navigation)}
      />
      {/* 이용약관 및 개인정보 stack */}
      <Stack.Screen
        name="ACCESSTERMSTOP"
        component={ACCESSTERMS}
        options={({navigation}) => ACCESSTERMSHeader(navigation)}
      />
      <Stack.Screen
        name="ACCESSTERMS"
        component={AccesstermsTop}
        options={({navigation}) => ACCESSTERMSHeader(navigation)}
      />
      {/* 회사소개 stack */}
      <Stack.Screen
        name="CompanyProfile"
        component={CompanyProfile}
        options={({navigation}) => CompanyProfileHeader(navigation)}
      />
      {/* Footer end*/}
      {/*  */}
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => SettingsHeader(navigation)}
      />
    </Stack.Navigator>
  );
};

export default PickStack;
