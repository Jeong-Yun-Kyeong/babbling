import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  //
  Dimensions,
} from 'react-native';
import Footer from './FooterScreen';
//slide 추가
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {URL} from '../Constant';
//slide 추가(데이터)
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
//slide추가 end

export default class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      //slide 추가(상단 슬라이드)
      images: [],
      activeSlide: 0,
      slide02: [],
      //slide 추가 end
    };
  }

  //slide 추가(slide데이터 받아오기&slide하단 동그라미 표현)
  componentWillMount() {
    this.setState({images: IMAGESLIDE});
    console.log('시작');
    fetch(URL + '/product/')
      .then((res) => res.json())
      .then((resJson) => {
        console.log('데이터 받아오기', resJson);
        this.setState({
          slide02: resJson,
        });
      });
  }
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
  //slide 추가 end

  componentDidMount() {}

  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  _goDetail = () => {
    this.props.navigation.navigate('PostDetail');
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          {/* 전체padding추가 */}
          <View
            style={{
              backgroundColor: '#f9f9f9',
              paddingRight: 16,
              paddingLeft: 16,
            }}>
            {/* slide 추가 */}
            <View style={{paddingTop: 9}}>
              <View style={{height: 128, backgroundColor: 'white'}}>
                <Carousel
                  ref={(c) => {
                    this._carousel = c;
                  }}
                  data={this.state.images}
                  renderItem={this._renderItem}
                  sliderWidth={Dimensions.get('screen').width - 32}
                  itemWidth={Dimensions.get('screen').width}
                  onSnapToItem={(index) => this.setState({activeSlide: index})}
                  removeClippedSubviews={false}
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                  borderRadius={7}
                  loop={true}
                  loopClonesPerSide={2}
                />
              </View>
              <View style={{marginTop: -20}}>{this.pagination()}</View>
            </View>
            {/* slide 추가 end */}
            {/* 포스팅 */}
            {/* marginTop추가 */}
            <View style={{marginTop: 30}}></View>
            <View style={[posting.titleBox]}>
              {/*  */}
              <View style={posting.title}>
                <View
                  style={{
                    flex: 9,
                  }}>
                  <Text style={posting.titleText}>주간 베스트</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('PostList');
                  }}>
                  <Text style={{fontSize: 11, color: 'gray'}}>더보기</Text>
                </TouchableOpacity>
              </View>
              {/*  */}
              <TouchableOpacity
                style={posting.textBox}
                onPress={this._goDetail}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      임산부는 반드시 피하세요!
                    </Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </TouchableOpacity>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      임산부는 반드시 피하세요!
                    </Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      임산부는 반드시 피하세요!
                    </Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
            {/*  */}
            {/* youtube */}
            <View style={posting.titleBox}>
              {/*  */}
              <View style={posting.title}>
                <View
                  style={{
                    flex: 9,
                  }}>
                  <Text style={posting.titleText}>Youtube</Text>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      [베블링 크리스마스 특집]크리스마스 모빌 만들기
                    </Text>
                  </View>
                  <View></View>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      [베블링 리뷰]제 7탄 유아간식
                    </Text>
                  </View>
                  <View></View>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      [베블링 리뷰]제 8탄 유아 젤리
                    </Text>
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
            {/* view위치 변경 */}
          </View>
          {/* footer */}
          <Footer />
          {/*  */}
        </ScrollView>
      </Fragment>
    );
  }
}

const posting = StyleSheet.create({
  titleBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  //margin변경
  title: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 14,

    height: 30,
  },
  titleText: {fontSize: 16, fontWeight: 'bold'},
  titleMore: {fontSize: 12, color: 'gray'},
  textBox: {
    backgroundColor: 'white',

    marginBottom: 35,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
