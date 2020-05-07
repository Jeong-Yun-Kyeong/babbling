import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import Footer from './FooterScreen';
import CompareButton from '../components/atom/CompareButton';

SVG('MILKPRODUCT');
// <SvgXml xml={milkProduct} width="24" height="24" />
const CATEGORY = [
  {name: '분유', svg: SVG('DRYMILK')},
  {name: '이유식', svg: SVG('WEANINGFOODBABYFOOD')},
  {name: '간식', svg: SVG('SNACK')},
  {name: '유제품', svg: SVG('MILKPRODUCT')},
  {name: '음료', svg: SVG('DRINK')},
  {name: '식재료', svg: SVG('FOODINGREDIENTS')},
  {name: '건강식품', svg: SVG('HEALTHFOOD')},
  {name: '스킨로션바디', svg: SVG('COSMETICS')},
  {name: '목욕', svg: SVG('BATH')},
  {name: '물티슈', svg: SVG('WETTISSUE')},
  {name: '세제', svg: SVG('DETERGENT')},
  {name: '주방세제', svg: SVG('KITCHENDETERGENT')},
  {name: '탈취방향제', svg: SVG('DEODORANT')},
  {name: '치약', svg: SVG('TOOTHPASTE')},
  {name: '수입관', svg: SVG('IMPORT')},
];

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

