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

const DATAS = [1, 2, 3];

export default class PostList extends PureComponent {
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
          style={{
            backgroundColor: 'white',
            margin: 15,
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <View style={{backgroundColor: 'lightgray', height: 200}}></View>
          <View style={{padding: 15, paddingLeft: 20}}>
            <View>
              <Text style={{fontSize: 16}}>임산부는 반드시 피하세요!</Text>
              <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
            </View>
            <View></View>
          </View>
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
                <Text style={{color: '#32cc73'}}>ALL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 16}}>
                <Text style={{color: 'gray'}}>육아꿀팁</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 16}}>
                <Text style={{color: 'gray'}}>의학지식</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 16}}>
                <Text style={{color: 'gray'}}>제품리뷰</Text>
              </TouchableOpacity>
            </View>
            {/* select box */}
            <View style={{padding: 16}}>
              <Text style={{color: 'gray', fontSize: 11}}>인기순</Text>
            </View>
          </View>
          {/* list,pagenation */}
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.1,
              shadowRadius: 3.84,

              elevation: 5,
              paddingBottom: 70,
            }}>
            {/*  */}
            <View>{this._getList(DATAS)}</View>
            {/*  */}
          </View>
        </ScrollView>
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
