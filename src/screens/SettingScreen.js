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
  Dimensions,
  Switch,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AsyncStorage from '@react-native-community/async-storage';

export default class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      alarmToggle: false,
      repleToggle: false,
      eventToggle: false,
    };
  }

  signout = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('token:   ', token);
    AsyncStorage.clear();
    const tokenConfirm = await AsyncStorage.getItem('token');
    console.log('tokenConfirm:   ', tokenConfirm);
    this.props.navigation.navigate('LoginMain', {
      screen: 'Login',
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View
            style={{
              backgroundColor: '#f3f3f3',
              flex: 1,
              height:
                Dimensions.get('screen').height - getStatusBarHeight() - 62,
            }}>
            <View
              style={{padding: 16, paddingBottom: 0, backgroundColor: 'white'}}>
              {/*  */}
              {/* <View
                style={{
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  padding: 8,
                }}> */}
              {/*  */}
              {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}>
                  <View style={{marginRight: 16}}>
                    <SvgXml xml={SVG('HEART')} />
                  </View>
                  <View
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>알림설정</Text>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Switch
                        value={this.state.alarmToggle}
                        onValueChange={() => {
                          this.setState({alarmToggle: !this.state.alarmToggle});
                        }}
                        style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                      />
                    </View>
                  </View>
                </View> */}
              {/*  */}
              {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}>
                  <View style={{marginRight: 16}}>
                    <SvgXml xml={SVG('ALARM')} />
                  </View>
                  <View
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>댓글 알림</Text>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Switch
                        value={this.state.alarmToggle}
                        onValueChange={() => {
                          this.setState({alarmToggle: !this.state.alarmToggle});
                        }}
                        style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                      />
                    </View>
                  </View>
                </View> */}
              {/*  */}
              {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}>
                  <View style={{marginRight: 16}}>
                    <SvgXml xml={SVG('ALARM')} />
                  </View>
                  <View
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>이벤트, 혜택 알림</Text>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Switch
                        value={this.state.alarmToggle}
                        onValueChange={() => {
                          this.setState({alarmToggle: !this.state.alarmToggle});
                        }}
                        style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
                      />
                    </View>
                  </View>
                </View> */}
              {/* </View> */}
              {/*  */}
              <View
                style={{
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  padding: 8,
                }}>
                {/*  */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 11,
                    paddingBottom: 11,
                  }}>
                  <View style={{marginRight: 16}}>
                    <SvgXml xml={SVG('HEART')} />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('FAQ');
                    }}
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>FAQ</Text>
                    {/* <Text>토글</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
              {/*  */}
              <View
                style={{
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  padding: 8,
                }}>
                {/*  */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 11,
                    paddingBottom: 11,
                  }}>
                  <View style={{marginRight: 16}}>
                    <SvgXml xml={SVG('HEART')} />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('QnA');
                    }}
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>문의하기</Text>
                    {/* <Text>토글</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
              {/*  */}
              <View
                style={{
                  padding: 8,
                }}>
                {/*  */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 11,
                    paddingBottom: 11,
                  }}>
                  <View style={{marginRight: 16}}>
                    <SvgXml xml={SVG('HEART')} />
                  </View>
                  <TouchableOpacity
                    style={{
                      flexGrow: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>이용약관</Text>
                    {/* <Text>토글</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
              {/*  */}
            </View>
            {/*  */}
            <View
              style={{
                marginTop: 4,
                paddingTop: 20,
                paddingRight: 24,
                alignItems: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.signout();
                  }}>
                  <Text style={{color: 'gray', fontSize: 13}}>로그아웃</Text>
                </TouchableOpacity>
                {/* <View
                  style={{
                    width: 1,
                    backgroundColor: 'gray',
                    marginLeft: 10,
                    marginRight: 10,
                  }}></View> */}
                {/* <TouchableOpacity onPress={() => {}}>
                  <Text style={{color: 'gray', fontSize: 13}}>회원탈퇴</Text>
                </TouchableOpacity> */}
              </View>
            </View>
            {/*  */}
            <View
              style={{
                position: 'absolute',
                bottom: 60,
                left: 0,
                right: 0,
                alignItems: 'center',
              }}>
              <Text style={{color: 'gray'}}>1.0.0</Text>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
