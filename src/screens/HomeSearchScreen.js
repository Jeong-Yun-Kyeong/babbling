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
import HomeSearchTop from '../navigations/HomeSearchTopNavigation';

const HomeSearch = ({navigation}) => {
  return (
    <HomeSearchTop />
    // <Fragment>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView />
    //   <ScrollView style={{backgroundColor: 'lightgray'}}>
    //     <View>
    //       <Text>홈 검색</Text>
    //     </View>
    //   </ScrollView>
    // </Fragment>
  );
};

const styles = StyleSheet.create({});

export default HomeSearch;
