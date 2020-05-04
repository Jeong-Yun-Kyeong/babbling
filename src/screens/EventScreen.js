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
} from 'react-native';
import Footer from './FooterScreen';

const Event = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f3f3f3'}}>
          {/*  */}
          <View style={{padding: 17, backgroundColor: 'white', paddingTop: 24}}>
            <View
              style={{
                // width: 381,
                height: 192,
              }}>
              {/*  */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EventDetail');
                }}
                style={{
                  backgroundColor: 'gray',
                  flex: 1,
                  borderRadius: 20,
                }}></TouchableOpacity>
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
                  backgroundColor: 'rgba(255,255,255,0.6)',
                  borderRadius: 50,
                  position: 'absolute',
                  right: 20,
                  bottom: 20,
                }}>
                <Text style={{color: 'gray', fontSize: 13}}>1.10 ~ 1.12</Text>
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

const styles = StyleSheet.create({});

export default Event;
