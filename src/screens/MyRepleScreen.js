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

const DATAS = [1, 2, 3, 4];
export default class MyReple extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getList = (datas) => {
    return datas.map((data, index) => {
      return (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 48,
              backgroundColor: 'gray',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              flexGrow: 1,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginLeft: 12,
                marginRight: 12,
                flexDirection: 'row',
                alignItems: 'center',
                maxWidth: Dimensions.get('screen').width - 164,
              }}>
              <Text numberOfLines={2} style={{fontSize: 13, lineHeight: 22}}>
                선우 님이 답글을 남겼습니다: '사랑의 불시착 맨날 쉬면 우리는
                어떡하라고'
                <Text style={{color: 'gray', fontSize: 13}}>33분</Text>
              </Text>
            </View>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 8,
                backgroundColor: 'gray',
              }}></View>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View style={{padding: 16, marginTop: 5}}>
            <Text style={{marginBottom: 19}}>최신 댓글</Text>
            {/*  */}
            {this._getList(DATAS)}
            {/*  */}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
