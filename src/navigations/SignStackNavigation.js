import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {SvgXml} from 'react-native-svg';

import SVG from '../components/SvgComponent';
import SignIn from '../screens/LoginTwoScreen';
import SignUp from '../screens/JoinScreen';
import InputChildInformation from '../screens/BabyPlusScreen';
import InputChildAllergyInformation from '../screens/BabyAlergyScreen';
import LoginTwoScreen from '../screens/LoginTwoScreen';
const Stack = createStackNavigator();

const SignStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen //홈화면
        name="Login"
        component={LoginTwoScreen}
        options={({route}) => ({headerShown: false})}
      />
      <Stack.Screen // 로그인
        name="SignIn"
        component={SignIn}
        options={({route}) => ({headerShown: false})}
      />
      <Stack.Screen // 회원가입
        name="SignUp"
        component={SignUp}
        options={({route}) => JoinHeader(navigation)}
      />
      <Stack.Screen // 아이정보
        name="InputChildInformation"
        component={InputChildInformation}
        options={() => ({headerShown: false})}
      />
      <Stack.Screen //아이엘레르기정보
        name="InputChildAllergyInformation"
        component={InputChildAllergyInformation}
        options={({route}) => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
};

const JoinHeader = (navigation) => ({
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

export default SignStack;
