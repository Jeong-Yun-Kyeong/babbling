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

const TalkWrite = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f3f3f3'}}>
          {/*  */}
          <View
            style={{
              backgroundColor: 'white',
              paddingRight: 15,
              paddingLeft: 15,
              paddingTop: 20,
            }}>
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
            {/* 리뷰 */}
            <View style={{marginTop: 30, paddingLeft: 9, paddingRight: 9}}>
              <View
                style={{
                  marginTop: 12,
                  backgroundColor: '#f7f7f7',
                  padding: 16,
                  height: 224,
                }}>
                <TextInput
                  editable
                  placeholder={'내용을 입력해주세요.'}
                  maxLength={300}
                  multiline
                  numberOfLines={6}
                />
              </View>
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

export default TalkWrite;
