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
  Dimensions,
} from 'react-native';
import CardList from '../components/CardListComponent';
import CardTalk from '../components/CardTalkComponent';
import Footer from './FooterScreen';
import CardPost from '../components/CardPostComponent';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SLIDE01 = [
  {
    img: '../images/1.jpeg',
    brand_name: '베베랩',
    name: '어린이 치약',
    hashtag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    score_count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    brand_name: '베베랩',
    name: '어린이 치약',
    hashtag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    score_count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    brand_name: '베베랩',
    name: '어린이 치약',
    hashtag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    score_count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    brand_name: '베베랩',
    name: '어린이 치약',
    hashtag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    score_count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    brand_name: '베베랩',
    name: '어린이 치약',
    hashtag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    score_count: '2,121',
  },
];

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
    img: '../images/1.jpeg',
    title: '남양',
    name: '아이꼬야 동결건조 과일 귤',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
];

const TALK01 = [
  {
    img: '../images/1.jpeg',
    title: '사랑의 불시착',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일 침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
  {
    img: null,
    title: '젖 뗀지 8개월 되어 갑니다.',
    content: `현재 아기가 16개월 되어가고, 8개월정도까지 혼합수유 하다가 복집하면서 젖 뗐어요. 그래서 지금은 젖뗀지 어쩌고 저쩌고 이렇쿵 저렇쿵`,
    type: '시시콜콜',
  },
  {
    img: '../images/1.jpeg',
    title: '사랑의 불시착',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일 침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
  {
    img: null,
    title: '동백 꽃 필무렵 엉엉',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일 침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
  {
    img: '../images/1.jpeg',
    title: '사랑의 불시착',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일 침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
  {
    img: null,
    title: '동백 꽃 필무렵 엉엉',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일 침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
];

const IMAGESLIDE = [
  {url: 'https://i.ibb.co/gRrCrcq/slide01.png'},
  {url: 'https://i.ibb.co/gRrCrcq/slide01.png'},
  {url: 'https://i.ibb.co/gRrCrcq/slide01.png'},
  {url: 'https://i.ibb.co/gRrCrcq/slide01.png'},
  {url: 'https://i.ibb.co/gRrCrcq/slide01.png'},
];

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      images: [],
      activeSlide: 0,
      slide01: [],
      slide02: [],
    };
  }

  getBase = () => {
    this.setState({images: IMAGESLIDE, slide01: SLIDE01});
  };

  async componentDidMount() {
    this.getBase();
    const response = await fetch('http://babbling.co.kr/product/semi-drug/');

    const resJson = await response.json();
    this.setState({slide02: resJson});
    this.setState({slide01: SLIDE01});
    console.log(resJson);
  }

  componentWillUnmount() {}

  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  _rootNavi = () => {
    console.log(this.props.route.key);
    this.props.navigation.navigate('TALK', {
      screen: 'TalkTop',
      params: {screen: '포스팅'},
    });
  };

  pagination = () => {
    const {images, activeSlide} = this.state;
    return (
      <Pagination
        style={{paddingVertical: 0}}
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'white',
          paddingVertical: 10,
        }}
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

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          overflow: 'hidden',
          marginLeft: 1,
          marginRight: 1,
        }}
        key={index}>
        <Image
          source={{uri: item.url}}
          resizeMode={'cover'}
          style={{
            width: Dimensions.get('screen').width - 20,
            height: '100%',
          }}
        />
        {/* <Text>{item.url}</Text> */}
      </TouchableOpacity>
    );
  };

  render() {
    let {slide02, slide01} = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#f9f9f9'}}>
            {/* slide01 */}
            <View
              style={{
                height: 250,
                // alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <Carousel
                ref={(c) => {
                  this._carousel = c;
                }}
                data={this.state.images}
                renderItem={this._renderItem}
                sliderWidth={Dimensions.get('screen').width}
                itemWidth={Dimensions.get('screen').width - 20}
                onSnapToItem={(index) => this.setState({activeSlide: index})}
                removeClippedSubviews={false}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                loop={true}
                loopClonesPerSide={2}
              />
              {this.pagination()}
            </View>
            {/* slide02 */}
            <CardList
              navigation={this.props.navigation}
              title={'우리 아이를 위한 추천'}
              datas={slide01}
              page={3}
              // session={true}
            />
            {/*  */}
            <CardList
              navigation={this.props.navigation}
              title={'베스트 셀러'}
              datas={slide02}
              page={3}
            />
            {/* 수입장난감 */}
            <Image
              source={require('../images/add01.png')}
              resizeMode="contain"
              style={{width: '100%', marginTop: 30, marginBottom: 20}}
            />
            {/* 수다톡 */}
            <CardTalk
              datas={TALK01}
              title={'인기 수다톡'}
              more={() => {
                this.props.navigation.navigate('TALK', {
                  screen: 'TalkTop',
                });
              }}
              nav={() => this.props.navigation.navigate('TalkDetail')}
            />
            {/* 포스팅 */}
            <View style={posting.titleBox}>
              {/*  */}
              <View style={posting.title}>
                <View
                  style={{
                    flex: 9,
                  }}>
                  <Text style={posting.titleText}>포스팅</Text>
                </View>
                <TouchableOpacity onPress={this._rootNavi} style={{flex: 1}}>
                  <Text style={posting.titleMore}>더보기</Text>
                </TouchableOpacity>
              </View>
              {/*  */}
              <CardPost
                nav={() => this.props.navigation.navigate('PostDetail')}
              />
              {/*  */}
              <CardPost
                nav={() => this.props.navigation.navigate('PostDetail')}
              />
              {/*  */}
              <CardPost
                nav={() => this.props.navigation.navigate('PostDetail')}
              />
              {/*  */}
            </View>
            {/* footer */}
            <Footer />
            {/*  */}
          </View>
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
  title: {flexDirection: 'row', paddingLeft: 24, paddingRight: 24, height: 30},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  titleMore: {fontSize: 12, color: 'gray'},
  textBox: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    margin: 5,
  },
});
