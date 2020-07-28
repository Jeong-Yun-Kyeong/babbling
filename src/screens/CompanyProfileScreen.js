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
  Switch,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../components/SvgComponent';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {DARKMINT} from '../Constant';

// 로고
const COMPANYPROFILELOGO = () => {
  let height = 18;
  let width = 100;
  let marginBottom = 40;
  let screenWidth = Dimensions.get('screen').width;
  if (screenWidth >= 834) {
    height = 78;
    width = 400;
    marginBottom = 60;
  }
  return (
    <View
      style={{
        marginBottom: marginBottom,

        alignItems: 'flex-start',
      }}>
      <SvgXml xml={SVG('COMPANYPROFILELOGO')} height={height} width={width} />
    </View>
  );
};
export default class ACCESSTERMS extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
          <Image
            source={require('../images/companyprofile.jpg')}
            resizeMode="cover"
            style={{
              position: 'absolute',
              top: -(getStatusBarHeight() + 62),
              left: 0,
              right: 0,
              bottom: 0,
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            }}
          />
          <View style={{marginTop: 30, marginLeft: 24, marginRight: 24}}>
            <View>
              <Text
                style={{
                  color: DARKMINT,
                  fontSize: 18,
                  lineHeight: 32,
                  fontWeight: 'bold',
                }}>
                안녕하세요? 사랑하는 내 아이를 위한
              </Text>
            </View>
            <View style={{marginBottom: 25}}>
              <Text style={{color: DARKMINT, fontSize: 18, fontWeight: 'bold'}}>
                유아용품 추천 솔루션 서비스 ‘베블링’입니다.
              </Text>
            </View>
            <View style={{marginBottom: 25}}>
              <Text style={{fontSize: 12, lineHeight: 18, fontWeight: 200}}>
                베블링은 약 3만개의 Data를 수집했으며, 식품, 화장품, 생활용품,
                의약외품까지 아이가 쓰는 모든 것에 대한 성분 정보, 영양
                정보, 알레르기 정보, 식품첨가물, 첨가물 등의 정보를 알기 쉽게
                알려주고, 더 나은 제품으로 추천해주는 서비스입니다.
              </Text>
            </View>
            <View style={{marginBottom: 25}}>
              <Text style={{fontSize: 12, lineHeight: 18, fontWeight: 200}}>
                베블링은 육아에 집안일까지... 엄마의 고민을 대신하며, 10개
                종류의 유아 관련 Data를 바탕으로 엄마의 마음을
                담았습니다. 또한, 보건복지부, 식약처, 질병관리본부의 공공
                데이터를 활용해 3대 주요 성분 (영양성분, 알레르기, 식품첨가물)을
                담았고, 화학과 교수, 생의학화장품 학과 교수, 소아과 의사, 약사
                등 전문의가 자문위원으로 활동하고 있습니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 12, lineHeight: 18, fontWeight: 200}}>
                베블링은 엄마의 육아가 외롭지 않게 엄마들을 위한 콘텐츠를
                운영하고 있습니다. 엄마들의 후기, 고민을 나누는 콘텐츠가
                자유로워질 수 있도록 ‘수다 톡’ 서비스를 제공하고
                있습니다. 또한, 베블링 평가단을 운영해 원하는 제품을 체험해보고
                후기까지 이어져 엄마들이 서로 공감하고, 의견을 나눌 수 있는
                대화의 장을 제공하고 있습니다.
              </Text>
            </View>
            <View style={{marginBottom: 25}}>
              <Text style={{fontSize: 12, lineHeight: 18, fontWeight: 200}}>
                베블링은 혼자 하는 육아가 같이하는 육아가 되고, 어려웠던 육아가
                좀 더 쉬워질 수 있도록 엄마의 고민을 함께하겠습니다. 
              </Text>
            </View>
            <View style={{marginTop: 20}}>{COMPANYPROFILELOGO()}</View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
