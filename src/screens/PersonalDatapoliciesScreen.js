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
          <View style={{marginTop: 20, marginLeft: 24, marginRight: 24}}>
            <View style={{marginBottom: 20}}>
              <Text style={{color: '#black87', fontSize: 15}}>
                개인정보 수집 이용약관
              </Text>
            </View>

            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                1. 개인정보의 수집 및 이용목적
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                * 서비스 기능 제공
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 콘텐츠 제공, 특정 맞춤 서비스 제공
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                * 회원 관리
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 회원제 서비스 제공, 개인 식별, 본인 확인에 의한 부정 이용 방지
                및 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한, 분쟁
                조정을 위한 기록 보존, 불만처리 등 민원처리, 고지사항 전달, 회원
                탈퇴 의사의 확인
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                * 신규 서비스 개발, 통계적 분석, 이벤트 및 마케팅에 활용
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른
                서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도
                파악, 회원의 서비스 이용에 대한 통계, 이벤트 정보 제공 및 참여
                기회 제공, 마케팅(프로모션)
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                2. 수집하는 개인정보 항목
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                * 회원가입 및 서비스 이용
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 필수항목 : 이메일, 비밀번호, 아이 별명(태명), 아이 생년월일
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 선택항목 : 알레르기, 피부트러블, 제품군
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                * 서비스 이용 과정이나 사업처리 과정에서 생성되는 정보
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 서비스 이용기록, 접속로그, 쿠키, 접속 IP정보, 브라우저
                정보, 제재 및 이용정지 기록
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                * 모바일 서비스 특성에 따른 단말기에 관한 정보
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 단말기 모델, 이동통신사정보, 하드웨어ID
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                3. 개인정보 수집방법
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 앱 서비스, 홈페이지, SNS, 팩스, 전화, 상담
                게시판, 이메일, 이벤트 응모
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}} t>
                베블링은 여러분의 동의가 있는 경우나, 법령에 규정된 경우를
                제외하고는 개인정보취급방침에서 고지한 범위를 초과한 개인정보를
                제삼자에게 절대로 제공하지 않습니다. 여러분의 개인정보는 동의를
                받은 개인정보의 수집 및 이용목적이 달성되면 법령 또는 내부방침에
                의해 보존할 필요가 있는 경우를 제외하고는 지체 없이 파기됩니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                4. 관련법령정보
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                여러분의 개인정보는 여러분으로부터 동의를 받은 수집 및
                이용목적이 달성된 때에는 별도의 DB로 옮겨져 관계 법령에서 정한
                일정한 기간 동안 보관한 다음 파기합니다. 단, 이메일 주소는
                중복가입 및 부정 이용 방지를 위해 보관합니다. 또한, 베블링
                서비스 가입일 기준 1년간 베블링에서 이용기록이 없을 시, 서비스
                비사용자의 개인정보는 ‘정보통신망 이용촉진 및 정보보호 등에 관한
                법률 제29조’ 에 근거하여 이용자에게 사전통지하고 개인정보를
                파기하거나 별도로 분리하여 저장
                관리합니다. 단, 통신비밀보호법, 전자상거래 등에서의 소비자보호에
                관한 법률 등의 관계법령의 규정에 의하여 보존할 필요가 있는 경우
                관계법령에서 규정한 일정한 기간 동안 이용자 개인정보를
                보관합니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                5. 개인정보의 자동수집장치의 설치/운영 및 그 거부에 관한 사항
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                베블링은 이용자에게 개별적으로 특화된 맞춤서비스를 제공하기
                위해서 이용자의 정보를 수시로 저장하고 찾아내는 쿠키(cookie)를
                사용합니다. 쿠키는 당사의 애플리케이션을 운영하는데 이용됩니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                *쿠키 등 사용 목적
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 빈도나 방문 시간, 이용 서비스, 관심 분야 등을 분석해 맞춤화된
                개인 서비스를 제공하기 위해 수집합니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                *쿠키 설정 거부방법
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 이용자는 쿠키 설치에 대한 선택권을 가지고
                있습니다. 따라서, 회원은 웹브라우저에서 옵션을 설정함으로써 모든
                쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면
                모든 쿠키의 저장을 거부할 수도 있습니다. 설정방법으로는 (인터넷
                익스플로러의 경우) 웹브라우저 상단의 도구 {'>'}인터넷 옵션 {'>'}
                 일반 {'>'} 검색기록 삭제 또는 종료할 때 검색기록 삭제 항목
                체크) 하지만, 베블링 서비스를 이용하기 위해서는 쿠키를
                허용하여야 하며, 이를 거부할 경우 로그인이 필요한 일부 서비스
                이용이 어려울 수 있습니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                6. 개인정보보호를 위한 기술 및 관리적 대책
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                베블링은 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에
                필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                *기술적 대책
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고
                있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송
                데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도
                보안기능을 사용하고 있습니다.
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 베블링은 백신프로그램을 이용하여 컴퓨터 바이러스의 피해를
                방지하는 조치를 하고 있습니다. 백신프로그램은 주기적으로
                업데이트되며 바이러스가 갑자기 출현하면 백신이 나오는 즉시 이를
                제공함으로써 개인정보가 침해되는 것을 방지하고 있습니다.
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 베블링은 암호화 알고리즘을 이용하여 네트워크 상의 개인정보를
                안전하게 전송할 수 있는 보안장치(SSL 또는 SET)를 채택하고
                있으며, 해킹 등 외부침입에 대비하여 각 서버마다 침입차단시스템과
                취약점 분석시스템 등을 이용하여 보안에 최선을 다하고 있습니다.
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13, fontWeight: 200}}>*관리적 대책</Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화
                하여 개인정보를 관리하는 대책을 시행하고 있으며, 개인정보 취급
                관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를
                실시하고 있습니다.
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                - 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
                부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여
                필요한 조치를 하고 있으며, 침입차단시스템을 이용하여
                외부로부터의 무단 접근을 통제하고 있습니다.
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13, lineHeight: 18, fontWeight: 200}}>
                7. 개인정보 처리방침 변경 이 개인정보처리방침은 시행일로부터
                적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이
                있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여
                고지할 것입니다.
              </Text>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
