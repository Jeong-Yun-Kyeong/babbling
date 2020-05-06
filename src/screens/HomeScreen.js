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

const SLIDE01 = [
  {
    img: '../images/1.jpeg',
    title: '베베랩',
    name: '고보습 베리어 베이비 로션 200ml',
    hashTag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/2.jpeg',
    title: 'BUTLER(버틀러)',
    name: '프로바이오틱스 세제',
    hashTag: '#세정력 #아기냄새 #인스타',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/3.jpeg',
    title: '풀무원 베이비밀',
    name: '닭가슴살 바나나죽',
    hashTag: '#8-9개월 #닭알레르기 #잘먹음',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/2.jpeg',
    title: 'BUTLER(버틀러)',
    name: '프로바이오틱스 세제',
    hashTag: '#세정력 #아기냄새 #인스타',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/3.jpeg',
    title: '풀무원 베이비밀',
    name: '닭가슴살 바나나죽',
    hashTag: '#8-9개월 #닭알레르기 #잘먹음',
    score: 4.5,
    count: '2,121',
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
import Footer from './FooterScreen';
import CardPost from '../components/CardPostComponent';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const IMAGESLIDE = [
  {url: 'https://i.ibb.co/gRrCrcq/slide01.png'},
  {
    url: 'https://i.ibb.co/gRrCrcq/slide01.png',
  },
];
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      images: [],
      activeSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({images: IMAGESLIDE});
  }

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
        containerStyle={{backgroundColor: 'white', paddingVertical: 10}}
        dotStyle={{
          // width: 8,
          // height: 8,
          // borderRadius: 8,
          // marginHorizontal: 8,
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

  _renderItem = ({item, index}) => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center'}}
        key={index}>
        <Image
          source={{uri: item.url}}
          resizeMode={'cover'}
          style={{width: Dimensions.get('screen').width - 40, height: '100%'}}
        />
        {/* <Text>{item.url}</Text> */}
      </View>
    );
  };

  render() {
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
                height: 300,
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
                itemWidth={Dimensions.get('screen').width - 50}
                onSnapToItem={(index) => this.setState({activeSlide: index})}
                removeClippedSubviews={false}
              />
              {this.pagination()}
            </View>
            {/* slide02 */}
            <CardList
              navigation={this.props.navigation}
              title={'우리 아이를 위한 추천'}
              datas={SLIDE01}
              page={3}
            />
            {/* slide03 */}
            <CardList
              navigation={this.props.navigation}
              title={'베스트 셀러'}
              datas={SLIDE02}
              page={3}
            />
            {/* 임시 */}
            <View style={{height: 30, flex: 1}}></View>
            {/* 수입장난감 */}
            <Image
              source={require('../images/add01.png')}
              style={{width: '100%', backgroundColor: 'lightgray'}}
            />
            {/* 임시 */}
            <View style={{height: 30, flex: 1}}></View>
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
              {/* <View style={posting.textBox}>
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
              </View> */}
              {/*  */}
              {/* <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      감기약, 바르게 알고 먹이자
                    </Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </View> */}
              <CardPost
                nav={() => this.props.navigation.navigate('PostDetail')}
              />
              {/*  */}
              {/* <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>탄5 단2 지3</Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </View> */}
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
