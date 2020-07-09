import React, {PureComponent} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {URL} from '../Constant';

import SVG from '../components/SvgComponent';

const DATAS01 = [
  {icon: 'CAUTION', name: '디메치콘', kcii: true},
  {icon: 'CAUTION', name: '알로에베라잎추출물', kcii: false},
  {icon: 'CAUTION', name: '토코페릴아세테이트', kcii: false},
  {icon: 'CAUTION', name: '프로필렌글라이콜', kcii: false},
];
const DATAS02 = [
  {icon: 'UNMARKED', name: '코코글리세라이드', kcii: false},
  {icon: 'UNMARKED', name: '하이드로제네이티드팜글리세라이드', kcii: false},
  {
    icon: 'UNMARKED',
    name: '올레익/리놀레익/리놀레닉폴리글리세라이드',
    kcii: false,
  },
  {icon: 'UNMARKED', name: '이테야자열매오일', kcii: false},
];
const DATAS03 = [
  {icon: 'SAFETY', name: '정제수', kcii: false},
  {icon: 'SAFETY', name: '글리세린', kcii: false},
  {
    icon: 'SAFETY',
    name: '세틸알코올',
    kcii: false,
  },
  {icon: 'SAFETY', name: '콩오일', kcii: false},
];

const DATAS2_1 = [{icon: 'CAUTION', name: '향료', allergy: true, toxic: true}];

const DATAS2_2 = [
  {icon: 'UNMARKED', name: '식물성양이온계', allergy: false, toxic: true},
];
const DATAS3_1 = [
  {icon: 'UNMARKED', name: '이산화규소', essential: true},
  {icon: 'SAFETY', name: '일불소인산나트륨(불소)', essential: true},
];

const DATAS3_2 = [
  {icon: 'CAUTION', name: '자몽종자추출물'},
  {icon: 'UNMARKED', name: 'D-소비돌액'},
  {icon: 'UNMARKED', name: '마트리카아엑스'},
  {icon: 'UNMARKED', name: '비트레드'},
];

