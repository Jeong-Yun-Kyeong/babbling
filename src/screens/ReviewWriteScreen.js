import React, {Fragment} from 'react';
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

const ReviewWrite = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
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
                source={require('../images/1.jpeg')}
                resizeMode="contain"
                style={{width: 60, height: 60}}
              />
            </View>
            {/* 이름 */}
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'gray', fontSize: 13}}>존슨즈 베이비</Text>
              <Text style={{fontSize: 15}}>
                수딩내추럴 인텐스 모이스처 크림
              </Text>
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
              <View>
                <SvgXml xml={SVG('STAR_CHECKED')} width="40" height="40" />
              </View>
            </View>

            {/* 리뷰 */}
            <View style={{marginTop: 30, paddingLeft: 9, paddingRight: 9}}>
              <Text style={{fontSize: 15}}>리뷰 쓰기</Text>
              <View
                style={{
                  marginTop: 12,
                  backgroundColor: '#f7f7f7',
                  padding: 16,
                  height: 224,
                }}>
                <TextInput
                  editable
                  placeholder={'최소 20자 이상 작성해주세요.'}
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
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SvgXml xml={SVG('PLUS_GRAY')} />
              </View>
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
        <Modal visible={false}></Modal>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default ReviewWrite;
