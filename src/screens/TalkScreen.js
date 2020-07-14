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
import * as ScreenMargin from '../values/ScreenMargin';
import CardTalk from '../components/CardTalkComponent';
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
//slide 추가 end

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
];
import Footer from './FooterScreen';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import {DARKMINT} from '../Constant';
//slide 추가
import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class Talk extends PureComponent {
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

  componentDidMount() {}

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
  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
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
            {/* slide03 */}
            {/*marginTop 추가*/}
            <View style={{marginTop: 30}}>
              <CardTalk
                datas={TALK01}
                title={'주간 베스트'}
                more={() => {
                  this.props.navigation.navigate('TalkList');
                }}
                nav={() => {
                  this.props.navigation.navigate('TalkDetail');
                }}
                //아이템 상하 간 간격
                itemMarginVertical={8}
                style={{marginBottom: 30}}
                itemWidth={ScreenMargin.getMargin(this.props.route.name) - 36}
                alignItems="center"
                //아이템 상하 간 간격 end
              />
            </View>
            {/*  */}
            <CardTalk
              datas={TALK01}
              title={'오늘의 지식인'}
              more={() => {
                this.props.navigation.navigate('TalkList');
              }}
              nav={() => {
                this.props.navigation.navigate('TalkDetail');
              }}
              //아이템 상하 간 간격
              itemMarginVertical={8}
              style={{marginBottom: 30}}
            />
            {/*  */}
            <CardTalk
              datas={TALK01}
              title={'HOT! 핫이슈'}
              more={() => {
                this.props.navigation.navigate('TalkList');
              }}
              nav={() => {
                this.props.navigation.navigate('TalkDetail');
              }}
              //아이템 상하 간 간격
              itemMarginVertical={8}
              style={{marginBottom: 30}}
            />
            {/*  */}
            {/* 포스팅 */}
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
          {/* footer navigation붙이기*/}
          <Footer navigation={this.props.navigation} />
          {/*  */}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TalkWrite');
          }}
          style={{
            width: 56,
            height: 56,
            backgroundColor: DARKMINT,
            borderRadius: 56,
            position: 'absolute',
            right: 20,
            bottom: 20,
            //
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,

            elevation: 5,
            //
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgXml xml={SVG('WRIGHT_W')} />
          {/* <SvgXml xml={SVG(BATH)} /> */}
        </TouchableOpacity>
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
  title: {flexDirection: 'row', paddingLeft: 10, paddingRight: 14, height: 30},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  titleMore: {fontSize: 12, color: 'gray'},
  textBox: {
    backgroundColor: 'white',
    //margin변경
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
    //margin변경 end
    overflow: 'hidden',
  },
});
