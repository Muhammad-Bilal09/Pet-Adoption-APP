import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';
import AuthStackScreens from './AuthStack';
import AppStackScreens from './AppStack';
import useAuth from './useNavigation';
import {colors} from '../constants/Colors';

const AuthNavigation = () => {
  const {user, initializing} = useAuth();

  if (initializing) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={colors.Button} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStackScreens /> : <AuthStackScreens />}
    </NavigationContainer>
  );
};

export default AuthNavigation;
