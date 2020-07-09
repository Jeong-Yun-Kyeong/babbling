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

  _showEWGUnder = (kind) => {
    if (kind == 2) {
      return __cosmetic();
    } else if (kind == 3) {
      return __householdGood();
    } else if (kind == 4) {
      return __quasiDrug();
    } else {
      return null;
    }

    function __cosmetic() {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <Text style={{fontSize: 11}}>KCII 기준</Text>
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
      );
    }

    function __householdGood() {
      return (
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
      );
    }

    function __quasiDrug() {
      return (
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
              <Text style={{color: 'gray', fontSize: 11}}>유해물질</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <SvgXml xml={SVG('ESSENTIAL')} />
              <Text style={{color: 'gray', fontSize: 11}}>필수성분</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  _showEWG = (kind) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          padding: 24,
          paddingTop: 0,
          paddingBottom: 10,
          marginBottom: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 11}}>EWG 기준</Text>
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
              <Text style={{color: 'gray', fontSize: 11}}>미표기 등급</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgXml xml={SVG('SAFETY')} />
              <Text style={{color: 'gray', fontSize: 11}}>안전 등급</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgXml xml={SVG('CAUTION')} />
              <Text style={{color: 'gray', fontSize: 11}}>주의 등급</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgXml xml={SVG('DANGER')} />
              <Text style={{color: 'gray', fontSize: 11}}>위험 등급</Text>
            </View>
          </View>
        </View>
        {/* kcii */}
        {this._showEWGUnder(kind)}
      </View>
    );
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
            {/* 성분 기준(식품에는 없음) */}
            {this.state.kind == 1 ? null : this._showEWG(this.state.kind)}
            {/* 바디부분 처리하기 */}

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
