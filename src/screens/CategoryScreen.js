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

const MIDIUM = {분유: 1010, 이유식: 1020, 간식: 1030, 유제품: 1040};
const SMALL = {
  1010: {조제분유: 10, 액상분유: 20, 특수분유: 30},
  1020: {
    '수제/배달': 10,
    반고형: 20,
    레토르트: 30,
    분말: 40,
    액상: 50,
  },
  1030: {
    '쌀과자,떡뻥': 10,
    곡물과자: 20,
    '과일칩,과자': 30,
    '씨리얼,퍼프': 40,
    '퓨레,푸딩': 50,
    '사탕,젤리': 60,
    기타: 70,
  },
  1040: {
    우유: 10,
    치즈: 20,
    요구르트: 30,
  },
};
// const DATAS = [1, 2, 3];

// const DATAS = [
//   {
//     img: '../images/4.jpeg',
//     title: '베베랩',
//     name: '고보습 베리어 베이비 로션 200ml',
//     hashTag: '#첫로션 #고보습 #산양유',
//     score: 4.5,
//     count: '2,121',
//   },
//   {
//     img: '../images/5.jpeg',
//     title: 'HIPP',
//     name: 'HIPPIS 바나나페어 망고',
//     hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
//     score: 4.5,
//     count: '2,121',
//   },
//   {
//     img: '../images/1.jpeg',
//     title: '남양',
//     name: '아이꼬야 동결건조 과일 귤',
//     hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
//     score: 4.5,
//     count: '2,121',
//   },
//   {
//     img: '../images/5.jpeg',
//     title: 'HIPP',
//     name: 'HIPPIS 바나나페어 망고',
//     hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
//     score: 4.5,
//     count: '2,121',
//   },
//   {
//     img: '../images/1.jpeg',
//     title: '남양',
//     name: '아이꼬야 동결건조 과일 귤',
//     hashTag: '#해쉬태그 #해쉬태그 #해쉬태그',
//     score: 4.5,
//     count: '2,121',
//   },
// ];

const Category = ({navigation, route}) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // console.log(route.params.name);
    // console.log(MIDIUM[route.params.name]);

    const getToken = async () => {
      let token = await AsyncStorage.getItem('token');
      console.log(token);
      let code = '';
      if (route.name == 'ALL') {
        code = MIDIUM[route.params.name];
      } else {
        // console.log(SMALL[MIDIUM[route.params.name]][route.name]);
        code =
          MIDIUM[route.params.name] +
          '' +
          SMALL[MIDIUM[route.params.name]][route.name];
      }
      console.log(code);
      getProducts(token, code);
    };
    //
    const getProducts = (token, code) => {
      console.log('-=========================: ' + token + ', ' + code);
      let form = new FormData();
      form.append('code', code);
      fetch(URL + '/product/category/', {
        headers: {
          Authorization: 'JWT ' + token,
        },
        method: 'POST',
        body: form,
      })
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          // resJson 없을때 데이터 없음을 나타내는 화면 필요
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
