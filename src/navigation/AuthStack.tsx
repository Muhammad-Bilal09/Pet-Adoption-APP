import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/signIn/SiginIn';
import SignUpScreen from '../screens/signUp/SignUp';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import {AuthStackParamList} from '../types/types';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackScreens = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{headerShown: true}}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreens;
