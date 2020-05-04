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

export default class MyPosting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: '#f3f3f3', flex: 1}}>
          <View>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                margin: 15,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <View style={{backgroundColor: 'lightgray', height: 200}}></View>
              <View style={{padding: 15, paddingLeft: 20}}>
                <View>
                  <Text style={{fontSize: 16}}>임산부는 반드시 피하세요!</Text>
                  <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                </View>
                <View></View>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                margin: 15,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <View style={{backgroundColor: 'lightgray', height: 200}}></View>
              <View style={{padding: 15, paddingLeft: 20}}>
                <View>
                  <Text style={{fontSize: 16}}>임산부는 반드시 피하세요!</Text>
                  <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                </View>
                <View></View>
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
