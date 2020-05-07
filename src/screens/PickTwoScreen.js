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
import Carousel, {Pagination} from 'react-native-snap-carousel';
import List from '../components/ListComponent';

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
const IMAGESLIDE = [
  {
    url: 'https://interiorssa.com/neo2/testImage/EVENT_banner (5).png',
    title: '소중한 우리아이 피부',
    tag: '입소문PICK',
  },
  {
    url: 'https://interiorssa.com/neo2/testImage/EVENT_banner (5).png',
    title: '신제품입니다.',
    tag: '추라이추라이',
  },
];

const Header_Maximum_Height = 100;
const Header_Minimum_Height = 50;

const maxLeft = 85;
const minLeft = 0;
const maxRight = 100;
const minRight = 0;
const maxTop = 45;
const minTop = -5;

const SLIDE02 = [
  {
    img: '../images/4.jpeg',
    title: '베베랩',
    name: '고보습 베리어 베이비 로션 200ml',
    hashTag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/5.jpeg',
    title: 'HIPP',
    name: 'HIPPIS 바나나페어 망고',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    title: '남양',
    name: '아이꼬야 동결건조 과일 귤',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/5.jpeg',
    title: 'HIPP',
    name: 'HIPPIS 바나나페어 망고',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    title: '남양',
    name: '아이꼬야 동결건조 과일 귤',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
];

export default class Pick extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeSlide: 0,
    };
    this.AnimatedHeaderValue = new Animated.Value(0);
  }

  componentWillMount() {
    this.setState({images: IMAGESLIDE});
  }

  _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
        key={index}>
        <Image
          source={{uri: item.url}}
          resizeMode={'cover'}
          style={{
            width: Dimensions.get('screen').width,
            height: '100%',
          }}
        />
        <View style={{position: 'absolute', top: 40, left: 40}}>
          <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 3}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 20, fontWeight: '500'}}>#{item.tag}</Text>
        </View>
        {/* <Text>{item.url}</Text> */}
      </View>
    );
  };

  pagination = () => {
    const {images, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'transparent',
          paddingVertical: 10,
        }}
        dotStyle={{
          backgroundColor: '#32cc73',
          marginHorizontal: -3,
        }}
        inactiveDotStyle={{
          backgroundColor: '#fff',
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.9}
      />
    );
  };

  render() {
    const AnimatedLeft = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, maxRight - minRight],
      outputRange: [minRight, maxRight],
      extrapolate: 'clamp',
    });
    const AnimatedRight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, maxLeft - minLeft],
      outputRange: [minLeft, maxLeft],
      extrapolate: 'clamp',
    });
    const AnimatedTop = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, maxTop - minTop],
      outputRange: [maxTop, minTop],
      extrapolate: 'clamp',
    });
    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [Header_Maximum_Height, Header_Minimum_Height],
      extrapolate: 'clamp',
    });
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: 'white'}} />
        <View style={styles.MainContainer}>
          <ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={{paddingTop: Header_Maximum_Height}}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: this.AnimatedHeaderValue}}},
            ])}
            showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: '#f3f3f3'}}>
              {/*  */}
              {/* slide01 */}
              <View style={{height: 200, backgroundColor: 'white'}}>
                <Carousel
                  ref={(c) => {
                    this._carousel = c;
                  }}
                  data={this.state.images}
                  renderItem={this._renderItem}
                  sliderWidth={Dimensions.get('screen').width}
                  itemWidth={Dimensions.get('screen').width}
                  onSnapToItem={(index) => this.setState({activeSlide: index})}
                  removeClippedSubviews={false}
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                  loop={true}
                  loopClonesPerSide={2}
                />
              </View>
              <View style={{marginTop: -40}}>{this.pagination()}</View>
              {/*  */}
              {/* 카테고리 고르는 그리드형식 컴포넌트 */}
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
                          this.props.navigation.navigate('Category');
                        }}
                        key={i}>
                        <SvgXml xml={item.svg} />
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

              {/* slide02 */}
              <List
                navigation={this.props.navigation}
                title={'베베를 위한 추천 pick'}
                datas={SLIDE02}
                page={3}
              />
              {/* 여기 위 아래 부분 비슷해서 컴포넌트 썻는데 실제로 다른거같아서 추후 처리 필요 페이지네이션부분은 컴포넌트화 안되어있음 */}
              {/* <View
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  padding: 15,
                }}>
                <View style={styles.slide02Header}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color: '#212121',
                    }}>
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
                          <Text style={styles.comTitle}>
                            프로바이오틱스 세제
                          </Text>
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
                          <Text style={styles.comTitle}>
                            프로바이오틱스 세제
                          </Text>
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
                  <View
                    style={[styles.dot, {backgroundColor: '#32cc73'}]}></View>
                  <View style={styles.dot}></View>
                  <View style={styles.dot}></View>
                  <View style={styles.dot}></View>
                </View>
              </View> */}
              {/* 임시 */}
              <View style={{height: 30, backgroundColor: 'white'}}></View>
              {/*  */}
              <Footer />
            </View>
            {/*  */}
          </ScrollView>
          <Animated.View
            style={[
              styles.Header,
              {
                height: AnimateHeaderHeight,
                backgroundColor: 'white',
              },
            ]}>
            <View
              style={{
                // backgroundColor: 'green',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  styles.HeaderInsideText,
                  {
                    flexGrow: 1,
                    lineHeight: 45,
                    marginLeft: 24,
                    fontSize: 32,
                    fontWeight: 'bold',
                  },
                ]}>
                PICK
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  top: 0,
                  right: 24,
                  alignItems: 'center',
                  height: 45,
                }}>
                <View style={{marginRight: 10}}>
                  <SvgXml xml={SVG('HEART')} />
                </View>
                <View style={{}}>
                  <SvgXml xml={SVG('MYPAGE')} />
                </View>
              </View>
            </View>
            {/*  */}
            <Animated.View
              style={{
                // backgroundColor: 'white',
                // padding: 10,
                position: 'absolute',
                // left: 0,
                // right: 0,
                // top: 45,
                left: AnimatedLeft,
                right: AnimatedRight,
                top: AnimatedTop,
              }}>
              <View style={{backgroundColor: 'transparent', padding: 10}}>
                <View
                  style={{
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#32cc73',
                    padding: 5,
                    paddingLeft: 20,
                    paddingRight: 15,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 9, justifyContent: 'center'}}>
                    <Text numberOfLines={1}>
                      수딩내추럴 인텐스 모이스처 크림
                    </Text>
                  </View>
                  <SvgXml xml={SVG('SEARCH')} />
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  Header: {
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    // top: Platform.OS == 'ios' ? 20 : 0,
    overflow: 'hidden',
  },
  HeaderInsideText: {
    color: 'black',
    fontSize: 18,
    // textAlign: 'center',
  },
  TextViewStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    margin: 5,
    padding: 7,
  },
  //
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
