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
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';
import SVG from '../components/SvgComponent';
import {FONTSIZE} from '../Constant';
// 로고
const LOGO = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <SvgXml xml={SVG('LOGO')} />
    </View>
  );
};
// sns 로그인 버튼들
const SNS_LOGIN = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 327,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#50b158',
          width: 52,
          height: 52,
          borderRadius: 52,
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#f9da31',
          width: 52,
          height: 52,
          borderRadius: 52,
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: 52,
          height: 52,
          borderRadius: 52,
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          width: 52,
          height: 52,
          borderRadius: 52,
        }}></TouchableOpacity>
    </View>
  );
};
const Login = ({navigation}) => {
  return (
    <Fragment>
      <View
        style={{
          flex: 1,
        }}>
        <Image
          source={require('../images/IOS_Splash_4.png')}
          resizeMode="contain"
          style={{position: 'absolute', top: 0, left: 0}}
        />
        {/* <BlurView
          style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        /> */}
        {/* <SafeAreaView /> */}
        <View style={{flex: 1}}>
          {/* 뷰1 */}
          {LOGO()}
          {/* 뷰2 */}
          <View
            style={{
              flex: 1,
            }}>
            <View style={{flex: 1}}></View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              {SNS_LOGIN()}
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('EmailLogin');
                  }}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    width: 327,
                    height: 52,
                    borderRadius: 52,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16}}>이메일로 로그인</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', paddingTop: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: 327,
                }}>
                <Text style={{color: 'white', fontSize: FONTSIZE.MIDDLE}}>
                  회원이 아니신가요?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Join');
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textDecorationLine: 'underline',
                      fontSize: FONTSIZE.MIDDLE,
                    }}>
                    회원가입하기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* 뷰3 */}
          <View
            style={{
              flex: 1,
            }}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Main');
                }}>
                <Text style={{color: 'white', fontSize: FONTSIZE.SMALL}}>
                  로그인 없이 앱 둘러보기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Login;
