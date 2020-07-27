import React from 'react';
import 'react-native-gesture-handler';
import AuthStack from './src/navigations/AuthStackNavigation';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import EventStack from './src/navigations/EventStackNavigation';
import BabyPlus from './src/screens/BabyPlusScreen';
import BabyAlergy from './src/screens/BabyAlergyScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <AuthStack />
        {/* <BabyAlergy /> */}
      </NavigationContainer>
    </>
  );
};

export default App;

// import React, {Component} from 'react';
// import {View, Text, Image} from 'react-native';

// import {SvgXml} from 'react-native-svg';
// import SVG from '../babbling/src/components/SvgComponent';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       animating: false,
//       align: 'center',
//       alignsecond: false,
//     };
//     setTimeout(
//       () =>
//         this.setState({align: 'flex-start'}, function () {
//           this.setState({
//             alignsecond: true,
//           });
//         }),
//       3000,
//     );
//   }

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           flexDirection: 'row',
//           justifyContent: this.state.align,
//           marginHorizontal: 40,
//         }}>
//         <SvgXml xml={SVG('SPLASH1')} style={{backgroundColor: 'green'}} />
//         {!this.state.alignsecond ? null : (
//           <SvgXml xml={SVG('SPLASH2')} style={{backgroundColor: 'green'}} />
//         )}
//       </View>
//     );
//   }
// }
