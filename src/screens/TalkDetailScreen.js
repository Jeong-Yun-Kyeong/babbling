import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {BlurView} from '@react-native-community/blur';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

export default class TalkDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  componentDidMount() {}

  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        {/* <SafeAreaView /> */}
        <BlurView
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: Dimensions.get('screen').width,
            height: getStatusBarHeight() + 62,
            zIndex: 10,
            // backgroundColor: 'rgba(255,255,255,0.5)',
          }}
          blurType="light"
          blurAmount={10}
          automaticallyAdjustContentInsets={true}
          //   reducedTransparencyFallbackColor="white"
        >
          <View
            style={{
              marginTop: getStatusBarHeight(),
              flexDirection: 'row',
              paddingLeft: 24,
              paddingRight: 24,
              justifyContent: 'space-between',
              height: 62,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <SvgXml xml={SVG('BACKIOS')} />
            </TouchableOpacity>
            <View>
              <Text style={{color: 'white', fontSize: 15}}>
                상세보기라 해당 제목이 들어와야됨
              </Text>
            </View>
            <View></View>
          </View>
        </BlurView>
        <ScrollView
          style={{backgroundColor: 'white', flex: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#f3f3f3'}}>
            <View style={{backgroundColor: 'black'}}>
              <Image
                source={require('../images/talkDetail.jpg')}
                //   source={require('../images/1.jpeg')}
                resizeMode="cover"
                style={{
                  width: Dimensions.get('screen').width,
                  height: Dimensions.get('screen').width,
                }}
              />
            </View>

            {/*  */}
            <View
              style={{
                paddingLeft: 32,
                paddingRight: 32,
                backgroundColor: 'white',
              }}>
              {/* 제목 */}
              <View style={{paddingTop: 26}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 18}}>
                    주말에 사랑의 불시착 봐야해
                  </Text>
                  <Text style={{fontSize: 10, color: 'gray'}}>2020.01.09</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 24,
                        backgroundColor: 'coral',
                        marginRight: 7,
                      }}></View>
                    <Text
                      style={{marginRight: 7, fontSize: 12, fontWeight: '600'}}>
                      선우맘
                    </Text>
                    <Text
                      style={{
                        color: '#32cc73',
                        marginRight: 7,
                        fontSize: 11,
                        fontWeight: '600',
                      }}>
                      1세
                    </Text>
                    <Text
                      style={{
                        color: '#32cc73',
                        marginRight: 7,
                        fontSize: 11,
                        fontWeight: '600',
                      }}>
                      알레르기
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{paddingLeft: 7}}>
                      <SvgXml xml={SVG('HEART_GRAY')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft: 7}}>
                      <SvgXml xml={SVG('HEART')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft: 7}}>
                      <SvgXml xml={SVG('SHARE')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* 내용 */}
              <View style={{paddingTop: 40, paddingBottom: 40}}>
                <Text numberOfLines={6} style={{fontSize: 13, lineHeight: 22}}>
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용
                  게시판 내용 게시판 내용 게시판 내용 게시판 내용 게시판 내용{' '}
                </Text>
              </View>
              {/* 수치 */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 10,
                }}>
                <TouchableOpacity style={{padding: 16, alignItems: 'center'}}>
                  <SvgXml xml={SVG('HEART_GRAY')} />
                  <Text>nn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 16, alignItems: 'center'}}>
                  <SvgXml xml={SVG('HEART')} />
                  <Text>nn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 16, alignItems: 'center'}}>
                  <SvgXml xml={SVG('SHARE')} />
                  <Text>nn</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                marginTop: 4,
                paddingBottom: 70,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                }}>
                {/* title */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 14,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 20,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 34,
                        backgroundColor: 'coral',
                        marginRight: 14,
                      }}></View>
                    <Text style={{marginRight: 8, fontSize: 13}}>서누맘</Text>
                    <Text
                      style={{
                        fontSize: 11,
                        color: '#32cc73',
                        fontWeight: '600',
                      }}>
                      5세 알레르기
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'gray', fontSize: 11}}>수정 | </Text>
                    <Text style={{color: 'gray', fontSize: 11}}>삭제</Text>
                  </View>
                </View>
                {/* contents */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 50,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{paddingRight: 28, fontSize: 11}}
                    numberOfLines={4}>
                    댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
                    댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
                    댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
                    댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
                    댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
                  </Text>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <SvgXml xml={SVG('HEART_GRAY')} />
                    <Text style={{fontSize: 11, color: 'gray'}}>nnn</Text>
                  </View>
                </View>
                {/* reply */}
                <View
                  style={{
                    paddingLeft: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <SvgXml xml={SVG('COMMENT')} />
                  <Text style={{color: 'gray', fontSize: 11}}>
                    댓글달기 | 답글보기(3)
                  </Text>
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
            backgroundColor: 'white',
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
      </Fragment>
    );
  }
}
