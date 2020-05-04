import React, {Fragment, PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from './SvgComponent';

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
];

const Star_Checked = `<svg id="Star_16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
<defs>
  <clipPath id="clip-path">
    <rect id="사각형_1040" data-name="사각형 1040" width="16" height="16" fill="none"/>
  </clipPath>
</defs>
<g id="Star_1" clip-path="url(#clip-path)">
  <path id="패스_2836" data-name="패스 2836" d="M11.85,3.347a.767.767,0,0,1-.48-.48A1.2,1.2,0,0,0,9.857,2.1a1.213,1.213,0,0,0-.773.767.753.753,0,0,1-.473.48,2.639,2.639,0,0,0-2,2.28h7.227A2.569,2.569,0,0,0,11.85,3.347Z" transform="translate(-2.203 -0.68)" fill="#2fd379"/>
  <path id="패스_2837" data-name="패스 2837" d="M6.47,8.16v6.833a2.4,2.4,0,0,0,2.4,2.393h2.573a2.4,2.4,0,0,0,2.4-2.393V8.16Zm4.973,8.267H8.87a1.44,1.44,0,0,1-1.44-1.433V9.12h5.453v1.2H11.49a.48.48,0,0,0-.48.48.473.473,0,0,0,.48.473h1.38v.78H11.49a.48.48,0,1,0,0,.96h1.38v.78H11.49a.48.48,0,0,0,0,.96h1.38v.24a1.44,1.44,0,0,1-1.427,1.433Z" transform="translate(-2.157 -2.72)" fill="#2fd379"/>
</g>
</svg>
`;

export default class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  _getList = (datas) => {
    return datas.map((data, index) => {
      // console.log(data.img);
      return (
        <View style={styles.cardList} key={index}>
          <TouchableOpacity
            style={styles.innerCardList}
            onPress={this._intoDetail}>
            <View
              style={[
                styles.cardImage,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 55,
                  height: 55,
                  borderRadius: 5,
                }}>
                <Image
                  source={require('../images/1.jpeg')}
                  style={{width: 55, height: 55}}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.cardInfoCompany}>
                <Text style={styles.comText}>{data.title}</Text>
              </View>
              <View style={styles.cardInfoProduct}>
                <Text style={styles.comTitle}>{data.name}</Text>
              </View>
              <View style={styles.cardInfoHashtag}>
                <Text style={styles.comHash}>{data.hashTag}</Text>
              </View>
            </View>
            <View style={styles.cardScore}>
              <SvgXml
                xml={SVG('STAR_CHECKED')}
                width="20"
                height="20"
                style={{marginRight: -3, marginTop: -5}}
              />
              <Text style={{color: '#31CC74', fontSize: 12}}>{data.score}</Text>
              <Text style={{fontSize: 9, color: 'gray'}}>({data.count})</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <View style={styles.slide02}>
          <View style={styles.slideCard}>
            <View style={styles.slideCardHeader}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#5d5d5d'}}>
                {/* 우리 아이를 위한 추천 */}
                {this.props.title}
              </Text>
            </View>
            {/*  */}
            {this._getList(
              this.props.datas == undefined ? null : this.props.datas,
            )}
            <View style={styles.slide02Dot}>
              <View style={[styles.dot, {backgroundColor: '#31CC74'}]}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  slide02: {
    backgroundColor: 'rgba(245,245,245,.5)',
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideCard: {
    backgroundColor: 'white',
    width: '95%',
    height: '92%',
    borderRadius: 20,
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,

    elevation: 5,
  },
  slideCardHeader: {
    // backgroundColor:'lightgray',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 24,
  },
  cardList: {
    // backgroundColor:'lightgray',
    height: 75,
  },
  innerCardList: {
    flexDirection: 'row',
  },
  cardImage: {
    // backgroundColor:'rgba(13,155,55,0.8)',
    width: 75,
    height: 75,
    flex: 2,
  },
  cardInfo: {
    height: 75,
    // backgroundColor:'pink',
    justifyContent: 'center',
    flex: 5,
  },
  cardInfoCompany: {},
  comText: {
    color: '#5C5C5C',
    fontSize: 12,
  },
  comTitle: {
    fontWeight: '500',
    fontSize: 14,
  },
  comHash: {
    color: '#31CC74',
    marginTop: 10,
    fontSize: 10,
  },
  cardScore: {
    flex: 2,
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 75,
  },
  slide02Dot: {
    // backgroundColor:'gray',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#1f1f1f1f',
    borderRadius: 8,
    margin: 5,
  },
});

// export default Home;
