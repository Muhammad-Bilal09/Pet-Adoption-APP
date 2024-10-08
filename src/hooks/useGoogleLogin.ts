import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {Alert} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '361751657685-ghlj3gm8jrh1p46hk58gn1qgb5vo1ecs.apps.googleusercontent.com',
});

export const handleGoogleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    const {idToken} = await GoogleSignin.getTokens();
    if (!idToken) {
      throw new Error('Google Sign-In failed: No idToken found.');
    }
    const googleCredential = auth?.GoogleAuthProvider?.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    Alert.alert('Google Sign-In successful');
  } catch (error) {
    Alert.alert('Google Sign-In error: ');
  }
};
