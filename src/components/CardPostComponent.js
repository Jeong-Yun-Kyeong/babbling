import React, {Fragment, PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';

export default class CardPost extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.nav}
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
      </TouchableOpacity>
    );
  }
}
