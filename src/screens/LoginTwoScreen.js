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
  Dimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';
import SVG from '../components/SvgComponent';
import FormButton from '../components/atom/FormButton';


import * as ScreenMargin from '../values/ScreenMargin';


import {FONTSIZE} from '../Constant';

// 로고
const LOGO = () => {
  let height = 52;
  let width = 268;
  let marginBottom = 40;
  let screenWidth = Dimensions.get('screen').width;
  if (screenWidth >= 834) {
    height = 78;
    width = 400;
    marginBottom = 60;
  }
  return (
    <View
      style={{
        marginBottom: marginBottom,
        // alignItems: 'center',
      }}>
      <SvgXml xml={SVG('LOGO')} height={height} width={width} />
    </View>
  );
};
// sns 로그인 버튼들
const SNS_LOGIN = (navigation) => {
  let radius = 52;
  let width = 268;
  let marginBottom = 10;
  let screenWidth = Dimensions.get('screen').width;
  if (screenWidth >= 834) {
    radius = 68;
    width = 400;
    marginBottom = 15;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: marginBottom,
        width: width,
        // width: 327,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#50b158',
          width: radius,
          height: radius,
          borderRadius: radius,
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#f9da31',
          width: radius,
          height: radius,
          borderRadius: radius,
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: radius,
          height: radius,
          borderRadius: radius,
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          width: radius,
          height: radius,
          borderRadius: radius,
        }}></TouchableOpacity>
    </View>
  );
};
// 회원가입버튼
const JOIN = (navigation) => {
  let width = 268;
  let fontSize = 12;
  let screenWidth = Dimensions.get('screen').width;
  if (screenWidth >= 834) {
    width = 400;
    fontSize = 17;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: width,
        marginTop: 20
      }}>
      <Text style={{color: '#ffffff99', fontSize: FONTSIZE.MIDDLE}}>

        회원이 아니신가요?
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Join');
        }}>
        <Text
          style={{
            color: '#ffffff99',
            textDecorationLine: 'underline',
            fontSize: FONTSIZE.MIDDLE,
          }}>
          회원가입하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};
// 노로그인
const NO_LOGIN = (navigation, route) => {
  let fontSize = 12;
  let screenWidth = Dimensions.get('screen').width;
  if (screenWidth >= 834) {
    fontSize = 17;
  }
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        bottom: 60,
        right: 0,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text style={{color: '#ffffff99', fontSize: FONTSIZE.SMALL}}>

          로그인 없이 앱 둘러보기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Login = ({navigation, route}) => {

  console.log(ScreenMargin.getMargin(route.name));

  let screenPadding = ScreenMargin.getMargin(route.name);

  return (
    <Fragment>
      <View
        style={{
          flex: 1
        }}>
        <Image
          source={require('../images/loginBackground.png')}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
          }}
        />
        <Image
          source={require('../images/loginMain.png')}
          resizeMode="cover"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height / 2,
          }}
        />
        <BlurView
          style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
          blurType="dark"
          blurAmount={5}
        />
        <SafeAreaView />
        {/* {alert(Dimensions.get('screen').width)} */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',  marginHorizontal:screenPadding}}>
          {/* 뷰1 */}
          {LOGO()}
          {/* {SNS_LOGIN(navigation)} */}
          <FormButton
            nav={() => {
              navigation.navigate('EmailLogin');
            }}
            title={'이메일로 로그인'}
            style={{width:'100%',marginTop:40}}
          />
          {JOIN(navigation)}
          {NO_LOGIN(navigation, route)}
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Login;
