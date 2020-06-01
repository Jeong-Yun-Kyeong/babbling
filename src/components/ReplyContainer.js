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
  TouchableNativeFeedbackBase,
} from 'react-native';

import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';

export default class ReplyContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showReply: [],
      replyItem: [],

      beginBbsOrd: this.props.beginBbsOrd || undefined,
      limitCount: this.props.limitCount || 10
    };
  }


  componentDidMount() {
    //console.log(this.props.route.params.brand, this.props.route.params.name);
    this.updateReplyItem();
    
  }

  updateReplyItem = () => {
    this.setState(prev=>({replyItem:this.getFetchItem(this.props)}));
  }

  getFetchItem({dataKey, dataNum}) {
    let repliedWriter = [];

    const dataOrderBy = DATA.filter(element=>element.key==dataKey).sort((a,b) => {
      return a.bbsOrd - b.bbsOrd;
    });

    const dataDepth = ((this.props.isReply===true) ? 1 : this.props.isReply) || 0;

    const beginBbsOrd = this.state.beginBbsOrd || 
    dataOrderBy.find(element=>element.depth==dataDepth).bbsOrd;

    let lastBbsOrd = beginBbsOrd;
    dataOrderBy.forEach(element =>{

    });
    for(let i in dataOrderBy) {
      if(dataOrderBy[i].bbsOrd<=beginBbsOrd) continue;

      if(dataOrderBy[i].depth == dataDepth) lastBbsOrd = dataOrderBy[i].bbsOrd;
      else if(dataOrderBy[i].depth < dataDepth) break;
    }
    //const lastBbsOrd = dataOrderBy.find(element => element.depth<dataDepth && element.bbsOrd>beginBbsOrd).bbsOrd;

    if(!this.props.dataNum) {
      console.log('beginBbsOrd', beginBbsOrd);
      console.log('lastBbsOrd', lastBbsOrd);
      console.log('dataDepth', dataDepth);
    }

    const dataWhere = dataOrderBy.filter((item)=>{

      item.showReply = false;
      if(this.props.dataNum) {
        if(item.num == dataNum) {
          return true;
        }
      } else {

        if(item.depth == dataDepth && item.bbsOrd>=beginBbsOrd && item.bbsOrd<=lastBbsOrd) return true;

      }
    });


    let showReply = [];
    for(let i=0;i<dataWhere.length;i++) showReply[i] = false;
    this.setState(prev=>({showReply}));

    return dataWhere;
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
        marginTop:4
        //marginTop: 5,
        //marginLeft:-1*size*0.15
        //backgroundColor: 'pink',
      }}>
      {renderView}
    </View>);
  }

  setReplyAction = (review,index) => {
    if(review.depth == 0) {
      if(this.props.dataNum) {}
      else this.props.navigation.navigate('Reply', {review:review});
    } else {
      let showReply = [...this.state.showReply];
      showReply[index] = !showReply[index];
      this.setState({showReply});
      // console.log(showReply)
    }
  }

  renderReplyView = (review,index) => {

    const contentsEllipsis = (!this.props.dataNum && !this.props.isReply) ? {numberOfLines:3} : {};

    let replyProps = {};
    if(this.props.dataKey) replyProps.dataKey = this.props.dataKey;
    if(this.props.isReply) {replyProps.isReply = (this.props.isReply===true) ? 2 : this.props.isReply + 1;}
    if(this.props.navigation) replyProps.navigation = this.props.navigation;

    return (
        <View style={{backgroundColor: 'white', paddingTop:24}}>
        <View
        style={{
            flexDirection: 'row',
            // height: 150,
            //padding: 17,     
        }}>{
          (!this.props.wideView) ? 
          <>
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
          </View></>:<></>
        }
          <View style={{flexGrow: 1, flexDirection:'column'}}>
              <View
              style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
              }}>
                <View style={{flexDirection:'row',}}>
                {
                  (this.props.wideView) ? 
                  <>
                  {/* 이미지 */}
                    <View
                      style={{
                          width: 34,
                          height: 34,
                          backgroundColor: 'lightgray',
                          borderRadius: 34,
                          marginRight:13,
                          overflow:'hidden'
                      }}>
                          <Image
                          //source={{uri: item.profile} || require('../images/icon/plusIcon.png') || ""}
                          //source={require('../images/icon/plusIcon.png')}
                          resizeMode="cover"
                          style={{width: '100%', height: '100%'}}
                          />
                    </View></>:<></>
                }
                  <View>
                      <View style={{flexDirection: 'row',alignItems:'center', flex:1}}>
                          <Text style={{marginRight: 8, fontSize: 13}}>
                            {review.writer || ""}
                          </Text>
                          <Text style={{color: '#32cc73', fontSize: 11, textAlignVertical:'bottom'}}>
                              1세 알레르기
                          </Text>
                      </View>
                      {(review.score)?this.renderScore(review.score,20):<></>}
                  </View>                  
                </View>

              { (!this.props.isReply) ? 
                <View style={{height:'100%',flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity>
                        <SvgXml xml={SVG('HEART_GRAY')} width={24} height={24}/>
                    </TouchableOpacity>
                </View> : <></>}

              </View>
              <View
              style={{
                  marginTop:6,
                  flexDirection:'row'

              }}>
                  <Text
                      style={{fontSize: 10, lineHeight: 18 ,flex:1, flexWrap:'wrap'}}
                      {...contentsEllipsis}>
                      {review.contents || ""}
                  </Text>
                {(this.props.isReply) ?    
                  <View style={{height:'100%',flexDirection:'row', alignItems:'flex-start', marginLeft:12}}>
                    <TouchableOpacity>
                        <SvgXml xml={SVG('HEART_GRAY')} width={20} height={20}/>
                    </TouchableOpacity>
                  </View> : <></>}
              </View>
              <View             
                style={{
                  marginTop: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom:6
              }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                onPress={() => this.setReplyAction(review,index)}>
                    {(review.depth==0)?<SvgXml xml={SVG('COMMENT')} style={{marginRight:4}} /> : <></>}
                    <Text
                        style={{color: 'gray', fontSize: 11}}>
                        댓글달기
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress = {()=>this.setReplyAction(review,index)}
                >
                  <Text style={{color: 'gray', fontSize: 11}}>
                    {(this.props.dataNum)?"":" | 답글보기(3)"}
                  </Text>
                </TouchableOpacity>              
              </View>
              {(this.state.showReply[index]) ? <ReplyContainer {...replyProps} beginBbsOrd={review.bbsOrd} /> : <></>}
              {/* {Object.entries(this.state.showReply).map(([key, value])=>{
                //console.log(key,value);
                if(review.bbsOrd == key && value) return <ReplyContainer {...replyProps} />
              })} */}

              
          </View>
        </View>
    </View>
    );
  }

  render() {
    return (
      <View style={this.props.style}>
        {
            this.state.replyItem.map((item,index) => {
              //this.state.showReply[item.bbsOrd]=false;
              return this.renderReplyView(item, index)
            })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const DATA = [
  {
    num: 1,
    key: 1,
    bbsOrd:2,
    depth: 0,
    score: 4,
    writer: "선우맘1",
    contents: "리뷰1리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰"
  }, 
  {
    num: 2,
    key: 1,
    bbsOrd:1,
    depth: 0,
    score: 3,
    writer: "선우맘2",
    contents: "리뷰1_2"
  },
  {
    num: 9,
    key: 1,
    bbsOrd:6,
    depth: 2,
    score: 5,
    writer: "선우맘3",
    contents: "리뷰댓글1_3_1"
  },
  {
    num: 3,
    key: 1,
    bbsOrd:7,
    depth: 0,
    score: 5,
    writer: "선우맘3",
    contents: "댓글1_3"
  },
  {
    num: 4,
    key: 2,
    bbsOrd:2,
    depth: 0,
    score: 1,
    writer: "선우맘4",
    contents: "리뷰2_1"
  },
  {
    num: 5,
    key: 1,
    bbsOrd:4,
    depth: 1,
    writer: "선우맘5",
    contents: "리뷰댓글1_1 리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글리뷰댓글"
  },
  {
    num: 6,
    key: 1,
    bbsOrd:3,
    depth: 1,
    writer: "선우맘6",
    contents: "리뷰댓글1_2"
  },
  {
    num: 7,
    key: 1,
    bbsOrd:5,
    depth: 1,
    writer: "선우맘7",
    contents: "리뷰댓글1_3"
  },
  {
    num: 8,
    key: 1,
    bbsOrd:8,
    depth: 1,
    writer: "선우맘8",
    contents: "리뷰댓글2_3"
  }
];