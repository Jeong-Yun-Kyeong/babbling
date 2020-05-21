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
} from 'react-native';
import LabelInput from '../components/atom/LabelInput';
import FormButton from '../components/atom/FormButton';
import {BLACK60, DARKMINT} from '../Constant';

export default class EmailLogin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  _signIn = () => {
    console.log('로그인 테스트');
    console.log(this.state.email, this.state.password);
    //fetch로 로그인 데이터 넘겨주고 성공하면 키값 가지고 홈으로 넘어가기
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
              <Text style={{color: BLACK60}}>비밀번호를 잊어버리셨나요?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PassWord');
                }}>
                <Text style={{textDecorationLine: 'underline', color: BLACK60}}>
                  비밀번호 찾기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1}}></View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
