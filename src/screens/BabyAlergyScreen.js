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

import * as ScreenMargin from '../values/ScreenMargin';

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

export default class BabyAlergy extends PureComponent {
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

  render() {
    let screenMargin = ScreenMargin.getMargin(this.props.route.name);

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
        <SafeAreaView />
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
