import React, {Fragment, PureComponent} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import MypageTab from '../navigations/MypageTabNavigation';

import Carousel from '../../custom_node_modules/react-native-snap-carousel/src/index';
import {BlurView} from '@react-native-community/blur';

import ModyInformModal from '../components/ModyInformComponent'

class MypageTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      profile: [
        {
          img:
            'https://img.momtalk.kr/image/information/2018/02/02/1517581280.jpg',
          imgType: 'www',
          title: '베베',
          month: 1,
          addProfile: false
        },
        {
          img:
            'https://post-phinf.pstatic.net/MjAxOTEwMjJfNzQg/MDAxNTcxNzAxOTM5MjI0.DBtZSvk5URtD1I23MNxUikr5k9_akF7Mo0qbJcKjBvog.Tmg6E01kz9QvZMoBwxSonfx7XuY9ji3ZOP-i7er0xrIg.PNG/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%98%EC%84%B8%EC%9A%94_%2818%29.png?type=w1200',
          imgType: 'www',
          title: '에베',
          month: 3,
          addProfile: false
        },
        {
          img:
            'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99FD2D345B3E399E110FAB',
          imgType: 'www',
          title: '아베',
          month: 2,
          addProfile: false
        }
      ],

      addProfile: {
        img:
          //'https://icons.iconarchive.com/icons/icons8/ios7/512/User-Interface-Plus-icon.png',
          require('../images/icon/plusIcon.png'),
        imgType:'local',
        title: '더하기',
        month: 2,
        addProfile: true
      },

      itemWidth: Dimensions.get('window').width * 0.25,
      width: Dimensions.get('window').width,
      curProfileIndex: 0,

      interpolation: 20,
      inactiveScale: 0.7,

      isIos: Platform.OS === 'ios',

      slidersPosition: {},

      carouselLoading: true,
      onScrollTrigger: true,

      sliderBackgroundIndex: 0,

      modyItem: null,

      modalVisible:false
    };
  }

  setIsScroll = () => {};

  profileOnclick = (item,index)=> {
    if(this.state.curProfileIndex == index) {
      if(item.addProfile) {
        this.props.navigation.push('BabyPlus_my',{isRegister:true});
      } else {
        this.setState({modalVisible:true,modyItem:item});
      }
    }else {
      this.snapToItemByOnPress(index);      
    }
  }

  snapToItemByOnPress = (index) => {
    this.state.isIos
      ? setTimeout(() => this._carousel.snapToItem(index, true, true), 0)
      : this._carousel.snapToItem(index, true, true);
  };

  find_dimesions(layout) {
    const {x, y, width, height} = layout;
    console.warn(x);
    console.warn(y);
    console.warn(width);
    console.warn(height);
  }

  componentDidMount() {
    this.setCurProfileInterval();

    //this.props.navigation.setParams({params:{isRegister:true}});
  }


  setCurProfileInterval = ()=> {
    this.curProfileInterval = setInterval(()=>{
      this.setCurProfile();
      //console.log(this.state.curProfileIndex);
    },200);
  }

  setCurProfile = (chBack = false)=> {
    var curIndex  = 0;
    for(var i=0;i<this.state.slidersPosition.length;i++) {
      if(Math.abs(this._carousel.currentScrollPosition-this.state.slidersPosition[i])<this.state.slidersPosition[1]*0.5) {
        curIndex = i;
        break;
      }
    }
    this.setState((prev)=>({curProfileIndex:curIndex, sliderBackgroundIndex:(chBack)? curIndex : prev.sliderBackgroundIndex}));
  }

  modalController = (visible)=>{
    console.log('visible',visible);
    this.setState({modalVisible:visible});
  }

  unsetCurProfileInterval = () => {
    if (this.curProfileInterval) {
      clearInterval(this.curProfileInterval);
      this.curProfileInterval = null;
    }
  };

  componentWillUnmount() {
    this.unsetCurProfileInterval();
  }


  getImageSource = ({img,imgType})=>{
    if(imgType=='www') {
      return {uri:img};
    } else if(imgType=='local') {
      return img;

    } else {
      return {uri: ''};
    }
  };

  _renderItem = (item, index, curIndex) => {

    let invisible = (curIndex!=index || item.addProfile) ? styles.inVisible : {};


    return (
      <View style={styles.slide}>
        <TouchableHighlight
          underlayColor="#fff"

          //activeOpacity={0.6}
          onPress={() => this.profileOnclick(item,index)}
          // onPress={() => console.log(index)}

          style={{
            width: this.state.itemWidth,
            height: this.state.itemWidth,
            borderRadius: this.state.itemWidth / 2,
            overflow: 'hidden',
          }}>
            <View>
              <Image
                //source={{uri: item.profile} || require('../images/icon/plusIcon.png') || ""}
                source={this.getImageSource(item)}
                resizeMode="cover"
                style={{width: this.state.itemWidth, height: this.state.itemWidth}}
              />
              {/* <Image
                //source={{uri: item.profile} || require('../images/icon/plusIcon.png') || ""}
                source={require('../images/icon/plusIcon.png')}
                resizeMode="cover"
                style={{width: 100, height: 100}}
              /> */}
            </View>
        </TouchableHighlight>
        <View style={[styles.slideContent, invisible]}>
          <Text style={[styles.title, invisible]}>{item.title}</Text>
          <View style={[styles.buttonContainer, invisible]}>
            <TouchableOpacity>
              <Text style={[styles.capsule, invisible]}>{item.month}개월</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.capsule, invisible]}>알레르기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {

    let renderSlideData = [...this.state.profile,this.state.addProfile];

    return (
      <Fragment>
        <View
          style={{
            width: '100%',
            height: 300,
          }}>
          <BlurView
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: Dimensions.get('screen').width,
              height: 300,
              zIndex: -3,
            }}
            blurType="dark"
            blurAmount={10}
            automaticallyAdjustContentInsets={true}
          />
          <ImageBackground
            // source={
            //   {uri:this.state.entries[this.state.sliderBackgroundIndex].profile}
            //   || require('../images/icon/plusIcon.png') || ""}
            source={this.getImageSource(renderSlideData[this.state.sliderBackgroundIndex])}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: Dimensions.get('screen').width,
              height: 300,
              resizeMode: 'cover',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              zIndex: -5,
            }}></ImageBackground>
          {/*  */}
          <View
            style={{
              width: Dimensions.get('screen').width,
              height: 300,
            }}>
                {(this.state.carouselLoading) ?
            <Carousel
              bounces={false}
              ref={(c) => {
                this._carousel = c;
                //this.setState({slidersPosition:this._carousel.slidersPosition});
              }}
              scrollEventThrottle={16}
              data={renderSlideData}
              //renderItem={({item,index})=> this._renderItem(item,index)}
              renderItem={({item,index})=>this._renderItem(item,index,this.state.curProfileIndex)}
              sliderWidth={this.state.width}
              itemWidth={this.state.itemWidth}
              onLayout={()=>{this.setState({slidersPosition:this._carousel.slidersPosition})}}
              // sliderWidth={this.state.width}
              // itemWidth={this.state.itemWidth}
              // sliderStyle={{height: 100}}
              inactiveSlideScale={this.state.inactiveScale}

              //inactiveSlideShift={-35}

              //onBeforeSnapToItem={(slideIndex)=>{this.setCurProfile();}}
              onSnapToItem = {(slideIndex)=>{
                //console.log("snap",this.state.curProfileIndex);
                this.setCurProfile(true);
                //this.setState(()=>({sliderBackgroundIndex:this.state.curProfileIndex}));
              }}

              //onScroll = {(event)=>{}}

              // onBeforeSnapToItem = {(slideIndex)=>{this.setCurProfileInterval();}}
              // onSnapToItem = {(slideIndex)=>{this.unsetCurProfileInterval();}}
            /> : <></>}

          </View>
        </View>

        <MypageTab />
        <ModyInformModal modalVisible={this.state.modalVisible} modalController={this.modalController.bind(this)} modyItem={this.state.modyItem} navigation={this.props.navigation}/>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  selectContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  capsule: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 0.5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 8,
    borderRadius: 10,
    marginHorizontal: 3,
  },

  inVisible: {opacity:0},

});

export default MypageTop;