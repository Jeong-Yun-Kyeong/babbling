import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {createStackNavigator} from '@react-navigation/stack';
import {SvgXml} from 'react-native-svg';

import SVG from '../components/SvgComponent';
import EventTop from './EventTopNavigation';
import EventDetail from '../screens/EventDetail';
import EvaluationDetail from '../screens/EvaluationDetail';
import EvaluationWrite from '../screens/EvaluationWriteScreen';

const Stack = createStackNavigator();

const EventHeader = () => ({
  headerLeft: () => (
    <Text style={{fontSize: 35, fontWeight: 'bold', marginLeft: 24}}>
      EVENT
    </Text>
  ),
  headerTitle: () => null,
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24, height: 30}}>
      <TouchableOpacity
        style={{flex: 1, padding: 5}}
        onPress={() => {
          //   navigation.navigate('HomeSearch');
        }}>
        <SvgXml xml={SVG('SEARCH')} width="24" height="24" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, padding: 5}}
        onPress={() => {
          //   navigation.navigate('MyPage');
        }}>
        <SvgXml xml={SVG('MYPAGE')} width="24" height="24" />
      </TouchableOpacity>
    </View>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});

const EventDetailHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => (
    <Text style={{fontSize: 16, fontWeight: '500'}}>이벤트</Text>
  ),
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24, height: 30}}>
      <TouchableOpacity
        style={{flex: 1, padding: 5}}
        onPress={() => {
          //   navigation.navigate('HomeSearch');
        }}>
        <SvgXml xml={SVG('HEART')} width="24" height="24" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, padding: 5}}
        onPress={() => {
          //   navigation.navigate('MyPage');
        }}>
        <SvgXml xml={SVG('SHARE')} width="24" height="24" />
      </TouchableOpacity>
    </View>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});

const EvaluationDetailHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => (
    <Text style={{fontSize: 16, fontWeight: '500'}}>평가단</Text>
  ),
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24, height: 30}}>
      <TouchableOpacity
        style={{flex: 1, padding: 5}}
        onPress={() => {
          //   navigation.navigate('HomeSearch');
        }}>
        <SvgXml xml={SVG('HEART')} width="24" height="24" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, padding: 5}}
        onPress={() => {
          //   navigation.navigate('MyPage');
        }}>
        <SvgXml xml={SVG('SHARE')} width="24" height="24" />
      </TouchableOpacity>
    </View>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});

const EvaluationWriteHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => (
    <Text style={{fontSize: 16, fontWeight: '500'}}>평가단 리뷰 작성</Text>
  ),
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24, height: 30}}>
      <TouchableOpacity
        style={{flex: 1, padding: 5, justifyContent: 'center'}}
        onPress={() => {
          //   navigation.navigate('MyPage');
        }}>
        <Text style={{color: 'gray', fontSize: 16}}>등록</Text>
      </TouchableOpacity>
    </View>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});

const EventStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event"
        component={EventTop}
        options={({navigation}) => EventHeader(navigation)}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={({navigation}) => EventDetailHeader(navigation)}
      />
      <Stack.Screen
        name="EvaluationDetail"
        component={EvaluationDetail}
        options={({navigation}) => EvaluationDetailHeader(navigation)}
      />
      <Stack.Screen
        name="EvaluationWrite"
        component={EvaluationWrite}
        options={({navigation}) => EvaluationWriteHeader(navigation)}
      />
    </Stack.Navigator>
  );
};

export default EventStack;
