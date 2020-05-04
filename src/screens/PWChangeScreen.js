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
} from 'react-native';
import LabelInput from '../components/atom/LabelInput';

export default class PWChange extends PureComponent {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerRight: () => (
      <TouchableOpacity
        style={{marginRight: 24}}
        onPress={() => {
          return (
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
              }}>
              <Text>비밀번호가 변경되었습니다.</Text>
            </View>
          );
        }}>
        <Text style={{color: '#32cc73', fontSize: 17}}>저장</Text>
      </TouchableOpacity>
    ),
  };

  ddd = () => ({
    headerRight: () => (
      <TouchableOpacity
        style={{marginRight: 24}}
        onPress={() => {
          return (
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
              }}>
              <Text>비밀번호가 변경되었습니다.</Text>
            </View>
          );
        }}>
        <Text style={{color: '#32cc73', fontSize: 17}}>저장</Text>
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <View style={{backgroundColor: 'white', flex: 1}}>
          <LabelInput placeholder={'********'} label={'임시 비밀번호'} />
          <LabelInput
            placeholder={'********'}
            label={'새 비밀번호 (8자리 이상)'}
          />
          <LabelInput placeholder={'********'} label={'비밀번호 확인'} />

          {/*  */}
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
