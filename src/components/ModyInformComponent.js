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
  TouchableHighlight
} from 'react-native';
import LabelInput from '../components/atom/LabelInput';
import FormButton from '../components/atom/FormButton';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import { TextInput } from 'react-native-gesture-handler';

export default class ModyInformModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,

      babyName: '',
      email: '',
      password: '',
      password_2: '',
      name: '',
      address: '',
      addressAdd: '',

      profileWidth:100
    };

    //this.profileWidth = 100;
  }

  _inputBabyName = text=> {this.setState({babyName:text});}
  _inputEmail = text=> {this.setState({email:text});}
  _inputPW = text=> {this.setState({password:text});}
  _inputPW_2 = text=> {this.setState({password_2:text});}
  _inputName = text=> {this.setState({name:text});}
  _inputAddress = text=> {this.setState({address:text});}
  _inputAddressAdd = text=> {this.setState({addressAdd:text});}

  editAlergy = ()=> {
    this.props.navigation.navigate('BabyAlergy_my').then(this.props.modalController(false));

  }

  componentDidUpdate(nextProps) {
    const {modyItem} = this.props;
    
    if(modyItem!=nextProps.modyItem && modyItem) {
      this.setState({babyName:modyItem.title});
      console.log(modyItem);
    }
  }

  render() {
    return (
      <Modal visible={this.props.modalVisible} animationType="slide" transparent={true}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: '#000000dd'}}>
            <ScrollView style={{flex: 1}}>
            <View
              style={{
                height: 45,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 24,
                paddingRight: 24,
                marginTop: 20
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.modalController(false);
                }}>
                <Text style={{color:'white'}}>취소</Text>
              </TouchableOpacity>
              <Text style={{fontSize: 16, color: 'white'}}>프로필 변경/정보수정</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.modalController(false);
                }}>
                <Text style={{color:'#32cc73'}}>완료</Text>
              </TouchableOpacity>
            </View>
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
                {/* 얼굴 */}
                <View style={{
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center',}}>
                  <TouchableHighlight
                    underlayColor="#fff"

                    //activeOpacity={0.6}
                    //onPress={() => this.profileOnclick(item,index)}
                    // onPress={() => console.log(index)}

                    style={{
                      width: this.state.profileWidth,
                      height: this.state.profileWidth,
                      borderRadius: this.state.profileWidth/ 2,
                      overflow: 'hidden',
                      backgroundColor:'white'
                    }}>
                      <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <SvgXml xml={SVG('BABBLING_PROFILE')} width={this.state.profileWidth*0.8} height={this.state.profileWidth*0.8} />
                        <Text style={{position:'absolute',color:'white',backgroundColor:'#000000cc',width:'100%',textAlign:'center',bottom:0,fontSize:10,paddingVertical:5}}>변경</Text>
                      </View>
                  </TouchableHighlight>
                </View>

                <View style={{borderWidth:1.5,borderColor:'white', borderRadius:10, marginHorizontal:30,paddingHorizontal:20, marginBottom:20}}>
                  <TextInput style={{color:'white', fontSize:16, paddingVertical:5}} onChangeText={this._inputBabyName} defaultValue = {this.state.babyName}/>
                </View>


                <LabelInput
                    placeholder={'Babbling@babylab.com'}
                    label={'이메일'}
                    labelColor="#9d9d9d"
                    textColor="white"
                    onChangeText={this._inputEmail}

                    defaultValue = {this.state.email}
                />
                <LabelInput
                    placeholder={'********'}
                    label={'비밀번호(8자리 이상)'}
                    labelColor="#9d9d9d"
                    textColor="white"
                    onChangeText={this._inputPW}
                    
                />
                <LabelInput placeholder={'********'} label={'비밀번호 확인'} labelColor="#9d9d9d" onChangeText={this._inputPW_2}
                    textColor="white"/>
                <LabelInput
                    placeholder={'홍길동'}
                    label={'이름'}
                    button={true}
                    btnTitle={'실명확인'}
                    labelColor="#9d9d9d"
                    textColor="white"
                    buttonColor="#9d9d9d"
                    onChangeText={this._inputName}
                    defaultValue = {this.state.name}
                />
                <LabelInput
                    placeholder={'대전광역시 유성구 덕명로 97번길 19'}
                    label={'주소지입력'}
                    button={true}
                    btnTitle={'우편번호 검색'}
                    labelColor="#9d9d9d"
                    textColor="white"
                    buttonColor="#9d9d9d"
                    onChangeText={this._inputAddress}
                    defaultValue = {this.state.address}
                />
                <LabelInput placeholder={'(직접입력)'} label={false} labelColor="#9d9d9d" onChangeText={this._inputAddressAdd}
                    textColor="white" defaultValue = {this.state.addressAdd}/>
                    
                </View>
                {/*  */}


                {/*  */}
                <FormButton
                title={'우리아이 알러지 & 트러블'}
                backgroundColor={'transparent'}
                borderColor="white"
                color={'white'}
                nav={() => this.editAlergy()}
                />
            </View>
            </ScrollView>
        </SafeAreaView>
      </Modal>
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
