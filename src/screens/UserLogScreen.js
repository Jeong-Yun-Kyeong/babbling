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
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

const UserLog = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f3f3f3',
            // minHeight: Dimensions.get('screen').height-,
          }}>
          {/* 하나 */}
          <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
            {/* 하나 */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyWrote');
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
              }}>
              <Text style={{fontSize: 16, color: '#32cc73'}}>N</Text>
              <Text>내가 쓴 글</Text>
            </TouchableOpacity>
            {/* 둘 */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Scrap');
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
              }}>
              <Text style={{fontSize: 16, color: '#32cc73'}}>N</Text>
              <Text>스크랩</Text>
            </TouchableOpacity>
            {/* 셋 */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyReple');
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
              }}>
              <Text style={{fontSize: 16, color: '#32cc73'}}>N</Text>
              <Text>댓글/답글</Text>
            </TouchableOpacity>
          </View>
          {/* 둘 */}
          <View
            style={{
              marginTop: 4,
              backgroundColor: 'white',
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 10,
            }}>
            <View
              style={{
                padding: 9,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
              }}>
              <Text>진행 중인 이벤트</Text>
              <View
                style={{
                  // backgroundColor: 'coral',
                  marginTop: 8,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 120,
                    height: 72,
                    borderRadius: 7,
                    backgroundColor: 'pink',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 15,
                    alignItems: 'center',
                  }}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{color: 'gray', fontSize: 13, marginRight: 5}}>
                        이러한 이벤트한다 설명
                      </Text>
                      <Text style={{fontSize: 13, color: '#32cc73'}}>D-4</Text>
                    </View>
                    <Text
                      style={{fontWeight: '500', fontSize: 15, marginTop: 6}}>
                      화장품 이름
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('EvaluationReview');
                    }}
                    style={{alignItems: 'center'}}>
                    <SvgXml xml={SVG('WRITEING')} />
                    <Text style={{color: 'gray', fontSize: 11, marginTop: 3}}>
                      리뷰작성
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EventApply');
              }}
              style={{
                padding: 9,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                paddingTop: 20,
                paddingBottom: 20,
              }}>
              <Text>신청한 이벤트</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EventWinning');
              }}
              style={{
                padding: 9,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                paddingTop: 20,
                paddingBottom: 20,
              }}>
              <Text>당첨된 이벤트</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EventJjim');
              }}
              style={{
                padding: 9,
                paddingTop: 20,
                paddingBottom: 20,
              }}>
              <Text>찜한 이벤트</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default UserLog;
