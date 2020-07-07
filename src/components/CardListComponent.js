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
  URL,
} from '../Constant';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: props.slide,
      page: props.page,
      datas: props.datas,
      display: 'none',
      minHeight: props.page * 80,
      session: props.session,
      arrayVal: [],
    };
  }
  componentDidMount() {}
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

    console.log('val============', val);
    //데이터 잘리는거 처리함
    if (datas.length <= 3) {
      if (datas.length == 0) {
        array = this.state.arrayVal.length > 0 ? this.state.arrayVal : [];
      } else {
        array.push(datas);
      }
    } else {
      array = datas.division(this.state.page);
      this.setState({arrayVal: array});
    }
    console.log('자르기; ', array);
    return array;
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(this.state);
    console.log('==============', nextProps, prevState);
    let result = {activeSlide: prevState.activeSlide};

    if (nextProps.datas.length > 0) {
      result = {
        datas: nextProps.datas,
        activeSlide: prevState.activeSlide,
      };
    }
    console.log(result);
    return result;
  }
  // componentWillUpdate(nextProps, nextState) {
  //   nextProps.datas = nextState.datas;
  // }

  componentWillUnmount() {}
  _intoDetail = (data) => {
    this.props.navigation.navigate('Detail', {
      data: data,
    });
  };
  _getList = (datas) => {
    if (datas.length > 0) {
      return datas.map((data, index) => {
        let url =
          URL +
          '/media/product/' +
          data.code +
          '/' +
          data.brand_name +
          '/' +
          data.name +
          '.jpg';
        console.log(url);
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
              onPress={() => this._intoDetail(data)}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 60,
                  height: 60,
                  borderRadius: 5,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{
                    uri: url,
                  }}
                  style={{width: 55, height: 55}}
                  resizeMode="contain"
                />
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
                      {data.hash_tag}
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
                    {data.star}
                  </Text>
                  <Text style={{fontSize: FONTSIZE.SMALL, color: BLACK35}}>
                    ({data.star_count})
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      });
    }
  };
  _renderItem = ({item, index}) => {
    return this._getList(item);
  };
  pagination = (result) => {
    let {activeSlide} = this.state;
    // console.log(activeSlide);
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
    let {session, datas, activeSlide} = this.state;
    console.log(datas);
    let result = this._countPagenation(datas);
    console.log('result', result);
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
                    // console.log('iii', index);
                    this.setState((prev) => ({activeSlide: index}));
                    // this.setState({activeSlide: index});
                    // console.log('ddd', this.state.activeSlide);
                  }}
                  // removeClippedSubviews={false}
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                />
                {this.pagination(result, activeSlide)}
                {/* {console.log(activeSlide)} */}
              </>
              {/* flatlist */}
              {/* <>
                <FlatList
                  data={this.props.datas}
                  renderItem={({item}) => <Text>{item.name}</Text>}
                  keyExtractor={(item) => item.idx}
                />
              </> */}
              {/* ) : (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text>진행되는중</Text>
                  </View>
                )} */}
            </View>
            {/* {console.log(session)} */}
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
