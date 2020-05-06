import React, {Fragment, PureComponent} from 'react';
import {Text, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MypageTab from '../navigations/MypageTabNavigation';

import Carousel from 'react-native-snap-carousel';


class MypageTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {title:'베베', profile:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',month:1},
        {title:'에베', profile:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',month:3},
        {title:'아베', profile:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',month:2},
        {title:'아베', profile:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',month:2}
      ],
      itemWidth: Dimensions.get('window').width*0.21,
      width: Dimensions.get('window').width,
      curProfileIndex:0,

      interpolation:20,
      inactiveScale:0.7
    };
  }

  setCurrentProfile = (index) => {
    //this.setState({curProfileIndex:index},console.log(this.state.curProfileIndex));
  }

  setCarouselByPos = (evnet) => {
    console.log(this._carousel.currentScrollPosition);
  }

  setCarousel = (evnet) => {
    console.log(this._carousel.currentIndex);
  }

  setCarouselByBefore = (index) => {
    console.log('before',index);
  }
  setCarouselByAfter = (index) => {
    console.log('after',index);
  }

  snapToItemByOnPress = (index)=> {
    this._carousel.snapToItem(index, true,true);
    this._carousel.triggerRenderingHack(-1)
    console.log(this._carousel.currentIndex);
  }

  find_dimesions(layout){
    const {x, y, width, height} = layout;
    console.warn(x);
    console.warn(y);
    console.warn(width);
    console.warn(height);
  }

  componentDidMount() {
    let sliderWidth = this.state.itemWidth*(0.5+(this.state.entries.length-1.5)*this.state.inactiveScale) + (this.state.entries.length-1)*20;
    console.log('sliderWidth',sliderWidth);
  }

  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <TouchableHighlight
              underlayColor="#fff"
              //activeOpacity={0.6}
              onPress={()=>this.snapToItemByOnPress(index)}
              style={{width: this.state.itemWidth, height: this.state.itemWidth, borderRadius: this.state.itemWidth/2,overflow:'hidden'}} 
            >
              <Image 
                source={{ uri: item.profile}} 
                resizeMode="cover"
                style={{width: this.state.itemWidth, height: this.state.itemWidth}} 
              />
            </TouchableHighlight>

            <Text style={[styles.title,styles.visible]}>{ item.title }</Text>
            <View style={[styles.buttonContainer,styles.visible]}>
              <TouchableOpacity><Text style={[styles.capsule,styles.visible]} >{item.month}개월</Text></TouchableOpacity>
              <TouchableOpacity><Text style={[styles.capsule,styles.visible]}>알레르기</Text></TouchableOpacity>
            </View>
        </View>
    );
  }

  render() {
    return (
      <Fragment>
        <View style={{width:'100%',height:250}}>
          <ImageBackground source={require('../images/talkDetail.jpg')} style={styles.selectContainer}>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={this.state.width}
                itemWidth={this.state.itemWidth}
                sliderStyle={styles.carousel}
                inactiveSlideScale={this.state.inactiveScale}
                inactiveSlideShift={-10}
                //swipeThreshold={this.state.interpolation}

                onScroll={(event)=>{this.setCarouselByPos(event)}}
                //onScroll={(event)=>{this.setCarousel(event)}}
                //onMomentumScrollEnd={()=>this.setCarousel()}
                //onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}
                //onBeforeSnapToItem={(slideIndex)=>{this.setCarouselByBefore(slideIndex)}}
                //onSnapToItem={(slideIndex)=>{this.setCarouselByAfter(slideIndex)}}
              />
          </ImageBackground>
        </View>

        <MypageTab />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex:1,
    height:'100%',

    justifyContent:'center',
    alignItems:'center'
  },
  title: {

    fontWeight: 'bold',
    color:'white',
    marginTop:10

  },
  selectContainer : {
    width:'100%',height:'100%',resizeMode:"cover",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  carousel: {
    height:100,
  },
  buttonContainer: {
    flexDirection:'row',
    marginTop:8
  },
  capsule: {
    color:'white',
    borderColor:'white',
    borderWidth:0.5,
    paddingHorizontal:6,
    paddingVertical:2,
    fontSize:8,
    borderRadius:10,
    marginHorizontal:3
  },
  visible: {

  }
});



export default MypageTop;
