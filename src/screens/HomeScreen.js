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
import SlideImageBanner from '../components/SlideImageBannerComponent';
import {URL} from '../Constant';

import * as ScreenMargin from '../values/ScreenMargin';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      images: [],
      activeSlide: 0,
      slide01: [],
      slide02: [],
      token: null,
    };
  }

  getImages = async () => {
    const images = await fetch(URL + '/home/banner/', {
      headers: {
        Authorization: 'JWT ' + this.state.token,
      },
    }).then((res) => res.json());
    console.log('홈 배너 이미지: ', images);
    return images;
  };

  getBase = async () => {
    const images = await this.getImages();
    this.setState({images: images});
  };

  getToken = async () => {
    let token = await AsyncStorage.getItem('token');
    this.setState({token});
  };

  async componentDidMount() {
    await this.getToken();
    this.getBase();
    fetch(URL + '/product/', {
      headers: {
        Authorization: 'JWT ' + this.state.token,
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log('상품 리스트: ', resJson);
        this.setState({
          slide02: resJson,
          // slide01: SLIDE01,
        });
      });
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
        inactiveDotOpacity={0.9}
        inactiveDotScale={0.9}
      />
    );
  };

  _renderItem = ({item, index}) => {
    let url = URL + '/media/' + item.image;
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
          source={{
            uri: url,
          }}
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
    const screenMargin = ScreenMargin.getMargin(this.props.route.name);
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#f9f9f9', width: '100%'}}>
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
                itemWidth={Dimensions.get('screen').width - screenMargin * 2}
                onSnapToItem={(index) => this.setState({activeSlide: index})}
                removeClippedSubviews={false}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                loop={true}
                loopClonesPerSide={2}
              />
              {this.pagination()}
            </View>
            <View style={{width: '100%', paddingHorizontal: screenMargin}}>
              {/* slide02 */}
              <CardList
                navigation={this.props.navigation}
                title={'우리 아이를 위한 추천'}
                datas={slide02}
                page={3}
                // session={true}
                slide={0}
                slideMarginVertical={8}
              />
              {/*  */}
              {/* {this.state.slide02.length > 0 ? ( */}
              {/* <CardList
                navigation={this.props.navigation}
                title={'베스트 셀러'}
                datas={slide01}
                page={3}
                slide={0}
                slideMarginVertical={8}
              /> */}
            </View>
            {/* 수입장난감 */}
            {/* <SlideImageBanner
              images={[
                {url: '../images/add01.png'},
                {url: '../images/add01.png'},
              ]}
            /> */}
            {/* <View style={{width: '100%', paddingHorizontal: screenMargin}}> */}
            {/* 수다톡 */}
            {/* <CardTalk
                datas={TALK01}
                title={'인기 수다톡'}
                more={() => {
                  this.props.navigation.navigate('TALK', {
                    screen: 'TalkTop',
                  });
                }}
                nav={() => this.props.navigation.navigate('TalkDetail')}
                itemMarginVertical={8} //아이템 상하 간 간격
                style={{marginBottom: 46}}
            /> */}
            {/* 포스팅 */}
            {/* <View style={[posting.titleBox, {marginBottom: 47}]}> */}
            {/*  */}
            {/* <View style={posting.title}>
                  <View
                    style={{
                      flex: 9,
                    }}>
                    <Text style={posting.titleText}>포스팅</Text>
                  </View>
                  <TouchableOpacity onPress={this._rootNavi} style={{flex: 1}}>
                    <Text style={posting.titleMore}>더보기</Text>
                  </TouchableOpacity>
                </View> */}
            {/*  */}
            {/* <CardPost
                  nav={() => this.props.navigation.navigate('PostDetail')}
                  style={{marginVertical: 8, marginHorizontal: 6}}
                /> */}
            {/*  */}
            {/* <CardPost
                  nav={() => this.props.navigation.navigate('PostDetail')}
                  style={{marginVertical: 8, marginHorizontal: 6}}
                /> */}
            {/*  */}
            {/* <CardPost
                  nav={() => this.props.navigation.navigate('PostDetail')}
                  style={{marginVertical: 8, marginHorizontal: 6}}
                /> */}
            {/*  */}
            {/* </View>
            </View> */}
            {/* footer navigation 추가*/}
            <Footer navigation={this.props.navigation} />
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
    shadowOpacity: 0.3,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {flexDirection: 'row', marginHorizontal: 16, marginBottom: 8},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  titleMore: {fontSize: 10, color: 'gray'},
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
