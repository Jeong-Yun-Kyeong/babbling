import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../SvgComponent';
import CompareButton from '../atom/CompareButton';

export default class BuyAndCompare extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: 'coral',
            height: 60,
            position: 'relative',
            left: 0,
            top: 0,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 10,
            }}>
            <CompareButton goCompare={this.props.goCompare} />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderTopWidth: 1,
              borderTopColor: 'gray',
              height: 60,
            }}>
            <View style={{flexDirection: 'row', height: 60}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('JJIM')} />
                <Text style={{color: '#31CC74', fontSize: 11}}>찜</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('PLUS')} />
                <Text style={{color: '#31CC74', fontSize: 11}}>비교함담기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 6,
                  backgroundColor: '#31CC74',
                  margin: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  구매하러 가기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}
