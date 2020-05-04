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
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

const News = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{padding: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              paddingBottom: 15,
              paddingLeft: 16,
              paddingRight: 16,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={this._goEditor}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 56,
                  backgroundColor: 'coral',
                  marginRight: 16,
                }}></TouchableOpacity>
              <View>
                <Text
                  style={{
                    marginRight: 7,
                    fontSize: 15,
                    marginBottom: 8,
                  }}>
                  베블링
                </Text>
                <Text style={{color: 'gray', fontSize: 13}}>
                  육아꿀팁이 매주 화,목요일날 올라와요:)
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{paddingLeft: 7}}>
                <SvgXml xml={SVG('UNFOLLOW')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default News;
