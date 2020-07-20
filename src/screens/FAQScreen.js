import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  Switch,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class FAQ extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // tootle추가
      toggle01: true,
      toggle02: true,
      toggle03: true,
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View
            style={{
              padding: 16,
              //   backgroundColor: 'coral',
            }}>
            {/*  */}
            <TouchableOpacity
              onPress={() => {
                this.setState({toggle01: !this.state.toggle01});
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: this.state.toggle01
                  ? 'lightgray'
                  : 'transparent',
                borderBottomWidth: 1,
                padding: 16,
              }}>
              <Text>[성분정보]정보 출처는 어디인가요?</Text>
              <View
                style={
                  this.state.toggle01 ? null : {transform: [{rotate: '180deg'}]}
                }>
                <SvgXml xml={SVG('DOWNMORE')} />
              </View>
            </TouchableOpacity>
            <View
              style={{
                display: this.state.toggle01,
                padding: 16,
                backgroundColor: '#f3f3f3',
                borderRadius: 5,
              }}>
              {/* 글변경 */}
              <Text style={{color: 'gray', fontSize: 13}}>
                현재 베블링 서비스에서 제공해드리는 성분 정보는
              </Text>
              <View style={{marginTop: 20, marginBottom: 20}}>
                <Text style={{color: 'gray', fontSize: 13}}>
                  1. 성분별 인전도 등급 ▶ EWG SkinDeep 홈페이지
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  2. 20가지 주의 성분 ▶ 도서 '대한민국 화장품의 비밀'
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  3. 알레르기 유발 주의 성분 ▶ 식품의약품안전처
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  4. 피부타입별 성분 ▶ 대한피부과의사회 발표자료
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  5. 기능성 성분 ▶ 식품의약품 안전처
                </Text>
              </View>
              <Text style={{color: 'gray', fontSize: 13}}>
                와 같은 출처에서 공개된 정보들을 바탕으로 하고 있습니다.
              </Text>
              <View style={{marginTop: 20}}>
                <Text style={{color: 'gray', fontSize: 13}}>
                  ※ 위 성분 정보는 제품 검색창 ▶ 성분사전에서도 확인하실 수
                  있습니다.
                </Text>
              </View>
            </View>

            {/* 두번쨰 항목 글,click event추가 */}
            <TouchableOpacity
              onPress={() => {
                this.setState({toggle02: !this.state.toggle02});
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: this.state.toggle02
                  ? 'lightgray'
                  : 'transparent',
                borderBottomWidth: 1,
                padding: 16,
              }}>
              <Text>[성분정보]화장품 성분 함량은 알 수 없나요?</Text>
              <View
                style={
                  this.state.toggle02 ? null : {transform: [{rotate: '180deg'}]}
                }>
                <SvgXml xml={SVG('DOWNMORE')} />
              </View>
            </TouchableOpacity>
            <View
              style={{
                display: this.state.toggle02,
                padding: 16,
                backgroundColor: '#f3f3f3',
                borderRadius: 5,
              }}>
              <Text style={{color: 'gray', fontSize: 13}}>
                현재 베블링 서비스에서 제공해드리는 성분 정보는
              </Text>
              <View style={{marginTop: 20, marginBottom: 20}}>
                <Text style={{color: 'gray', fontSize: 13}}>
                  1. 성분별 인전도 등급 ▶ EWG SkinDeep 홈페이지
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  2. 20가지 주의 성분 ▶ 도서 '대한민국 화장품의 비밀'
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  3. 알레르기 유발 주의 성분 ▶ 식품의약품안전처
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  4. 피부타입별 성분 ▶ 대한피부과의사회 발표자료
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  5. 기능성 성분 ▶ 식품의약품 안전처
                </Text>
              </View>
              <Text style={{color: 'gray', fontSize: 13}}>
                와 같은 출처에서 공개된 정보들을 바탕으로 하고 있습니다.
              </Text>
              <View style={{marginTop: 20}}>
                <Text style={{color: 'gray', fontSize: 13}}>
                  ※ 위 성분 정보는 제품 검색창 ▶ 성분사전에서도 확인하실 수
                  있습니다.
                </Text>
              </View>
            </View>
            {/* 두번쨰 항목 글,click event추가 end*/}
            {/*  */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                padding: 16,
              }}>
              <Text>[성분정보]EWG 등급이 무엇인가요?</Text>
              <SvgXml xml={SVG('DOWNMORE')} />
            </TouchableOpacity>
            {/*  */}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
