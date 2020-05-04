import React, {Fragment} from 'react';
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
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

const Reply = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}> */}
      <SafeAreaView />
      {/*  */}
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f3f3f3'}}>
          <View style={{backgroundColor: 'white', padding: 15}}>
            <View
              style={{
                flexDirection: 'row',
                height: 150,
                padding: 17,
              }}>
              {/* 이미지 */}
              <View style={{marginRight: 14}}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: 'lightgray',
                    borderRadius: 34,
                  }}></View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginRight: 8, fontSize: 13}}>선우맘</Text>
                      <Text style={{color: '#32cc73', fontSize: 11}}>
                        1세 알레르기
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 5,
                      }}>
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        style={{marginLeft: -5}}
                        width="20"
                        height="20"
                      />
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        style={{marginLeft: -7}}
                        width="20"
                        height="20"
                      />
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        style={{marginLeft: -7}}
                        width="20"
                        height="20"
                      />
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        style={{marginLeft: -7}}
                        width="20"
                        height="20"
                      />
                      <SvgXml
                        xml={SVG('STAR_GRAY')}
                        style={{marginLeft: -7}}
                        width="17"
                        height="17"
                      />
                    </View>
                  </View>
                  <View>
                    <SvgXml xml={SVG('HEART_GRAY')} />
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 15,
                    maxWidth: Dimensions.get('screen').width - 112,
                  }}>
                  <Text
                    style={{fontSize: 10, lineHeight: 18}}
                    numberOfLines={3}>
                    리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Reply')}
                  style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('COMMENT')} />
                  <Text style={{color: 'gray', fontSize: 11, marginLeft: 4}}>
                    댓글달기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={{backgroundColor: 'white', marginTop: 4, padding: 15}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 150,
                  padding: 17,
                }}>
                {/* 이미지 */}
                <View style={{marginRight: 14}}>
                  <View
                    style={{
                      width: 34,
                      height: 34,
                      backgroundColor: 'lightgray',
                      borderRadius: 34,
                    }}></View>
                </View>
                {/*  */}
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginRight: 8, fontSize: 13}}>
                          다른맘
                        </Text>
                        <Text style={{color: '#32cc73', fontSize: 11}}>
                          5세 알레르기
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 15,
                      maxWidth: Dimensions.get('screen').width - 128,
                      flexDirection: 'row',
                      paddingRight: 30,
                    }}>
                    <Text
                      style={{fontSize: 10, lineHeight: 18}}
                      numberOfLines={2}>
                      <Text
                        style={{
                          color: '#32cc73',
                          fontSize: 11,
                          lineHeight: 18,
                          marginRight: 5,
                          fontWeight: 'bold',
                        }}>
                        @선우맘{'  '}
                      </Text>
                      댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                      댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                      댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                      댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                      댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                      댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                      댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                      댓답
                    </Text>
                    <View style={{marginLeft: 13}}>
                      <SvgXml xml={SVG('HEART_GRAY')} />
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      marginTop: 15,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'gray', fontSize: 11, marginLeft: 4}}>
                      댓글달기 | 답글보기(3)
                    </Text>
                  </TouchableOpacity>
                  {/*  */}
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 150,
                        padding: 17,
                        paddingLeft: 0,
                      }}>
                      {/* 이미지 */}
                      <View style={{marginRight: 14}}>
                        <View
                          style={{
                            width: 34,
                            height: 34,
                            backgroundColor: 'lightgray',
                            borderRadius: 34,
                          }}></View>
                      </View>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={{marginRight: 8, fontSize: 13}}>
                                다른맘
                              </Text>
                              <Text style={{color: '#32cc73', fontSize: 11}}>
                                5세 알레르기
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            marginTop: 15,
                            maxWidth: Dimensions.get('screen').width - 170,
                            flexDirection: 'row',
                            paddingRight: 30,
                          }}>
                          <Text
                            style={{fontSize: 10, lineHeight: 18}}
                            numberOfLines={2}>
                            <Text
                              style={{
                                color: '#32cc73',
                                fontSize: 11,
                                lineHeight: 18,
                                marginRight: 5,
                                fontWeight: 'bold',
                              }}>
                              @선우맘{'  '}
                            </Text>
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                            댓답 댓답 댓답 댓답 댓답 댓답 댓답 댓답
                          </Text>
                          <View style={{marginLeft: 13}}>
                            <SvgXml xml={SVG('HEART_GRAY')} />
                          </View>
                        </View>
                        <TouchableOpacity
                          onPress={() => {}}
                          style={{
                            marginTop: 15,
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'gray',
                              fontSize: 11,
                              marginLeft: 4,
                            }}>
                            댓글달기 | 답글보기(3)
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/*  */}
      <View
        style={{
          position: 'relative',
          left: 0,
          bottom: 0,
          flexDirection: 'row',
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 15,
          paddingBottom: 40,
          backgroundColor: 'rgba(200,200,200,0.5)',
        }}>
        <View
          style={{
            flexGrow: 1,
            borderColor: '#32cc73',
            borderWidth: 1,
            borderRadius: 50,
            height: 32,
            lineHeight: 32,
            justifyContent: 'center',
            paddingLeft: 16,
            paddingRight: 16,
          }}>
          <TextInput placeholder="댓글입력" />
        </View>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            backgroundColor: '#32cc73',
            marginLeft: 14,
          }}></View>
      </View>
      {/* </SafeAreaView> */}
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Reply;
