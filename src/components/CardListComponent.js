import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from './SvgComponent';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {BlurView} from '@react-native-community/blur';
import {
  FONTSIZE,
  BLACK35,
  BLACK60,
  BLACK87,
  DARKMINT,
  WHITESPACE,
} from '../Constant';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      page: props.page,
      datas: props.datas,
      display: 'none',
      minHeight: props.page * 80,
      session: props.session,
      rendered: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({display: 'flex'}), 100);
  }

  _countPagenation = (val) => {
    Array.prototype.division = function (n) {
      var arr = this;
      var len = arr.length;
      var cnt = Math.floor(len / n);
      var tmp = [];

      for (var i = 0; i <= cnt; i++) {
        tmp.push(arr.splice(0, n));
      }

      return tmp;
    };
    //
    let datas = val;

    let array = [];
    if (datas.length <= 3) {
      array.push(datas);
    } else {
      array = datas.division(this.state.page);
    }
    // console.log('자르기; ', array);
    return array;
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.datas, nextState.datas);
    nextState.datas = nextProps.datas;
    return nextProps.datas.length == 0 ? false : true;
  }

  componentWillUnmount() {
    this.setState({display: !this.state.display});
  }

  _intoDetail = (brand, name) => {
    this.props.navigation.navigate('Detail', {
      brand: brand,
      name: name,
    });
  };

  _getList = (datas) => {
    // console.log(datas);
    if (datas.length > 0) {
      return datas.map((data, index) => {
        // console.log(data.img);
        if (index > 5) {
          return null;
        } else {
          return (
            <View
              style={{
                // backgroundColor: 'lightgray',
                paddingTop: 10,
                paddingBottom: 10,
                height: 80,
              }}
              key={index}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingLeft: 12,
                  paddingRight: 12,
                }}
                onPress={() => this._intoDetail(data.title, data.name)}>
                <View
                  style={{
                    backgroundColor: 'coral',
                    width: 60,
                    height: 60,
                    borderRadius: 5,
                    alignSelf: 'center',
                  }}>
                  {/* <Image
                      // source={uri('../images/1.jpeg')}
                      source={{
                        uri: 'http://172.30.1.9/media/' + data.name + '.jpg',
                      }}
                      style={{width: 55, height: 55}}
                      resizeMode="contain"
                    /> */}
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    flexGrow: 1,
                    paddingLeft: 12,
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      flex: 1,
                    }}>
                    <View style={{marginBottom: 5}}>
                      <Text
                        style={{
                          color: BLACK60,
                          fontSize: FONTSIZE.SMALL,
                        }}>
                        {data.brand_name}
                      </Text>
                    </View>
                    <View style={{}}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: FONTSIZE.LARGE,
                          color: BLACK87,
                        }}>
                        {data.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                      }}>
                      <Text
                        style={{
                          color: DARKMINT,
                          fontSize: FONTSIZE.SMALL,
                        }}>
                        {data.hashtag}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: 80,
                    }}>
                    <SvgXml xml={SVG('STAR_CHECKED')} width="16" height="16" />
                    <Text style={{color: DARKMINT, fontSize: FONTSIZE.SMALL}}>
                      {data.score}
                    </Text>
                    <Text style={{fontSize: FONTSIZE.SMALL, color: BLACK35}}>
                      ({data.score_count})
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }
      });
    }
  };

  _renderItem = ({item, index}) => {
    return this._getList(item);
  };

  pagination = (result) => {
    const {activeSlide} = this.state;
    return (
      <Pagination
        style={{paddingVertical: 0}}
        // dotsLength={this.state.datas.length}
        dotsLength={result.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'white', paddingVertical: 10}}
        dotStyle={{
          backgroundColor: DARKMINT,
          marginHorizontal: -3.5,
          width: 6,
          height: 6,
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(245,245,245,1)',
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  };

  render() {
    let {session, datas} = this.state;
    let result = this._countPagenation(datas);
    return (
      <Fragment>
        <View>
          <View
            style={[
              styles.slide02,
              // Platform.OS === 'ios'
              //   ? null
              //   : {
              //       overflow: 'hidden',
              //     },
            ]}>

            <View style={[styles.slideCard, {minHeight: this.state.minHeight},{marginVertical:this.props.slideMarginVertical} || {}]}>

              <View style={styles.slideCardHeader}>
                <Text
                  style={{
                    fontSize: FONTSIZE.TITLE,
                    fontWeight: '600',
                    color: BLACK87,
                  }}>
                  {/* 우리 아이를 위한 추천 */}
                  {this.props.title}
                </Text>
              </View>
              {/* {datas.length > 0 ? ( */}
              <>
                {/* {console.log(this._countPagenation(datas))} */}
                <Carousel
                  ref={(c) => {
                    this._carousel = c;
                  }}
                  // data={this.state.datas}
                  data={result}
                  renderItem={this._renderItem}
                  sliderWidth={Dimensions.get('screen').width - 28}
                  itemWidth={Dimensions.get('screen').width - 28}
                  onSnapToItem={(index) => {
                    console.log(index);
                    this.setState({activeSlide: index});
                  }}
                  removeClippedSubviews={false}
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                />

                {this.pagination(result)}
              </>
              {/* ) : (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text>진행되는중</Text>
                </View>
              )} */}
            </View>
            {console.log(session)}
            {session ? (
              <BlurView
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 6,
                  right: 0,
                  bottom: 5,
                  display: this.state.display,
                }}
                blurType={
                  Platform.OS === 'ios' ? 'ultraThinMaterialDark' : 'dark'
                }
                blurAmount={1}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    backgroundColor: 'transparent',
                  }}>
                  <Text style={{color: 'white', fontSize: 17}}>
                    로그인이 필요한 기능입니다
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={{
                      borderColor: 'white',
                      borderWidth: 1,
                      borderRadius: 50,
                      padding: 5,
                      paddingLeft: 15,
                      paddingRight: 15,
                      marginTop: 10,
                    }}>
                    <Text style={{color: 'white'}}>로그인하시겠어요?</Text>
                  </TouchableOpacity>
                </View>
              </BlurView>
            ) : null}
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  slide02: {
    shadowOffset: {
      height: 5,
    },
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 0.06,
    shadowRadius: 10,

    elevation: 5,
  },
  slideCard: {
    backgroundColor: 'white',
    paddingBottom: 8,
    borderRadius: 20,
    shadowOpacity: 0.1,
    shadowRadius: 15,

    elevation: 3,
    // overflow: 'hidden',
  },
  slideCardHeader: {
    // backgroundColor:'lightgray',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  cardInfo: {
    height: 75,
    // backgroundColor:'pink',
    justifyContent: 'center',
    // flex: 5,
  },
  cardInfoCompany: {marginBottom: 3},
  comText: {
    color: '#5C5C5C',
    fontSize: FONTSIZE.SMALL,
  },
  comTitle: {
    fontWeight: '500',
    fontSize: FONTSIZE.LARGE,
  },
  comHash: {
    color: '#31CC74',
    marginTop: 10,
    fontSize: FONTSIZE.SMALL,
  },
  cardScore: {
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 80,
  },
  slide02Dot: {
    // backgroundColor:'gray',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#1f1f1f1f',
    borderRadius: 8,
    margin: 5,
  },
});

// export default Home;
