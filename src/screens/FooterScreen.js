import React, {Fragment, PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

export default class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      infoVisible: 'none',
    };
  }

  render() {
    return (
      <Fragment>
        {/*  */}
        <View>
          <Image
            source={require('../images/add02.png')}
            style={{width: '100%'}}
          />
        </View>
        {/*  */}
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: 'white',
            marginBottom: 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#6b6b6b',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: '500', marginRight: 20, fontSize: 13}}>
                공지
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'gray', fontSize: 13}}>
                공지 제목 공지 제목 공지 제목
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: '600', marginRight: 20, fontSize: 13}}>
                공지
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'gray', fontSize: 13}}>
                공지 제목 공지 제목 공지 제목
              </Text>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={{backgroundColor: '#f9f9f9', height: 400}}>
          {/* box */}
          <View style={{padding: 15, backgroundColor: 'white'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                padding: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.1,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              {/* 칭찬 */}
              <View
                style={{
                  padding: 8,
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('BABBLING')} style={{margin: 10}} />
                <Text
                  style={{color: '#32cc73', fontSize: 12, fontWeight: '500'}}>
                  베블링 칭찬하기
                </Text>
              </View>
              {/* 카플 */}
              <View
                style={{
                  backgroundColor: '#dadada',
                  width: 1,
                  marginTop: 5,
                  marginBottom: 5,
                }}></View>
              {/*  */}
              <View
                style={{
                  // flex: 1,
                  padding: 8,
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('KAKAOPLUS')} style={{margin: 10}} />
                <Text
                  style={{color: '#32cc73', fontSize: 12, fontWeight: '500'}}>
                  베블링 카카오 플러스 친구
                </Text>
              </View>
              {/*  */}
              <View
                style={{
                  backgroundColor: '#dadada',
                  width: 1,
                  marginTop: 5,
                  marginBottom: 5,
                }}></View>
              {/* 기타 */}
              <View
                style={{
                  padding: 8,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('YOUTUBE')} style={{margin: 3}} />
                <SvgXml xml={SVG('INSTAGRAM')} style={{margin: 3}} />
                <SvgXml xml={SVG('NAVERBLOG')} style={{margin: 3}} />
              </View>
            </View>
          </View>

          {/* 고객 */}
          <View
            style={{
              padding: 15,
              paddingTop: 0,
              paddingBottom: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#6b6b6b',
                height: 60,
                justifyContent: 'space-between',
                paddingRight: 10,
                alignItems: 'center',
              }}>
              <View style={{paddingLeft: 20}}>
                <Text style={{fontSize: 15, fontWeight: '500'}}>
                  온라인 고객센터
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    padding: 4,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 50,
                    shadowColor: '#aaa',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 3.84,

                    elevation: 5,
                    marginRight: 10,
                  }}>
                  <Text
                    style={{
                      color: '#32cc73',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    1:1 문의 작성하기
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    padding: 4,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 50,
                    shadowColor: '#aaa',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      color: '#32cc73',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    FAQ 보러가기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexGrow: 1,
                  borderRightColor: 'gray',
                  borderRightWidth: 1,
                  margin: 5,
                  paddingLeft: 5,
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontSize: 10}}>이용약관 및 개인정보처리방침</Text>
              </View>
              {/* <View
              style={{width: 1, height: '90%', backgroundColor: 'gray'}}></View> */}
              <View
                style={{
                  flexGrow: 1,
                  margin: 5,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 10}}>회사소개</Text>
              </View>
              <View
                style={{
                  margin: 5,
                  borderLeftColor: 'gray',
                  borderLeftWidth: 1,
                  flexGrow: 1,
                  paddingRight: 10,
                  alignItems: 'flex-end',
                }}>
                <Text style={{fontSize: 10}}>사업자정보확인</Text>
              </View>
            </View>
          </View>
          {/* 화살표필요 */}
          <TouchableOpacity
            onPress={() => {
              this.setState({
                infoVisible: this.state.infoVisible == 'flex' ? 'none' : 'flex',
              });
            }}
            style={{
              // backgroundColor: 'gray',
              // height: 5,
              // justifyContent: 'flex-end',
              paddingRight: 24,
              alignItems: 'flex-end',
            }}>
            <SvgXml xml={SVG('DOWNMORE')} />
          </TouchableOpacity>
          {/*  */}
          <View
            style={[
              {padding: 20, display: this.state.infoVisible},
              this.state.infoVisible == 'flex' ? null : {height: 0},
            ]}>
            <Text style={{fontSize: 10}}>주식회사 베이비랩</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 10, marginRight: 20}}>
                대표이사 | 이지백
              </Text>
              <Text style={{fontSize: 10}}>사업자등록번호 | 850-87-01216</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Text style={{fontSize: 10, marginRight: 15}}>
                Tel | 042-826-6212
              </Text>
              <Text style={{fontSize: 10, marginRight: 15}}>
                Fax | 050-4889-3993
              </Text>
              <Text style={{fontSize: 10}}>Mail | babylab.v@gmail.com</Text>
            </View>

            <Text style={{fontSize: 10}}>
              주소 | 본사:대전광역시 유성구 덕명로 97번길 19,1층
            </Text>
            <Text style={{fontSize: 10}}>
              기업 부설 연구소:대전광역시 유성구 대학로99, 산학연교육연구관 별관
              308호
            </Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
