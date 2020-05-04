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
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

const MyTalk = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: '#f3f3f3', flex: 1}}>
        <View style={{padding: 16, marginTop: 5}}>
          {/*  */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginBottom: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  backgroundColor: 'gray',
                  marginRight: 12,
                }}></View>
              <View
                style={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{color: 'gray', fontSize: 13, lineHeight: 22}}>
                    존슨즈베이비
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      lineHeight: 22,
                    }}>
                    수딩내추럴 인텐스 모이스처 크림
                  </Text>
                </View>
                <View>
                  <Text>Jjim</Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginBottom: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
              }}>
              <View
                style={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{color: 'gray', fontSize: 13, lineHeight: 22}}>
                    존슨즈베이비
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      lineHeight: 22,
                    }}>
                    수딩내추럴 인텐스 모이스처 크림
                  </Text>
                </View>
                <View>
                  <Text>Jjim</Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default MyTalk;
