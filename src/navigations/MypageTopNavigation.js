import React, {Fragment, PureComponent, Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MypageTab from '../navigations/MypageTabNavigation';

import Carousel from 'react-native-snap-carousel';
import {BlurView} from '@react-native-community/blur';

class MypageTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          profile:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          title: '베베',
          month: 1,
        },
        {
          profile:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          title: '에베',
          month: 3,
        },
        {
          profile:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          title: '아베',
          month: 2,
        },
        {
          profile:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          title: '아베',
          month: 2,
        },
      ],
      itemWidth: Dimensions.get('window').width * 0.23,
      width: Dimensions.get('window').width,
      curProfileIndex: 0,

      interpolation: 20,
      inactiveScale: 0.7,

      isIos: (Platform.OS === 'ios'),

      slidersPosition: {},
      
      carouselLoading: true,
      onScrollTrigger: true,

    };
  }

  setCurrentProfile = (event) => {
    //this.setState({curProfileIndex:index},console.log(this.state.curProfileIndex));
    // if(this.state.onScrollTrigger) {
    //   setTimeout(()=>{
    //     if(this.state.onScrollTrigger) this.setState(()=>({onScrollTrigger:false}));
    //   },1000)
    // } else {
    //   this.setState(()=>({curProfileIndex:this._carousel.currentIndex, onScrollTrigger:true}, console.log(this._carousel.currentIndex)));
    // }
    // if(this.state.onScrollTrigger) {
    //   this.setState((prev)=>({onScrollTrigger:!(prev.onScrollTrigger)}));
    //   this.setOnscrollTriggerOn();
    // }

    //this.setState((prev)=>{if(prev.onScrollTrigger==this.state.onScrollTrigger)return{onScrollTrigger:!(prev.onScrollTrigger)}});
  };

  setOnscrollTriggerOff = ()=>{
    setTimeout(()=>{
      this.setOnscrollTriggerOn();
    },50);
  }

  setOnscrollTriggerOn = ()=>{
    console.log("ready");
    setTimeout(()=>{
      this.setState((prev)=>({onScrollTrigger:!(prev.onScrollTrigger)}));
    },50);
  }

  setCarouselByPos = (evnet) => {
    //console.log(this._carousel.currentScrollPosition);
    //console.log('max', this.state.slidersPosition);
    //console.log(this._carousel.currentIndex);
    this.setState({curProfileIndex:this._carousel.currentIndex});
  };

  setCarousel = (evnet) => {
    console.log(this._carousel.currentIndex);
  };

  setCarouselByBefore = (index) => {
    console.log('before', index);
  };
  setCarouselByAfter = (index) => {
    console.log('after', index);
  };

  snapToItemByOnPress = (index) => {
    // console.log(index);
    //;
    (this.state.isIos) ? setTimeout(() => this._carousel.snapToItem(index, true, true), 0) : this._carousel.snapToItem(index, true, true);
    //this._carousel.triggerRenderingHack(-1);
    //console.log(this.state.curProfileIndex);
    // let currentIdx = this._carousel.currentIndex;
    // console.log(currentIdx - index);
  };

  find_dimesions(layout) {
    const {x, y, width, height} = layout;
    console.warn(x);
    console.warn(y);
    console.warn(width);
    console.warn(height);
  }

  componentDidMount() {
    let sliderWidth =
      this.state.itemWidth *
        (0.5 + (this.state.entries.length - 1.5) * this.state.inactiveScale) +
      (this.state.entries.length - 1) * 20;

      // setTimeout(() => {
      //   this.setState({ carouselLoading: true });
      // }, 10);
      //this.setState(()=>({slidersPosition:this._carousel.slidersPosition}),console.log('positions',this.state.slidersPosition));
    this.setCurProfileInterval();
  }

  setCurProfileInterval = ()=> {
    this.curProfileInterval = setInterval(()=>{
      var curIndex  = 0;
      for(var i=0;i<this.state.slidersPosition.length;i++) {
        if(Math.abs(this._carousel.currentScrollPosition-this.state.slidersPosition[i])<this.state.slidersPosition[1]*0.5) {
          curIndex = i;
          break;
        }
      }
      this.setState((prev)=>({curProfileIndex:curIndex}));
      //console.log(this.state.curProfileIndex);
    },50);
  }

  _renderItem = (item, index, curIndex) => {
    return (
      <View style={styles.slide}>
        <TouchableHighlight
          underlayColor="#fff"
          //activeOpacity={0.6}
          onPress={() => this.snapToItemByOnPress(index)}
          // onPress={() => console.log(index)}
          style={{
            width: this.state.itemWidth,
            height: this.state.itemWidth,
            borderRadius: this.state.itemWidth / 2,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: item.profile}}
            resizeMode="cover"
            style={{width: this.state.itemWidth, height: this.state.itemWidth}}
          />
        </TouchableHighlight>
        {(curIndex == index) ? 
          <View style={styles.slideContent}>
            <Text style={[styles.title, styles.visible]}>{item.title}</Text>
              <View style={[styles.buttonContainer, styles.visible]}>
                <TouchableOpacity>
                  <Text style={[styles.capsule, styles.visible]}>
                    {item.month}개월
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.capsule, styles.visible]}>알레르기</Text>
                </TouchableOpacity>
              </View>
          </View> :
          <></>
        }

      </View>
    );
  };


  render() {
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
            blurAmount={1}
            automaticallyAdjustContentInsets={true}
          />
          <ImageBackground
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
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
              ref={(c) => {
                this._carousel = c;
                //this.setState({slidersPosition:this._carousel.slidersPosition});
              }}
              data={this.state.entries}
              //renderItem={({item,index})=> this._renderItem(item,index)}
              renderItem={({item,index})=>this._renderItem(item,index,this.state.curProfileIndex)}
              sliderWidth={this.state.width}
              itemWidth={this.state.itemWidth}
              onLayout={()=>{this.setState({slidersPosition:this._carousel.slidersPosition})}}
              // sliderWidth={this.state.width}
              // itemWidth={this.state.itemWidth}
              // sliderStyle={{height: 100}}
              inactiveSlideScale={this.state.inactiveScale}

              activeSlideOffset={-100}

              //onSnapToItem = {(slideIndex)=>{this.setState({curProfileIndex:slideIndex},console.log('ps',slideIndex));}}
              
              // onScroll={(event) => {
              //   var curIndex = this._carousel.currentIndex;
              //   this.setState({curProfileIndex:curIndex});
              //   //this.setCarouselByPos(event);
              // }}
              //onScroll = {(event)=>{this.setCurrentProfile()}}

              // removeClippedSubviews={false}
            /> : <></>}
          </View>
        </View>

        <MypageTab />
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
  visible: {},
});

export default MypageTop;
