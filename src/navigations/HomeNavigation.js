import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import Detail from '../screens/DetailTestScreen';
import Review from '../screens/ReviewListScreen';
import Jjim from '../screens/JjimScreen';
import HomeSearch from '../screens/HomeSearchScreen';
import Ingredients from '../screens/IngredientsTestScreen';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
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
import TalkDetail from '../screens/TalkDetailScreen';
import PostDetail from '../screens/PostDetailScreen';
import Search from '../screens/SearchScreen';

import BabyPlus from '../screens/BabyPlusScreen';
import BabyAlergy from '../screens/BabyAlergyScreen';

import {DARKMINT} from '../Constant';

import {HeaderOptions} from '../components/molecule/HeaderOptions';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Home}
        options={({navigation, route}) =>
          HeaderOptions(navigation, {
            left: 'Babbling',
            title: null,
            right: [
              {svg: 'SEARCH', nav: 'HomeSearch'},
              {svg: 'HEART', nav: 'Jjim'},
              {svg: 'MYPAGE', nav: 'MyPage'},
            ],
          })
        }
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({navigation, route}) =>
          HeaderOptions(navigation, {
            left: 'BACKIOS',
            title: '상세페이지',
            headerTitleStyle: {
              textAlign: 'center',
              flexGrow: 1,
            },
            right: [
              {svg: 'HELP', nav: ''},
              {svg: 'SHARE', nav: ''},
            ],
          })
        }
      />
      <Stack.Screen
        name="Jjim"
        component={Jjim}
        options={({navigation, route}) =>
          HeaderOptions(navigation, {left: 'BACK', title: '찜 목록', right: []})
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
        name="Ingredients"
        component={Ingredients}
        options={({navigation, route}) => IngredientsHeader(navigation)}
      />
      <Stack.Screen
        name="Compare"
        component={Compare}
        options={({navigation}) => CompareHeader(navigation)}
      />
      <Stack.Screen
        name="ReviewWrite"
        component={ReviewWrite}
        options={({navigation}) => ReviewWriteHeader(navigation)}
      />
      <Stack.Screen
        name="Reply"
        component={Reply}
        options={({navigation}) => ReplyHeader(navigation)}
      />

      <Stack.Screen
        name="Review"
        component={Review}
        options={({navigation, route}) => ReviewHeader(navigation)}
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
      {/* end mypage */}
      {/* Talk */}
      <Stack.Screen
        name="TalkDetail"
        component={TalkDetail}
        options={({navigation}) => TalkDetailHeader(navigation)}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={({navigation}) => PostDetailHeader(navigation)}
      />
      {/*  */}
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
    </Stack.Navigator>
  );
};

export default HomeStack;

const ReviewHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => (
    <Text style={{fontSize: 17, textAlign: 'center'}}>제품 리뷰</Text>
  ),
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24}}>
      <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('WRITEING')} />
      </View>
    </View>
  ),
  headerTitleAlign: 'center',
  // headerStyle: {
  //   height: getStatusBarHeight() + 62,
  // },
  headerForceInset: {top: 'never', bottom: 'never'},
});

const JjimHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text>찜 목록</Text>,
  headerRight: () => null,
  // headerStyle: {
  //   height: getStatusBarHeight() + 62,
  // },
});

const IngredientsHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>전체 성분</Text>,
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 24}}>
      <View style={{flex: 1, padding: 5}}>
        <SvgXml xml={SVG('HELP')} />
      </View>
    </View>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    //header 그림자 제거
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});
const CompareHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>비교</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
  },
});
const ReviewWriteHeader = (navigation) => ({
  headerShown: false,
  // headerLeft: () => (
  //   <TouchableOpacity
  //     style={{marginLeft: 24}}
  //     onPress={() => {
  //       navigation.goBack();
  //     }}>
  //     <SvgXml xml={SVG('BACKIOS')} />
  //   </TouchableOpacity>
  // ),
  // headerRight: () => (
  //   <TouchableOpacity
  //     onPress={() => {}}
  //     style={{flexDirection: 'row', marginRight: 24}}>
  //     <View style={{flex: 1, padding: 5}}>
  //       <Text style={{color: 'gray', fontSize: 16}}>등록</Text>
  //     </View>
  //   </TouchableOpacity>
  // ),//android 가운데 정렬
  // headerTitleAlign: 'center',
  // headerTitle: () => <Text style={{fontSize: 17}}>리뷰 작성</Text>,
  // headerStyle: {
  //   height: getStatusBarHeight() + 62,
  //   // shadowRadius: 0,
  //   shadowOffset: {
  //     height: 2,
  //   },
  // },
});
const ReplyHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>답글</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const MyWroteHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>내가 쓴글</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const ScrapHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>스크랩</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});
const MyRepleHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>댓글/답글</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const EventJjimHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>찜한 이벤트</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const EventWinningHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>당첨된 이벤트</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const EventApplyHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>신청 이벤트</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const EvalutaionReviewHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>평가단 리뷰 작성</Text>,
  headerRight: () => (
    <TouchableOpacity
      style={{marginRight: 24}}
      onPress={() => {
        // navigation.goBack();
      }}>
      <Text style={{color: 'gray', fontSize: 17}}>등록</Text>
    </TouchableOpacity>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const AlarmHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>알림</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const SettingsHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>설정</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const FAQHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>FAQ</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
const QnAHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => <Text style={{fontSize: 17}}>문의하기</Text>,
  headerRight: () => (
    <TouchableOpacity
      style={{marginRight: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <Text style={{fontSize: 17, color: 'gray'}}>등록</Text>
    </TouchableOpacity>
  ),
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
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
  // ),android 가운데 정렬
  // headerTitleAlign: 'center',
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
const PostDetailHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
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
const SearchHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ), //android 가운데 정렬
  headerTitleAlign: 'center',
  headerTitle: () => (
    <View
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
      <TextInput
        placeholder="수딩내추럴 인텐스 모이스처 크림"
        style={{flex: 9}}
        onFocus={() => {
          console.log('test');
        }}
        autoFocus={true}
      />
      <SvgXml xml={SVG('SEARCH')} width="24" height="24" />
    </View>
  ),
  headerRight: () => null,
  headerStyle: {
    height: getStatusBarHeight() + 52,
  },
});
const BabyPlus_myHeader = (navigation) => {
  //const {isRegister} = navigation.getParam('params',{isRegister:false,});
  //const {isRegister} = navigation.state.params;
  //const {isRegister} = {isRegister:true};

  //const {isRegister} = route.params || {isRegister:false};

  return {
    animationEnabled: false,
    headerLeft: () => (
      <TouchableOpacity
        style={{marginLeft: 24}}
        onPress={() => {
          navigation.goBack();
        }}>
        <SvgXml xml={SVG('BACKIOS')} />
      </TouchableOpacity>
    ), //android 가운데 정렬
    headerTitleAlign: 'center',
    headerTitleAlign: 'center',
    headerTitle: () => <Text style={{fontSize: 17}}>우리 아이 추가하기</Text>,
    headerRight: () => (
      <TouchableOpacity
        style={{marginRight: 24}}
        onPress={() => {
          navigation.navigate('BabyAlergy_my');
        }}>
        <Text style={{fontSize: 15, color: 'gray'}}>다음</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
};
const BabyAlergy_myHeader = (navigation) => {
  //const {isRegister} = route.params || {isRegister:false};

  return {
    animationEnabled: false,
    headerLeft: () => (
      <TouchableOpacity
        style={{marginLeft: 24}}
        onPress={() => {
          navigation.goBack();
        }}>
        <SvgXml xml={SVG('BACKIOS')} />
      </TouchableOpacity>
    ),
    headerTitleAlign: 'center',
    headerTitle: () => <Text style={{fontSize: 17}}>우리 아이 추가하기</Text>,
    headerRight: () => (
      <TouchableOpacity
        style={{marginRight: 24}}
        onPress={() => {
          navigation.pop();
        }}>
        <Text style={{fontSize: 15, color: '#32cc73'}}>저장</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
    },
  };
};
