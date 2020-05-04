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
import Swipeout from 'react-native-swipeout';

export default class Alarm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topRight: 5,
      bottomRight: 5,
    };
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: '#f9f9f9', flex: 1}}>
          <View style={{padding: 24}}>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
                minHeight: 64,
                shadowOffset: {
                  height: 3,
                },
                shadowOpacity: 0.1,

                elevation: 5,
              }}>
              <View>
                <SvgXml xml={SVG('CIRCLE')} />
              </View>
              <View style={{marginRight: 16}}>
                <SvgXml xml={SVG('COMMENT')} width="24" height="24" />
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 12}} numberOfLines={2}>
                  한선우님이 베베님의 조은로션 리뷰에 답글을 작성했습니다.
                </Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
                minHeight: 64,
                shadowOffset: {
                  height: 3,
                },
                shadowOpacity: 0.1,

                elevation: 5,
              }}>
              <View>
                <SvgXml xml={SVG('CIRCLE')} />
              </View>
              <View style={{marginRight: 16}}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 24,
                    backgroundColor: 'skyblue',
                  }}></View>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 12}} numberOfLines={2}>
                  팔로우하는 베블링 에디터님이 새로운 게시글을 업로드했습니다.
                </Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
                minHeight: 64,
                shadowOffset: {
                  height: 3,
                },
                shadowOpacity: 0.1,

                elevation: 5,
              }}>
              <View style={{opacity: 0}}>
                <SvgXml xml={SVG('CIRCLE')} />
              </View>
              <View style={{marginRight: 16}}>
                <SvgXml xml={SVG('COMMENT')} width="24" height="24" />
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 12}} numberOfLines={2}>
                  어플리케이션 업데이트 안내
                </Text>
              </View>
            </View>
            {/*  */}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
