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

export default class Join extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      check_all: false,
      check_01: false,
      check_02: false,
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
              // backgroundColor: 'skyblue',
              marginTop: 16,
              marginLeft: 16,
              marginRight: 16,
            }}>
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                // backgroundColor: 'pink',
              }}>
              <LabelInput
                placeholder={'Babbling@babylab.com'}
                label={'이메일'}
              />
              <LabelInput
                placeholder={'********'}
                label={'비밀번호(8자리 이상)'}
              />
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
            </View>
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
                padding: 20,
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
                paddingLeft: 20,
                paddingRight: 20,
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
              nav={() => this.props.navigation.navigate('BabyPlus')}
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
                    <Text style={{color: '#000', fontSize: 11}}>eee</Text>
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
                    <Text style={{color: '#000', fontSize: 11}}>ddd</Text>
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
