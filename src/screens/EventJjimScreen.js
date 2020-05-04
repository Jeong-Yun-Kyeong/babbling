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

export default class EventJjim extends PureComponent {
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
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View style={{padding: 16, marginTop: 16}}>
            <Text style={{paddingBottom: 8}}>진행예정 이벤트</Text>
            {/*  */}
            <View
              style={{
                backgroundColor: 'pink',
                height: 88,
                borderRadius: 5,
              }}>
              <View style={{position: 'absolute', top: 13, left: 23}}>
                <Text style={{fontSize: 11, marginBottom: 3}}>
                  이러한 이벤트한다 설명
                </Text>
                <Text style={{fontSize: 23}}>화장품이름</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  paddingLeft: 10,
                  paddingRight: 10,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  position: 'absolute',
                  right: 15,
                  bottom: 5,
                }}>
                <Text style={{fontSize: 11}}>1.10 ~ 1.12</Text>
              </View>
              <View style={{position: 'absolute', right: 12, top: 5}}>
                <SvgXml xml={SVG('HEART_RED')} />
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
