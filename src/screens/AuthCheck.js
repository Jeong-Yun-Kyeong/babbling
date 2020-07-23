import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const TokenCheck = async (navigation) => {
  let getToken = await AsyncStorage.getItem('token');
  console.log('========================' + getToken);
  getToken != null
    ? navigation.navigate('Main')
    : navigation.navigate('LoginMain');
  //   setToken(getToken);
};
const AuthCheck = (props) => {
  TokenCheck(props.navigation);
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text>로딩화면</Text>
    </View>
  );
};

export default AuthCheck;
