import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
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
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import * as ScreenMargin from '../values/ScreenMargin';
import {FONTSIZE, URL} from '../Constant';
import AsyncStorage from '@react-native-community/async-storage';
//
const Login = ({navigation, route}) => {
  let screenPadding = ScreenMargin.getMargin(route.name);
  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={{flex: 1}}>
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: screenPadding,
          }}>
          {/* {LOGO()} */}
          {CustomView('LOGO')}
          {SNS_LOGIN(navigation)}
          {/* <FormButton
            nav={() => {
              navigation.navigate('EmailLogin');
            }}
            title={'이메일로 로그인'}
            style={{width:'100%',marginTop:40}}
          /> */}
          {/* {JOIN(navigation)} */}
          {NO_LOGIN(navigation, route)}
        </View>
      </View>
    </Fragment>
  );
};
//
_userJoin = (id, pw) => {
  let url = URL + '/rest-auth/registration/';
  form = new FormData();
  form.append('username', id);
  form.append('password1', pw);
  form.append('password2', pw);
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: form,
  })
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
    });
};
//
_userCheck = (authUser, navigation) => {
  console.log('===============: 사용자 확인');
  let url = URL + 'rest-auth/login/';
  loginForm = new FormData();
  loginForm.append('username', authUser.id);
  loginForm.append('password', authUser.pw);
  url = URL + '/rest-auth/login/';
  fetch(url, {
    method: 'POST',
    body: loginForm,
  })
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
      if (resJson.non_field_errors != undefined) {
        console.log('존재하는 계정이 아닙니다.');
        navigation.navigate('Join', {authUser: authUser});
        // _userJoin(id, pw);
        return;
      }
      if (resJson.token) {
        AsyncStorage.setItem('token', resJson.token);
        navigation.navigate('Main', {screen: 'Main'});
      }
    });
  //
};
//google login or join1
onGoogleButtonPress = async (navigation) => {
  GoogleSignin.configure({
    scopes: [], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '557805776866-b1ar65jbtani5g6nctgbt2ovr8jl8nng.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
  });

  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);

    let authUser = {
      id: userInfo.user.id,
      pw: 'g' + userInfo.user.id,
      name: userInfo.user.familyName + userInfo.user.givenName,
      email: userInfo.user.email,
      sns: 'google',
    };
    //
    _userCheck(authUser, navigation);

    //
    // let url = URL + '/rest-auth/registration/';
    // form = new FormData();
    // form.append('username', userInfo.user.id);
    // form.append('password1', 'g' + userInfo.user.id);
    // form.append('password2', 'g' + userInfo.user.id);
    // //
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: form,
    // })
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     console.log(resJson);
    //     if (resJson.username == 'A user with that username already exists.') {
    //       console.log('로그인하게 하기');
    //       //
    //       loginForm = new FormData();
    //       loginForm.append('username', userInfo.user.id);
    //       loginForm.append('password', 'g' + userInfo.user.id);
    //       url = URL + '/rest-auth/login/';
    //       fetch(url, {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: loginForm,
    //       })
    //         .then((res) => res.json())
    //         .then((resJson) => {
    //           console.log(resJson);
    //           console.log(resJson.token);
    //           // 그냥 입력하게 수정하기,
    //           // _getUserAssistent(resJson, navigation, 'google', userInfo);
    //           // _getChildsData()
    //         });
    //       //
    //     } else {
    //       this.props.navigation.navigate('Join', {
    //         AuthUser: resJson,
    //       });
    //     }
    //   });

    //
    //
    //
    //
    //userInfo.user // email, name, id
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log(error.code);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log(error.code);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log(error.code);
    } else {
      // some other error happened
      console.log(error);
    }
  }
};
//apple login or join 1
onAppleButtonPress = async () => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [
      AppleAuthRequestScope.EMAIL,
      AppleAuthRequestScope.FULL_NAME,
    ],
  });

  const credentialState = await appleAuth.getCredentialStateForUser(
    appleAuthRequestResponse.user,
  );

  if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
    console.log('로그인됨?');
    console.log(appleAuthRequestResponse);
    console.log(appleAuthRequestResponse.user);
    console.log(appleAuthRequestResponse.email);
    console.log(appleAuthRequestResponse.fullName.familyName);
    console.log(appleAuthRequestResponse.fullName.givenName);
    signInWithApple(appleAuthRequestResponse);
  }
};
//apple login or join 2
const signInWithApple = (appleAuthRequestResponse) => {
  let url = URL + '/rest-auth/registration/';
  form = new FormData();
  form.append('username', appleAuthRequestResponse.user);
  form.append('password1', appleAuthRequestResponse.user);
  form.append('password2', appleAuthRequestResponse.user);
  if (appleAuthRequestResponse.email != null) {
    form.append('email', appleAuthRequestResponse.email);
  }
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: form,
  })
    .then((res) => res.json())
    .then((resJson) => {
      this.setState({
        token: resJson.token,
      });
      if (resJson.username == 'A user with that username already exists.') {
        console.log('로그인하게 하기');
        //
        loginForm = new FormData();
        loginForm.append('username', appleAuthRequestResponse.user);
        loginForm.append('password', appleAuthRequestResponse.user);
        url = URL + '/rest-auth/login/';
        fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: loginForm,
        })
          .then((res) => res.json())
          .then((resJson) => {
            console.log(resJson);
            // pk값으로 개인정보 조회 후 (넘어가거나 등록 후) 아이정보 조회(선택하거나 자동선택하거나 추가하거나)
            // _getUserAssistent(resJson.token, navigation, 'apple');
            // _getChildsData()
          });
        //
      } else {
        console.log('회원가입하게 하기');
        console.log(resJson);
        this.props.navigation.navigate('Join', {token: 'JWT ' + resJson.token});
      }
    });
};
//유저정보 가져오기
_getUserAssistent = (json, navigation, sns, userInfo) => {
  form = new FormData();
  form.append('pk', json.user.pk);
  const url = URL + '/user_assistent/';
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'JWT ' + json.token,
    },
    body: form,
  })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson[0]) {
        //아이정보 비교 필요
      } else {
        navigation.navigate('Join', {
          data: json,
          sns: sns,
          info: {
            email: userInfo.user.email,
            name: userInfo.user.familyName + userInfo.user.givenName,
          },
        });
      }
      //없으면 작성하게 해야됨 -> 회원가입페이지 돌려서 사용하게 수정하기
    });
};
// 화면, view,
const CustomView = (val) => {
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
  if (val == 'LOGO') {
    return LOGO();
  }
};
// 로고
// const LOGO = () => {
//   let height = 52;
//   let width = 268;
//   let marginBottom = 40;
//   let screenWidth = Dimensions.get('screen').width;
//   if (screenWidth >= 834) {
//     height = 78;
//     width = 400;
//     marginBottom = 60;
//   }
//   return (
//     <View
//       style={{
//         marginBottom: marginBottom,
//         // alignItems: 'center',
//       }}>
//       <SvgXml xml={SVG('LOGO')} height={height} width={width} />
//     </View>
//   );
// };
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
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#50b158',
          width: radius,
          height: radius,
          borderRadius: radius,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {}}>
        <Image
          source={require('../images/icon/naver.png')}
          style={{width: radius + 5, height: radius + 5}}
        />
      </TouchableOpacity> */}
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#FFEB00',
          width: radius,
          height: radius,
          borderRadius: radius,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {}}>
        <Image
          source={require('../images/icon/kakao.png')}
          style={{width: radius - 10, height: radius - 10}}
        />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: radius,
          height: radius,
          borderRadius: radius,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          onGoogleButtonPress(navigation);
        }}>
        <Image
          source={require('../images/icon/google.png')}
          style={{width: radius + 25, height: radius + 25}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: radius,
          height: radius,
          borderRadius: radius,
          overflow: 'hidden',
        }}
        onPress={() => {
          onAppleButtonPress();
        }}>
        <Image
          source={require('../images/icon/apple.png')}
          style={{width: radius, height: radius}}
        />
      </TouchableOpacity>
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
        marginTop: 20,
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
  //
  const unAuthLogin = () => {
    let url = URL + '/rest-auth/login/';
    form = new FormData();
    form.append('username', 'user');
    form.append('password', 'user123123');
    fetch(url, {
      method: 'POST',
      body: form,
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        // 사용자 로그인 시키게 만들기
        AsyncStorage.setItem('token', resJson.token);
        // navigation.navigate('Main', {screen: 'Main'});
        navigation.navigate('Main', {screen: 'Main'});
      });
  };

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
          unAuthLogin();
        }}>
        <Text style={{color: '#ffffff99', fontSize: FONTSIZE.SMALL}}>
          로그인 없이 앱 둘러보기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
