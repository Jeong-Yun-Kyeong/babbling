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

// const DATAS = [1, 2, 3];

export default class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      page: this.props.page,
      datas: null,
    };
  }

  componentWillMount() {
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
    console.log(this.props.datas);
    let datas = this.props.datas;
    let {page} = this.state;
    // 3개씩 끊는법 배열을

    let array = [];
    if (datas.length <= 3) {
      array.push(datas);
    } else {
      array = datas.division(page);
    }
    console.log(array);

    this.setState({
      datas: array,
    });
  }

  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  _getList = (datas) => {
    console.log(datas);
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
    console.log(item);
    console.log(item.length);
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
        <View style={styles.slide02}>
          <View style={styles.slideCard}>
            <View style={styles.slideCardHeader}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#5d5d5d'}}>
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
            />

            {this.pagination()}
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  slide02: {
    backgroundColor: 'rgba(245,245,245,.5)',
    // height: 550,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  slideCard: {
    backgroundColor: 'white',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,

    elevation: 5,
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
  cardInfoCompany: {},
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
