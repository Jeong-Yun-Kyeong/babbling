import React, {Fragment, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import CompareButton from '../components/atom/CompareButton';
import AsyncStorage from '@react-native-community/async-storage';
import {URL} from '../Constant';
const CATEGORY = [
  '분유',
  '이유식',
  '간식',
  '유제품',
  '음료',
  '식재료',
  '건강식품',
  '스킨로션바디',
  '목욕',
  '물티슈',
  '세제',
  '주방세제',
  '탈취방향제',
  '치약',
  '수입관',
];
// const DATAS = [1, 2, 3];

const DATAS = [
  {
    img: '../images/4.jpeg',
    title: '베베랩',
    name: '고보습 베리어 베이비 로션 200ml',
    hashTag: '#첫로션 #고보습 #산양유',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/5.jpeg',
    title: 'HIPP',
    name: 'HIPPIS 바나나페어 망고',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    title: '남양',
    name: '아이꼬야 동결건조 과일 귤',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/5.jpeg',
    title: 'HIPP',
    name: 'HIPPIS 바나나페어 망고',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
  {
    img: '../images/1.jpeg',
    title: '남양',
    name: '아이꼬야 동결건조 과일 귤',
    hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
    score: 4.5,
    count: '2,121',
  },
];

const Category = ({navigation}) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      let token = await AsyncStorage.getItem('token');
      console.log(token);
      getProducts(token);
    };
    //
    const getProducts = (token) => {
      fetch(URL + '/product/', {
        headers: {
          Authorization: 'JWT ' + token,
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          setDatas(resJson);
        });
    };

    getToken();
  }, []);

  const List = (datas, navigation) => {
    return datas.map((data, index) => {
      let url =
        URL +
        '/media/product/' +
        data.code +
        '/' +
        data.brand_name +
        '/' +
        data.name +
        '.jpg';
      console.log(url);
      return (
        <View
          style={{
            // height: 75,
            backgroundColor: 'white',
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
          key={index}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                data: data,
              })
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 11,
              paddingTop: 11,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 60,
                height: 60,
                borderRadius: 5,
                marginRight: 12,
              }}>
              <Image
                source={{
                  uri: url,
                }}
                style={{width: 55, height: 55}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                height: 75,
                // backgroundColor:'pink',
                justifyContent: 'center',
                flex: 6,
              }}>
              <View>
                <Text
                  style={{
                    color: 'rgb(50,50,50)',
                    fontSize: 13,
                  }}>
                  {data.brand_name}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                  }}>
                  {/* 클래스 프리미엄 엠보싱 저자극 아기물티슈(455g, 70매) */}
                  {data.name}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#32cc73',
                    marginTop: 5,
                    fontSize: 11,
                  }}>
                  {/* #해쉬태그 #해쉬태그 #해쉬태그 */}
                  {data.hash_tag}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',

                width: 75,
              }}>
              <SvgXml xml={SVG('STAR_CHECKED')} />
              <Text style={{color: '#32cc73', fontSize: 13}}>
                {data.star == null ? 0 : data.star}
              </Text>
              <Text style={{color: 'gray', fontSize: 10}}>
                ({data.star_count == null ? 0 : data.star_count})
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };
  //
  return (
    <Fragment>
      <CompareButton
        goCompare={() => {
          navigation.navigate('Compare');
        }}
      />
      <ScrollView style={{backgroundColor: 'white', marginTop: 4}}>
        <View
          style={{backgroundColor: 'white', paddingLeft: 16, paddingRight: 16}}>
          {/* title */}
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 16,
              paddingTop: 18,
              // paddingBottom: 18,
              paddingBottom: 7,
            }}>
            <View style={{}}>
              <Text style={{color: 'gray', fontSize: 12}}>nn개의 상품</Text>
            </View>
            <View style={{}}>
              {/* 신제품 주석 */}
              {/* <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => alert('준비되지 않았습니다.')}>
                <Text style={{color: 'gray', fontSize: 10}}>신제품순</Text>
                <SvgXml xml={SVG('DOWNMORE')} />
              </TouchableOpacity> */}
            </View>
          </View>
          {/* body */}
          {List(datas, navigation)}
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Category;
