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
} from 'react-native';
import LabelInput from '../components/atom/LabelInput';
import FormButton from '../components/atom/FormButton';

const PassWord = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <View
        style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1, zIndex: 10, alignItems: 'center'}}>
          <LabelInput placeholder={'이메일 입력'} label={'이메일'} />

          {/*  */}
          <FormButton
            nav={() => navigation.navigate('PWChange')}
            backgroundColor={'#32cc73'}
            color={'white'}
            title={'확인 메일 보내기'}
          />
        </View>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}></View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default PassWord;
