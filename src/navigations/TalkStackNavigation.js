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
import TalkTop from './TalkTopNavigation';
import TalkWrite from '../screens/TalkWriteScreen';
import TalkList from '../screens/TalkListScreen';
import TalkDetail from '../screens/TalkDetailScreen';
import PostList from '../screens/PostListScreen';
import PostDetail from '../screens/PostDetailScreen';
import PostEditor from '../screens/PostEditorScreen';

const Stack = createStackNavigator();

const EventHeader = () => ({
  headerLeft: () => (
    <Text style={{fontSize: 35, fontWeight: 'bold', marginLeft: 24}}>TALK</Text>
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
  headerTitle: () => <Text style={{fontSize: 16}}>글쓰기</Text>,
  headerRight: () => (
    <TouchableOpacity style={{marginRight: 24}} onPress={() => {}}>
      <Text style={{color: '#32cc73', fontSize: 15}}>등록</Text>
    </TouchableOpacity>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});

const TalkListHeader = (navigation) => ({
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
    <Text style={{fontSize: 16}}>더보기 종류에 따른 지정값들어가야됨</Text>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    shadowRadius: 0,
    shadowOffset: {
      height: 1,
    },
  },
});

const TalkDetailHeader = (navigation) => ({
  // headerLeft: () => (
  //   <TouchableOpacity
  //     style={{marginLeft: 24}}
  //     onPress={() => {
  //       navigation.goBack();
  //     }}>
  //     <SvgXml xml={SVG('BACKIOS')} />
  //   </TouchableOpacity>
  // ),
  // headerTitle: () => (
  //   <Text style={{fontSize: 16}}>더보기 종류에 따른 지정값들어가야됨</Text>
  // ),
  headerStyle: {
    height: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});

const PostListHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => <Text style={{fontSize: 16}}>포스팅</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    shadowRadius: 0,
    shadowOffset: {
      height: 1,
    },
  },
});

const PostDetailHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => <Text style={{fontSize: 16}}>제목이 들어와야됨</Text>,
  headerStyle: {
    backgroundColor: 'transparent',
    height: getStatusBarHeight() + 62,
    shadowRadius: 0,
    shadowOffset: {
      height: 1,
    },
  },
});

const PostEditorHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  headerTitle: () => <Text style={{fontSize: 16}}>에디터</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    shadowRadius: 0,
    shadowOffset: {
      height: 1,
    },
  },
});

const TalkStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TalkTop"
        component={TalkTop}
        options={({navigation}) => EventHeader(navigation)}
      />
      <Stack.Screen
        name="TalkWrite"
        component={TalkWrite}
        options={({navigation}) => EventDetailHeader(navigation)}
      />
      <Stack.Screen
        name="TalkList"
        component={TalkList}
        options={({navigation}) => TalkListHeader(navigation)}
      />
      <Stack.Screen
        name="TalkDetail"
        component={TalkDetail}
        options={({navigation}) => TalkDetailHeader(navigation)}
      />
      {/*  */}
      <Stack.Screen
        name="PostList"
        component={PostList}
        options={({navigation}) => PostListHeader(navigation)}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={({navigation}) => PostDetailHeader(navigation)}
      />
      <Stack.Screen
        name="PostEditor"
        component={PostEditor}
        options={({navigation}) => PostEditorHeader(navigation)}
      />
    </Stack.Navigator>
  );
};

export default TalkStack;