export default class Pick extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <CompareButton
          goCompare={() => {
            this.props.navigation.navigate('Compare');
          }}
        />
        <ScrollView style={{backgroundColor: 'lightgray', flex: 1}}>
          {/* searchBar */}
          <View style={{backgroundColor: 'white', padding: 10}}>
            <View
              style={{
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#32cc73',
                padding: 7,
                paddingLeft: 20,
                paddingRight: 15,
                flexDirection: 'row',
              }}>
              <View style={{flex: 9, justifyContent: 'center'}}>
                <Text>수딩내추럴 인텐스 모이스처 크림</Text>
              </View>
              <SvgXml xml={SVG('SEARCH')} />
            </View>
          </View>
          {/* slide01 */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../images/slide02.png')}
              style={{width: '100%'}}
            />
          </View>
          {/* 카테고리 고르는 그리드형식 컴포넌트 */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 15,
              marginBottom: 3,
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
                      this.props.navigation.navigate('Category');
                    }}
                    key={i}>
                    <SvgXml xml={item.svg} />
                    <Text
                      style={{fontSize: 12, color: '#5d5d5d', marginTop: 5}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* slide02 */}
          <View style={styles.slide02}>
            <View style={styles.slide02Header}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#212121'}}>
                베베를 위한 추천pick
              </Text>
            </View>
            <View style={styles.hashTagLine}>
              <View style={styles.hashTagBox}>
                <Text style={styles.hashTagText}>#아토피 피부</Text>
              </View>
              <View style={styles.hashTagBox}>
                <Text style={styles.hashTagText}>#세우 알레르기</Text>
              </View>
              <View style={styles.hashTagBox}>
                <Text style={styles.hashTagText}>#우유 알레르기</Text>
              </View>
            </View>
            <View>
              <View style={styles.cardList}>
                <View style={styles.innerCardList}>
                  <View style={styles.cardImage}></View>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardInfoCompany}>
                      <Text style={styles.comText}>베베랩</Text>
                    </View>
                    <View style={styles.cardInfoProduct}>
                      <Text style={styles.comTitle}>
                        고보습 베리어 베이비 로션 200ml
                      </Text>
                    </View>
                    <View style={styles.cardInfoHashtag}>
                      <Text style={styles.comHash}>
                        #첫로션 #고보습 #산양유
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardScore}>
                    <Text style={{color: '#32cc73'}}>4.5</Text>
                    <Text>(2,121)</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardList}>
                <View style={styles.innerCardList}>
                  <View style={styles.cardImage}></View>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardInfoCompany}>
                      <Text style={styles.comText}>BUTLER(버틀러)</Text>
                    </View>
                    <View style={styles.cardInfoProduct}>
                      <Text style={styles.comTitle}>프로바이오틱스 세제</Text>
                    </View>
                    <View style={styles.cardInfoHashtag}>
                      <Text style={styles.comHash}>
                        #세정력 #아기냄새 #인스타
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardScore}>
                    <Text style={{color: '#32cc73'}}>4.5</Text>
                    <Text>(2,121)</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardList}>
                <View style={styles.innerCardList}>
                  <View style={styles.cardImage}></View>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardInfoCompany}>
                      <Text style={styles.comText}>풀무원 베이비밀</Text>
                    </View>
                    <View style={styles.cardInfoProduct}>
                      <Text style={styles.comTitle}>닭가슴살 바나나죽</Text>
                    </View>
                    <View style={styles.cardInfoHashtag}>
                      <Text style={styles.comHash}>
                        #8-9개월 #닭알레르기 #잘먹음
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardScore}>
                    <Text style={{color: '#32cc73'}}>4.5</Text>
                    <Text>(2,121)</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardList}>
                <View style={styles.innerCardList}>
                  <View style={styles.cardImage}></View>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardInfoCompany}>
                      <Text style={styles.comText}>BUTLER(버틀러)</Text>
                    </View>
                    <View style={styles.cardInfoProduct}>
                      <Text style={styles.comTitle}>프로바이오틱스 세제</Text>
                    </View>
                    <View style={styles.cardInfoHashtag}>
                      <Text style={styles.comHash}>
                        #세정력 #아기냄새 #인스타
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardScore}>
                    <Text style={{color: '#32cc73'}}>4.5</Text>
                    <Text>(2,121)</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardList}>
                <View style={styles.innerCardList}>
                  <View style={styles.cardImage}></View>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardInfoCompany}>
                      <Text style={styles.comText}>풀무원 베이비밀</Text>
                    </View>
                    <View style={styles.cardInfoProduct}>
                      <Text style={styles.comTitle}>닭가슴살 바나나죽</Text>
                    </View>
                    <View style={styles.cardInfoHashtag}>
                      <Text style={styles.comHash}>
                        #8-9개월 #닭알레르기 #잘먹음
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardScore}>
                    <Text style={{color: '#32cc73'}}>4.5</Text>
                    <Text>(2,121)</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.slide02Dot}>
              <View style={[styles.dot, {backgroundColor: '#32cc73'}]}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
            </View>
          </View>
          {/* add */}
          <View
            style={{
              backgroundColor: 'lightgray',
              height: 90,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 30,
            }}>
            <Text>add</Text>
          </View>
          {/*  */}
          <Footer />
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'gray',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 80,
  },
  menubox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor:'lightgray'
  },
  //
  slide03: {
    backgroundColor: 'pink',
    height: 300,
  },

  slide01: {
    // height: 190,
    alignItems: 'center',
    backgroundColor: 'pink',
    // justifyContent: 'flex-end',
  },
  slide01Dot: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: 5,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#1f1f1f1f',
    borderRadius: 8,
    margin: 5,
  },
  dot2: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
  },

  //
  slide02: {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 15,
  },
  slide02Header: {
    // backgroundColor: 'lightgray',
    height: 30,
    marginBottom: 15,
    justifyContent: 'center',
  },
  hashTagLine: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  hashTagBox: {
    borderWidth: 1,
    borderColor: '#32cc73',
    borderRadius: 50,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  hashTagText: {
    color: '#32cc73',
    fontSize: 11,
  },

  //

  cardList: {
    // backgroundColor:'lightgray',
    height: 75,
  },
  innerCardList: {
    flexDirection: 'row',
  },
  cardImage: {
    // backgroundColor:'rgba(13,155,55,0.8)',
    width: 75,
    height: 75,
    flex: 2,
  },
  cardInfo: {
    height: 75,
    // backgroundColor:'pink',
    justifyContent: 'center',
    flex: 6,
  },
  cardInfoCompany: {},
  comText: {
    color: 'rgb(50,50,50)',
    fontSize: 13,
  },
  comTitle: {
    fontWeight: '400',
    fontSize: 15,
  },
  comHash: {
    color: '#32cc73',
    marginTop: 5,
    fontSize: 11,
  },

  cardScore: {
    flex: 2,
    // backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 75,
  },
  slide02Dot: {
    // backgroundColor:'gray',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
});
