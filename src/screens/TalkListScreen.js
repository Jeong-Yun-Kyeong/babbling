import React, {Fragment, PureComponent} from 'react';
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

const DATAS = [1, 2, 3, 4, 5];

export default class TalkList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  componentDidMount() {}

  _intoDetail = () => {
    this.props.navigation.navigate('Detail');
  };

  _getList = (datas) => {
    return datas.map((data, index) => {
      return (
        <View
          key={index}
          style={{padding: 16, paddingTop: 10, backgroundColor: 'white'}}>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 14,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexGrow: 1, justifyContent: 'center'}}>
                <Text>주말에 사랑의 불시착 봐야해</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text style={{color: 'gray', fontSize: 11, marginRight: 15}}>
                    선우맘
                  </Text>
                  <Text style={{color: 'gray', fontSize: 11, marginRight: 15}}>
                    2020.01.09
                  </Text>
                  <Text style={{color: 'gray', fontSize: 11}}>299</Text>
                </View>
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 5,
                  backgroundColor: 'coral',
                }}>
                <Text>이미지</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          {/*  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            {/* category */}
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{padding: 16}}>
                <Text style={{color: 'gray'}}>ALL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 16}}>
                <Text style={{color: '#32cc73'}}>시시콜콜</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 16}}>
                <Text style={{color: 'gray'}}>지식인</Text>
              </TouchableOpacity>
            </View>
            {/* select box */}
            <View style={{padding: 16}}>
              <Text style={{color: 'gray', fontSize: 11}}>인기순</Text>
            </View>
          </View>
          {/* list,pagenation */}
          <View>
            {/*  */}
            <View>{this._getList(DATAS)}</View>
            {/*  */}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TalkWrite');
          }}
          style={{
            width: 56,
            height: 56,
            backgroundColor: '#32cc73',
            borderRadius: 56,
            position: 'absolute',
            right: 20,
            bottom: 20,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,

            elevation: 5,
          }}></TouchableOpacity>
      </Fragment>
    );
  }
}

const posting = StyleSheet.create({
  titleBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {flexDirection: 'row', paddingLeft: 24, paddingRight: 24, height: 30},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  titleMore: {fontSize: 12, color: 'gray'},
  textBox: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