export default class Ingredients extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalTitle: '',
      modalCaution: '',
      one: 'none',
      two: 'none',
      three: 'none',
      four: 'flex',
      kind: props.route.params.kind,
      ingredient: props.route.params.ingredient,
      data: null,
    };
  }

  _getIngredientsData = () => {
    form = new FormData();
    form.append('kind', this.state.kind);
    form.append('ingredient', this.state.ingredient);
    fetch(URL + '/product/detail/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log('--------------- data : ', resJson[0]);
        this.setState({data: resJson[0]});
      });
  };

  componentDidMount() {
    console.log(
      '------------------가져오는 필수 데이터 : ' +
        this.state.kind +
        ', ' +
        this.state.ingredient,
    );
    this._getIngredientsData();
    console.log(this.state.kind);
    switch (this.state.kind) {
      case '1':
        console.log(this.state.kind);
        this.setState({one: 'flex', two: 'none', three: 'none', four: 'none'});
        break;
      case '2':
        console.log(this.state.kind);
        this.setState({one: 'none', two: 'flex', three: 'none', four: 'none'});
        break;
      case '3':
        console.log(this.state.kind);
        this.setState({one: 'none', two: 'none', three: 'flex', four: 'none'});
        break;
      case '4':
        console.log(this.state.kind);
        this.setState({one: 'none', two: 'none', three: 'none', four: 'flex'});
        break;
      default:
        console.log('없음');
    }
  }

  _list = (datas) => {
    return datas.map((data, index) => {
      return (
        <View
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 6,
            paddingBottom: 6,
          }}
          key={index}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                modalVisible: true,
                modalTitle: data.name,
                modalCaution: data.icon,
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {/* icon */}
              <SvgXml xml={SVG(data.icon)} width="36" height="36" />
              <View
                style={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: 10,
                }}>
                {/* name */}
                <Text style={{paddingLeft: 20}}>{data.name}</Text>
                {/* kcii */}
                {data.kcii ? (
                  <SvgXml xml={SVG('KCII_DANGER')} width="36" height="36" />
                ) : null}
              </View>
              {/* arrowright */}
              <SvgXml xml={SVG('ARROWRIGHT')} />
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  _list_2 = (datas) => {
    return datas.map((data, index) => {
      return (
        <View
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 6,
            paddingBottom: 6,
          }}
          key={index}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                modalVisible: true,
                modalTitle: data.name,
                modalCaution: data.icon,
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {/* icon */}
              <SvgXml xml={SVG(data.icon)} width="36" height="36" />
              <View
                style={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: 10,
                }}>
                {/* name */}
                <Text style={{paddingLeft: 20}}>{data.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  {/* allergy */}
                  {data.allergy ? (
                    <SvgXml
                      xml={SVG('ALLERGY')}
                      width="36"
                      height="36"
                      style={{marginRight: 10}}
                    />
                  ) : null}
                  {/* toxic */}
                  {data.toxic ? (
                    <SvgXml xml={SVG('TOXIC')} width="36" height="36" />
                  ) : null}
                </View>
              </View>
              {/* arrowright */}
              <SvgXml xml={SVG('ARROWRIGHT')} />
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  _list_3_1 = (datas) => {
    return datas.map((data, index) => {
      return (
        <View
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 6,
            paddingBottom: 6,
          }}
          key={index}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                modalVisible: true,
                modalTitle: data.name,
                modalCaution: data.icon,
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {/* icon */}
              <SvgXml xml={SVG(data.icon)} width="36" height="36" />
              <View
                style={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: 10,
                }}>
                {/* name */}
                <Text style={{paddingLeft: 20}}>{data.name}</Text>
                {/* allergy */}
                {data.essential ? (
                  <SvgXml xml={SVG('ESSENTIAL')} width="36" height="36" />
                ) : null}
              </View>
              {/* arrowright */}
              <SvgXml xml={SVG('ARROWRIGHT')} />
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <>
        <SafeAreaView />
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{backgroundColor: '#f3f3f3'}}>
            {/* search bar */}
            <View style={{backgroundColor: 'white'}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#32cc73',
                  justifyContent: 'space-between',
                  padding: 3,
                  paddingLeft: 24,
                  paddingRight: 14,
                  margin: 16,
                  marginTop: 3,
                }}>
                <TextInput placeholder="성분 검색" />
                <View>
                  <SvgXml xml={SVG('SEARCH')} />
                </View>
              </View>
            </View>
            {/*  */}
            {/* <Text>TEST CODE</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => {
                  this.setState({
                    one: 'flex',
                    two: 'none',
                    three: 'none',
                    four: 'none',
                  });
                }}>
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => {
                  this.setState({
                    one: 'none',
                    two: 'flex',
                    three: 'none',
                    four: 'none',
                  });
                }}>
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => {
                  this.setState({
                    one: 'none',
                    two: 'none',
                    three: 'flex',
                    four: 'none',
                  });
                }}>
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 10}}
                onPress={() => {
                  this.setState({
                    one: 'none',
                    two: 'none',
                    three: 'none',
                    four: 'flex',
                  });
                }}>
                <Text>4</Text>
              </TouchableOpacity>
            </View> */}
            {/* one */}
            <View style={{display: this.state.one}}>
              {/* icon */}
              <View
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  padding: 24,
                  paddingTop: 0,
                  paddingBottom: 10,
                  marginBottom: 4,
                }}>
                {/* ewg */}
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* title */}
                  <Text style={{fontSize: 11}}>EWG 기준</Text>
                  {/* body */}
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                      paddingLeft: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={SVG('UNMARKED')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        미표기 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('SAFETY')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        안전 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('CAUTION')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        주의 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('DANGER')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        위험 등급
                      </Text>
                    </View>
                  </View>
                </View>
                {/* kcii */}
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  {/* title */}
                  <Text style={{fontSize: 11}}>KCII 기준</Text>
                  {/* body */}
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                      paddingLeft: 15,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={SVG('KCII_DANGER')} />
                      <Text style={{color: 'gray', fontSize: 11}}>위험</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor: 'white'}}>
                <View>
                  {/* header */}
                  <View
                    style={{padding: 24, paddingTop: 20, paddingBottom: 10}}>
                    <Text
                      style={{
                        color: '#32cc73',
                        fontWeight: '600',
                        fontSize: 15,
                      }}>
                      전성분
                    </Text>
                  </View>
                  {/* body */}
                  <View>{this._list(DATAS01)}</View>
                  <View
                    style={{
                      height: 0.5,
                      backgroundColor: 'lightgray',
                      margin: 15,
                    }}></View>
                  {/* body */}
                  <View>{this._list(DATAS02)}</View>
                  <View
                    style={{
                      height: 0.5,
                      backgroundColor: 'lightgray',
                      margin: 15,
                    }}></View>
                  {/* body */}
                  <View>{this._list(DATAS03)}</View>
                </View>
              </View>
              {/*  */}
              <View style={{padding: 16, marginBottom: 20}}>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    1.EWG의 자료를 바탕으로 성분의 등급을 안전 등급(초록),주의
                    요망 등급(주황),주의 등급(빨강)으로 기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    화장품 전성분 정보는 제조 판매업자가 표기한 자료를 기반으로
                    제공됩니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 EWG의 등급과 전성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    2.알레르기 유발성분(25종)에 대한 정보는 식약처 자료를
                    기준으로 기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    화장품 알레르기 유발 성분 정보는 제조 판매업자가 표기한
                    자료를 기반으로 제공됩니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 알레르기 유발성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    3.안전성정보는 대한화장품 산업연구원 자료를 기준으로
                    기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 알레르기 전성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
              </View>
            </View>
            {/*  */}
            {/* two */}
            <View style={{display: this.state.two}}>
              <View
                style={{
                  paddingLeft: 24,
                  paddingRight: 24,
                  backgroundColor: 'white',
                  paddingBottom: 30,
                }}>
                {/* shadowBox */}
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 16,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.05,
                    elevation: 5,
                  }}>
                  <View style={{marginBottom: 18}}>
                    <Text style={{color: '#32cc73', fontSize: 13}}>
                      총 내용량
                    </Text>
                  </View>
                  <View style={{marginBottom: 30}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 5,
                      }}>
                      <Text style={{fontSize: 13}}>총 800g</Text>
                      <Text style={{fontSize: 13}}>552Kcal</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 13}}>1회 제공량(100ml)</Text>
                      <Text style={{fontSize: 13}}>69Kcal</Text>
                    </View>
                  </View>
                  {/*  */}
                  <View style={{marginBottom: 18, flexDirection: 'row'}}>
                    <Text style={{color: '#32cc73', fontSize: 13}}>
                      영양성분
                    </Text>
                    <Text style={{fontSize: 13}}>
                      {'  '}(초유농도 14% 기준)
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, paddingRight: 30}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                    </View>
                    <View style={{width: 1, backgroundColor: 'gray'}}></View>
                    <View style={{flex: 1, paddingLeft: 30}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 5,
                        }}>
                        <Text style={{fontSize: 13}}>탄수화물</Text>
                        <Text style={{fontSize: 13}}>7.9g</Text>
                      </View>
                    </View>
                  </View>
                  {/*  */}
                </View>
                {/* shadow2 */}
                <View
                  style={{
                    marginTop: 16,
                    backgroundColor: 'white',
                    padding: 16,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.05,
                    elevation: 5,
                  }}>
                  <View style={{marginBottom: 18}}>
                    <Text style={{color: '#32cc73', fontSize: 13}}>
                      탄.단.지 비율
                    </Text>
                  </View>
                  <Text>그래프 들어가야됨</Text>
                  {/*  */}
                </View>
                {/* shadow3 */}
                <View
                  style={{
                    marginTop: 16,
                    backgroundColor: 'white',
                    padding: 16,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.05,
                    elevation: 5,
                  }}>
                  <View style={{marginBottom: 18}}>
                    <Text style={{color: '#32cc73'}}>알레르기</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{paddingLeft: 16}}>
                      <SvgXml xml={SVG('MILK')} />
                      <Text>우유</Text>
                    </View>
                    <View style={{paddingLeft: 16}}>
                      <SvgXml xml={SVG('EGG')} />
                      <Text>계란</Text>
                    </View>
                    <View style={{paddingLeft: 16}}>
                      <SvgXml xml={SVG('SOYBEAN')} />
                      <Text>대두</Text>
                    </View>
                  </View>
                  {/*  */}
                </View>
                {/*  */}
              </View>
              {/*  */}
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: 4,
                  paddingTop: 14,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingBottom: 30,
                }}>
                <Text style={{color: '#32cc73', fontSize: 13}}>
                  식품첨가물 18개
                </Text>
                <View style={{marginTop: 21, flexDirection: 'row'}}>
                  <View style={{flex: 1, paddingRight: 24}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                        alignItems: 'center',
                        paddingBottom: 30,
                      }}>
                      <Text style={{fontSize: 13}}>d-토코페놀(혼합형)</Text>
                      <SvgXml xml={SVG('ARROWRIGHT')} />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 13}}>L-아스코빌팔미테이트</Text>
                      <SvgXml xml={SVG('ARROWRIGHT')} />
                    </View>
                  </View>
                  <View style={{flex: 1, paddingLeft: 24}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                        alignItems: 'center',
                        paddingBottom: 30,
                      }}>
                      <Text style={{fontSize: 13}}>비타민E</Text>
                      <SvgXml xml={SVG('ARROWRIGHT')} />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 13}}>염화칼륨</Text>
                      <SvgXml xml={SVG('ARROWRIGHT')} />
                    </View>
                  </View>
                </View>
              </View>
              {/*  */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 15,
                  backgroundColor: '#f9f9f9',
                }}>
                <Text style={{color: '#525252', fontSize: 13}}>
                  식품첨가물 nn개 전체보기
                </Text>
                <SvgXml xml={SVG('DOWNMORE')} />
              </View>
              {/*  */}
              <View
                style={{backgroundColor: 'white', padding: 24, paddingTop: 34}}>
                <Text
                  style={{color: '#32cc73', marginBottom: 15, fontSize: 13}}>
                  원재료명
                </Text>
                <Text style={{fontSize: 11, color: 'gray', lineHeight: 18}}>
                  탈염유청분말(외국산:네덜란드, 핀란드, 아일랜드
                  등),1A원유(국산, 세균수기준)16.183%,
                  식용유지가공품[대두유(태국산),
                  야자유(인도네시아산),고올레인산해바라기유(아르헨티나산),마더스리피도(우유유래베타팔미트산함유)5%,
                  d-토코페롤(혼합형),L-아스코빌팔미테이 트]15.7%, 덱스트린,
                  유당, 탈지유,알파락트알부민, 갈락토올리고당, 고단백유청분말,
                  마더스D&A(DHA, ARA함유)1.2%,
                  마더스올리고(갈락토실락토스함유),올리고프락토스(프락토올리
                  고당), 이소말토올리고당,우유사이알릴올리고당,
                  가수분해유청단백질,버터유분말,마더스I(난황유래루테인함유)0.2%,뉴클레오타이드혼합제제(시티딜산,우리딜산Na,
                  아데닐산, 이노신 산Na, 구아닐산Na), 타우린, L-아르지닌,
                  L-카르니틴, 염화콜린, 유화제,
                  수용성비타민혼합제제(L-아스코브산나트륨, 구연산삼나트륨,
                  구연산, 덱스트린,영양강화제), 지용성비타민혼합제제
                  (비타민E,dl-α-토코페릴아세테이트, 베타카로틴, 옥배유, 대두유,
                  MCT유,영양강화제), 제이인 산칼륨, 염화칼륨,
                  염화마그네슘,아셀렌산나트륨혼합제제(아셀렌산나트륨, 덱스트린),
                  황산동,영양강화제
                </Text>
              </View>
              {/*  */}
              <View style={{padding: 16, paddingBottom: 60}}>
                <Text style={{fontSize: 10, lineHeight: 15, marginBottom: 15}}>
                  1. 베블링의 8가지 영양정보인 탄단지비율(탄수화물, 단백질,
                  지방), 열량, 나트륨, 당류, 지방(트랜스지방, 포화지방),
                  콜레스테롤은 한국인 영양소 섭취기준(보건복지부)과 식품 등의
                  표시 기준(식품의약품안전처)을 바탕으로 제공합니다. 탄단지
                  비율은 정삼각형에 가까울수록 균형 잡힌 영양성분 섭취가
                  가능함을 의미합니다. 제품 구매 전 제조 판매업자가 표기한
                  영양성분 표시를 한번 더 확인하시길 바랍니다. 2. 원재료에는
                </Text>
                <Text style={{fontSize: 10, lineHeight: 15, marginBottom: 15}}>
                  2가지 이상의 혼합 원재료가 포함될 수 있으며, 기준치 이하의
                  함량인 경우 미표기일 수 있습니다. 알레르기 정보는 22가지의
                  식약처 자료를 기준으로 기재하였습니다. 구매 전 제조 판매업자가
                  표기한 원재료와 알레르기를 한번 더 확인하시길 바랍니다.
                </Text>
                <Text style={{fontSize: 10, lineHeight: 15, marginBottom: 15}}>
                  3. 식품첨가물의 정보는 800여가지의 식약처 자료를 기준으로
                  기재하였습니다. 식품첨가물은 2가지 이상의 혼합 첨가물이 있을
                  수 있으며, 기준치 이하의 함량인 경우 정확한 용도는 미표기일 수
                  있습니다. 구매 전 제조판매업자가 표기한 식품첨가물을 한번 더
                  확인하시길 바랍니다.
                </Text>
              </View>
              {/*  */}
            </View>
            {/*  */}
            {/* three */}
            <View style={{display: this.state.three}}>
              {/* icon */}
              <View
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  padding: 24,
                  paddingTop: 0,
                  paddingBottom: 10,
                  marginBottom: 4,
                  flex: 1,
                }}>
                {/* ewg */}
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* title */}
                  <Text style={{fontSize: 11}}>EWG 기준</Text>
                  {/* body */}
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                      paddingLeft: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={SVG('UNMARKED')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        미표기 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('SAFETY')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        안전 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('CAUTION')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        주의 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('DANGER')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        위험 등급
                      </Text>
                    </View>
                  </View>
                </View>
                {/* kcii */}
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 8,
                      marginRight: 35,
                    }}>
                    {/* title */}
                    <Text style={{fontSize: 11}}>KOSHA 기준</Text>
                    {/* body */}
                    <View
                      style={{
                        flexDirection: 'row',
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        paddingLeft: 15,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <SvgXml xml={SVG('TOXIC')} />
                        <Text style={{color: 'gray', fontSize: 11}}>독성</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 8,
                    }}>
                    {/* title */}
                    <Text style={{fontSize: 11}}>식약처 기준</Text>
                    {/* body */}
                    <View
                      style={{
                        flexDirection: 'row',
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        paddingLeft: 15,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <SvgXml xml={SVG('ALLERGY')} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor: 'white'}}>
                <View>
                  {/* header */}
                  <View
                    style={{padding: 24, paddingTop: 20, paddingBottom: 10}}>
                    <Text
                      style={{
                        color: '#32cc73',
                        fontWeight: '600',
                        fontSize: 15,
                      }}>
                      전성분
                    </Text>
                  </View>
                  {/* body */}
                  <View>{this._list_2(DATAS2_1)}</View>
                  <View
                    style={{
                      height: 0.5,
                      backgroundColor: 'lightgray',
                      margin: 15,
                    }}></View>
                  {/* body */}
                  <View>{this._list_2(DATAS2_2)}</View>
                </View>
              </View>
              {/*  */}
              <View
                style={{
                  padding: 16,
                  marginBottom: 20,
                }}>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    1.EWG의 자료를 바탕으로 성분의 등급을 안전 등급(초록),주의
                    요망 등급(주황),주의 등급(빨강)으로 기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    화장품 전성분 정보는 제조 판매업자가 표기한 자료를 기반으로
                    제공됩니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 EWG의 등급과 전성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    2.알레르기 유발성분(25종)에 대한 정보는 식약처 자료를
                    기준으로 기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    화장품 알레르기 유발 성분 정보는 제조 판매업자가 표기한
                    자료를 기반으로 제공됩니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 알레르기 유발성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    3.안전성정보는 대한화장품 산업연구원 자료를 기준으로
                    기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 알레르기 전성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
              </View>
            </View>
            {/*  */}
            {/* four */}
            <View style={{display: this.state.four}}>
              {/* icon */}
              <View
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  padding: 24,
                  paddingTop: 0,
                  paddingBottom: 10,
                  marginBottom: 4,
                }}>
                {/* ewg */}
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* title */}
                  <Text style={{fontSize: 11}}>EWG 기준</Text>
                  {/* body */}
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                      paddingLeft: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={SVG('UNMARKED')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        미표기 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('SAFETY')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        안전 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('CAUTION')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        주의 등급
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <SvgXml xml={SVG('DANGER')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        위험 등급
                      </Text>
                    </View>
                  </View>
                </View>
                {/* kcii */}
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  {/* title */}
                  <Text style={{fontSize: 11}}>식약처 기준</Text>
                  {/* body */}
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      justifyContent: 'flex-start',
                      paddingLeft: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={SVG('TOXICSUBSTANCE')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        유해물질
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 20,
                      }}>
                      <SvgXml xml={SVG('ESSENTIAL')} />
                      <Text style={{color: 'gray', fontSize: 11}}>
                        필수성분
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{}}>
                <View style={{marginBottom: 4, backgroundColor: 'white'}}>
                  {/* header */}
                  <View
                    style={{padding: 24, paddingTop: 20, paddingBottom: 10}}>
                    <Text
                      style={{
                        color: '#32cc73',
                        fontWeight: '600',
                        fontSize: 15,
                      }}>
                      필수성분
                    </Text>
                  </View>
                  {/* body */}
                  <View>{this._list_3_1(DATAS3_1)}</View>
                </View>
                <View style={{backgroundColor: 'white'}}>
                  {/* header */}
                  <View
                    style={{padding: 24, paddingTop: 20, paddingBottom: 10}}>
                    <Text
                      style={{
                        color: '#32cc73',
                        fontWeight: '600',
                        fontSize: 15,
                      }}>
                      전성분
                    </Text>
                  </View>
                  {/* body */}
                  <View>{this._list_3_1(DATAS3_2)}</View>
                </View>
              </View>
              {/*  */}
              <View style={{padding: 16, marginBottom: 20}}>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    1.EWG의 자료를 바탕으로 성분의 등급을 안전 등급(초록),주의
                    요망 등급(주황),주의 등급(빨강)으로 기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    화장품 전성분 정보는 제조 판매업자가 표기한 자료를 기반으로
                    제공됩니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 EWG의 등급과 전성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    2.알레르기 유발성분(25종)에 대한 정보는 식약처 자료를
                    기준으로 기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    화장품 알레르기 유발 성분 정보는 제조 판매업자가 표기한
                    자료를 기반으로 제공됩니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 알레르기 유발성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
                <View style={{marginBottom: 16}}>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    3.안전성정보는 대한화장품 산업연구원 자료를 기준으로
                    기재하였습니다.
                  </Text>
                  <Text style={{fontSize: 11, color: 'gray'}}>
                    구매 전 제조 판매업자가 표기한 알레르기 전성분을 한번 더
                    확인하시길 바랍니다.
                  </Text>
                </View>
              </View>
            </View>
            {/*  */}
          </View>
        </ScrollView>
        <Modal visible={this.state.modalVisible} transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <SafeAreaView />
            <View
              style={{
                backgroundColor: 'white',
                padding: 25,
                borderRadius: 10,
                margin: 25,
                paddingTop: 14,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 56,
                  height: 56,
                  borderRadius: 56,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  position: 'absolute',
                  top: -24,
                }}>
                <SvgXml
                  xml={SVG(this.state.modalCaution)}
                  width="44"
                  height="44"
                />
              </View>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={() => this.setState({modalVisible: false})}>
                {/* <Text>닫기</Text> */}
                <SvgXml xml={SVG('CANCEL')} />
              </TouchableOpacity>
              {/* header */}
              <View
                style={{
                  paddingLeft: 35,
                  paddingRight: 35,
                  paddingBottom: 16,
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  alignItems: 'center',
                }}>
                <Text>{this.state.modalTitle}</Text>
              </View>
              {/* body */}
              <View style={{marginTop: 13}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: 7,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 12,
                      fontWeight: '500',
                      maxWidth: 60,
                      flex: 1,
                      marginRight: 5,
                    }}>
                    EWG
                  </Text>
                  <Text style={{fontSize: 12}}>
                    {this.state.modalCaution == 'CAUTION'
                      ? '주의'
                      : this.state.modalCaution == 'UNMARKED'
                      ? '미표기'
                      : '안전'}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: 7,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 12,
                      fontWeight: '500',
                      maxWidth: 60,
                      flex: 1,
                      marginRight: 5,
                    }}>
                    데이터 등급
                  </Text>
                  <Text style={{fontSize: 12}}>-</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: 7,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 12,
                      fontWeight: '500',
                      maxWidth: 60,
                      flex: 1,
                      marginRight: 5,
                    }}>
                    KCII 안정성
                  </Text>
                  <Text style={{fontSize: 12, flex: 1, flexGrow: 1}}>
                    동물실험 결과, 경구노출보다 경피 노출일 때 혈중농도가 높게
                    나타났음. 3세이하의 어린이와 성인에 대한 위해성평가 결과,
                    2-phenoxyethanol은 최대 1.0% 농도의 방부제로 사용하기에 안전
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: 7,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 12,
                      fontWeight: '500',
                      maxWidth: 60,
                      flex: 1,
                      marginRight: 5,
                    }}>
                    배합목적
                  </Text>
                  <Text style={{fontSize: 12, flex: 1}}>
                    결합제, 유화안정제, 피부컨디셔닝(유연제),
                    계면활성제(유화제), 점도증가제(비수성)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
