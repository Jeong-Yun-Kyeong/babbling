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
import {TextInput} from 'react-native-gesture-handler';
//색추가
import {DARKMINT, BLACK60} from '../Constant';
//dropdown추가
import RNPickerSelect from 'react-native-picker-select';
//
export default class QnA extends PureComponent {
  constructor(props) {
    super(props);
    //dropdown에 필요한거
    this.inputRefs = {};
    this.state = {
      alarmToggle: false,
      repleToggle: false,
      eventToggle: false,
      //dropdown 아이템 추가
      //
      favColor: undefined,
      items: [
        {
          label: '고객 정보 수정',
          value: '고객 정보 수정',
        },
        {
          label: '상품 정보 수정',
          value: '상품 정보 수정',
        },
        {
          label: '서비스 관련 문의',
          value: '서비스 관련 문의',
        },
        {
          label: '입점 문의',
          value: '입점 문의',
        },
        {
          label: '광고 문의',
          value: '광고 문의',
        },
        {
          label: '기타',
          value: '기타',
        },
      ],
      favSport: undefined,
      items2: [
        {
          label: 'naver.com',
          value: 'naver.com',
        },
        {
          label: 'gmail.com',
          value: 'gmail.com',
        },
        {
          label: 'nate.com',
          value: 'nate.com',
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View style={{padding: 24}}>
            {/* QnA 상단 말풍선,캐릭터 추가 */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 24,
              }}>
              <SvgXml
                xml={SVG('SAFETYMINT')}
                width="44"
                height="44"
                color={DARKMINT}
              />
              <View style={{position: 'relative', flex: 1}}>
                <SvgXml
                  xml={SVG('SPEACH')}
                  // width={Dimensions.get('screen').width}
                  style={{zIndex: -1}}
                />
                <View
                  style={{
                    // height: 5,
                    // backgroundColor: '#3450aaaa',
                    zIndex: 10,
                    position: 'absolute',
                    width: '100%',

                    height: '100%',
                    marginEnd: 15,
                    justifyContent: 'center',
                    //width: Dimensions.get('screen').width - (24 + 24 + 52 + 50),
                    paddingRight: 20,
                    paddingLeft: 43,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('FAQ')}>
                    <View>
                      <Text
                        numberOfLines={2}
                        style={{fontSize: 12, color: DARKMINT}}>
                        자주하는 질문 보러가기 {'>'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text
                      numberOfLines={2}
                      style={{fontSize: 12, color: BLACK60}}>
                      베블링을 이용하면서 불편한 점, 궁금한 점을{'\n'}
                      말씀해주세요
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginBottom: 3}}>
              {/* QnA 상단 말풍선,캐릭터 추가 end */}
              <Text style={{fontSize: 16}}>문의 분류</Text>
            </View>
            {/* RNPickerSelect */}
            <View
              style={{
                marginBottom: 28,
                width: Dimensions.get('screen').width - 48,
                marginTop: 13,
                marginBottom: 30,
                height: 44,
                borderWidth: 1,
                borderColor: BLACK60,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: -1,
              }}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                placeholder={{
                  label: '카테고리 선택',
                  value: null,
                }}
                items={this.state.items}
                onValueChange={(value) => {
                  this.setState({
                    favColor: value,
                  });
                }}
                onUpArrow={() => {
                  this.inputRefs.name.focus();
                }}
                onDownArrow={() => {
                  this.inputRefs.picker2.togglePicker();
                }}
                style={{
                  inputIOS: {
                    width: Dimensions.get('screen').width - 85,
                    fontSize: 16,
                    marginLeft: 7,
                    paddingTop: 13,
                    paddingLeft: 6,
                    paddingHorizontal: 10,
                    paddingBottom: 12,
                    borderWidth: 0,
                    borderColor: 'rgba(0, 0, 0, 0.0)',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    color: 'black',
                  },
                }}
                value={this.state.favColor}
                ref={(el) => {
                  this.inputRefs.picker = el;
                }}
                useNativeAndroidPickerStyle={false} //android only
                hideIcon={true}
              />
              <SvgXml xml={SVG('DOWNMORE')} />
            </View>
            {/* RNPickerSelect end */}
            <View style={{marginBottom: 13}}>
              <Text style={{fontSize: 16}}>문의 내용</Text>
            </View>
            {/* marginBottom추가 */}
            <View
              style={{
                marginBottom: 30,
                backgroundColor: '#f3f3f3',
                padding: 24,
                paddingTop: 20,
                borderRadius: 5,
                height: 180,
              }}>
              <TextInput
                placeholder={'의견을 입력해주세요'}
                placeholderTextColor={'gray'}
              />
            </View>
            {/* marginBottom추가 */}
            <View style={{marginBottom: 2}}>
              <Text style={{fontSize: 16}}>첨부파일</Text>
            </View>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/* width,height변경 */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 4 - 35,
                  height: Dimensions.get('screen').width / 4 - 35,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              {/* width,height변경 */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 4 - 35,
                  height: Dimensions.get('screen').width / 4 - 35,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              {/* width,height변경 */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 4 - 35,
                  height: Dimensions.get('screen').width / 4 - 35,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              {/* width,height변경 */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 4 - 35,
                  height: Dimensions.get('screen').width / 4 - 35,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              {/* width,height변경 */}
              <View
                style={{
                  width: Dimensions.get('screen').width / 4 - 35,
                  height: Dimensions.get('screen').width / 4 - 35,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
            </View>
            {/* marginBottom추가 */}
            <View style={{marginTop: 12, marginBottom: 21}}>
              <Text style={{color: '#838383', fontSize: 11}}>
                이미지 파일(GIF, PNG, JPG)을 기준으로 최대 10MB이하, 최대
                5개까지 등록 가능합니다.
              </Text>
            </View>
            <Text style={{fontSize: 16}}>답변받을 이메일</Text>
            {/* email,dropdown추가*/}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  width: (Dimensions.get('screen').width / 3) * 2 - 45,
                  marginTop: 13,
                  marginBottom: 23,
                  marginRight:
                    ((Dimensions.get('screen').width / 3) * 2 - 24) / 50,
                  height: 44,
                  borderWidth: 1,
                  borderColor: BLACK60,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: -1,
                }}>
                <TextInput
                  placeholder={'이메일 (email@example.com)'}
                  placeholderTextColor={'gray'}
                />
              </View>
              {/* RNPickerSelect */}
              <View
                style={{
                  marginTop: 13,
                  marginBottom: 23,
                  height: 44,
                  width: Dimensions.get('screen').width / 3 - 7,
                  borderWidth: 1,
                  borderColor: BLACK60,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: -1,
                }}>
                <RNPickerSelect
                  placeholder={{
                    label: '직접입력',
                    value: null,
                  }}
                  items={this.state.items2}
                  onValueChange={(value) => {
                    this.setState({
                      favSport: value,
                    });
                  }}
                  onUpArrow={() => {
                    this.inputRefs.picker.togglePicker();
                  }}
                  onDownArrow={() => {
                    this.inputRefs.company.focus();
                  }}
                  style={{
                    inputIOS: {
                      width: Dimensions.get('screen').width / 3 - 30,
                      fontSize: 16,
                      marginLeft: 3,
                      paddingTop: 13,
                      paddingLeft: 6,
                      paddingHorizontal: 10,
                      paddingBottom: 12,
                      borderWidth: 0,
                      borderColor: 'rgba(0, 0, 0, 0)',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      color: 'black',
                    },
                  }}
                  value={this.state.favSport}
                  ref={(el) => {
                    this.inputRefs.picker2 = el;
                  }}
                  useNativeAndroidPickerStyle={true} //android only
                />
                {/* RNPickerSelect end*/}
                <SvgXml xml={SVG('DOWNMORE')} />
              </View>
            </View>
            {/* email,dropdown추가 end*/}
            {/* 이용약관,체크박스 추가 */}
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    check_01: !this.state.check_01,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <SvgXml
                  xml={SVG(this.state.check_01 ? 'CHECKEDBOX' : 'CHECKBOX')}
                />
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 13,
                    color: 'rgb(0, 0, 0, 0.6)',
                    marginLeft: 12,
                  }}>
                  이용약관 및 개인정보 취급방침
                </Text>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 13,
                    color: 'gray',
                  }}>
                  (필수)
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ACCESSTERMS')}>
                <Text
                  style={{
                    lineHeight: 30,
                    fontSize: 11,
                    color: 'gray',
                    marginLeft: 27,
                  }}>
                  상세보기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
//style추가
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingLeft: 6,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'black',
  },
});
