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
import List from '../components/ListComponent';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const SLIDE01 = [
  {
    title: '베베랩',
    name: '고보습 베리어 베이비 로션 200ml',
    hashTag: '#첫로션  #고보습  #산양유',
    score: 4.5,
    count: '2,121',
  },
  {
    title: 'BUTLER(버틀러)',
    name: '프로바이오틱스 세제',
    hashTag: '#세정력  #아기냄새  #인스타',
    score: 4.5,
    count: '2,121',
  },
  {
    title: '풀무원 베이비밀',
    name: '닭가슴살 바나나죽',
    hashTag: '#8-9개월  #닭알레르기  #잘먹음',
    score: 4.5,
    count: '2,121',
  },
  {
    title: '베베랩',
    name: '고보습 베리어 베이비 로션 200ml',
    hashTag: '#첫로션  #고보습  #산양유',
    score: 4.5,
    count: '2,121',
  },
  {
    title: 'BUTLER(버틀러)',
    name: '프로바이오틱스 세제',
    hashTag: '#세정력  #아기냄새  #인스타',
    score: 4.5,
    count: '2,121',
  },
  {
    title: '풀무원 베이비밀',
    name: '닭가슴살 바나나죽',
    hashTag: '#8-9개월  #닭알레르기  #잘먹음',
    score: 4.5,
    count: '2,121',
  },
  {
    title: '베베랩',
    name: '고보습 베리어 베이비 로션 200ml',
    hashTag: '#첫로션  #고보습  #산양유',
    score: 4.5,
    count: '2,121',
  },
  {
    title: 'BUTLER(버틀러)',
    name: '프로바이오틱스 세제',
    hashTag: '#세정력  #아기냄새  #인스타',
    score: 4.5,
    count: '2,121',
  },
  {
    title: '풀무원 베이비밀',
    name: '닭가슴살 바나나죽',
    hashTag: '#8-9개월  #닭알레르기  #잘먹음',
    score: 4.5,
    count: '2,121',
  },
];

const RealTimeSearch = ({navigation}) => {
  let minus = getStatusBarHeight() + 52 + 45 + 210 + 65 + getBottomSpace();
  let height = Dimensions.get('screen').height - minus;
  return (
    // <Fragment>
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          overflow: 'hidden',
        }}>
        {/*  */}
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            flexDirection: 'row',
            height: 210,
          }}>
          <View style={{flex: 1}}>
            <View style={{padding: 10}}>
              <Text>1.유기농 이유식</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>2.유기농</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>3.아이 사랑 특가</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>4.치키치키</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>5.차카차카</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{padding: 10}}>
              <Text>6.초코초코</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>7.쵸!</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>8.오늘 날씨가</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>9.춥네요..</Text>
            </View>
            <View style={{padding: 10}}>
              <Text>10.손시령</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#f3f3f3',
            paddingTop: 4,
          }}>
          <List
            title={'실시간 인기 제품'}
            datas={SLIDE01}
            height={height}
            navigation={navigation}
          />
        </View>
      </View>
    </SafeAreaView>
    // </Fragment>
  );
};

const styles = StyleSheet.create({});

export default RealTimeSearch;
