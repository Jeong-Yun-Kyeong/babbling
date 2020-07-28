import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {DARKMINT} from '../Constant';
import MainStack from './BottomNavigation';
import SignStack from './SignStackNavigation';
import AuthCheck from '../screens/AuthCheck';

const Stack = createStackNavigator();

const AuthStack = ({navigation}) => {
  const [token, setToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const TokenCheck = async (navigation) => {
      let getToken = await AsyncStorage.getItem('token');
      if (getToken != null) {
        setToken(true);
      }
      setIsLoading(false);
      console.log('========================' + getToken);
    };
    TokenCheck(navigation);
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <AuthCheck />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: false,
      }}>
      {console.log(token)}
      {token ? (
        <Stack.Screen name="Main" component={MainStack} />
      ) : (
        <Stack.Screen name="Sign" component={SignStack} />
      )}

      {/* <Stack.Screen name="Auth" component={AuthCheck} />
      <Stack.Screen name="Sign" component={SignStack} />
      <Stack.Screen name="Main" component={MainStack} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
