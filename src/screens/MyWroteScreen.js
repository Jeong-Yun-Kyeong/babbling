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

export default class MyWrote extends PureComponent {
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
          {/*  */}
          <View
            style={{
              marginTop: 25,
              marginLeft: 16,
              marginRight: 16,
            }}>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                marginBottom: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 16,
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 8,
                    backgroundColor: 'gray',
                    marginRight: 12,
                  }}></View>
                <View
                  style={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{color: 'gray', fontSize: 13, lineHeight: 22}}>
                      존슨즈베이비
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        lineHeight: 22,
                      }}>
                      수딩내추럴 인텐스 모이스처 크림
                    </Text>
                  </View>
                  <View style={{alignSelf: 'flex-start'}}>
                    <Text>more</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'lightgray',
                  height: 1,
                  marginRight: 16,
                  marginLeft: 16,
                }}></View>
              <View
                style={{
                  padding: 16,
                  paddingTop: 10,
                }}>
                <SvgXml xml={SVG('STAR_CHECKED')} height="26" width="26" />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 22,
                    marginLeft: 8,
                    marginTop: 8,
                  }}>
                  허허 조쿠만,,촉촉해 아주 기냥 어허허 별점 하나는 기냥 안 줬어
                </Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                marginBottom: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 16,
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 8,
                    backgroundColor: 'gray',
                    marginRight: 12,
                  }}></View>
                <View
                  style={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{color: 'gray', fontSize: 13, lineHeight: 22}}>
                      존슨즈베이비
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        lineHeight: 22,
                      }}>
                      수딩내추럴 인텐스 모이스처 크림
                    </Text>
                  </View>
                  <View style={{alignSelf: 'flex-start'}}>
                    <Text>more</Text>
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

const styles = StyleSheet.create({});
