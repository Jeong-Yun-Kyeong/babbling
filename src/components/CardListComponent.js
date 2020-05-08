import React, {Fragment, PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from './SvgComponent';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {BlurView} from '@react-native-community/blur';

// const DATAS = [1, 2, 3];

export default class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      page: this.props.page,
      datas: null,
      display: 'none',
    };
  }

  componentWillMount() {
    this.setState({datas: this.props.datas});
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
  }
  componentDidMount() {
    // console.log(this.props.datas);
    // let datas = this.state.datas;
    let {page, datas} = this.state;
    // 3개씩 끊는법 배열을

    let array = [];
    if (datas.length <= 3) {
      array.push(datas);
    } else {
      array = datas.division(page);
    }
    // console.log(array);

    this.setState({
      datas: array,
    });
    setTimeout(() => this.setState({display: 'flex'}), 100);
  }

  componentWillUnmount() {
    this.setState({display: !this.state.display});
  }

  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  _getList = (datas) => {
    // console.log(datas);
    return datas.map((data, index) => {
      // console.log(data.img);
      if (index > 5) {
        return null;
      } else {
        return (
          <View style={styles.cardList} key={index}>
            <TouchableOpacity
              style={styles.innerCardList}
              onPress={this._intoDetail}>
              <View
                style={[
                  styles.cardImage,
                  {justifyContent: 'center', alignItems: 'center'},
                ]}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 55,
                    height: 55,
                    borderRadius: 5,
                  }}>
                  <Image
                    source={require('../images/1.jpeg')}
                    style={{width: 55, height: 55}}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.cardInfoCompany}>
                  <Text style={styles.comText}>{data.title}</Text>
                </View>
                <View style={styles.cardInfoProduct}>
                  <Text style={styles.comTitle}>{data.name}</Text>
                </View>
                <View style={styles.cardInfoHashtag}>
                  <Text style={styles.comHash}>{data.hashTag}</Text>
                </View>
              </View>
              <View style={styles.cardScore}>
                <SvgXml
                  xml={SVG('STAR_CHECKED')}
                  width="20"
                  height="20"
                  style={{marginRight: -3, marginTop: -5}}
                />
                <Text style={{color: '#31CC74', fontSize: 12}}>
                  {data.score}
                </Text>
                <Text style={{fontSize: 9, color: 'gray'}}>({data.count})</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }
    });
  };

  _renderItem = ({item, index}) => {
    // console.log(item);
    // console.log(item.length);
    return this._getList(item);
  };

  pagination = () => {
    const {activeSlide} = this.state;
    return (
      <Pagination
        style={{paddingVertical: 0}}
        dotsLength={this.state.datas.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'white', paddingVertical: 10}}
        dotStyle={{
          backgroundColor: '#32cc73',
          marginHorizontal: -3,
        }}
        inactiveDotStyle={{
          backgroundColor: '#f0f0f0',
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.9}
      />
    );
  };

  render() {
    return (
      <Fragment>
        <View>
          <View style={styles.slide02}>
            <View style={styles.slideCard}>
              <View style={styles.slideCardHeader}>
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#1e1e1e'}}>
                  {/* 우리 아이를 위한 추천 */}
                  {this.props.title}
                </Text>
              </View>
              <Carousel
                ref={(c) => {
                  this._carousel = c;
                }}
                data={this.state.datas}
                renderItem={this._renderItem}
                sliderWidth={Dimensions.get('screen').width - 28}
                itemWidth={Dimensions.get('screen').width - 28}
                onSnapToItem={(index) => this.setState({activeSlide: index})}
                removeClippedSubviews={false}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
              />

              {this.pagination()}
            </View>
          </View>
          {this.props.session ? (
            <BlurView
              style={{
                position: 'absolute',
                left: 0,
                top: 6,
                right: 0,
                bottom: 5,
                display: this.state.display,
              }}
              blurType="dark"
              blurAmount={1}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
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
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  slide02: {
    // backgroundColor: 'green',
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,

    elevation: 5,
  },
  slideCard: {
    backgroundColor: 'white',
    marginLeft: 14,
    marginRight: 14,
    paddingBottom: 8,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  slideCardHeader: {
    // backgroundColor:'lightgray',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 24,
  },
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
    flex: 5,
  },
  cardInfoCompany: {marginBottom: 3},
  comText: {
    color: '#5C5C5C',
    fontSize: 12,
  },
  comTitle: {
    fontWeight: '500',
    fontSize: 14,
  },
  comHash: {
    color: '#31CC74',
    marginTop: 10,
    fontSize: 10,
  },
  cardScore: {
    flex: 2,
    // backgroundColor: 'skyblue',
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
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#1f1f1f1f',
    borderRadius: 8,
    margin: 5,
  },
});

// export default Home;
