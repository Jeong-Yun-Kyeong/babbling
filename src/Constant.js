import React from 'react';
import {Dimensions} from 'react-native';
// 색상
export {DARKMINT, BLACK35, BLACK60, BLACK87};
// 여백
export {WHITESPACE, HEADER_WHITESPACE};
// 폰트 크기
export {HEADER_FONTSIZE, FONTSIZE};
//
export {URL};
//
export {약관1, 약관2};
const URL = 'http://babbling.co.kr';
// WebServices로 변경
// const URL = 'http://172.30.1.57';
//
const DARKMINT = 'rgb(47,211,121)';
const BLACK35 = 'rgba(0,0,0,0.35)';
const BLACK60 = 'rgba(0,0,0,0.60)';
const BLACK87 = 'rgba(0,0,0,0.87)';
const WHITESPACE = 16;
const HEADER_WHITESPACE = 24;
const HEADER_SEARCH_WHITESPACE = 16;
//여백 json처리로 가능한지 알아보기
const HEADER_FONTSIZE = 32;
// const SMALL_FONT = 12;
// const MIDDLE_FONT = 12;
// const LARGE_FONT = 12;
class FONTSIZE {
  reactive = () => {
    return Dimensions.get('screen').width >= 834 ? true : false;
  };
  static SMALL = this.reactive ? 17 : 12;
  //??
  static MIDDLE = this.reactive ? 19 : 14;
  static LARGE = this.reactive ? 21 : 15;
  static TITLE = this.reactive ? 30 : 15;
}

