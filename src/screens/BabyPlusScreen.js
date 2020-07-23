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
  Dimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import LabelInput from '../components/atom/LabelInput';

import * as ScreenMargin from '../values/ScreenMargin';
import {TextInput} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';

export default class BabyPlus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topRight: 5,
      bottomRight: 5,
      //true 남자, false,여자
      gender: true,

      enableName: false,
    };
  }

  render() {
    let screenMargin = ScreenMargin.getMargin(this.props.route.name);
    console.log(this.props.route.name);

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView
          style={{backgroundColor: 'white', flex: 1, backgroundColor: 'white'}}>
          <View style={{paddingHorizontal: screenMargin}}>
            {/* 얼굴 */}
            <View style={{marginTop: 20, marginBottom: 20}}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 120,
                    height: 120,
                    borderRadius: 120,
                    shadowOffset: {
                      height: 3,
                    },
                    shadowOpacity: 0.2,

                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SvgXml xml={SVG('BABBLING_PROFILE')} />
                  {/* <Image source={require('../images/Babbling_profile.png')} /> */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      width: 36,
                      height: 36,
                      borderRadius: 36,
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      shadowOffset: {
                        height: 3,
                      },
                      shadowOpacity: 0.2,

                      elevation: 5,
                      //
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <SvgXml xml={SVG('CAMERA')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* 이름 */}
            <LabelInput
              placeholder={'베베'}
              label={'아이 이름/별명'}
              button={true}
              btnTitle={'중복확인'}
              style={{marginBotom: 12, marginRight: 62}}
            />
            <Text
              style={{
                marginLeft: 16,
                marginTop: 8,
                fontSize: 10,
                color: '#00000099',
              }}>
              {this.state.enableName ? '사용 가능해요!' : ''}
            </Text>
            {/* 성별 */}
            <View style={{marginTop: 30, marginHorizontal: 16}}>
              <Text
                style={{
                  fontSize: 13,
                  color: 'gray',
                  marginBottom: 14,
                }}>
                아이의 성별을 선택해주세요
              </Text>
              {/*  */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      gender: !this.state.gender,
                    });
                  }}
                  style={[
                    styles.gender_button,
                    {
                      backgroundColor: this.state.gender ? 'white' : '#32cc73',
                    },
                  ]}>
                  <Text
                    style={{
                      color: this.state.gender ? '#32cc73' : 'white',
                      fontSize: 15,
                    }}>
                    남자
                  </Text>
                </TouchableOpacity>
                <View style={{flex: 0.1}}></View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      gender: !this.state.gender,
                    });
                  }}
                  style={[
                    styles.gender_button,
                    {
                      backgroundColor: this.state.gender ? '#32cc73' : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      color: this.state.gender ? 'white' : '#32cc73',
                      fontSize: 15,
                    }}>
                    여자
                  </Text>
                </TouchableOpacity>
              </View>

              {/* 일 */}
              <View style={{marginTop: 40}}>
                <Text
                  style={{
                    fontSize: 12,
                    marginBottom: 10,
                    color: 'gray',
                  }}>
                  아이가 태어날 날을 입력해주세요
                  <Text style={{color: 'lightgray', fontSize: 10}}>
                    혹은 출산 예정일을 입력해주세요
                  </Text>
                </Text>
                {/*  */}
                <View
                  style={{
                    height: 51,
                    borderWidth: 1,
                    borderColor: '#a9a9a9',
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: -24,
                  }}>
                  <View style={styles.date_view}>
                    <TextInput
                      editable
                      maxLength={4}
                      style={styles.data_text}></TextInput>
                    <Text>년</Text>
                  </View>
                  <View style={styles.date_view}>
                    <TextInput
                      maxLength={2}
                      style={styles.data_text}></TextInput>
                    <Text>월</Text>
                  </View>
                  <View style={styles.date_view}>
                    <TextInput
                      maxLength={2}
                      style={styles.data_text}></TextInput>
                    <Text>일</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
// //색추가
// import {DARKMINT, BLACK60} from '../Constant';
// //dropdown추가
// import RNPickerSelect from 'react-native-picker-select';
// //
// export default class BabyPlus extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.inputRefs = {};
//     this.state = {
//       topRight: 5,
//       bottomRight: 5,
//       //true 남자, false,여자
//       gender: true,

//       enableName: false,
//       //dropdown에 필요한거
//       year: '',
//       month: '',
//       day: '',
//       alarmToggle: false,
//       repleToggle: false,
//       eventToggle: false,
//       //dropdown 아이템 추가
//       Year_items: [
//         {
//           label: '2020',
//           value: '2020',
//         },
//         {
//           label: '2019',
//           value: '2019',
//         },
//         {
//           label: '2018',
//           value: '2018',
//         },
//         {
//           label: '2017',
//           value: '2017',
//         },
//         {
//           label: '2016',
//           value: '2016',
//         },
//         {
//           label: '2015',
//           value: '2015',
//         },
//         {
//           label: '2014',
//           value: '2014',
//         },
//         {
//           label: '2013',
//           value: '2013',
//         },
//         {
//           label: '2012',
//           value: '2012',
//         },
//         {
//           label: '2011',
//           value: '2011',
//         },
//         {
//           label: '2010',
//           value: '2010',
//         },
//       ],
//       Month_items: [
//         {
//           label: '1',
//           value: '1',
//         },
//         {
//           label: '2',
//           value: '2',
//         },
//         {
//           label: '3',
//           value: '3',
//         },
//         {
//           label: '4',
//           value: '4',
//         },
//         {
//           label: '5',
//           value: '5',
//         },
//         {
//           label: '6',
//           value: '6',
//         },
//         {
//           label: '7',
//           value: '7',
//         },
//         {
//           label: '8',
//           value: '8',
//         },
//         {
//           label: '9',
//           value: '9',
//         },
//         {
//           label: '10',
//           value: '10',
//         },
//         {
//           label: '11',
//           value: '11',
//         },
//         {
//           label: '12',
//           value: '12',
//         },
//       ],
//       Day_items: [
//         {
//           label: '1',
//           value: '1',
//         },
//         {
//           label: '2',
//           value: '2',
//         },
//         {
//           label: '3',
//           value: '3',
//         },
//         {
//           label: '3',
//           value: '3',
//         },
//         {
//           label: '4',
//           value: '4',
//         },
//         {
//           label: '5',
//           value: '5',
//         },
//         {
//           label: '6',
//           value: '6',
//         },
//         {
//           label: '7',
//           value: '7',
//         },
//         {
//           label: '8',
//           value: '8',
//         },
//         {
//           label: '9',
//           value: '9',
//         },
//         {
//           label: '10',
//           value: '10',
//         },
//         {
//           label: '11',
//           value: '11',
//         },
//         {
//           label: '12',
//           value: '12',
//         },
//         {
//           label: '13',
//           value: '13',
//         },
//         {
//           label: '14',
//           value: '14',
//         },
//         {
//           label: '15',
//           value: '15',
//         },
//         {
//           label: '16',
//           value: '16',
//         },
//         {
//           label: '17',
//           value: '17',
//         },
//         {
//           label: '18',
//           value: '18',
//         },
//         {
//           label: '19',
//           value: '19',
//         },
//         {
//           label: '20',
//           value: '20',
//         },
//         {
//           label: '21',
//           value: '21',
//         },
//         {
//           label: '22',
//           value: '22',
//         },
//         {
//           label: '23',
//           value: '23',
//         },
//         {
//           label: '24',
//           value: '24',
//         },
//         {
//           label: '25',
//           value: '25',
//         },
//         {
//           label: '26',
//           value: '26',
//         },
//         {
//           label: '27',
//           value: '27',
//         },
//         {
//           label: '28',
//           value: '28',
//         },
//         {
//           label: '29',
//           value: '29',
//         },
//         {
//           label: '30',
//           value: '30',
//         },
//         {
//           label: '31',
//           value: '31',
//         },
//       ],
//     };
//   }

//   render() {
//     let screenMargin = ScreenMargin.getMargin(this.props.route.name);
//     console.log(this.props.route.name);

//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView />
//         <ScrollView
//           style={{backgroundColor: 'white', flex: 1, backgroundColor: 'white'}}>
//           <View style={{paddingHorizontal: screenMargin}}>
//             {/* 얼굴 */}
//             {/* margin 변경 */}
//             <View style={{marginTop: 40, marginBottom: 40}}>
//               <View style={{alignItems: 'center'}}>
//                 <View
//                   style={{
//                     backgroundColor: 'white',
//                     width: 120,
//                     height: 120,
//                     borderRadius: 120,
//                     shadowOffset: {
//                       height: 3,
//                     },
//                     shadowOpacity: 0.2,

//                     elevation: 5,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <SvgXml xml={SVG('BABBLING_PROFILE')} />
//                   {/* <Image source={require('../images/Babbling_profile.png')} /> */}
//                   <TouchableOpacity
//                     style={{
//                       backgroundColor: 'white',
//                       width: 36,
//                       height: 36,
//                       borderRadius: 36,
//                       position: 'absolute',
//                       right: 0,
//                       bottom: 0,
//                       shadowOffset: {
//                         height: 3,
//                       },
//                       shadowOpacity: 0.2,

//                       elevation: 5,
//                       //
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}>
//                     <SvgXml xml={SVG('CAMERA')} />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//             {/* 이름 */}
//             <LabelInput
//               placeholder={'베베'}
//               label={'아이 이름/별명'}
//               button={true}
//               btnTitle={'중복확인'}
//               style={{marginBotom: 12, marginRight: 40}}
//             />
//             <Text
//               style={{
//                 marginLeft: 16,
//                 marginTop: 8,
//                 fontSize: 10,
//                 color: '#00000099',
//               }}>
//               {this.state.enableName ? '사용 가능해요!' : ''}
//             </Text>
//             {/* 성별 */}
//             <View style={{marginTop: 40, marginHorizontal: 10}}>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: 'gray',
//                   marginBottom: 16,
//                 }}>
//                 아이의 성별을 선택해주세요
//               </Text>
//               {/*  */}
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     this.setState({
//                       gender: !this.state.gender,
//                     });
//                   }}
//                   style={[
//                     styles.gender_button,
//                     {
//                       backgroundColor: this.state.gender ? 'white' : '#32cc73',
//                     },
//                   ]}>
//                   <Text
//                     style={{
//                       color: this.state.gender ? '#32cc73' : 'white',
//                       fontSize: 15,
//                     }}>
//                     남자
//                   </Text>
//                 </TouchableOpacity>
//                 <View style={{flex: 0.1}}></View>
//                 <TouchableOpacity
//                   onPress={() => {
//                     this.setState({
//                       gender: !this.state.gender,
//                     });
//                   }}
//                   style={[
//                     styles.gender_button,
//                     {
//                       backgroundColor: this.state.gender ? '#32cc73' : 'white',
//                     },
//                   ]}>
//                   <Text
//                     style={{
//                       color: this.state.gender ? 'white' : '#32cc73',
//                       fontSize: 15,
//                     }}>
//                     여자
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* 일 */}
//               <View style={{marginTop: 50}}>
//                 <Text
//                   style={{
//                     fontSize: 12,
//                     marginBottom: 15,
//                     color: 'rgba(0, 0, 0, 0.9)',
//                     fontWeight: 200,
//                     marginHorizontal: -5,
//                   }}>
//                   아이가 태어날 날을 입력해주세요
//                   <Text style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 10}}>
//                     혹은 출산 예정일을 입력해주세요
//                   </Text>
//                 </Text>
//                 {/*  */}
//                 <View
//                   style={{
//                     height: 51,
//                     borderWidth: 1,
//                     borderColor: '#a9a9a9',
//                     borderRadius: 8,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flexDirection: 'row',
//                     justifyContent: 'space-around',
//                     marginHorizontal: -24,
//                   }}>
//                   {/* RNPickerSelect */}
//                   <View style={styles.RNP_layout}>
//                     <SvgXml
//                       xml={SVG('DOWNMORE')}
//                       style={{
//                         marginLeft:
//                           ((Dimensions.get('screen').width - 50) / 3 / 3) * 2,
//                         height: 51,
//                         //화살표 겹치기
//                         position: 'absolute',
//                         //화살표 겹치기end
//                       }}
//                     />
//                     <RNPickerSelect
//                       onValueChange={(value) => console.log(value)}
//                       placeholder={{
//                         label: '년도',
//                         value: null,
//                       }}
//                       items={this.state.Year_items}
//                       selectedValue={this.state.year}
//                       onValueChange={(value) => this.setState({year: value})}
//                       onUpArrow={() => {
//                         this.inputRefs.name.focus();
//                       }}
//                       onDownArrow={() => {
//                         this.inputRefs.picker1.togglePicker();
//                       }}
//                       style={{
//                         inputAndroid: {
//                           width: (Dimensions.get('screen').width - 50) / 3,
//                           fontSize: 16,
//                           paddingLeft: 15,
//                           paddingHorizontal: 10,
//                           borderWidth: 0,
//                           borderColor: 'rgba(0, 0, 0, 0)',
//                           backgroundColor: 'rgba(0, 0, 0, 0)',
//                           color: 'black',
//                         },
//                         inputIOS: styles.input_Ios,
//                       }}
//                       value={this.state.favColor}
//                       ref={(el) => {
//                         this.inputRefs.picker1 = el;
//                       }}
//                       useNativeAndroidPickerStyle={false} //android only
//                       hideIcon={true}
//                     />
//                   </View>
//                   {/* RNPickerSelect end */}
//                   {/* RNPickerSelect */}
//                   <View style={styles.RNP_layout}>
//                     <SvgXml
//                       xml={SVG('DOWNMORE')}
//                       style={{
//                         //화살표 겹치기
//                         position: 'absolute',
//                         marginLeft:
//                           ((Dimensions.get('screen').width - 50) / 3 / 3) * 2,
//                         //화살표 겹치기end
//                       }}
//                     />
//                     <RNPickerSelect
//                       onValueChange={(value) => console.log(value)}
//                       placeholder={{
//                         label: '월',
//                         value: null,
//                       }}
//                       items={this.state.Month_items}
//                       onValueChange={(value) => {
//                         this.setState({favColor: value});
//                       }}
//                       onUpArrow={() => {
//                         this.inputRefs.name.focus();
//                       }}
//                       onDownArrow={() => {
//                         this.inputRefs.picker2.togglePicker();
//                       }}
//                       style={{
//                         inputAndroid: {
//                           width: (Dimensions.get('screen').width - 50) / 3,
//                           fontSize: 16,
//                           paddingLeft: 15,
//                           paddingHorizontal: 10,
//                           borderWidth: 0,
//                           borderColor: 'rgba(0, 0, 0, 0)',
//                           backgroundColor: 'rgba(0, 0, 0, 0)',
//                           color: 'black',
//                         },
//                         inputIOS: styles.input_Ios,
//                       }}
//                       value={this.state.favColor}
//                       ref={(el) => {
//                         this.inputRefs.picker2 = el;
//                       }}
//                       useNativeAndroidPickerStyle={false} //android only
//                       hideIcon={true}
//                     />
//                   </View>
//                   {/* RNPickerSelect end */}
//                   {/* RNPickerSelect */}
//                   <View style={styles.RNP_layout}>
//                     <SvgXml
//                       xml={SVG('DOWNMORE')}
//                       style={{
//                         //화살표 겹치기
//                         position: 'absolute',
//                         marginLeft:
//                           ((Dimensions.get('screen').width - 50) / 3 / 3) * 2,
//                         //화살표 겹치기end
//                       }}
//                     />
//                     <RNPickerSelect
//                       onValueChange={(value) => console.log(value)}
//                       placeholder={{
//                         label: '일',
//                         value: null,
//                       }}
//                       items={this.state.Day_items}
//                       onValueChange={(value) => {
//                         this.setState({favColor: value});
//                       }}
//                       onUpArrow={() => {
//                         this.inputRefs.name.focus();
//                       }}
//                       onDownArrow={() => {
//                         this.inputRefs.picker3.togglePicker();
//                       }}
//                       style={{
//                         inputAndroid: {
//                           width: (Dimensions.get('screen').width - 50) / 3,
//                           fontSize: 16,
//                           paddingLeft: 15,
//                           paddingHorizontal: 10,
//                           borderWidth: 0,
//                           borderColor: 'rgba(0, 0, 0, 0)',
//                           backgroundColor: 'rgba(0, 0, 0, 0)',
//                           color: 'black',
//                         },
//                         inputIOS: styles.input_Ios,
//                       }}
//                       value={this.state.favColor}
//                       ref={(el) => {
//                         this.inputRefs.picker3 = el;
//                       }}
//                       useNativeAndroidPickerStyle={false} //android only
//                       hideIcon={true}
//                     />
//                   </View>
//                   {/* RNPickerSelect end */}
//                 </View>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </Fragment>
//     );
//   }
// }

const styles = StyleSheet.create({
  gender_button: {
    padding: 13,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#32cc73',
    flex: 1,
    alignItems: 'center',
  },
  date_view: {
    width: (Dimensions.get('screen').width - 50) / 3,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    height: 51,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -1,

    flex: 1,
  },
  data_text: {
    width: (Dimensions.get('screen').width - 50) / 3 / 3,
    color: 'black',
  },
  // // style추가
  // RNP_layout: {
  //   width: (Dimensions.get('screen').width - 50) / 3,
  //   marginTop: 20,
  //   marginBottom: 20,
  //   height: 51,
  //   borderColor: 'rgba(0,0,0,0)',
  //   alignItems: 'center',
  //   // justifyContent: 'flex-end',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   marginHorizontal: -1,
  //   //화살표 겹치기
  //   position: 'relative',
  // },
  // input_Ios: {
  //   width: (Dimensions.get('screen').width - 50) / 3,
  //   fontSize: 13,
  //   height: 51,
  //   paddingLeft: 15,
  //   color: 'black',
  // },
});
