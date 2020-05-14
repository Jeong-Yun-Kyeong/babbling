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
const CATEWIDTH = () => {
  let width;
  let screen;
  screen = Dimensions.get('screen').width;
  for (i = 90; i <= 1350; i += 90) {
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
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View style={{padding: 24}}>
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
              <View style={{position: 'relative'}}>
                <SvgXml
                  xml={SVG('SPEACH')}
                  width={Dimensions.get('screen').width - (24 + 24 + 52)}
                  style={{zIndex: -1}}
                />
                <View
                  style={{
                    // height: 5,
                    // backgroundColor: 'coral',
                    zIndex: 10,
                    position: 'absolute',
                    left: 33,
                    top: 12,
                    width: Dimensions.get('screen').width - (24 + 24 + 52 + 50),
                  }}>
                  <Text numberOfLines={2}>
                    우리 아이에게 있는{'\r'}알레르기와 피부트러블을 체크해주세요
                  </Text>
                </View>
              </View>

              {/* width: Dimensions.get('screen').width - (24 + 24 + 52), */}
            </View>

            {/* 식품선택 */}
            <View style={{marginTop: 10}}>
              <Text style={{marginLeft: 10, fontSize: 13}}>식품알레르기</Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  padding: 15,
                  marginBottom: 4,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    // backgroundColor: 'blue',
                    // justifyContent: 'center',
                    width: CATEWIDTH(),
                  }}>
                  {CATEGORY.map((item, i) => {
                    return (
                      <TouchableOpacity
                        style={{
                          width: 90,
                          height: 70,
                          backgroundColor: 'white',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          this.setState({
                            [item.svg]: !this.state[item.svg],
                          });
                        }}
                        key={i}>
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
                            fontSize: 12,
                            color: '#5d5d5d',
                            marginTop: 5,
                          }}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
            {/* 피부선택 */}
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 13,
                  marginBottom: 10,
                }}>
                피부트러블
              </Text>
              {/*  */}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      skin: !this.state.skin,
                    });
                  }}
                  style={{
                    padding: 15,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#32cc73',
                    flex: 1,
                    alignItems: 'center',
                    margin: 5,
                    backgroundColor: this.state.skin ? 'white' : '#32cc73',
                  }}>
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
                  style={{
                    padding: 15,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#32cc73',
                    flex: 1,
                    backgroundColor: this.state.skin ? '#32cc73' : 'white',
                    alignItems: 'center',
                    margin: 5,
                  }}>
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

const styles = StyleSheet.create({});
