import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//
import LabelInput from '../components/atom/LabelInput';
import FormButton from '../components/atom/FormButton';
import {BLACK60, DARKMINT} from '../Constant';

import * as ScreenMargin from '../values/ScreenMargin';

const EmailLogin = ({navigation,route}) => {
  let width = 268;
  let screenWidth = Dimensions.get('screen').width;

  let screenMargin = ScreenMargin.getMargin(route.name);

  // alert(screenWidth);
  if (screenWidth >= 834) {
    width = 380;
  }
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <View
        style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', paddingHorizontal:screenMargin}}>
        <View style={{flex: 1}}></View>
        {/* <View style={{flex: 1, zIndex: 10}}> */}
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <LabelInput placeholder={'이메일 입력'} label={'이메일'} style={{marginBottom:30}}/>
            <LabelInput placeholder={'8자리 이상'} label={'비밀번호'} style={{marginBottom:24}}/>
          </View>

          <FormButton
            nav={() => {navigation.navigate('Main');}}
            title={'로그인'}
            backgroundColor={'#32cc73'}
            color={'white'}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 28,
              width: width,
              alignSelf: 'center',
            }}>
            <Text style={{color: '#00000099'}}>비밀번호를 잊어버리셨나요?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PassWord');
              }}>
              <Text style={{textDecorationLine: 'underline', color: '#00000099'}}>
                비밀번호 찾기
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    </Fragment>
  );
}


const styles = StyleSheet.create({});

export default EmailLogin;



