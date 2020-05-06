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
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MypageTab from '../navigations/MypageTabNavigation';

import Carousel from 'react-native-snap-carousel';
import {BlurView} from '@react-native-community/blur';

class MypageTop extends PureComponent {
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
      itemWidth: Dimensions.get('window').width * 0.21,
      width: Dimensions.get('window').width,
      curProfileIndex: 0,

      interpolation: 20,
      inactiveScale: 0.7,
    };
  }

  setCurrentProfile = (index) => {
    //this.setState({curProfileIndex:index},console.log(this.state.curProfileIndex));
  };

  setCarouselByPos = (evnet) => {
    // console.log(this._carousel.currentScrollPosition);
    console.log(this._carousel.currentIndex);
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
    setTimeout(() => this._carousel.snapToItem(index, true, true), 0);
    this._carousel.triggerRenderingHack(-1);
    console.log(this._carousel.currentIndex);
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
    console.log('sliderWidth', sliderWidth);
  }

  _renderItem = ({item, index}) => {
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

        {/* <Text style={[styles.title, styles.visible]}>{item.title}</Text> */}
        {/* <View style={[styles.buttonContainer, styles.visible]}>
          <TouchableOpacity>
            <Text style={[styles.capsule, styles.visible]}>
              {item.month}개월
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.capsule, styles.visible]}>알레르기</Text>
          </TouchableOpacity>
        </View> */}
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
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('screen').width}
              itemWidth={80}
              // sliderWidth={this.state.width}
              // itemWidth={this.state.itemWidth}
              // sliderStyle={{height: 100}}
              inactiveSlideScale={0.7}
              onScroll={(event) => {
                this.setCarouselByPos(event);
              }}
              removeClippedSubviews={false}
            />
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
