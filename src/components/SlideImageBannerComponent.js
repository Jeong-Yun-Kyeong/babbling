import React, {useState} from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SlideImageBanner = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const _pagination = () => {
    return (
      <Pagination
        style={{paddingVertical: 0}}
        dotsLength={props.images.length}
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

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={index}>
        <Image
          source={require('../images/add01.png')}
          resizeMode={'contain'}
          style={{
            width: '100%',
            // height: '100%',
          }}
        />
        {/* <Text>{item.url}</Text> */}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Carousel
        // ref={(c) => {
        //   this._carousel = c;
        // }}
        data={props.images}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        onSnapToItem={(index) => setActiveSlide(index)}
        removeClippedSubviews={false}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        loop={true}
        loopClonesPerSide={2}
      />
      {_pagination()}
      {/* <Text>dd</Text> */}
    </View>
  );
};

export default SlideImageBanner;
