import React, {Fragment, PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from './SvgComponent';

export default class CardPost extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.nav}
        style={[{
          backgroundColor: 'white',
          borderRadius: 8,
          overflow: 'hidden',
          elevation:3
        },this.props.style || {}]}>
        <View style={{backgroundColor: 'lightgray', aspectRatio:1.7}}></View>
        <View
          style={{
            padding: 15,
            paddingLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 16}}>임산부는 반드시 피하세요!</Text>
            <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
          </View>
          <View>
            <SvgXml xml={SVG('SCRAP')} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
