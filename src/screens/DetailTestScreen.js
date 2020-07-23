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
  Modal,
} from 'react-native';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import BuyAndCompare from '../components/molecule/BuyAndCompareBottom';
import {URL} from '../Constant';

const DATAS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const HorizonScroll = (datas) => {
  return datas.map((data, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          alert('상세보기 연결 준비중입니다.');
        }}
        style={{alignItems: 'center', justifyContent: 'center'}}
        key={index}>
        <Image
          source={require('../images/3.jpeg')}
          resizeMode="contain"
          style={{width: 120, height: 88}}
        />
        <Text style={{color: 'gray', fontSize: 10, padding: 3, marginTop: 12}}>
          브랜드명
        </Text>
        <Text>뽀득 세제</Text>
      </TouchableOpacity>
    );
  });
};

export default class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      imageModalVisible: false,
      ingredeintCountView: 'none',
    };
  }

  componentDidMount() {
    console.log(this.props.route.params.brand, this.props.route.params.name);
  }

  ingredients01 = () => {
    return (
      <View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, width: 90}}>EWG 주의 등급</Text>
              <Text style={{fontSize: 12}}>n개</Text>
            </View>
            <SvgXml xml={SVG('CAUTION')} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, width: 90}}>KCII 안정성</Text>
            <Text style={{fontSize: 12}}>n개</Text>
          </View>
          <SvgXml xml={SVG('KCII_DANGER')} />
        </View>
      </View>
    );
  };

  ingredients02 = () => {
    return (
      <View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, width: 90}}>알레르기</Text>
              <Text style={{fontSize: 12}}>n개</Text>
            </View>
            <SvgXml xml={SVG('ALLERGY')} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, width: 90}}>식품첨가물</Text>
            <Text style={{fontSize: 12}}>nn개</Text>
          </View>
          <SvgXml xml={SVG('FOOD_ADDITIVES')} />
        </View>
      </View>
    );
  };

  ingredients03 = () => {
    return (
      <View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, width: 90}}>알레르기 유발</Text>
              <Text style={{fontSize: 12}}>n개</Text>
            </View>
            <SvgXml xml={SVG('ALLERGY')} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, width: 90}}>독성정보</Text>
            <Text style={{fontSize: 12}}>nn개</Text>
          </View>
          <SvgXml xml={SVG('TOXIC')} />
        </View>
      </View>
    );
  };

  ingredients04 = () => {
    return (
      <View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, width: 90}}>필수성분</Text>
              <Text style={{fontSize: 12}}>n개</Text>
            </View>
            <SvgXml xml={SVG('ESSENTIAL')} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, width: 90}}>EWG 주의등급</Text>
            <Text style={{fontSize: 12}}>n개</Text>
          </View>
          <SvgXml xml={SVG('CAUTION')} />
        </View>
      </View>
    );
  };

  ingredientsCount = (kind) => {
    switch (kind) {
      case '1':
        return this.ingredients01();
      case '2':
        return this.ingredients02();
      case '3':
        return this.ingredients03();
      case '4':
        return this.ingredients04();
      default:
        console.log('없음');
    }
  };

  _basicInformation = (datas) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 1,
          paddingLeft: 39,
          paddingRight: 39,
        }}>
        {/* 이미지 */}
        <View
          style={{
            height: 240,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'coral',
          }}>
          <Image
            source={{
              uri:
                URL +
                '/media/product/' +
                datas.code +
                '/' +
                datas.brand_name +
                '/' +
                datas.name +
                '.jpg',
            }}
            style={{
              width: 180,
              height: 180,
              // maxHeight: 180,
              // maxWidth: 180,
            }}
            resizeMode="contain"
          />
          {console.log(
            URL +
              '/media/product/' +
              datas.code +
              '/' +
              datas.brand_name +
              '/' +
              datas.name +
              '.jpg',
          )}
        </View>
        {/* 상품명 */}
        <View
          style={{
            // backgroundColor: 'aquamarine',
            height: 43,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, color: 'gray'}}>
            {/* 존슨즈 베이비 */}
            {datas.brand_name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 10,
            }}>
            {/* 수딩내추럴 인텐스 모이스처 크림 */}
            {datas.name}
          </Text>
        </View>
        {/* 평가,용량 및 가격 */}
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'cornflowerblue',
            height: 52,
          }}>
          {/* 우유병그림 및 평점 */}
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <SvgXml xml={SVG('STAR_CHECKED')} width="26" height="26" />
              <SvgXml
                xml={SVG('STAR_CHECKED')}
                width="26"
                height="26"
                style={{marginLeft: -9}}
              />
              <SvgXml
                xml={SVG('STAR_CHECKED')}
                width="26"
                height="26"
                style={{marginLeft: -9}}
              />
              <SvgXml
                xml={SVG('STAR_CHECKED')}
                width="26"
                height="26"
                style={{marginLeft: -9}}
              />
              <SvgXml
                xml={SVG('STAR_CHECKED')}
                width="26"
                height="26"
                style={{marginLeft: -9}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#31CC74'}}>
                {datas.star == null ? 0.0 : datas.star}
              </Text>
              <Text style={{color: 'rgba(0,0,0,0.35)'}}>
                ({datas.star_count == null ? 0 : datas.star_count})
              </Text>
            </View>
          </View>
          {/* 가격,용량등 */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'rgba(0,0,0,0.6)', fontSize: 12}}>
              435g(80매)
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const Datas = this.props.route.params.data;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView
            style={{
              backgroundColor: 'white',
            }}
            showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: 'rgb(245,245,245)'}}>
              {/* 제품이미지 */}
              {this._basicInformation(Datas)}
              {/* 성분그래프?? */}
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: 4,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 18,
                  // paddingBottom: 18,
                }}>
                <View style={{}}>
                  <SvgXml xml={SVG('SAFETYMINT')} width="44" height="44" />
                </View>
                {/* graph */}
                <View style={{paddingTop: 15, paddingBottom: 10}}>
                  <View
                    style={{
                      backgroundColor: 'rgb(65,195,0)',
                      height: 16,
                      borderRadius: 16,
                    }}></View>
                </View>
                {/*  */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginBottom: 14,
                  }}
                  onPress={() => {
                    this.state.ingredeintCountView == 'none'
                      ? this.setState({ingredeintCountView: 'flex'})
                      : this.setState({ingredeintCountView: 'none'});
                  }}>
                  <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.87)'}}>
                    총 성분
                  </Text>
                  <Text style={{fontSize: 12, marginLeft: 18}}>nn개</Text>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                    }}>
                    <SvgXml xml={SVG('DOWNMORE')} />
                  </View>
                </TouchableOpacity>
                {/* 디테일1 내용 */}
                <View
                  style={{
                    display: this.state.ingredeintCountView,
                    paddingBottom: 20,
                  }}>
                  {this.ingredientsCount(Datas.code.charAt(0))}
                </View>
              </View>
              {/* 전성분보러가기 */}
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 65,
                  flexDirection: 'row',
                  paddingLeft: 25,
                  paddingRight: 25,
                }}
                onPress={() => {
                  this.props.navigation.navigate('Ingredients', {
                    kind: Datas.code.charAt(0),
                    ingredient: Datas.ingredients,
                  });
                }}>
                <View></View>
                <Text style={{fontSize: 17, color: 'gray'}}>
                  전 성분 보러가기
                </Text>
                <SvgXml xml={SVG('ARROWRIGHT')} />
              </TouchableOpacity>

              {/* doc tip 주석 */}
              {/* <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: true});
                }}>
                <Image
                  source={require('../images/doctor_tip/doc_tip_banner.png')}
                  style={{
                    width: Dimensions.get('window').width,
                    height: (173 * Dimensions.get('window').width) / 1040,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity> */}

              {/* caution! */}
              <View style={{backgroundColor: 'rgb(245,245,245)', padding: 16}}>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'rgb(70,70,70)',
                    marginBottom: 3,
                  }}>
                  Caution!
                </Text>
                <Text style={{fontSize: 10, color: 'rgb(70,70,70)'}}>
                  제품 구매 전 판매업자가 표기한 EWG의 등급, 전성분, 알레르기
                  유발성분을 한번 더 확인하시길 바랍니다.
                </Text>
              </View>

              {/* 리뷰 */}
              <View
                style={{backgroundColor: 'white', padding: 15, paddingTop: 35}}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <Text style={{color: 'rgba(0,0,0,0.6)', fontSize: 14}}>
                    우리 아이를 위한 솔직 리뷰
                  </Text>
                  <Text style={{color: 'rgb(47,211,121)', fontSize: 14}}>
                    {Datas.star_count == null ? 0 : Datas.star_count}
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#31CC74',
                        fontSize: 25,
                        fontWeight: 'bold',
                      }}>
                      {Datas.star == null ? 0.0 : Datas.star}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        width="28"
                        height="28"
                      />
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        width="28"
                        height="28"
                        style={{marginLeft: -9}}
                      />
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        width="28"
                        height="28"
                        style={{marginLeft: -9}}
                      />
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        width="28"
                        height="28"
                        style={{marginLeft: -9}}
                      />
                      <SvgXml
                        xml={SVG('STAR_CHECKED')}
                        width="28"
                        height="28"
                        style={{marginLeft: -9}}
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ReviewWrite', {
                        data: Datas,
                      });
                    }}
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgb(112,112,112)',
                      height: 96,
                      width: 96,
                      borderRadius: 5,
                      margin: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({imageModalVisible: true});
                    }}
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgb(112,112,112)',
                      height: 96,
                      width: 96,
                      borderRadius: 5,
                      margin: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>click!</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              {/*  */}
              {/* <View
                style={{
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    height: 0.5,
                    marginLeft: 16,
                    marginRight: 16,
                  }}></View>
              </View> */}
              {/* 댓글 */}
              {/* <View style={{backgroundColor: 'white', padding: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    // height: 150,
                    padding: 17,
                  }}>
                  <View style={{marginRight: 14}}>
                    <View
                      style={{
                        width: 34,
                        height: 34,
                        backgroundColor: 'lightgray',
                        borderRadius: 34,
                      }}></View>
                  </View>
                  <View style={{flexGrow: 1}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{marginRight: 8, fontSize: 13}}>
                            선우맘
                          </Text>
                          <Text style={{color: '#32cc73', fontSize: 11}}>
                            1세 알레르기
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 5,
                            backgroundColor: 'pink',
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
                      </View> */}
              {/* 하트찜 버튼 주석 */}
              {/* <View>
                        <SvgXml xml={SVG('HEART_GRAY')} />
                      </View> */}
              {/* </View>
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
                    </View> */}
              {/* 댓글달기 주석 */}
              {/* <TouchableOpacity
                      onPress={() => this.props.navigatison.navigate('Reply')}
                      style={{
                        marginTop: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={SVG('COMMENT')} />
                      <Text
                        style={{color: 'gray', fontSize: 11, marginLeft: 4}}>
                        댓글달기 | 답글보기(3)
                      </Text>
                    </TouchableOpacity> */}
              {/* </View>
                </View> */}
              {/* </View> */}

              {/*  */}
              {/* <TouchableOpacity
                style={{
                  backgroundColor: '#f9f9f9',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#717171', fontSize: 13, padding: 15}}>
                  리뷰 nnn개 전체보기
                </Text>
                <SvgXml xml={SVG('ARROWRIGHT')} />
              </TouchableOpacity> */}
              {/*  */}
              {/* <View
                style={{padding: 16, paddingTop: 32, backgroundColor: 'white'}}>
                <Image
                  source={require('../images/detail.png')}
                  resizeMode="contain"
                  style={{marginBottom: 10}}
                />
              </View> */}
              {/* more */}
              {/* <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#f9f9f9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#717171', fontSize: 13, padding: 15}}>
                  상세정보 더보기
                </Text>
                <SvgXml xml={SVG('ARROWRIGHT')} />
              </TouchableOpacity> */}
              {/*  */}
              {/* <View style={{backgroundColor: 'white', paddingTop: 16}}>
                <View style={{padding: 16}}>
                  <Text>추천상품</Text>
                </View>
                <ScrollView
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 4,
                    paddingBottom: 18,
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {HorizonScroll(DATAS)}
                </ScrollView>
              </View> */}
              {/*  */}
              {/* <View style={{backgroundColor: 'white', paddingTop: 16}}>
                <View style={{padding: 16}}>
                  <Text>최근 본 상품</Text>
                </View>
                <ScrollView
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 4,
                    paddingBottom: 18,
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {HorizonScroll(DATAS)}
                </ScrollView>
              </View> */}
            </View>
          </ScrollView>
          {/*  */}
          {/*  */}
          {/*  */}
          {/* 찜,비교함,구매버튼 주석*/}
          {/* <BuyAndCompare
            goCompare={() => {
              this.props.navigation.navigate('Compare');
            }}
          /> */}
        </SafeAreaView>
        <Modal visible={this.state.modalVisible} transparent={true}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'coral',
                width: 350,
                height: 350,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  zIndex: 10,
                }}>
                <TouchableOpacity
                  style={{position: 'absolute', top: 15, right: 15}}
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <SvgXml xml={SVG('CANCEL_W')} />
                </TouchableOpacity>
                <View style={{padding: 30, marginTop: 100}}>
                  <Text
                    style={{color: 'white', lineHeight: 25}}
                    numberOfLines={4}>
                    꿀팁 내용 어쩌고 저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁 내용
                    어쩌고 저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁 내용 어쩌고
                    저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁
                    내용 어쩌고 저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁 내용 어쩌고
                    저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁
                    내용 어쩌고 저쩌고 꿀팁 내용 어쩌고 저쩌고 꿀팁 내용 어쩌고
                    저쩌고{' '}
                  </Text>
                </View>
              </View>
              <Image
                source={require('../images/DocTip.png')}
                resizeMode="contain"
                style={{width: 350, height: 350}}
              />
            </View>
          </View>
        </Modal>
        <Modal visible={this.state.imageModalVisible}>
          <StatusBar barStyle={'light-content'} />
          <SafeAreaView style={{backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', padding: 14}}
              onPress={() => {
                this.setState({imageModalVisible: false});
              }}>
              <SvgXml xml={SVG('CANCEL_W')} />
            </TouchableOpacity>
            <View>
              <Image
                source={require('../images/5.jpeg')}
                style={{marginTop: 50}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                paddingLeft: 32,
                paddingRight: 32,
                paddingBottom: 10,
                paddingTop: 10,
              }}>
              {/* 리뷰 주석 */}
              {/* <Text style={{color: 'white'}} numberOfLines={4}>
                리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰
                내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용
                리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰
                내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용
                리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용{' '}
              </Text> */}
            </View>
            <View
              style={{
                height: 1,
                paddingLeft: 16,
                paddingRight: 16,
                marginTop: 10,
              }}>
              <View style={{backgroundColor: 'gray', height: 1}}></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../images/1.jpeg')}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    marginRight: 15,
                  }}
                />
                <View style={{justifyContent: 'center'}}>
                  <Text style={{color: 'lightgray', marginBottom: 10}}>
                    존슨즈 베이비
                  </Text>
                  <Text style={{color: 'white', fontWeight: '600'}}>
                    수딩내추럴 인텐스 모이스처크림
                  </Text>
                </View>
              </View>
              {/* 하트 주석 */}
              {/* <Image source={require('../images/icon/Heart_white_line.png')} /> */}
            </View>
          </View>
        </Modal>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
