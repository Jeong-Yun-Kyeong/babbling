import React, {Fragment} from 'react';
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

const EmailLogin = ({navigation}) => {
  let width = 268;
  let screenWidth = Dimensions.get('screen').width;
  // alert(screenWidth);
  if (screenWidth >= 834) {
    width = 380;
  }
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <View
        style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1, zIndex: 10}}>
          <View style={{alignItems: 'center'}}>
            <LabelInput placeholder={'이메일 입력'} label={'이메일'} />
            <LabelInput placeholder={'8자리 이상'} label={'비밀번호'} />
          </View>

          <FormButton
            nav={() => {}}
            title={'로그인'}
            backgroundColor={'#32cc73'}
            color={'white'}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
              width: width,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'gray'}}>비밀번호를 잊어버리셨나요?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PassWord');
              }}>
              <Text style={{textDecorationLine: 'underline', color: 'gray'}}>
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
};

const styles = StyleSheet.create({});

export default EmailLogin;