//
const 약관1 = `베블링의 서비스 제공
1. 식품의 경우, 각 브랜드가 제시한 정보를 보건복지부, 식품의약품안전처, 질병관리본부의 자료를 바탕으로 영양성분, 알레르기 정보, 식품첨가물의 정보를 나타냈으며, 소아청소년과 의사, 약사 등 전문의의 팁을 제공해 여러분에게 더 정확한 정보를 제공합니다.
 
2. 화장품의 경우, 각 브랜드가 제시한 정보를 EWG(미국 비영리단체), 식품의약품안전처, 질병관리본부의 자료를 바탕으로 전성분, 알레르기 유발성분 정보, 피부타입 정보, 추천을 나타냈으며, 화학과 교수, 생의학화장품 학과 교수 등 전문의의 팁을 제공해 여러분에게 더 정확한 정보를 제공합니다.
 
3. 생활용품의 경우. 각 브랜드가 제시한 정보를 EWG(미국 비영리단체), 식품의약품안전처, 질병관리본부의 자료를 바탕으로 첨가물, 알레르기 유발성분 정보를 나타냈으며, 화학과 교수, 생의학화장품 학과 교수 등 전문의의 팁을 제공해 여러분에게 더 정확한 정보를 제공합니다.
 
4. 제품 리뷰 작성 및 조회 서비스를 제공합니다.
 
5. 베블링팁, 고민톡 등 육아에 관한 각종 콘텐츠와 정보를 제공합니다.
 
6. 베블링 평가단을 운영해 제품 사용 서비스를 제공합니다.
 
7. 고객센터를 운영해 각종 문의 사항 질문과 답변을 제공합니다.
 
8. 서비스의 운영과 관련한 각종 광고를 제공합니다.
 
9. 마이페이지를 통한 이벤트 당첨, 평가단 당첨, 정보 수정 등을 제공합니다.
 
베블링 애플리케이션 이용 정보
여러분은 스마트폰을 통해 베블링 애플리케이션을 다운받으실 수 있습니다. 베블링은 더 나은 정보와 정확한 정보제공을 위해 지속해서 서비스를 업데이트할 예정입니다. 이 과정에서 서비스 업데이트에 대한 자세한 내용을 약관을 통해 일일이 알릴 수 없습니다. 다만, 서비스 내 공지사항을 통해 업데이트에 관한 내용을 안내할 예정입니다. 이러한 점을 이해해 주시기 바랍니다. 베블링은 여러분이 좀 더 쾌적하고 편안한 환경에서 서비스를 마음껏 이용하실 수 있도록 정보제공에 대한 라이선스를 무상으로 제공합니다. 하지만 베블링의 상표, 로고, 소프트웨어 라이선스, 저작물에 대한 사용권은 제공할 수 없습니다. 이러한 점을 알아주시면 감사하겠습니다. 앞서 말씀드렸듯이 베블링은 지속해서 서비스를 업데이트할 예정입니다. 업데이트의 내용은 새로운 제품의 정보, 정보 수정, 기능의 추가 및 제거 등이 포함되어 있습니다. 여러분이 베블링의 서비스를 더 편하게 이용하실 수 있도록 꾸준히 업데이트하여 주시기 바랍니다. 베블링은 예기치 못한 시스템의 결함이나 서비스 유지 및 보수, 업데이트 등으로 인해 서비스가 일시 중지될 수 있습니다. 이런 경우에는 미리 공지사항을 통해 관련 내용을 알려드리도록 하겠습니다. 또한, 서비스 이용 도중 시스템의 오류, 중단 시 베블링은 상황을 파악해 즉시 해결하겠으며, 해당 부분에 대해 공지사항을 통해 알려드리겠습니다. 베블링은 서비스의 지속이 힘들다고 판단이 될 경우, 서비스를 전부 또는 일부 변경 및 종료할 수 있습니다. 이러면 서비스 내용의 변경 또는 종료를 사전에 알려드리겠으며, 서비스 변경 또는 종료에 따른 서비스 사용자의 별도 보상은 이루어지지 않습니다.
 
베블링 계정 정보
베블링 계정은 네이버, 카카오톡, 구글, 페이스북 계정과 이메일 주소 및 패스워드 기반의 로그인 계정으로 이용할 수 있습니다. 베블링 계정은 여러분이 베블링 계정을 삭제하였던 경우, 다른 사람의 명의나 이메일 주소 등 제삼자의 개인정보를 이용하여 베블링 계정을 생성하려 한 경우, 베블링 계정 생성 시 필요한 정보를 입력하지 않거나 허위의 정보를 입력한 경우, 만 14세 미만 아동인 경우 등에는 여러분의 계정 생성이 어려울 수 있습니다. 만약, 위 조건에 위반하는 계정이 발견될 시에는 베블링은 즉시 여러분의 베블링 이용 서비스를 중단하거나 베블링 계정을 삭제하는 등 제한을 할 수 있습니다. 베블링 계정은 본인만 이용할 수 있으며, 제3자가 계정을 이용하도록 허락하지 않습니다. 베블링 이용 시 무단 사용에 대한 의심이나 발견 시 즉시 베블링 고객센터로 문의해주시기 바랍니다. 또한, 베블링 계정에 있어 쉬운 비밀번호, 부정 사용 등으로 인해 발생하는 모든 결과와 책임은 여러분한테 있으므로, 철저히 관리해주시길 바랍니다. 회원탈퇴는 마이페이지 - 어플설정에서 가능하며, 회원탈퇴 시 계정도 같이 탈퇴가 된다는 점 말씀드립니다. 다만 회원이 탈퇴한 경우 작성한 게시물은 삭제되지 않기 때문에 게시물 등의 삭제를 원하시는 경우 먼저 게시물 등을 삭제하신 후 탈퇴해주시기 바랍니다.
 
베블링 서비스 이용 정보
베블링은 여러분의 육아를 좀 더 쉽게, 편하게 하기 위해 만들어진 서비스임을 알려드립니다.
그렇기에 잘못된 정보, 무단 수집 및 배포, 영리적 목적으로 이용, 지식재산권 침해 등 잘못된 방법으로 베블링을 이용하는 것을 금지합니다. 베블링의 정보는 베블링이 수집한 자료를 바탕으로 제공되고 있습니다. 이에 대한 저작권 및 기타 지적 재산권은 베블링에 귀속됩니다. 또한, 베블링이 제공한 정보와 소프트웨어 일부를 베블링의 허락 없이 무단 도용, 복제, 출판, 배포, 수정 등 어떠한 방법에 의하여 영리적 목적, 제삼자에게 제공, 이용하게 하는 것, 애플리케이션의 소프트웨어를 재설계하거나 코드 추출, 변형, 모방을 금지하며, 무단 광고 개재, 무단홍보성 글을 게시하는 것도 금지합니다. 만약 베블링을 이용하면서 여러분이 관련 법령, 이용 약관 정책을 이행하지 않았다면 베블링은 사전 통보 없이 개시 중단 및 회원중지/탈퇴/해지 등의 조치를 취할 수 있으며, 베블링 서비스와 관련된 모든 권리를 주장할 수 없으며, 이후 회원 재가입이 불가능합니다.
 
개인정보 보호 정보
베블링을 이용하는 모든 사용자의 개인정보 보호는 가장 중요한 부분 중의 하나입니다. 이에 베블링은 여러분의 개인정보를 동의한 부분에서의 목적과 범위 내에서만 이용합니다. 법령에 따라 여러분들이 동의하지 않은 부분에 대해서는 일체 이용 및 정보제공을 하지 않습니다. 여러분의 개인정보를 안전하게 취급하기 위한 사항은 개인정보 취급방침을 참고하여 주시길 바랍니다.
 
정보제공에 따른 베블링의 책임
베블링은 결제정보의 중개서비스 또는 통신판매 중개시스템의 제공자로서 통신판매의 당사자가 아니기 때문에 판매자가 제공한 정보의 오류로 인해 발생하는 모든 손해 및 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다. 베블링은 구매서비스를 이용하는 사용자들에 한하여 일정 금액을 할인받을 수 있는 쿠폰을 제공할 수 있습니다. 쿠폰 사용은 본인만 사용 가능하며, 어떠한 상황에서도 쿠폰을 양도 또는 매매할 수 없습니다. 쿠폰의 경우 일부 품목이나 금액에 따라 제한될 수 있으며, 유효기간이 지난 쿠폰은 사용할 수 없으며, 회원탈퇴 시 쿠폰은 자동 소멸합니다. 정보제공은 사용자가 필요하거나 서비스 이용 중 필요한 부분이 생길 때, 베블링 홈페이지, 블로그 SNS 등을 통해 제공할 수 있습니다. 광고 게재와 관련해서 판매자, 광고주, 사용자에 대한 문제는 책임지지 않습니다. 예를 들어, 사용자가 특정 광고주 또는 판매자의 판촉 활동에 참여, 거래 시 일어나는 문제가 있습니다. 또한, 베블링 서비스와 관련하여 본 약관에 명시되지 않은 어떠한 구체적인 사항에 대한 약정이나 보증을 하지 않습니다.
 
분쟁 해결 정보
베블링은 여러분이 제기하는 정당한 의견이나 불만을 반영하고, 그 피해를 보상 처리하기 위하여 피해보상 처리 기구를 설치, 운영할 것이며, 사용자로부터 제출되는 불만 사항 및 의견은 먼저 사항을 처리할 예정입니다. 신속한 처리가 곤란한 경우에는 사용자에게 그 사유와 처리일정을 즉시 알려드리겠습니다. 하지만 부득이하게 소송이 제기될 경우 민사소송법상 베블링 본사 소재지의 관할법원에 제소됩니다. 또한, 베블링은 베블링 서비스에 제삼자가 불법적으로 서비스에 접속하거나 서버를 이용함으로써 발생하는 손해, 서비스 오류로 정보 오류, 정보 누락 등에 따른 손해 등에 대해서 책임을 부과하지 않습니다.
 
약관 정보
법의 변경, 베블링 서비스의 변경 등 변경사항을 반영하기 위한 목적으로 본 약관은 수정될 수 있습니다. 약관이 수정될 경우 공지사항을 통해 알려드리겠으며, 본 약관은 여러분과 베블링과의 관계에 적용되며, 제삼자의 수익권을 발생시키지 않습니다. 여러분이 본 약관을 준수하지 않는다면, 베블링은 준수하지 않은 약관에 대해 조치를 취할 것이며, 조치가 가능하지 않을 경우 다른 약관에는 영향을 미치지 않습니다.`;

