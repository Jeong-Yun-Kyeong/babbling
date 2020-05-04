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

export default class PostDetail extends PureComponent {
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

  _goEditor = () => {
    this.props.navigation.navigate('PostEditor');
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        {/* <SafeAreaView /> */}
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
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: 'white',
              }}>
              {/* 제목 */}
              <View style={{paddingTop: 26}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 18}}>
                    임산부가 반드시 피해야할 화장품 4가지
                  </Text>
                  <Text style={{fontSize: 10, color: 'gray'}}>2020.01.09</Text>
                </View>
                {/*  */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    paddingBottom: 15,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={this._goEditor}
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 56,
                        backgroundColor: 'coral',
                        marginRight: 16,
                      }}></TouchableOpacity>
                    <View>
                      <Text
                        style={{
                          marginRight: 7,
                          fontSize: 15,
                          marginBottom: 8,
                        }}>
                        베블링
                      </Text>
                      <Text style={{color: 'gray', fontSize: 13}}>
                        육아꿀팁이 매주 화,목요일날 올라와요:)
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{paddingLeft: 7}}>
                      <SvgXml xml={SVG('HEART_GRAY')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* 내용 */}
              <View
                style={{
                  paddingTop: 40,
                  paddingBottom: 40,
                  paddingLeft: 16,
                  paddingRight: 16,
                }}>
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
