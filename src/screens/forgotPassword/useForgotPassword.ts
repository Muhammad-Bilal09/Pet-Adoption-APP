import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../redux/slice/authSlice';
import {RootState, AppDispatch} from '../../redux/store';
import {Alert} from 'react-native';
import {unwrapResult} from '@reduxjs/toolkit';

const useForgotPassword = (navigation: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState('');
  const error = useSelector((state: RootState) => state.auth.error);

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Email is required');
      return;
    }

    try {
      const resultAction = await dispatch(resetPassword(email));
      unwrapResult(resultAction);
      Alert.alert(
        'Success',
        'A password reset link has been sent to your email.',
      );
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Failed to send reset email.');
    }
  };

  return {
    email,
    setEmail,
    handlePasswordReset,
    error,
  };
};

export default useForgotPassword;
