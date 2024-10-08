import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {styles} from './GoogleStyle';
import {GoogleSignInButtonProps} from '../../types/types';

const GoogleButton: React.FC<GoogleSignInButtonProps> = ({onPress}) => {
  return (
    <GoogleSigninButton
      style={styles.googleButton}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={onPress}
    />
  );
};

export default GoogleButton;
