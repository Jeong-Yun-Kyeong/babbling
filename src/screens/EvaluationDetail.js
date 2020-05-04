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

const EvaluationDetail = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f9f9f9', paddingBottom: 40}}>
          {/*  */}
          <Image source={require('../images/evalDetailTest.png')} />
          {/*  */}
          <View
            style={{
              padding: 15,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'gray', fontSize: 11, marginBottom: 5}}>
              베베스킨
            </Text>
            <Text style={{marginBottom: 15, fontSize: 16}}>
              베이비 고농축 섬유유연제 평가단 모집!
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
                -상품은 평가단 지원 시 가입한 주소로 배송됩니다. 만약, 부정확한
                정보기입으로 인해 배송에 문제가 생길 경우, 책임을 지지 않으며
                배송지 변경 및 재발송이 불가합니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -평가단으로 선정되신 후, 활동 기간 내 리뷰 마감일을 지키지
                않거나, 유의사항을 숙지하지 않았을 경우 향후 평가단 참여시
                불이익이 있을 수 있습니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -리뷰에 대한 베블링이 제공한 별도의 가이드 라인을 지켜주세요.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -광고성 리뷰는 베블링 이용약관에 의해 게시 중단 될 수 있으며,
                평가단 당첨이 취소 될 수 있습니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -허위로 평가단에 참여했다고 판단될 경우 당첨이 취소 될 수
                있습니다.
              </Text>
              <Text style={{fontSize: 10, lineHeight: 20}}>
                -평가단 지원 시 기입 정보는 상품 발송을 위해 제 3자에게 제공될
                수 있으며, 당첨자 개인정보(연락처, 주소 등)는 제품 배송 및
                이벤트 안내 정보 발신에 활용됩니다.
              </Text>
            </View>
          </View>
          {/*  */}
        </View>
      </ScrollView>
      {/*  */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EvaluationWrite');
        }}
        style={{
          backgroundColor: '#32cc73',
          width: 56,
          height: 56,
          borderRadius: 56,
          position: 'absolute',
          right: 20,
          bottom: 40,
        }}></TouchableOpacity>
      {/*  */}
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default EvaluationDetail;
