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

const EvalutaionReview = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f3f3f3',
            // minHeight: Dimensions.get('screen').height-,
          }}>
          {/* 하나 */}
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default EvalutaionReview;
