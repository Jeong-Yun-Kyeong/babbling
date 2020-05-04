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
import Footer from './FooterScreen';

export default class Post extends PureComponent {
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

  _goDetail = () => {
    this.props.navigation.navigate('PostDetail');
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#f9f9f9'}}>
            {/* 포스팅 */}
            <View style={[posting.titleBox, {paddingTop: 20}]}>
              {/*  */}
              <View style={posting.title}>
                <View
                  style={{
                    flex: 9,
                  }}>
                  <Text style={posting.titleText}>주간 베스트</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('PostList');
                  }}>
                  <Text style={{fontSize: 11, color: 'gray'}}>더보기</Text>
                </TouchableOpacity>
              </View>
              {/*  */}
              <TouchableOpacity
                style={posting.textBox}
                onPress={this._goDetail}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      임산부는 반드시 피하세요!
                    </Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </TouchableOpacity>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      임산부는 반드시 피하세요!
                    </Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      임산부는 반드시 피하세요!
                    </Text>
                    <Text style={{marginTop: 10}}>베블링 | 육아꿀팁</Text>
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
            {/*  */}
            {/* youtube */}
            <View style={posting.titleBox}>
              {/*  */}
              <View style={posting.title}>
                <View
                  style={{
                    flex: 9,
                  }}>
                  <Text style={posting.titleText}>Youtube</Text>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      [베블링 크리스마스 특집]크리스마스 모빌 만들기
                    </Text>
                  </View>
                  <View></View>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      [베블링 리뷰]제 7탄 유아간식
                    </Text>
                  </View>
                  <View></View>
                </View>
              </View>
              {/*  */}
              <View style={posting.textBox}>
                <View
                  style={{backgroundColor: 'lightgray', height: 200}}></View>
                <View style={{padding: 15, paddingLeft: 20}}>
                  <View>
                    <Text style={{fontSize: 16}}>
                      [베블링 리뷰]제 8탄 유아 젤리
                    </Text>
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
            {/* footer */}
            <Footer />
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
