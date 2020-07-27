import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

// import Login from '../screens/LoginScreen';
import Login from '../screens/LoginTwoScreen';
// import EmailLogin from '../screens/EmailLoginScreen';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import Join from '../screens/JoinScreen';
// import PassWord from '../screens/PWScreen';
// import PWChange from '../screens/PWChangeScreen';
import BabyPlus from '../screens/BabyPlusScreen';
import BabyAlergy from '../screens/BabyAlergyScreen';
import {BLACK60} from '../Constant';

const Stack = createStackNavigator();

const SignStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      {/* <Stack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={({route}) => EmailLoginHeader(navigation)}
      /> */}
      <Stack.Screen
        name="Join"
        component={Join}
        options={({route}) => JoinHeader(navigation)}
      />
      {/* <Stack.Screen
        name="PassWord"
        component={PassWord}
        options={({route}) => PWHeader(navigation)}
      />
      <Stack.Screen
        name="PWChange"
        component={PWChange}
        options={({route}) => PWChangeHeader(navigation)}
      /> */}
      {/* 아이추가 */}
      <Stack.Screen
        name="BabyPlus"
        component={BabyPlus}
        // options={({route}) => BabyPlusHeader(navigation, route)}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen
        name="BabyAllergy"
        component={BabyAlergy}
        options={({route}) => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
};

// const EmailLoginHeader = (navigation) => ({
//   animationEnabled: false,
//   headerLeft: () => (
//     <TouchableOpacity
//       style={{marginLeft: 24}}
//       onPress={() => {
//         navigation.goBack();
//       }}>
//       <SvgXml xml={SVG('BACKIOS')} />
//     </TouchableOpacity>
//   ),
//   headerTitleAlign: 'center',
//   headerTitle: () => (
//     <View style={{alignSelf: 'center'}}>
//       <Text style={{fontSize: 16, color: BLACK60}}>로그인</Text>
//     </View>
//   ),
//   headerStyle: {
//     shadowOffset: {
//       height: 0,
//     },
//     elevation: 0,
//   },
// });

const JoinHeader = (navigation) => ({
  // animationEnabled: false,
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitleAlign: 'center',
  headerTitle: () => (
    <Text style={{fontSize: 17}}>추가 계정 정보 입력하기</Text>
  ),
  headerStyle: {
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
});

// const PWHeader = (navigation) => ({
//   animationEnabled: false,
//   headerLeft: () => (
//     <TouchableOpacity
//       style={{marginLeft: 24}}
//       onPress={() => {
//         navigation.goBack();
//       }}>
//       <SvgXml xml={SVG('BACKIOS')} />
//     </TouchableOpacity>
//   ),
//   headerTitleAlign: 'center',
//   headerTitle: () => <Text style={{fontSize: 17}}>비밀번호 찾기</Text>,
//   headerStyle: {
//     shadowOffset: {
//       height: 0,
//     },
//     elevation: 0,
//   },
// });

// const PWChangeHeader = (navigation) => ({
//   animationEnabled: false,
//   headerLeft: () => (
//     <TouchableOpacity
//       style={{marginLeft: 24}}
//       onPress={() => {
//         navigation.goBack();
//       }}>
//       <SvgXml xml={SVG('BACKIOS')} />
//     </TouchableOpacity>
//   ),
//   headerTitleAlign: 'center',
//   headerTitle: () => <Text style={{fontSize: 17}}>비밀번호 변경하기</Text>,
//   headerStyle: {
//     shadowOffset: {
//       height: 0,
//     },
//     elevation: 0,
//   },
// });

const BabyPlusHeader = (navigation, route) => {
  //const {isRegister} = navigation.getParam('params',{isRegister:false,});
  //const {isRegister} = navigation.state.params;
  //const {isRegister} = {isRegister:true};

  const {isRegister} = route.params || {isRegister: false};

  return {
    animationEnabled: false,
    headerLeft: () => (
      <TouchableOpacity
        style={{marginLeft: 24}}
        onPress={() => {
          navigation.navigate('Join');
        }}>
        <SvgXml xml={SVG('BACKIOS')} />
      </TouchableOpacity>
    ),
    headerTitleAlign: 'center',
    headerTitle: () => (
      <Text style={{fontSize: 17}}>
        우리 아이 {isRegister == true ? '추가' : '등록'}하기
      </Text>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{marginRight: 24}}
        onPress={() => {
          alert('준비중입니다.');
          // navigation.navigate('BabyAlergy', route.params);
        }}>
        <Text style={{fontSize: 15, color: 'gray'}}>다음</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
};

const BabyAlergyHeader = (navigation, route) => {
  const {isRegister} = route.params || {isRegister: false};

  return {
    animationEnabled: false,
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
      <Text style={{fontSize: 17}}>
        우리 아이 {isRegister == true ? '추가' : '등록'}하기
      </Text>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{marginRight: 24}}
        onPress={() => {
          navigation.navigate('EmailLogin');
        }}>
        <Text style={{fontSize: 15, color: '#32cc73'}}>저장</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
};

export default SignStack;
