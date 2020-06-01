import React, {Fragment, PureComponent} from 'react';
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
  Modal,
} from 'react-native';

import * as ScreenMargin from '../values/ScreenMargin';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import BuyAndCompare from '../components/molecule/BuyAndCompareBottom';

import ReplyContainer from '../components/ReplyContainer'

const DATAS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      imageModalVisible: false,
    };
  }

  componentDidMount() {
    //console.log(this.props.route.params.brand, this.props.route.params.name);
  }

  getImageSource = ({img,imgType})=>{
    if(imgType=='www') {
      return {uri:img};
    } else if(imgType=='local') {
      return img;

    } else {
      return {uri: ''};
    }
  };

  renderScore = (score,size = 20) => {
    const maxScore = 5;
    const minScroe = 0;
    if(score>maxScore) score = maxScore;
    else if(score<minScroe) score = minScroe;

    let renderView = [];
    for(let i=0;i<maxScore;i++) {

      let overScore = (i<score);

      renderView.push(
      <SvgXml
        xml={SVG('STAR_'+((overScore)? 'CHECKED' : 'GRAY'))}
        style={{marginHorizontal:-1*size*0.17}}
        width={size}
        height={size}
      />);
    }
    return (
    <View
      style={{
        flexDirection: 'row',
        //marginTop: 5,
        //marginLeft:-1*size*0.15
        //backgroundColor: 'pink',
      }}>
      {renderView}
    </View>);
  }

  render() {

    let screenPadding = ScreenMargin.getMargin(this.props.route.name);

    let resizedPadding = screenPadding-16;

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView style={{backgroundColor: 'white'}}>
            {/*  */}
            <View
              style={{backgroundColor: 'white', paddingTop: 35,}}>
              <View style={{flexDirection: 'row', marginBottom: 10, marginLeft:resizedPadding}}>
                <Text>우리 아이를 위한 솔직 리뷰</Text>
                <Text style={{color: '#31CC74'}}>520</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row', marginHorizontal:screenPadding}}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        color: '#31CC74',
                        fontSize: 28,
                        fontWeight: 'bold',
                      }}>
                      4.72
                    </Text>
                    {this.renderScore(5,28)}
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ReviewWrite');
                    }}
                    style={{
                      borderWidth: 0.5,
                      borderColor: 'black',
                      height: 90,
                      width: 90,
                      borderRadius: 5,
                      margin: 3,
                    }}>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({imageModalVisible: true});
                    }}
                    style={{
                      borderWidth: 0.5,
                      borderColor: 'black',
                      height: 90,
                      width: 90,
                      borderRadius: 5,
                      margin: 3,
                    }}></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({imageModalVisible: true});
                    }}
                    style={{
                      borderWidth: 0.5,
                      borderColor: 'black',
                      height: 90,
                      width: 90,
                      borderRadius: 5,
                      margin: 3,
                    }}></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({imageModalVisible: true});
                    }}
                    style={{
                      borderWidth: 0.5,
                      borderColor: 'black',
                      height: 90,
                      width: 90,
                      borderRadius: 5,
                      margin: 3,
                    }}></TouchableOpacity>
                </View>

              </ScrollView>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 0.5,
                  marginTop:16,
                  marginHorizontal:resizedPadding
                }}>
              
              </View>
            </View>
            {/*  */}
            <ReplyContainer style={{paddingBottom:60, marginHorizontal:screenPadding}} navigation={this.props.navigation} dataKey = {1}/>

          </ScrollView>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

const DATA = [
  {

  }, 
  {

  },
  {

  },
  {

  }
];
