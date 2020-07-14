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
//
//headerOptions에 추가한 screen
import HomeSearch from '../screens/HomeSearchScreen';
import Compare from '../screens/CompareScreen';
import ReviewWrite from '../screens/ReviewWriteScreen';
import Reply from '../screens/ReplyScreen';
import MypageTop from './MypageTopNavigation';
import MyWrote from '../screens/MyWroteScreen';
import MyReple from '../screens/MyRepleScreen';
import ScrapTop from './ScrapTopNavigation';
import EventJjim from '../screens/EventJjimScreen';
import EventWinning from '../screens/EventWinningScreen';
import EventApply from '../screens/EventApplyScreen';
import EvalutaionReview from '../screens/EvaulationReviewScreen';
import Alarm from '../screens/AlarmScreen';
import Settings from '../screens/SettingScreen';
import FAQ from '../screens/FAQScreen';
import QnA from '../screens/QnAScreen';
import Search from '../screens/SearchScreen';
// import ACCESSTERMS from '../screens/AccesstermsScreen';
// import CompanyProfile from '../screens/CompanyProfileScreen';
// import AccesstermsTop from './AccesstermsTopNavigation';
import {
  HeaderOptions,
  MyWroteHeader,
  ScrapHeader,
  MyRepleHeader,
  EventJjimHeader,
  EventWinningHeader,
  EventApplyHeader,
  EvalutaionReviewHeader,
  AlarmHeader,
  SettingsHeader,
  FAQHeader,
  QnAHeader,
  SearchHeader,
  BabyPlus_myHeader,
  BabyAlergy_myHeader,
  // ACCESSTERMSHeader,
  // CompanyProfileHeader,
} from '../components/molecule/HeaderOptions';
//
import BabyPlus from '../screens/BabyPlusScreen';
import BabyAlergy from '../screens/BabyAlergyScreen';
//header에 추가한 screen end
const Stack = createStackNavigator();

// const EventHeader = () => ({
//   headerLeft: () => (
//     <Text style={{fontSize: 35, fontWeight: 'bold', marginLeft: 24}}>TALK</Text>
//   ),
//   headerTitle: () => null,
//   headerRight: () => (
//     <View style={{flexDirection: 'row', marginRight: 24, height: 30}}>
//       <TouchableOpacity
//         style={{flex: 1, padding: 5}}
//         onPress={() => {
//           //   navigation.navigate('HomeSearch');
//         }}>
//         <SvgXml xml={SVG('SEARCH')} width="24" height="24" />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{flex: 1, padding: 5}}
//         onPress={() => {
//           //   navigation.navigate('MyPage');
//         }}>
//         <SvgXml xml={SVG('MYPAGE')} width="24" height="24" />
//       </TouchableOpacity>
//     </View>
//   ),
//   headerStyle: {
//     height: getStatusBarHeight() + 62,
//     shadowRadius: 0,
//     shadowOffset: {
//       height: 0,
//     },
//   },
// });

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
    <TouchableOpacity
      style={{marginRight: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
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
      {/* stack추가 */}
      <Stack.Screen
        name="TalkMain"
        component={TalkTop}
        options={({navigation, route}) =>
          HeaderOptions(navigation, {
            left: 'TALK',
            title: null,
            right: [
              {svg: 'SEARCH', nav: 'HomeSearch'},
              {svg: 'MYPAGE', nav: 'MyPage'},
            ],
          })
        }
      />
      <Stack.Screen
        name="HomeSearch"
        component={HomeSearch}
        options={({navigation, route}) =>
          HeaderOptions(navigation, {
            left: 'BACKIOS',
            title: 'SearchBar',
            right: [],
          })
        }
      />
      <Stack.Screen
        name="MyPage"
        component={MypageTop}
        options={({navigation, route}) =>
          HeaderOptions(
            navigation,
            {
              left: 'BACKIOS_W',
              title: null,
              right: [
                {svg: 'ALARM', nav: 'Alarm'},
                {svg: 'SETTING', nav: 'Settings'},
              ],
            },
            true,
          )
        }
      />
      <Stack.Screen
        name="TalkTop"
        component={TalkTop}
        options={({navigation}) => EventHeader(navigation)}
      />
      {/* mypage */}
      <Stack.Screen
        name="MyWrote"
        component={MyWrote}
        options={({navigation}) => MyWroteHeader(navigation)}
      />
      <Stack.Screen
        name="Scrap"
        component={ScrapTop}
        options={({navigation}) => ScrapHeader(navigation)}
      />
      <Stack.Screen
        name="MyReple"
        component={MyReple}
        options={({navigation}) => MyRepleHeader(navigation)}
      />
      <Stack.Screen
        name="EventJjim"
        component={EventJjim}
        options={({navigation}) => EventJjimHeader(navigation)}
      />
      <Stack.Screen
        name="EventWinning"
        component={EventWinning}
        options={({navigation}) => EventWinningHeader(navigation)}
      />
      <Stack.Screen
        name="EventApply"
        component={EventApply}
        options={({navigation}) => EventApplyHeader(navigation)}
      />
      <Stack.Screen
        name="EvaluationReview"
        component={EvalutaionReview}
        options={({navigation}) => EvalutaionReviewHeader(navigation)}
      />
      <Stack.Screen
        name="Alarm"
        component={Alarm}
        options={({navigation}) => AlarmHeader(navigation)}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => SettingsHeader(navigation)}
      />
      {/* end mypage */}
      {/* Footer*/}
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={({navigation}) => FAQHeader(navigation)}
      />
      <Stack.Screen
        name="QnA"
        component={QnA}
        options={({navigation}) => QnAHeader(navigation)}
      />
      {/* <Stack.Screen
        name="ACCESSTERMSTOP"
        component={ACCESSTERMS}
        options={({navigation}) => ACCESSTERMSHeader(navigation)}
      />
      <Stack.Screen
        name="ACCESSTERMS"
        component={AccesstermsTop}
        options={({navigation}) => ACCESSTERMSHeader(navigation)}
      />
      <Stack.Screen
        name="CompanyProfile"
        component={CompanyProfile}
        options={({navigation}) => CompanyProfileHeader(navigation)}
      /> */}
      {/* Footer end*/}

      {/* Search */}
      <Stack.Screen
        name="Search"
        component={Search}
        options={({navigation}) => SearchHeader(navigation)}
      />
      <Stack.Screen
        name="BabyPlus_my"
        component={BabyPlus}
        options={({navigation}) => BabyPlus_myHeader(navigation)}
      />
      <Stack.Screen
        name="BabyAlergy_my"
        component={BabyAlergy}
        options={({navigation}) => BabyAlergy_myHeader(navigation)}
      />
      {/* stack추가 end */}
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
