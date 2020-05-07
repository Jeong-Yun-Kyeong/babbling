import React, {Fragment, PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';

const TALK = [
  {
    img: '../images/1.jpeg',
    title: '사랑의 불시착',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일
    침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
];

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
      return (
        <TouchableOpacity
          style={talks.gridBox}
          key={index}
          onPress={this.props.nav}>
          {/* {data.img == null ? null : <View style={talks.image}></View>} */}
          {index % 2 != 1 ? (
            <Image
              source={require('../images/3.jpeg')}
              style={{width: 60, height: 60}}
              resizeMode="contain"
            />
          ) : null}
          <View style={{flex: 8}}>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  {data.title}
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                }}>
                <Text style={{fontSize: 10, color: 'lightgray'}}>
                  {data.type}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 12}}>
              <Text numberOfLines={2} style={{fontSize: 12, color: 'gray'}}>
                {data.content}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <View style={talks.talks}>
          {/* 헤더 */}
          <View style={talks.header}>
            {this.props.title ? (
              <View style={{flex: 9, justifyContent: 'center'}}>
                <Text style={talks.headerTitle}>{this.props.title}</Text>
              </View>
            ) : null}

            <TouchableOpacity
              onPress={this.props.more}
              style={{flex: 1, marginRight: 24, justifyContent: 'center'}}>
              <Text style={{fontSize: 10, color: '#6B6B6B'}}>더보기</Text>
            </TouchableOpacity>
          </View>
          <View>{this._getList(this.props.datas)}</View>
        </View>
      </Fragment>
    );
  }
}

const talks = StyleSheet.create({
  talks: {},
  header: {
    flexDirection: 'row',
    height: 50,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 24,
    color: '#1d1d1d',
  },
  gridBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 15,
    marginTop: 0,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 10,
    flex: 1.8,
  },
});
