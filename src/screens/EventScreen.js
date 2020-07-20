import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Footer from './FooterScreen';

const Event = ({navigation}) => {
  return (
    <Fragment>
      {/* <StatusBar barStyle="dark-content" /> */}
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f3f3f3'}}>
          <View style={styles.boardWhiteSpace}>
            <View
              style={{
                height: 192,
                flex: 1,
                borderRadius: 20,
              }}>
              {/*  */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EventDetail');
                }}
                style={{
                  flex: 1,
                  borderRadius: 20,
                  shadowOffset: {
                    height: 5,
                  },
                  // shadowColor: 'rgb(0,0,0)',
                  shadowColor: 'red',
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 5,
                  // overflow: 'hidden',
                }}>
                <View style={{borderRadius: 20, overflow: 'hidden'}}>
                  <Image
                    source={require('../images/event_image0717.png')}
                    // resizeMode="contain"
                    style={{
                      height: 192,
                      width: Dimensions.get('screen').width - 16 - 16,
                    }}
                  />
                </View>
              </TouchableOpacity>
              {/* title */}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 40,
                  left: 33,
                }}>
                <Text
                  style={{
                    color: 'rgba(255,255,255,0.87)',
                    lineHeight: 28,
                    letterSpacing: -0.72,
                    fontSize: 18,
                    fontWeight: '600',
                  }}>
                  소중한 우리아이 피부
                </Text>
              </View>
              {/* d-day */}
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#32cc73',
                  position: 'absolute',
                  top: -10,
                  right: -3,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  D-4
                </Text>
              </View>
              {/* event day */}
              <View
                style={{
                  width: 91,
                  height: 27,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  borderRadius: 50,
                  position: 'absolute',
                  right: 20,
                  bottom: 20,
                }}>
                <Text style={{color: 'rgba(0,0,0,0.6)', fontSize: 13}}>
                  1.10 ~ 1.12
                </Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={{backgroundColor: 'white', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 168,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 50,
                marginTop: 38,
                marginBottom: 38,
              }}>
              <Text>지난 이벤트 더보기</Text>
            </TouchableOpacity>
          </View>
          {/*  */}
          <Footer />
          {/*  */}
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  boardWhiteSpace: {
    padding: 16,
    backgroundColor: 'white',
    paddingTop: 24,
  },
});

export default Event;
