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
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import LabelInput from '../components/atom/LabelInput';

export default class BabyPlus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topRight: 5,
      bottomRight: 5,
      //true 남자, false,여자
      gender: true,
    };
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View style={{padding: 24}}>
            {/* 얼굴 */}
            <View style={{marginTop: 20, marginBottom: 20}}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 120,
                    height: 120,
                    borderRadius: 120,
                    shadowOffset: {
                      height: 3,
                    },
                    shadowOpacity: 0.2,

                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('BABBLING_PROFILE')} />
                  {/* <Image source={require('../images/Babbling_profile.png')} /> */}
                  <View
                    style={{
                      backgroundColor: 'white',
                      width: 36,
                      height: 36,
                      borderRadius: 36,
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      shadowOffset: {
                        height: 3,
                      },
                      shadowOpacity: 0.2,

                      elevation: 5,
                      //
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <SvgXml xml={SVG('CAMERA')} />
                  </View>
                </View>
              </View>
            </View>
            {/* 이름 */}
            <View style={{alignItems: 'center'}}>
              <LabelInput
                placeholder={'베베'}
                label={'아이 이름/별명'}
                button={true}
                btnTitle={'중복확인'}
              />
            </View>
            {/* 성별 */}
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  color: 'gray',
                  marginBottom: 10,
                }}>
                아이의 성별을 선택해주세요
              </Text>
              {/*  */}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      gender: !this.state.gender,
                    });
                  }}
                  style={{
                    padding: 15,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#32cc73',
                    flex: 1,
                    alignItems: 'center',
                    margin: 5,
                    backgroundColor: this.state.gender ? 'white' : '#32cc73',
                  }}>
                  <Text
                    style={{
                      color: this.state.gender ? '#32cc73' : 'white',
                      fontSize: 15,
                    }}>
                    남자
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      gender: !this.state.gender,
                    });
                  }}
                  style={{
                    padding: 15,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#32cc73',
                    flex: 1,
                    backgroundColor: this.state.gender ? '#32cc73' : 'white',
                    alignItems: 'center',
                    margin: 5,
                  }}>
                  <Text
                    style={{
                      color: this.state.gender ? 'white' : '#32cc73',
                      fontSize: 15,
                    }}>
                    여자
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* 일 */}
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  marginBottom: 10,
                  color: 'gray',
                }}>
                아이가 태어날 날을 입력해주세요
                <Text style={{color: 'lightgray', fontSize: 11}}>
                  혹은 출산 예정일을 입력해주세요
                </Text>
              </Text>
              {/*  */}
              <View
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#a9a9a9',
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text>년도</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text>월</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text>일</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
