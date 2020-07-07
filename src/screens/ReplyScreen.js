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
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

import * as ScreenMargin from '../values/ScreenMargin';

import ReplyContainer from '../components/ReplyContainer'

const Reply = ({navigation,route}) => {


  const screenPadding = ScreenMargin.getMargin(route.name);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}> */}
      <SafeAreaView />
      {/*  */}
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: '#f3f3f3'}}>
          <View style={{backgroundColor: 'white'}}>
            <ReplyContainer style={{paddingBottom:22, marginHorizontal:screenPadding}} navigation={navigation} dataNum = {route.params.review.num} dataKey={1}/>
          </View>
          {/*  */}
          <View style={{backgroundColor: 'white', marginTop: 4}}>
            <ReplyContainer style={{paddingBottom:22, marginHorizontal:screenPadding}} navigation={navigation} dataKey={1} isReply beginBbsOrd={route.params.review.bbsOrd}/>
            

          </View>
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
          backgroundColor: 'rgba(200,200,200,0.5)',
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
      {/* </SafeAreaView> */}
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default Reply;
