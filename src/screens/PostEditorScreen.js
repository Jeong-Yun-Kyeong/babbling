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
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

const DATAS = [1, 2, 3];

export default class PostEditor extends PureComponent {
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
          <View style={{paddingLeft: 15, paddingRight: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                paddingBottom: 15,
                paddingLeft: 16,
                paddingRight: 16,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={this._goEditor}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 56,
                    backgroundColor: 'coral',
                    marginRight: 16,
                  }}></TouchableOpacity>
                <View>
                  <Text
                    style={{
                      marginRight: 7,
                      fontSize: 15,
                      marginBottom: 8,
                    }}>
                    베블링
                  </Text>
                  <Text style={{color: 'gray', fontSize: 13}}>
                    육아꿀팁이 매주 화,목요일날 올라와요:)
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{paddingLeft: 7}}>
                  <SvgXml xml={SVG('HEART_GRAY')} />
                </TouchableOpacity>
              </View>
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
