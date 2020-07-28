import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DARKMINT} from '../Constant';

const AuthCheck = (props) => {
  useEffect(() => {
    const TokenCheck = async (navigation) => {
      let getToken = await AsyncStorage.getItem('token');
      console.log('========================' + getToken);
      getToken != null
        ? navigation.navigate('Main')
        : navigation.navigate('Sign');
    };
    TokenCheck(props.navigation);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: DARKMINT,
      }}>
      <Text style={{color: 'white'}}>베블링...</Text>
    </View>
  );
};

export default AuthCheck;
