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
import {TextInput} from 'react-native-gesture-handler';

export default class QnA extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      alarmToggle: false,
      repleToggle: false,
      eventToggle: false,
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View style={{padding: 24}}>
            <Text style={{fontSize: 16}}>문의 분류</Text>
            <View></View>
            <Text style={{fontSize: 16}}>문의 내용</Text>
            <View
              style={{
                backgroundColor: '#f3f3f3',
                padding: 24,
                paddingTop: 20,
                borderRadius: 5,
                height: 180,
              }}>
              <TextInput
                placeholder={'의견을 입력해주세요'}
                placeholderTextColor={'gray'}
              />
            </View>
            <Text style={{fontSize: 16}}>첨부파일</Text>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
            </View>
            <View style={{marginTop: 12}}>
              <Text style={{color: '#838383', fontSize: 11}}>
                이미지 파일(GIF, PNG, JPG)을 기준으로 최대 10MB이하, 최대
                5개까지 등록 가능합니다.
              </Text>
            </View>
            <Text style={{fontSize: 16}}>답변받을 이메일</Text>
            {/*  */}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
