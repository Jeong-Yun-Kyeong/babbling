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
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

const TESTDATAS = [
  {
    exist: true,
    product: {image: '', heart: 'HEART_RED', brand: '뽀득', name: '뽀득 세제'},
    point: '',
    info: {safety: '', caution: ''},
  },
  {
    exist: true,
    product: {image: '', heart: 'HEART_RED', brand: '뽀득', name: '뽀득 세제'},
    point: '',
    info: {safety: '', caution: ''},
  },
  {exist: false},
];

const DATAS = [1, 2, 3];
const TEST = (datas) => {
  return datas.map((data, index) => {
    return (
      <View key={index}>
        {/* product */}
        <View
          style={{
            marginTop: 24,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
            alignItems: 'center',
            width: (Dimensions.get('screen').width - 32) / 3,
            paddingBottom: 15,
          }}>
          {TESTDATAS[index].exist ? (
            <>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 0,
                  left: (Dimensions.get('screen').width - 32) / 3 - 16 - 16,
                  top: 0,
                  bottom: 0,
                  zIndex: 10,
                }}
                onPress={() => {
                  alert('비교함에서 제거하시겠습니까?');
                }}>
                <SvgXml xml={SVG('CANCEL')} />
              </TouchableOpacity>

              <View>
                <Image
                  source={require('../images/4.jpeg')}
                  resizeMode="contain"
                  style={{
                    width: (Dimensions.get('screen').width - 32) / 3 - 10,
                    backgroundColor: 'white',
                    height: (Dimensions.get('screen').width - 32) / 3,
                  }}
                />
              </View>
              <SvgXml xml={SVG(TESTDATAS[index].product.heart)} />
              <Text style={{color: 'gray', fontSize: 10, marginTop: 10}}>
                {TESTDATAS[index].product.brand}
              </Text>
              <Text style={{marginTop: 5, fontSize: 16}}>
                {TESTDATAS[index].product.name}
              </Text>
            </>
          ) : (
            <View style={{backgroundColor: 'white'}}>
              <View
                style={{
                  width: (Dimensions.get('screen').width - 32) / 3 - 10,
                  backgroundColor: 'white',
                  height: (Dimensions.get('screen').width - 32) / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <SvgXml xml={SVG('ALARM')} />
              <Text style={{color: 'gray', fontSize: 10, marginTop: 8.5}}>
                {' '}
              </Text>
              <Text style={{marginTop: 5, fontSize: 16}}> </Text>
            </View>
          )}
          {/*  */}
        </View>
        {/* info */}
        {TESTDATAS[index].exist ? (
          index == 0 ? (
            <>
              <View
                style={[
                  {alignItems: 'center', paddingTop: 15, flex: 1},
                  index == 1 ? {backgroundColor: '#f3f3f3'} : null,
                ]}>
                {/* point */}
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 15,
                    paddingBottom: 15,
                  }}>
                  <SvgXml xml={SVG('STAR_CHECKED')} />
                  <Text style={{color: '#32cc73'}}>4.7</Text>
                  <Text>(2,121)</Text>
                </View>
                {/* info */}
                <View style={{paddingTop: 5}}>
                  {/*  */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}>
                    <SvgXml xml={SVG('SAFETY')} width="32" height="32" />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text>EWG</Text>
                      <Text style={{color: '#33bc2a', marginLeft: 3}}>
                        nn개
                      </Text>
                    </View>
                  </View>
                  {/*  */}
                  {/*  */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}>
                    <SvgXml xml={SVG('CAUTION')} width="32" height="32" />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text>EWG</Text>
                      <Text style={{color: '#fe8522', marginLeft: 3}}>
                        nn개
                      </Text>
                    </View>
                  </View>
                  {/*  */}
                  {/*  */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}>
                    <SvgXml xml={SVG('DANGER')} width="32" height="32" />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text>EWG</Text>
                      <Text style={{color: '#f1322d', marginLeft: 3}}>
                        nn개
                      </Text>
                    </View>
                  </View>
                  {/*  */}
                  {/*  */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}>
                    <SvgXml xml={SVG('KCII_DANGER')} width="32" height="32" />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text>EWG</Text>
                      <Text style={{color: '#ee433c', marginLeft: 3}}>
                        nn개
                      </Text>
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
            </>
          ) : (
            <>
              <View
                style={[
                  {alignItems: 'center', paddingTop: 15, flex: 1},
                  index == 1 ? {backgroundColor: '#f3f3f3'} : null,
                ]}>
                {/* point */}
                <View
                  style={{
                    flexDirection: 'row',
                    paddingTop: 15,
                    paddingBottom: 15,
                  }}>
                  <SvgXml xml={SVG('STAR_CHECKED')} />
                  <Text style={{color: '#32cc73'}}>4.7</Text>
                  <Text>(2,121)</Text>
                </View>
                {/* info */}
                <View style={{paddingTop: 5}}>
                  {/*  */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}>
                    <Text>nn Kal</Text>
                  </View>
                  {/*  */}
                  {/*  */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        alignItems: 'center',
                      }}>
                      <Text>알레르기</Text>
                      <Text style={{color: '#f00045', marginLeft: 3}}>
                        nn개
                      </Text>
                      <SvgXml xml={SVG('DOWNMORE')} />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: (Dimensions.get('screen').width - 32) / 3 - 32,
                      }}>
                      <SvgXml xml={SVG('EGG')} />
                      <SvgXml xml={SVG('MILK')} />
                      <SvgXml xml={SVG('HEART_GRAY')} />
                    </View>
                  </View>
                  {/*  */}
                  {/*  */}
                  <View
                    style={{
                      alignItems: 'center',
                      paddingTop: 16,
                      paddingBottom: 16,
                    }}>
                    <SvgXml
                      xml={SVG('FOOD_ADDITIVES')}
                      width="32"
                      height="32"
                    />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text>식품첨가물</Text>
                      <Text style={{color: '#fea728', marginLeft: 3}}>
                        nn개
                      </Text>
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
            </>
          )
        ) : null}
      </View>
    );
  });
};

const Compare = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 16,
            paddingBottom: 0,
            flexDirection: 'row',
          }}>
          {TEST(DATAS)}
        </View>
        <View
          style={{
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
            alignItems: 'center',
          }}>
          <View>
            <Text>탄.단.지 그래프</Text>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Compare;
