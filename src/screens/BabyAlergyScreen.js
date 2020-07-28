import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

import AsyncStorage from '@react-native-community/async-storage';
//
import BabyplusScreen from '../screens/BabyPlusScreen';
import {RotationGestureHandler} from 'react-native-gesture-handler';
import {not} from 'react-native-reanimated';
const CATEWIDTH = () => {
  let width;
  let screen;
  screen = Dimensions.get('screen').width;
  for (let i = 90; i <= 1350; i += 90) {
    if (screen >= i && screen < i + 89) {
      width = i;
      return width;
    }
  }
  return width;
};
const CATEGORY = [
  {name: '새우', svg: 'SHRIMP'},
  {name: '굴', svg: 'OYSTER'},
  {name: '게', svg: 'CRAB'},
  {name: '홍합', svg: 'MUSSEL'},
  {name: '오징어', svg: 'SQUID'},
  {name: '전복', svg: 'ABALONE'},
  {name: '고등어', svg: 'MACKEREL'},
  {name: '조개류', svg: 'CLAM'},
  {name: '메밀', svg: 'BUCKWHEAT'},
  {name: '밀', svg: 'WHEAT'},
  {name: '대두', svg: 'SOYBEAN'},
  {name: '호두', svg: 'WALNUT'},
  {name: '땅콩', svg: 'PEANUT'},
  {name: '잣', svg: 'PINENUT'},
  {name: '알류(가금류)', svg: 'EGG'},
  {name: '우유', svg: 'MILK'},
  {name: '쇠고기', svg: 'BEEF'},
  {name: '돼지고기', svg: 'PORK'},
  {name: '닭고기', svg: 'CHICKEN'},
  {name: '복숭아', svg: 'PEACH'},
  {name: '토마토', svg: 'TOMATO'},
  {name: '이황산류(와인 등)', svg: 'H2SO3'},
  {name: '해당 없음', svg: 'CANCEL'},
];

