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
/*
export default class EmailLogin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('key', value);
    } catch (e) {
      alert(e);
    }
  };

  _signIn = () => {
    console.log('로그인 테스트');
    // console.log(this.state.email.split('@')[0], this.state.password);
    let username = this.state.email.split('@')[0];
    let {password} = this.state;
    console.log(username, password);
    //fetch로 로그인 데이터 넘겨주고 성공하면 키값 가지고 홈으로 넘어가기
    let url = 'http://localhost/';
    let url2 = 'http://babbling.co.kr/';
    fetch(url2 + 'rest-auth/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      // .then((res) => console.log(res));
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.key != undefined) {
          this.storeData(resJson.key);
          alert('로그인에 성공했습니다.');
          this.props.navigation.navigate('Main');
        } else {
          alert('아이디, 비밀번호를 확인해주세요');
        }
      });
  };

  handelEmailChange = (email) => {
    this.setState({email});
  };

  handelPWChange = (password) => {
    this.setState({password});
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <View
          style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1, zIndex: 10}}>
            <View style={{alignItems: 'center'}}>
              <LabelInput
                placeholder={'이메일 입력'}
                label={'이메일'}
                value={this.state.email}
                onChangeText={this.handelEmailChange}
              />
              <LabelInput
                placeholder={'8자리 이상'}
                label={'비밀번호'}
                value={this.state.password}
                onChangeText={this.handelPWChange}
                //비밀번호일때 *******로 보이는 옵션
                secureTextEntry={true}
              />
            </View>

            <FormButton
              nav={() => {
                this._signIn();
              }}
              title={'로그인'}
              backgroundColor={DARKMINT}
              color={'white'}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,
                width: 268,
                alignSelf: 'center',
              }}>
              <Text style={{color: BLACK60, fontSize: 14}}>
                비밀번호를 잊어버리셨나요?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PassWord');
                }}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: BLACK60,
                    fontSize: 14,
                  }}>
                  비밀번호 찾기
                </Text>
              </TouchableOpacity>
            </View>
*/
          </View>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1}}></View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

export default EmailLogin;



