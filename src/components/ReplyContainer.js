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

export default class ReplyContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

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
        <View style={{backgroundColor: 'white', paddingTop:24,paddingBottom:6}}>
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
                //source={require('../images/icon/plusIcon.png')}
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
                <View style={{flexDirection: 'row', paddingBottom:4}}>
                    <Text style={{marginRight: 8, fontSize: 13}}>
                        선우맘
                    </Text>
                    <Text style={{color: '#32cc73', fontSize: 11}}>
                        1세 알레르기
                    </Text>
                </View>
                {this.renderScore(4,20)}
            </View>
            <View style={{height:'100%',flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity>
                    <SvgXml xml={SVG('HEART_GRAY')} />
                </TouchableOpacity>
            </View>

            </View>
            <View
            style={{
                marginTop:8,
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
                marginTop: 6,
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
      <View style={this.props.style}>
        {
            DATA.map((item) => {
                return this.renderReplyView(item)
            })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const DATA = [
    {
        key: 1,
    }, 
    {
        key: 1,
    },
    {
        key: 1,
    },
    {
        key: 1,
    }
];