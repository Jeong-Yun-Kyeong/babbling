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
import CardTalk from '../components/CardTalkComponent';
const TALK01 = [
  {
    img: '../images/1.jpeg',
    title: '사랑의 불시착',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일 침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
  {
    img: null,
    title: '젖 뗀지 8개월 되어 갑니다.',
    content: `현재 아기가 16개월 되어가고, 8개월정도까지 혼합수유 하다가 복집하면서 젖 뗐어요. 그래서 지금은 젖뗀지 어쩌고 저쩌고 이렇쿵 저렇쿵`,
    type: '시시콜콜',
  },
  {
    img: '../images/1.jpeg',
    title: '사랑의 불시착',
    content: `사랑의 불시착 와 내일 한다 드디어!!! 내일 주말이니까 하루종일 침대에 누워서 넷플릭스 봐야지 ㅇㅎㅎ`,
    type: '자유게시판',
  },
];
import Footer from './FooterScreen';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import {DARKMINT} from '../Constant';

export default class Talk extends PureComponent {
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

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#f9f9f9'}}>
            {/* slide03 */}
            {/*  */}
            <CardTalk
              datas={TALK01}
              title={'주간 베스트'}
              more={() => {
                this.props.navigation.navigate('TalkList');
              }}
              nav={() => {
                this.props.navigation.navigate('TalkDetail');
              }}
            />
            {/*  */}
            <CardTalk
              datas={TALK01}
              title={'오늘의 지식인'}
              more={() => {
                this.props.navigation.navigate('TalkList');
              }}
              nav={() => {
                this.props.navigation.navigate('TalkDetail');
              }}
            />
            {/*  */}
            <CardTalk
              datas={TALK01}
              title={'HOT! 핫이슈'}
              more={() => {
                this.props.navigation.navigate('TalkList');
              }}
              nav={() => {
                this.props.navigation.navigate('TalkDetail');
              }}
            />
            {/*  */}
            {/* 포스팅 */}
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
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TalkWrite');
          }}
          style={{
            width: 56,
            height: 56,
            backgroundColor: DARKMINT,
            borderRadius: 56,
            position: 'absolute',
            right: 20,
            bottom: 20,
            //
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,

            elevation: 5,
            //
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgXml xml={SVG('WRIGHT_W')} />
          {/* <SvgXml xml={SVG(BATH)} /> */}
        </TouchableOpacity>
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
