import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import Home from '../screens/HomeScreen';
import PickStack from './PickStackNavigation';
import HomeStack from './HomeNavigation';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import EventStack from './EventStackNavigation';
import TalkStack from './TalkStackNavigation';

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';
  // console.log(route);
  // console.log(routeName);
  if (
    routeName === 'Detail' ||
    routeName === 'Jjim' ||
    routeName === 'HomeSearch' ||
    routeName === 'MyPage' ||
    routeName === 'Ingredients' ||
    routeName === 'Compare' ||
    routeName === 'ReviewWrite' ||
    routeName === 'Reply' ||
    routeName === 'EventDetail' ||
    routeName === 'EvaluationDetail' ||
    routeName === 'EvaluationWrite' ||
    routeName === 'TalkWrite' ||
    routeName === 'TalkDetail' ||
    routeName === 'PostList' ||
    routeName === 'PostDetail' ||
    routeName === 'PostEditor' ||
    routeName === 'MyWrote' ||
    routeName === 'Scrap' ||
    routeName === 'MyReple' ||
    routeName === 'EventJjim' ||
    routeName === 'EventWinning' ||
    routeName === 'EventApply' ||
    routeName === 'EvaluationReview' ||
    routeName === 'Alarm' ||
    routeName === 'Settings' ||
    routeName === 'FAQ' ||
    routeName === 'QnA' ||
    routeName === 'BabyPlus_my' ||
    routeName === 'BabyAlergy_my' ||
    routeName === 'Search'
  ) {
    return false;
  }
  return true;
};

const Header = ({navigation, route}) => {
  let marginBottom = 5;
  if (Dimensions.get('screen').width >= 824) {
    marginBottom = 0;
  }
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#32cc73',
        inactiveTintColor: '#666666',
        style: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.15,
          height: getBottomSpace() + 60,
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarLabel: ({focused, color}) => {
            return focused ? (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('HOME_SELECT')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  HOME
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('HOME')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  HOME
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="PICK"
        component={PickStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarLabel: ({focused, color}) => {
            return focused ? (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('PICK_SELECT')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  PICK
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('PICK')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  PICK
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="TALK"
        component={TalkStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarLabel: ({focused, color}) => {
            return focused ? (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('TALK_SELECT')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  TALK
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('TALK')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  TALK
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="EVENT"
        component={EventStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarLabel: ({focused, color}) => {
            return focused ? (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('EVENT_SELECT')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  EVENT
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <SvgXml xml={SVG('EVENT')} />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: color,
                    marginTop: 3,
                    marginBottom: marginBottom,
                  }}>
                  EVENT
                </Text>
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Header;