const 약관2 = `1. 개인정보의 수집 및 이용목적
* 서비스 기능 제공
- 콘텐츠 제공, 특정 맞춤 서비스 제공
 
* 회원 관리
- 회원제 서비스 제공, 개인 식별, 본인 확인에 의한 부정 이용 방지 및 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록 보존, 불만처리 등 민원처리, 고지사항 전달, 회원 탈퇴 의사의 확인
 
* 신규 서비스 개발, 통계적 분석, 이벤트 및 마케팅에 활용
- 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악, 회원의 서비스 이용에 대한 통계, 이벤트 정보 제공 및 참여 기회 제공, 마케팅(프로모션)
 
2. 수집하는 개인정보 항목
* 회원가입 및 서비스 이용
- 필수항목 : 이메일, 비밀번호, 아이 별명(태명), 아이 생년월일
- 선택항목 : 알레르기, 피부트러블, 제품군
 
* 서비스 이용 과정이나 사업처리 과정에서 생성되는 정보
- 서비스 이용기록, 접속로그, 쿠키, 접속 IP정보, 브라우저 정보, 제재 및 이용정지 기록
 
* 모바일 서비스 특성에 따른 단말기에 관한 정보
- 단말기 모델, 이동통신사정보, 하드웨어ID
 
3. 개인정보 수집방법
- 앱 서비스, 홈페이지, SNS, 팩스, 전화, 상담 게시판, 이메일, 이벤트 응모
 
베블링은 여러분의 동의가 있는 경우나, 법령에 규정된 경우를 제외하고는 개인정보취급방침에서 고지한 범위를 초과한 개인정보를 제삼자에게 절대로 제공하지 않습니다. 여러분의 개인정보는 동의를 받은 개인정보의 수집 및 이용목적이 달성되면 법령 또는 내부방침에 의해 보존할 필요가 있는 경우를 제외하고는 지체 없이 파기됩니다.
 
4. 관련법령정보
여러분의 개인정보는 여러분으로부터 동의를 받은 수집 및 이용목적이 달성된 때에는 별도의 DB로 옮겨져 관계 법령에서 정한 일정한 기간 동안 보관한 다음 파기합니다. 단, 이메일 주소는 중복가입 및 부정 이용 방지를 위해 보관합니다. 또한, 베블링 서비스 가입일 기준 1년간 베블링에서 이용기록이 없을 시, 서비스 비사용자의 개인정보는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률 제29조’ 에 근거하여 이용자에게 사전통지하고 개인정보를 파기하거나 별도로 분리하여 저장 관리합니다. 단, 통신비밀보호법, 전자상거래 등에서의 소비자보호에 관한 법률 등의 관계법령의 규정에 의하여 보존할 필요가 있는 경우 관계법령에서 규정한 일정한 기간 동안 이용자 개인정보를 보관합니다.
 
5. 개인정보의 자동수집장치의 설치/운영 및 그 거부에 관한 사항
베블링은 이용자에게 개별적으로 특화된 맞춤서비스를 제공하기 위해서 이용자의 정보를 수시로 저장하고 찾아내는 쿠키(cookie)를 사용합니다. 쿠키는 당사의 애플리케이션을 운영하는데 이용됩니다.
*쿠키 등 사용 목적
- 빈도나 방문 시간, 이용 서비스, 관심 분야 등을 분석해 맞춤화된 개인 서비스를 제공하기 위해 수집합니다.
 
*쿠키 설정 거부방법
- 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 회원은 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 설정방법으로는 (인터넷 익스플로러의 경우) 웹브라우저 상단의 도구 > 인터넷 옵션 > 일반 > 검색기록 삭제 또는 종료할 때 검색기록 삭제 항목 체크) 하지만, 베블링 서비스를 이용하기 위해서는 쿠키를 허용하여야 하며, 이를 거부할 경우 로그인이 필요한 일부 서비스 이용이 어려울 수 있습니다.
 
6. 개인정보보호를 위한 기술 및 관리적 대책
베블링은 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
*기술적 대책
- 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
 
- 베블링은 백신프로그램을 이용하여 컴퓨터 바이러스의 피해를 방지하는 조치를 하고 있습니다. 백신프로그램은 주기적으로 업데이트되며 바이러스가 갑자기 출현하면 백신이 나오는 즉시 이를 제공함으로써 개인정보가 침해되는 것을 방지하고 있습니다.
 
- 베블링은 암호화 알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL 또는 SET)를 채택하고 있으며, 해킹 등 외부침입에 대비하여 각 서버마다 침입차단시스템과 취약점 분석시스템 등을 이용하여 보안에 최선을 다하고 있습니다.
 
*관리적 대책
- 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있으며, 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
 
- 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며, 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
 
7. 개인정보 처리방침 변경
이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.`;
