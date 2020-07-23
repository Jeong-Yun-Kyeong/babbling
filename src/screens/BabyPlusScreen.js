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

import * as ScreenMargin from '../values/ScreenMargin';

export default class BabyPlus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topRight: 5,
      bottomRight: 5,
      //true 남자, false,여자
      gender: true,

      enableName: false,
    };
  }

  render() {
    let screenMargin = ScreenMargin.getMargin(this.props.route.name);
    console.log(this.props.route.name);

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white', flex: 1, backgroundColor: 'white'}}>
          <View style={{paddingHorizontal: screenMargin}}>
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
                  <TouchableOpacity
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
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* 이름 */}
            <LabelInput
              placeholder={'베베'}
              label={'아이 이름/별명'}
              button={true}
              btnTitle={'중복확인'}
              style={{marginBotom: 12, marginRight: 62}}
            />
            <Text
              style={{
                marginLeft: 16,
                marginTop: 8,
                fontSize: 10,
                color: '#00000099',
              }}>
              {this.state.enableName ? '사용 가능해요!' : ''}
            </Text>
            {/* 성별 */}
            <View style={{marginTop: 30, marginHorizontal: 16}}>
              <Text
                style={{
                  fontSize: 13,
                  color: 'gray',
                  marginBottom: 14,
                }}>
                아이의 성별을 선택해주세요
              </Text>
              {/*  */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      gender: !this.state.gender,
                    });
                  }}
                  style={[
                    styles.gender_button,
                    {
                      backgroundColor: this.state.gender ? 'white' : '#32cc73',
                    },
                  ]}>
                  <Text
                    style={{
                      color: this.state.gender ? '#32cc73' : 'white',
                      fontSize: 15,
                    }}>
                    남자
                  </Text>
                </TouchableOpacity>
                <View style={{flex: 0.1}}></View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      gender: !this.state.gender,
                    });
                  }}
                  style={[
                    styles.gender_button,
                    {
                      backgroundColor: this.state.gender ? '#32cc73' : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      color: this.state.gender ? 'white' : '#32cc73',
                      fontSize: 15,
                    }}>
                    여자
                  </Text>
                </TouchableOpacity>
              </View>

              {/* 일 */}
              <View style={{marginTop: 40}}>
                <Text
                  style={{
                    fontSize: 12,
                    marginBottom: 10,
                    color: 'gray',
                  }}>
                  아이가 태어날 날을 입력해주세요
                  <Text style={{color: 'lightgray', fontSize: 10}}>
                    혹은 출산 예정일을 입력해주세요
                  </Text>
                </Text>
                {/*  */}
                <View
                  style={{
                    height: 51,
                    borderWidth: 1,
                    borderColor: '#a9a9a9',
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: -24,
                  }}>
                  <View style={styles.date_view}>
                    <Text style={styles.data_text}>년도</Text>
                  </View>
                  <View style={styles.date_view}>
                    <Text style={styles.data_text}>월</Text>
                  </View>
                  <View style={styles.date_view}>
                    <Text style={styles.data_text}>일</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  gender_button: {
    padding: 13,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#32cc73',
    flex: 1,
    alignItems: 'center',
  },
  date_view: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  data_text: {
    color: '#00000059',
  },
});
