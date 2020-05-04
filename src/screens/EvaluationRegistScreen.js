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
import LabelInput from '../components/atom/LabelInput';

const EvaluationRegist = ({navigation}) => {
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
              <Text style={{color: 'gray', fontSize: 13, marginBottom: 5}}>
                존슨즈 베이비
              </Text>
              <Text style={{fontSize: 15}}>
                수딩내추럴 인텐스 모이스처 크림
              </Text>
            </View>
          </View>
          {/*  */}
          <View style={{backgroundColor: 'white', flex: 1}}>
            <LabelInput placeholder={'홍길동'} label={'이름'} />
            <LabelInput placeholder={'000-0000-0000'} label={'전화번호'} />
            <LabelInput
              placeholder={'대전광역시 유성구 덕명로 97번길 19'}
              label={'주소지입력'}
            />
            <LabelInput placeholder={'(직접입력)'} label={false} />
            {/*  */}
            <Text>상품선택</Text>
            {/*  */}
            <Text>이용자 동의</Text>
            {/*  */}
            <Text>개인정보처리방침 및 위탁통의(필수)</Text>
            {/*  */}
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default EvaluationRegist;