export default class InputChildAllergyInformation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topRight: 5,
      bottomRight: 5,
      skin: false,
    };
  }

  componentWillMount() {
    CATEGORY.map((item, i) => {
      this.setState({
        [item.svg]: false,
      });
    });
  }

  _sigIn = () => {
    console.log(this.props.route.params.authUser);
    let authUser = this.props.route.params.authUser;
    let url = URL + '/rest-auth/registration/';
    let form = new FormData();
    form.append('username', authUser.id);
    form.append('password1', authUser.pw);
    form.append('password2', authUser.pw);
    fetch(url, {
      method: 'POST',
      body: form,
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        console.log(resJson.token, resJson.user.pk);
        this.setState({token: resJson.token});
        this._childAllergyData(resJson.token, resJson.user.pk);
      });
  };

  _childAllergyData = (token, pk) => {
    console.log(this.state);
    let item = this.state;
    let url = URL + '/allergy_data/create/';
    let form = new FormData();
    form.append('abalone', item.ABALONE);
    form.append('beef', item.BEEF);
    form.append('buckwheat', item.BUCKWHEAT);
    form.append('chicken', item.CHICKEN);
    form.append('clam', item.CLAM);
    form.append('crab', item.CRAB);
    form.append('egg', item.EGG);
    form.append('h2so3', item.H2SO3);
    form.append('mackerel', item.MACKEREL);
    form.append('milk', item.MILK);
    form.append('mussel', item.MUSSEL);
    form.append('oyster', item.OYSTER);
    form.append('peach', item.PEACH);
    form.append('peanut', item.PEANUT);
    form.append('pinenut', item.PINENUT);
    form.append('pork', item.PORK);
    form.append('shrimp', item.SHRIMP);
    form.append('soybean', item.SOYBEAN);
    form.append('squid', item.SQUID);
    form.append('tomato', item.TOMATO);
    form.append('walnut', item.WALNUT);
    form.append('wheat', item.WHEAT);
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'JWT ' + token,
      },
      body: form,
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        console.log(resJson.idx, item.skin, token);
        this.setState({allergy_key: resJson.idx});
        this._userAssistent(pk, token);
      });
  };

  _userAssistent = (pk, token) => {
    let userInfo = this.props.route.params.userInfo;
    let url = URL + '/user_assistent/create/';
    let form = new FormData();
    form.append('user_key', pk);
    form.append('email', userInfo.email);
    form.append('name', userInfo.name);
    form.append('address_main', userInfo.address_main);
    form.append('address_sub', userInfo.address_sub);
    form.append('sns_type', this.props.route.params.authUser.sns);
    form.append('agreement', userInfo.agreement);
    // form.append('reg_date', '');
    form.append('flag', 1);
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'JWT ' + token,
      },
      body: form,
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        console.log(resJson.idx);
        this._childData(token, resJson.idx);
      });
  };

  _childData = (token, user_assistent_key) => {
    console.log(this.props.route.params.babyPlus);
    let babyPlus = this.props.route.params.babyPlus;
    let url = URL + '/child_data/create/';
    let form = new FormData();
    form.append('user_assistent_key', user_assistent_key);
    form.append('child_name', babyPlus.baby_name);
    form.append('born_year', babyPlus.baby_year);
    form.append('born_month', babyPlus.baby_month);
    form.append('born_day', babyPlus.baby_day);
    form.append('gender', babyPlus.gender);
    form.append('allergy_key', this.state.allergy_key);
    form.append('skin_trouble', this.state.skin);
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'JWT ' + token,
      },
      body: form,
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        AsyncStorage.setItem('token', this.state.token);
        this.props.navigation.navigate('Main', {screen: 'Main'});
      });
  };

  render() {
    let screenMargin = 24;

    let CATEGORY_ROW = [];
    // CATEGORY.map((item, i) => {
    //   let index = Math.floor(i/4);
    //   if(!CATEGORY_ROW[index]) CATEGORY_ROW[index] = [];
    //   CATEGORY_ROW[index][i%4] = item;
    // });
    for (let i = 0; i < CATEGORY.length / 4; i++) {
      if (!CATEGORY_ROW[i]) CATEGORY_ROW[i] = [];
      for (let k = 0; k < 4; k++) {
        CATEGORY_ROW[i][k] = CATEGORY[i * 4 + k] || null;
      }
    }

    console.log(CATEGORY_ROW);

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: 'white'}} />
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            height: 58,
            paddingLeft: 28,
            paddingRight: 28,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(BabyplusScreen);
            }}>
            <SvgXml xml={SVG('BACKIOS')} />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: 'rgba(0,0,0,0.6)'}}>
              우리 아이 등록하기
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log('저장');
              console.log(this.state);
              if (this.state.skin == '-1') {
                alert('피부트러블을 선택해주세요.');
                return;
              }

              // this._sigIn();
              // if (CATEGORY.includes('_SELECT')) {
              // } else {
              //   alert('식품알레르기를 선택해주세요.');
              //   return;
              // }
            }}>
            <Text style={{fontSize: 16, color: '#32cc73'}}>저장</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View style={{marginHorizontal: screenMargin}}>
            {/* 문구 */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={SVG('BABBLING_ICON')}
                // width="45"
                // height="45"
              />
              <View style={{position: 'relative', flex: 1}}>
                <SvgXml
                  xml={SVG('SPEACH')}
                  // width={Dimensions.get('screen').width}
                  style={{zIndex: -1}}
                />
                <View
                  style={{
                    // height: 5,
                    // backgroundColor: '#3450aaaa',
                    zIndex: 10,
                    position: 'absolute',
                    width: '100%',

                    height: '100%',
                    justifyContent: 'center',
                    //width: Dimensions.get('screen').width - (24 + 24 + 52 + 50),
                    paddingRight: 26,
                    paddingLeft: 43,
                  }}>
                  <Text
                    numberOfLines={2}
                    style={{fontSize: 14, fontWeight: 'bold'}}>
                    우리 아이에게 있는{'\r'}알레르기와 피부트러블을 체크해주세요
                  </Text>
                </View>
              </View>

              {/* width: Dimensions.get('screen').width - (24 + 24 + 52), */}
            </View>

            {/* 식품선택 */}
            <View style={{marginTop: 26}}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                식품알레르기
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  paddingVertical: 15,
                  marginBottom: 4,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',

                    // backgroundColor: 'blue',
                    // justifyContent: 'center',
                    // width: CATEWIDTH(),
                    width: '100%',
                  }}>
                  {CATEGORY_ROW.map((rowItem, row) => {
                    return (
                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          width: '100%',
                        }}>
                        {rowItem.map((item, i) => {
                          return item ? (
                            <TouchableOpacity
                              style={{
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 30,
                              }}
                              onPress={() => {
                                // this.state._childAllergyData();
                                if (
                                  // this.form.includes('_SELECT') &&
                                  item.svg === 'CANCEL'
                                ) {
                                  alert('올바르게 선택해주세요');
                                  return;
                                }
                                this.setState({
                                  [item.svg]: !this.state[item.svg],
                                });
                              }}
                              key={row * 4 + i}>
                              <SvgXml
                                xml={SVG(
                                  this.state[item.svg]
                                    ? item.svg + '_SELECT'
                                    : item.svg,
                                )}
                                width="36"
                                height="36"
                              />
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: '#5d5d5d',
                                  marginTop: 5,
                                  position: 'absolute',
                                  fontSize: 14,
                                  top: 36,
                                  textAlign: 'center',
                                  width: 400,
                                }}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          ) : (
                            <View style={{width: 36, height: 36}}></View>
                          );
                        })}
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
            {/* 피부선택 */}
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                피부트러블
              </Text>
              {/*  */}
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 7,
                  marginBottom: 50,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      skin: !this.state.skin,
                    });
                  }}
                  style={[
                    styles.option_button,
                    {
                      backgroundColor: this.state.skin ? 'white' : '#32cc73',
                    },
                  ]}>
                  <Text
                    style={{
                      color: this.state.skin ? '#32cc73' : 'white',
                      fontSize: 15,
                    }}>
                    있어요
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      skin: !this.state.skin,
                    });
                  }}
                  style={[
                    styles.option_button,
                    {
                      backgroundColor: this.state.skin ? '#32cc73' : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      color: this.state.skin ? 'white' : '#32cc73',
                      fontSize: 15,
                    }}>
                    없어요
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  option_button: {
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#32cc73',
    flex: 1,
    alignItems: 'center',
    margin: 6,
  },
});
/*
{ 
  CATEGORY_ROW.map((rowItem, row) => {
    return (
      <View style={{backgroundColor:'red', justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
        {
          rowItem.map((item,i) => {
            return(

                (item) ? (
                <TouchableOpacity
                  style={{

                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                  }}
                  onPress={() => {
                    this.setState({
                      [item.svg]: !this.state[item.svg],
                    });
                  }}
                  key={row*4+i}>
                  <SvgXml
                    xml={SVG(
                      this.state[item.svg]
                        ? item.svg + '_SELECT'
                        : item.svg,
                    )}
                    width="36"
                    height="36"
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#5d5d5d',
                      marginTop: 5,
                      position:'absolute'
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>) : (<View style={{width:36,height:36}}></View>)
              
            )
          })
        }
      </View>
    );
  })}
  */
