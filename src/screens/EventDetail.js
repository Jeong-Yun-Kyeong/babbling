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
  Dimensions,
  TextInput,
} from 'react-native';

const EventDetail = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f9f9f9', paddingBottom: 40}}>
          {/*  */}
          <Image source={require('../images/eventTest.png')} />
          {/*  */}
          <View
            style={{
              padding: 15,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'gray', fontSize: 11, marginBottom: 5}}>
              a.stop
            </Text>
            <Text style={{marginBottom: 15, fontSize: 16}}>
              a.stop 클리어 세럼 이벤트
            </Text>
            <Text style={{fontSize: 11, color: 'gray', marginBottom: 15}}>
              2020.01.11~01.18 까지
            </Text>
            <View
              style={{
                backgroundColor: 'lightgray',
                height: 1,
                width: '100%',
              }}></View>
          </View>
          {/*  */}
          <View style={{padding: 24}}>
            <View style={{paddingLeft: 8, paddingRight: 8}}>
              <Text style={{color: 'gray', fontSize: 13, marginBottom: 15}}>
                설명 + 이미지
              </Text>
              <Text style={{color: 'gray', fontSize: 13}}>이벤트 안내</Text>
            </View>
          </View>
          {/*  */}
          <View
            style={{
              backgroundColor: '#f3f3f3',
              paddingTop: 18,
              paddingLeft: 32,
              paddingRight: 32,
              paddingBottom: 18,
            }}>
            <View>
              <Text style={{}}>기타 안내 및 유의사항</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -상품은 이벤트 지원 시 가입한 주소로 배송됩니다. 만약, 부정확한
                정보기입으로 인해 배송에 문제가 생길 경우, 책임을 지지 않으며
                배송지 변경 및 재발송이 불가합니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -이벤트 기간 내 작성한 리뷰만 참여 인정됩니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -리뷰에 대한 베블링이 제공한 별도의 가이드 라인을 지켜주세요.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -광고성 리뷰는 베블링 이용약관에 의해 게시 중단 될 수 있습니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -허위로 이벤트에 참여했다고 판단될 경우 당첨이 취소 될 수
                있습니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -이벤트 참여 시, 개인정보 활용에 동의한 것으로 간주 되며, 당첨자
                개인정보(연락처, 주소 등)는 제품 배송 및 이벤트 안내 정보 발신에
                활용됩니다.
              </Text>
            </View>
          </View>
          {/*  */}
          <View style={{padding: 24}}>
            <Text>이벤트 신청 댓글달기</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: 24,
              paddingRight: 24,
              //   paddingTop: 32,
              paddingBottom: 32,
              flexDirection: 'row',
            }}>
            {/*  */}
            <View style={{}}>
              <View
                style={{
                  width: 34,
                  height: 34,
                  backgroundColor: 'gray',
                  borderRadius: 34,
                  marginBottom: 5,
                }}></View>
              <Text style={{fontSize: 11}}>선우맘</Text>
            </View>
            {/*  */}
            <View style={{}}>
              <View
                style={{
                  backgroundColor: 'gray',
                  marginLeft: 32,
                  borderRadius: 10,
                  padding: 9,
                  width: Dimensions.get('screen').width - 114,
                }}>
                <Text
                  style={{fontSize: 10, color: '#32cc73', marginBottom: 10}}>
                  1세 알레르기
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                  }}
                  numberOfLines={2}>
                  댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
                  댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용
                  댓글 내용 댓글 내용 댓글 내용 댓글 내용
                </Text>
              </View>
            </View>
          </View>
          {/*  */}
        </View>
      </ScrollView>
      {/*  */}
      <View
        style={{
          position: 'relative',
          left: 0,
          bottom: 0,
          flexDirection: 'row',
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 15,
          paddingBottom: 40,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexGrow: 1,
            borderColor: '#32cc73',
            borderWidth: 1,
            borderRadius: 50,
            height: 32,
            lineHeight: 32,
            justifyContent: 'center',
            paddingLeft: 16,
            paddingRight: 16,
          }}>
          <TextInput placeholder="댓글입력" />
        </View>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            backgroundColor: '#32cc73',
            marginLeft: 14,
          }}></View>
      </View>
      {/*  */}
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default EventDetail;
