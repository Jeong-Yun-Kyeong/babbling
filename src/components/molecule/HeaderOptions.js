import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {getStatusBarHeight} from 'react-native-status-bar-height';
//
import {HEADER_WHITESPACE} from '../../Constant';
import SVG from '../SvgComponent';

const HeaderOptions = (navigation, json, trnasparent) => ({
  headerLeft: () =>
    json.left.indexOf('BACK') == 0 ? (
      <TouchableOpacity
        style={{marginLeft: HEADER_WHITESPACE}}
        onPress={() => {
          navigation.goBack();
        }}>
        <SvgXml xml={SVG(json.left)} />
      </TouchableOpacity>
    ) : (
      <Text
        style={{
          fontSize: 32,
          // fontWeight: 'bold',
          marginLeft: 24,
          fontFamily: 'Poppins-Bold',
        }}>
        {json.left}
      </Text>
    ),
  headerTitle: () =>
    json.title == 'SearchBar' ? (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Search');
        }}
        activeOpacity={1}
        style={{
          borderWidth: 1,
          borderColor: '#32cc73',
          borderRadius: 50,
          padding: 5,
          paddingLeft: 15,
          paddingRight: 15,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: Dimensions.get('screen').width - (24 + 24 + 24 + 24),
          marginLeft: 24 + 24,
          flexDirection: 'row',
        }}>
        <Text style={{color: 'gray', flex: 9}}>
          수딩내추럴 인텐스 모이스처 크림
        </Text>
        <SvgXml xml={SVG('SEARCH')} width="24" height="24" />
      </TouchableOpacity>
    ) : (
      <Text style={{fontSize: 17}}>{json.title}</Text>
    ),
  headerRight: () =>
    json.right.length > 0 ? (
      <View style={{flexDirection: 'row', marginRight: HEADER_WHITESPACE}}>
        {json.right.map((data, index) => {
          return (
            <TouchableOpacity
              style={{flex: 1, padding: 5}}
              key={index}
              onPress={() => navigation.navigate(data.nav)}>
              <SvgXml xml={SVG(data.svg)} />
            </TouchableOpacity>
          );
        })}
      </View>
    ) : null,
  headerStyle: {
    height: getStatusBarHeight() + 56,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTransparent: trnasparent,
});

export {HeaderOptions};
