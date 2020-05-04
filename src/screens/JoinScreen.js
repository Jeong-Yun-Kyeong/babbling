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
import LabelInput from '../components/atom/LabelInput';
import FormButton from '../components/atom/FormButton';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

export default class Join extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <LabelInput placeholder={'Babbling@babylab.com'} label={'이메일'} />
          <LabelInput placeholder={'********'} label={'비밀번호(8자리 이상)'} />
          <LabelInput placeholder={'********'} label={'비밀번호 확인'} />
          <LabelInput
            placeholder={'홍길동'}
            label={'이름'}
            button={true}
            btnTitle={'실명확인'}
          />
          <LabelInput
            placeholder={'대전광역시 유성구 덕명로 97번길 19'}
            label={'주소지입력'}
            button={true}
            btnTitle={'우편번호 검색'}
          />
          <LabelInput placeholder={'(직접입력)'} label={false} />
          {/*  */}
          {/*  */}
          <View style={{marginLeft: 40}}>
            <Text style={{color: 'gray', fontSize: 13}}>약관 전체동의</Text>
          </View>
          {/*  */}
          <View
            style={{
              backgroundColor: '#f3f3f3',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 16,
              marginRight: 16,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 20,
              paddingBottom: 20,
              alignItems: 'center',
            }}>
            <View>
              <Text style={{lineHeight: 30, fontSize: 13, color: 'gray'}}>
                베블링 이용약관 동의(필수)
              </Text>
              <Text style={{lineHeight: 30, fontSize: 13, color: 'gray'}}>
                개인정보 수집이용 동의(필수)
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <SvgXml xml={SVG('ARROWRIGHT')} />
            </TouchableOpacity>
          </View>

          {/*  */}
          <FormButton
            title={'회원가입'}
            backgroundColor={'#32cc73'}
            color={'white'}
          />
        </ScrollView>
        <Modal visible={this.state.modalVisible}>
          <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <Text>이용약관</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: false});
              }}>
              <Text>닫기</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </Fragment>
    );
  }
}
