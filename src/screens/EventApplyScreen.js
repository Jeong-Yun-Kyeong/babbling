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

export default class EventApply extends PureComponent {
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
          <View style={{marginTop: 16}}>
            <Text style={{padding: 16, paddingBottom: 8}}>진행중인 이벤트</Text>
            {/*  */}
            <Swipeout
              style={{
                backgroundColor: 'white',
                paddingLeft: 16,
                marginRight: 16,
              }}
              onOpen={() => {
                this.setState({
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                });
              }}
              onClose={() => {
                this.setState({
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                });
              }}
              autoClose={true}
              right={[
                {
                  // text: '취소하기',
                  backgroundColor: 'transparent',
                  onPress: () => {
                    alert('준비중입니다.');
                  },
                  component: (
                    <View style={{flexDirection: 'row', flex: 1}}>
                      <View style={{width: 8, backgroundColor: 'red'}}>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: 'pink',
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                          }}></View>
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                          backgroundColor: 'red',
                          // marginLeft: 8,
                          marginRight: -8,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 13,
                          }}>
                          취소하기
                        </Text>
                      </View>
                    </View>
                  ),
                },
              ]}>
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
              </View>
            </Swipeout>

            {/*  */}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
