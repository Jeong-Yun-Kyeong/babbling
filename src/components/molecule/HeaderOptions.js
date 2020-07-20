import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
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
          //
          // fontWeight: '900',
          marginLeft: 24,
          fontFamily: 'Poppins-Bold',
        }}>
        {json.left}
      </Text>
    ),
  //android 가운데 정렬
  headerTitleAlign: 'center',
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
      <Text style={{fontSize: 17, alignItems: 'center'}}>{json.title}</Text>
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
    //ios,android 구분하여 높이적용
    height: getStatusBarHeight() + 56,
    // Platform.OS === 'ios' ? getStatusBarHeight() + 56 : getStatusBarHeight() + 56,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTransparent: trnasparent,
});

//MYPAGE START//
const MyWroteHeader = (navigation) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{marginLeft: 24}}
      onPress={() => {
        navigation.goBack();
      }}>
      <SvgXml xml={SVG('BACKIOS')} />
    </TouchableOpacity>
  ),
  //android 가운데 정렬
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

//MYPAGE END//

//search start//
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
    ),
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
//search end//
//footer start//
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
//ACCESSTERMSHeader추가
const ACCESSTERMSHeader = (navigation) => ({
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
  headerTitle: () => <Text style={{fontSize: 17}}>이용약관</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
//CompanyProfileHeader추가
const CompanyProfileHeader = (navigation) => ({
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
  headerTitle: () => <Text style={{fontSize: 17}}>회사소개</Text>,
  headerStyle: {
    height: getStatusBarHeight() + 62,
    // shadowRadius: 0,
    shadowOffset: {
      height: 2,
    },
  },
});
//footer end//
export {
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
  ACCESSTERMSHeader,
  CompanyProfileHeader,
};
