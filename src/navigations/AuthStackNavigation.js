import React, {useState, PureComponent} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './BottomNavigation';
import SignStack from './SignStackNavigation';
import AsyncStorage from '@react-native-community/async-storage';
//
const Stack = createStackNavigator();
//
class AuthStack extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSigned: false,
    };
  }
  async componentWillMount() {
    let key = await AsyncStorage.getItem('key');
    console.log(key);
    key != null
      ? this.setState({isSigned: true})
      : this.setState({isSigned: false});
  }
  render() {
    const {isSigned} = this.state;
    console.log(isSigned);
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {/* {isSigned ? (
          <>
            <Stack.Screen name="Main" component={Header} />
          </>
        ) : (
          <>
            <Stack.Screen name="LoginMain" component={SignStack} />
          </>
        )} */}
        <Stack.Screen name="LoginMain" component={SignStack} />
        <Stack.Screen name="Main" component={Header} />
      </Stack.Navigator>
    );
  }
}
export default AuthStack;
