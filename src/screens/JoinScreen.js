import React, {Fragment, PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';
import LabelInput from '../components/atom/LabelInput';
import FormButton from '../components/atom/FormButton';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import * as ScreenMargin from '../values/ScreenMargin';
import Postcode from 'react-native-daum-postcode';
import {약관1, 약관2} from '../Constant';
import IMP from 'iamport-react-native';
import {Loading} from '../components/LoadingComponent';
import {URL} from '../Constant';
export default class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      check_all: false,
      check_01: false,
      check_02: false,
      email: '',
      // password: '',
      // re_password: '',
      name: '',
      address: '',
      sub_address: '',
      addressModal: false,
      sns: '',
      datas: null,
    };
  }

  componentDidMount() {
    let authUser = this.props.route.params.authUser;
    let {sns} = authUser;
    console.log(authUser);
    if (sns == 'google') {
      this.setState({
        email: authUser.email,
        name: authUser.name,
      });
    } else if (sns == 'apple') {
    } else if (sns == 'kakao') {
    } else if (sns == 'naver') {
    } else {
      console.log('error');
    }
  }

  render() {
    const screenMargin = ScreenMargin.getMargin(this.props.route.name);
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <View
            style={{
              // backgroundColor: 'skyblue',
              marginTop: 16,
              paddingLeft: 28,
              paddingRight: 28,
            }}>
            <LabelInput
              placeholder={'Babbling@babylab.com'}
              label={'이메일'}
              value={this.state.email}
              style={{marginVertical: 12, marginRight: 62}}
              ref={(input) => {
                this.firstTextInput = input;
              }}
              onChangeText={(text) => {
                this.setState({email: text});
              }}
              onSubmitEditing={() => this.secondTextInput.focus()}
            />
            {/* <LabelInput
              placeholder={'**********'}
              label={'비밀번호(10자리 이상)'}
              secureTextEntry={true}
              style={{marginVertical: 12, marginRight: 62}}
              ref={(input) => {
                this.secondTextInput = input;
              }}
              onChangeText={(text) => {
                this.setState({password: text});
              }}
              onSubmitEditing={() => this.thirdTextInput.focus()}
            /> */}
            {/* <LabelInput
              placeholder={'**********'}
              label={'비밀번호 확인'}
              secureTextEntry={true}
              style={{marginVertical: 12, marginRight: 62}}
              ref={(input) => {
                this.thirdTextInput = input;
              }}
              onChangeText={(text) => {
                this.setState({re_password: text});
              }}
              onSubmitEditing={() => this.ForthTextInput.focus()}
            /> */}
            <LabelInput
              placeholder={'홍길동'}
              label={'이름'}
              value={this.state.name}
              style={{marginVertical: 12, marginRight: 62}}
              ref={(input) => {
                this.ForthTextInput = input;
              }}
              onChangeText={(text) => {
                this.setState({name: text});
              }}
              onSubmitEditing={() => this.FifthtextInput.focus()}
            />
            <LabelInput
              placeholder={'대전광역시 유성구 덕명로 97번길 19'}
              label={'주소지입력'}
              button={true}
              btnTitle={'우편번호 검색'}
              value={this.state.address}
              onPress={() => {
                this.setState({addressModal: !this.state.addressModal});
              }}
              disabled={false}
              style={{marginTop: 12, marginRight: 62}}
              ref={(input) => {
                this.FifthtextInput = input;
              }}
              // onChangeText={(text) => {
              //   this.setState({address: text});
              // }}
              onSubmitEditing={() => this.SixthTextInput.focus()}
            />
            <LabelInput
              placeholder={'(직접입력)'}
              label={false}
              style={{marginBotom: 12, marginRight: 62}}
              ref={(input) => {
                this.SixthTextInput = input;
              }}
              onChangeText={(text) => {
                this.setState({sub_address: text});
              }}
            />
            {/*  */}
            {/*  */}
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.setState({
                  check_all: !this.state.check_all,
                });
                if (this.state.check_all) {
                  this.setState({
                    check_01: false,
                    check_02: false,
                  });
                } else {
                  this.setState({
                    check_01: true,
                    check_02: true,
                  });
                }
              }}
              style={{
                marginTop: 36,
                marginBottom: 16,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <SvgXml
                xml={SVG(this.state.check_all ? 'CHECKEDBOX' : 'CHECKBOX')}
              />
              <Text style={{color: 'gray', fontSize: 13, marginLeft: 12}}>
                약관 전체동의
              </Text>
            </TouchableOpacity>
            {/*  */}
            <View
              style={{
                backgroundColor: '#f3f3f3',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: -20,
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      check_01: !this.state.check_01,
                    });
                    console.log(!this.state.check_01 && this.state.check_02);
                    if (!this.state.check_01 && this.state.check_02) {
                      this.setState({
                        check_all: true,
                      });
                    } else {
                      this.setState({
                        check_all: false,
                      });
                    }
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
                      color: 'gray',
                      marginLeft: 12,
                    }}>
                    베블링 이용약관 동의(필수)
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      check_02: !this.state.check_02,
                    });
                    console.log(this.state.check_01 && this.state.check_02);
                    if (this.state.check_01 && !this.state.check_02) {
                      this.setState({
                        check_all: true,
                      });
                    } else {
                      this.setState({
                        check_all: false,
                      });
                    }
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <SvgXml
                    xml={SVG(this.state.check_02 ? 'CHECKEDBOX' : 'CHECKBOX')}
                  />
                  <Text
                    style={{
                      lineHeight: 30,
                      fontSize: 13,
                      color: 'gray',
                      marginLeft: 12,
                    }}>
                    개인정보 수집이용 동의(필수)
                  </Text>
                </TouchableOpacity>
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
              nav={() => {
                let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
                let data = this.state;
                // 이메일값이 없으면 안넘어가게 수정하기
                if (data.email == '') {
                  alert('이메일을 입력해주세요.');
                  this.firstTextInput.focus();
                  return;
                } else if (!regEmail.test(data.email)) {
                  alert('이메일 형식에 맞지 않습니다.');
                  this.firstTextInput.focus();
                  return;
                }

                //이름은 추후 휴대폰인증 붙여야될거같음
                //주소지 입력은 우편번호 검색해서 완료 시 결과값에 특정 값 붙어서 나오는지 확인하고 처리하기
                if (data.address == '') {
                  alert('주소를 입력해주세요.');
                  return;
                }
                //직접입력은 내용이 있나 없나만 처리
                if (data.sub_address == '') {
                  alert('상세주소를 확인해주세요.');
                  return;
                }
                //약관동의 체크 안되있으면 안넘어감
                console.log(this.state.check_all);
                if (data.check_all == false) {
                  alert('약관을 확인해주세요.');
                  return;
                }
                // alert(data);
                console.log(data);
                let authUser = this.props.route.params.authUser;
                let userInfo = {
                  name: this.state.name,
                  email: this.state.email,
                  address_main: this.state.address,
                  address_sub: this.state.sub_address,
                  agreement: this.state.check_all == true ? 1 : 0,
                };
                console.log(authUser, userInfo);
                this.props.navigation.navigate('InputChildInformation', {
                  authUser: authUser,
                  userInfo: userInfo,
                });
              }}
              style={{marginTop: 56, marginBottom: 30}}
            />
          </View>
        </ScrollView>
        <Modal visible={this.state.modalVisible}>
          <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            {/*  */}
            <View
              style={{
                height: 45,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 24,
                paddingRight: 24,
              }}>
              <View></View>
              <Text style={{fontSize: 16, color: '#1d1d1d'}}>이용약관</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: false});
                }}>
                <SvgXml xml={SVG('CANCEL')} />
              </TouchableOpacity>
            </View>
            {/*  */}
            <View style={styles.container}>
              <View style={styles.agreeContainer}>
                <Text style={styles.text}>베블링 이용약관 동의(필수)</Text>
                <View style={styles.content_container}>
                  <ScrollView>
                    <Text style={{color: '#000', fontSize: 11}}>{약관1}</Text>
                  </ScrollView>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      check_01: !this.state.check_01,
                    });
                    if (!this.state.check_01 && this.state.check_02) {
                      this.setState({
                        check_all: true,
                      });
                    } else {
                      this.setState({
                        check_all: false,
                      });
                    }
                  }}
                  style={styles.checkbox}>
                  <SvgXml
                    xml={SVG(this.state.check_01 ? 'CHECKEDBOX' : 'CHECKBOX')}
                  />
                  <Text> 동의합니다</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.agreeContainer}>
                <Text style={styles.text}>개인정보 수집이용 동의(필수)</Text>
                <View style={styles.content_container}>
                  <ScrollView>
                    <Text style={{color: '#000', fontSize: 11}}>{약관2}</Text>
                  </ScrollView>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      check_02: !this.state.check_02,
                    });
                    if (this.state.check_01 && !this.state.check_02) {
                      this.setState({
                        check_all: true,
                      });
                    } else {
                      this.setState({
                        check_all: false,
                      });
                    }
                  }}
                  style={styles.checkbox}>
                  <SvgXml
                    xml={SVG(this.state.check_02 ? 'CHECKEDBOX' : 'CHECKBOX')}
                  />
                  <Text> 동의합니다</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
        <Modal visible={this.state.addressModal}>
          <SafeAreaView style={{backgroundColor: 'white'}} />
          <Postcode
            style={{flex: 1}}
            jsOptions={{animated: true}}
            onSelected={(data) => {
              this.setState({
                addressModal: !this.state.addressModal,
                address: data.address,
              });
            }}
          />
        </Modal>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },

  content_container: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
  },
  agreeContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: '3%',
    width: '90%',
  },
  text: {
    color: '#000',
    alignSelf: 'flex-start',
    // marginTop: 10,
    fontWeight: '500',
    marginLeft: 8,
    fontSize: 15,
  },
  checkbox: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
});
