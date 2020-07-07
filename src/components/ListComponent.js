import React, {Fragment, PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from './SvgComponent';
import {URL} from '../Constant';

export default class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _intoDetail = (data) => {
    this.props.navigation.navigate('Detail', {
      data: data,
    });
  };

  _getList = (datas) => {
    console.log(datas);
    let height = this.props.height;
    const limit = parseInt(height / 75);

    //널로 바꾸는것 보다는 데이터 자체의 길이를 자르고 처리하는게 리소스 소모가 줄어들지도 모른다.
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
      return index >= limit ? null : (
        <View style={styles.cardList} key={index}>
          <TouchableOpacity
            style={styles.innerCardList}
            onPress={() => this._intoDetail(data)}>
            <View
              style={[
                styles.cardImage,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Image
                source={{
                  uri: url,
                }}
                style={{width: 55, height: 55}}
                resizeMode="contain"
              />
              {/* {this._image(data.img)} */}
              {/* <View
                style={{
                  backgroundColor: 'pink',
                  width: 60,
                  height: 60,
                  borderRadius: 5,
                }}></View> */}
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.cardInfoCompany}>
                <Text style={styles.comText}>{data.brand_name}</Text>
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
              <Text style={{color: '#31CC74', fontSize: 12}}>{data.star}</Text>
              <Text style={{fontSize: 9, color: 'gray'}}>
                ({data.star_count})
              </Text>
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
              <Text style={{fontSize: 17, fontWeight: '500', color: '#212121'}}>
                {/* 우리 아이를 위한 추천 */}
                {this.props.title}
              </Text>
            </View>
            {/* */}
            {this.props.datas == null ? (
              <View>
                <Text>NO DATA</Text>
              </View>
            ) : (
              this._getList(this.props.datas)
            )}
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  slide02: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideCard: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
  },
  slideCardHeader: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  cardList: {
    height: 75,
  },
  innerCardList: {
    flexDirection: 'row',
  },
  cardImage: {
    width: 75,
    height: 75,
    flex: 2,
  },
  cardInfo: {
    height: 75,
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 75,
  },
  slide02Dot: {
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
