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

export default class EventWinning extends PureComponent {
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
          <View style={{padding: 16, backgroundColor: 'white'}}>
            <Text>[평가단]작성할 리뷰</Text>
            <View>
              {/*  */}
              <View
                style={{
                  // backgroundColor: 'coral',
                  marginTop: 12,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 120,
                    height: 72,
                    borderRadius: 7,
                    backgroundColor: 'pink',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 15,
                    alignItems: 'center',
                  }}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{color: 'gray', fontSize: 13, marginRight: 5}}>
                        이러한 이벤트한다 설명
                      </Text>
                      <Text style={{fontSize: 13, color: '#32cc73'}}>D-4</Text>
                    </View>
                    <Text
                      style={{fontWeight: '500', fontSize: 15, marginTop: 6}}>
                      화장품 이름
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('EvaluationReview');
                    }}
                    style={{alignItems: 'center'}}>
                    <SvgXml xml={SVG('WRITEING')} />
                    <Text style={{color: 'gray', fontSize: 11, marginTop: 3}}>
                      리뷰작성
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/*  */}
              <View
                style={{
                  // backgroundColor: 'coral',
                  marginTop: 12,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 120,
                    height: 72,
                    borderRadius: 7,
                    backgroundColor: 'pink',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 15,
                    alignItems: 'center',
                  }}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{color: 'gray', fontSize: 13, marginRight: 5}}>
                        이러한 이벤트한다 설명
                      </Text>
                      <Text style={{fontSize: 13, color: '#32cc73'}}>D-4</Text>
                    </View>
                    <Text
                      style={{fontWeight: '500', fontSize: 15, marginTop: 6}}>
                      화장품 이름
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('EvaluationReview');
                    }}
                    style={{alignItems: 'center'}}>
                    <SvgXml xml={SVG('WRITEING')} />
                    <Text style={{color: 'gray', fontSize: 11, marginTop: 3}}>
                      리뷰작성
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/*  */}
            </View>
          </View>
          {/*  */}
          <View style={{padding: 16}}>
            <Text>지난 이벤트</Text>
            {/*  */}
            <View
              style={{
                // backgroundColor: 'coral',
                marginTop: 12,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 120,
                  height: 72,
                  borderRadius: 7,
                  backgroundColor: 'pink',
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  paddingLeft: 16,
                  paddingRight: 15,
                  alignItems: 'center',
                }}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'gray', fontSize: 13, marginRight: 5}}>
                      이러한 이벤트한다 설명
                    </Text>
                  </View>
                  <Text style={{fontWeight: '500', fontSize: 15, marginTop: 6}}>
                    화장품 이름
                  </Text>
                </View>
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
