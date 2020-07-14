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
  TextInput,
  Modal,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import {URL, DARKMINT} from '../Constant';

export default class ReviewWrite extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.data,
      cancelModal: false,
    };
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  render() {
    const Datas = this.state.data;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: '#ffffff'}} />
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 58,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* 뒤로가기 버튼 */}
          <TouchableOpacity
            style={{marginLeft: 24}}
            onPress={() => {
              this.setState({cancelModal: !this.state.cancelModal});
              // this.props.navigation.goBack();
            }}>
            <SvgXml xml={SVG('BACKIOS')} />
          </TouchableOpacity>
          {/* 제목 */}
          <View
            style={{
              flexGrow: 1,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 17}}>리뷰 작성</Text>
          </View>
          {/* 등록 */}
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              marginRight: 24,
            }}>
            <View style={{padding: 5}}>
              <Text style={{color: 'gray', fontSize: 16}}>등록</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{backgroundColor: '#f3f3f3'}}>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                padding: 24,
                marginBottom: 4,
                backgroundColor: 'white',
              }}>
              {/* 이미지 */}
              <View style={{width: 60, height: 60, marginRight: 12}}>
                <Image
                  source={{
                    uri:
                      URL +
                      '/media/product/' +
                      Datas.code +
                      '/' +
                      Datas.brand_name +
                      '/' +
                      Datas.name +
                      '.jpg',
                  }}
                  resizeMode="contain"
                  style={{width: 60, height: 60}}
                />
              </View>
              {/* 이름 */}
              <View style={{justifyContent: 'center'}}>
                <Text style={{color: 'gray', fontSize: 13}}>
                  {Datas.brand_name}
                </Text>
                <Text style={{fontSize: 15}}>{Datas.name}</Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
                paddingRight: 15,
                paddingLeft: 15,
                paddingTop: 20,
              }}>
              {/* 평점 */}
              <View style={{paddingLeft: 9, paddingRight: 9}}>
                <Text style={{fontSize: 15}}>평점을 선택해주세요.</Text>
                {/*  */}
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginLeft: -7}}>
                    <SvgXml xml={SVG('STAR_GRAY')} width="28" height="28" />
                  </View>
                  <View style={{marginLeft: -7}}>
                    <SvgXml xml={SVG('STAR_GRAY')} width="28" height="28" />
                  </View>
                  <View style={{marginLeft: -7}}>
                    <SvgXml xml={SVG('STAR_GRAY')} width="28" height="28" />
                  </View>
                  <View style={{marginLeft: -7}}>
                    <SvgXml xml={SVG('STAR_GRAY')} width="28" height="28" />
                  </View>
                  <View style={{marginLeft: -7}}>
                    <SvgXml xml={SVG('STAR_GRAY')} width="28" height="28" />
                  </View>
                </View>
                {/*  */}
              </View>

              {/* 리뷰 */}
              <View style={{marginTop: 30, paddingLeft: 9, paddingRight: 9}}>
                <Text style={{fontSize: 15}}>리뷰 쓰기</Text>
                <View
                  style={{
                    marginTop: 12,
                    backgroundColor: 'rgb(245,245,245)',
                    padding: 16,
                    height: 224,
                  }}>
                  <TextInput
                    editable
                    placeholder={'최소 20자 이상 작성해주세요.'}
                    placeholderTextColor="rgba(0,0,0,0.6)"
                    maxLength={300}
                    multiline
                    numberOfLines={6}
                  />
                </View>
              </View>
              {/* 언더바 */}
              <View
                style={{
                  height: 1,
                  backgroundColor: 'lightgray',
                  marginTop: 40,
                  marginBottom: 24,
                }}></View>
              {/* 사진첨부 */}
              <Text style={{fontSize: 15}}>사진 첨부</Text>
              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#f3f3f3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('PLUS_GRAY')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#f3f3f3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('PLUS_GRAY')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#f3f3f3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('PLUS_GRAY')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#f3f3f3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('PLUS_GRAY')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#f3f3f3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('PLUS_GRAY')} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 12}}>
                <Text style={{color: '#838383', fontSize: 11}}>
                  이미지 파일(GIF, PNG, JPG)을 기준으로 최대 10MB이사, 최대
                  5개까지 등록 가능합니다.
                </Text>
              </View>
            </View>
            {/*  */}
          </View>
          <Modal visible={this.state.cancelModal} transparent={true}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: 'white',
                  paddingTop: 38,
                  paddingLeft: 64,
                  paddingRight: 64,
                  paddingBottom: 41,
                }}>
                <Text style={{marginBottom: 24}}>
                  지금 돌아가면 리뷰 내용이 모두 삭제됩니다.
                </Text>
                <View style={{flexDirection: 'row', marginTop: 24}}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({cancelModal: !this.state.cancelModal});
                    }}>
                    <Text style={{color: DARKMINT}}>취소</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      alert('준비중입니다.');
                    }}
                    style={{flexGrow: 1, alignItems: 'center'}}>
                    <Text style={{color: DARKMINT}}>임시저장</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({cancelModal: !this.state.cancelModal});
                      this.props.navigation.goBack();
                    }}>
                    <Text style={{color: DARKMINT}}>삭제</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
