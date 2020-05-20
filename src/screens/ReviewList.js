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

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import BuyAndCompare from '../components/molecule/BuyAndCompareBottom';

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

  renderReplyView = (review) => {


    return (
                  <View style={{backgroundColor: 'white', paddingTop:24}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // height: 150,
                      //padding: 17,     
                    }}>
                    {/* 이미지 */}
                    <View style={{marginRight: 14}}>
                      <View
                        style={{
                          width: 34,
                          height: 34,
                          backgroundColor: 'lightgray',
                          borderRadius: 34,
                          overflow:'hidden'
                        }}>
                          <Image
                            //source={{uri: item.profile} || require('../images/icon/plusIcon.png') || ""}
                            source={require('../images/icon/plusIcon.png')}
                            resizeMode="cover"
                            style={{width: '100%', height: '100%'}}
                          />
                        </View>
                    </View>
                    <View style={{flexGrow: 1}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          // backgroundColor:'red'
                        }}>
                        <View>
                          <View style={{flexDirection: 'row', marginBottom:5}}>
                            <Text style={{marginRight: 8, fontSize: 13}}>
                              선우맘
                            </Text>
                            <Text style={{color: '#32cc73', fontSize: 11}}>
                              1세 알레르기
                            </Text>
                          </View>
                          {this.renderScore(4,20)}
                        </View>
                        <TouchableOpacity>
                          <SvgXml xml={SVG('HEART_GRAY')} />
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          marginTop: 15,
                          maxWidth: Dimensions.get('screen').width - 112,
                        }}>
                        <Text
                          style={{fontSize: 10, lineHeight: 18}}
                          numberOfLines={3}>
                          리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Reply')}
                        style={{
                          marginTop: 11,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <SvgXml xml={SVG('COMMENT')} />
                        <Text
                          style={{color: 'gray', fontSize: 11, marginLeft: 4}}>
                          댓글달기 | 답글보기(3)
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
    );
  }


  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView style={{backgroundColor: 'white'}}>
            {/*  */}
            <View
              style={{backgroundColor: 'white', padding: 15, paddingTop: 35}}>
              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <Text>우리 아이를 위한 솔직 리뷰</Text>
                <Text style={{color: '#31CC74'}}>520</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{flexDirection: 'row'}}>
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
                  {/* <View style={{flexDirection: 'row'}}>
                    <SvgXml
                      xml={SVG('STAR_CHECKED')}
                      width="28"
                      height="28"
                    />
                    <SvgXml
                      xml={SVG('STAR_CHECKED')}
                      width="28"
                      height="28"
                      style={{marginLeft: -9}}
                    />
                    <SvgXml
                      xml={SVG('STAR_CHECKED')}
                      width="28"
                      height="28"
                      style={{marginLeft: -9}}
                    />
                    <SvgXml
                      xml={SVG('STAR_CHECKED')}
                      width="28"
                      height="28"
                      style={{marginLeft: -9}}
                    />
                    <SvgXml
                      xml={SVG('STAR_CHECKED')}
                      width="28"
                      height="28"
                      style={{marginLeft: -9}}
                    />
                  </View> */}
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
              </ScrollView>
            </View>
            {/*  */}
            <View
              style={{
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  height: 0.5,
                  marginLeft: 15,
                  marginRight: 15,
                }}>
              
                </View>
                
            </View>
            {this.renderReplyView()}
            {this.renderReplyView()}
            {this.renderReplyView()}
            {this.renderReplyView()}

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
