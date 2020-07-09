import React from 'react';
import {Dimensions} from 'react-native';
// 색상
export {DARKMINT, BLACK35, BLACK60, BLACK87};
// 여백
export {WHITESPACE, HEADER_WHITESPACE};
// 폰트 크기
export {HEADER_FONTSIZE, FONTSIZE};
//
export {URL};
//
// const URL = 'http://babbling.babylab.kr';
const URL = 'http://172.30.1.57';
//
const DARKMINT = 'rgb(47,211,121)';
const BLACK35 = 'rgba(0,0,0,0.35)';
const BLACK60 = 'rgba(0,0,0,0.60)';
const BLACK87 = 'rgba(0,0,0,0.87)';
const WHITESPACE = 16;
const HEADER_WHITESPACE = 24;
const HEADER_SEARCH_WHITESPACE = 16;
//여백 json처리로 가능한지 알아보기
const HEADER_FONTSIZE = 32;
// const SMALL_FONT = 12;
// const MIDDLE_FONT = 12;
// const LARGE_FONT = 12;
class FONTSIZE {
  reactive = () => {
    return Dimensions.get('screen').width >= 834 ? true : false;
  };
  static SMALL = this.reactive ? 17 : 12;
  //??
  static MIDDLE = this.reactive ? 19 : 14;
  static LARGE = this.reactive ? 21 : 15;
  static TITLE = this.reactive ? 30 : 15;
}
