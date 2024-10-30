import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../redux/slice/authSlice';
import {RootState, AppDispatch} from '../../redux/store';
import Toast from 'react-native-toast-message';
import {unwrapResult} from '@reduxjs/toolkit';

const useForgotPassword = (navigation: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState('');
  const error = useSelector((state: RootState) => state.auth.error);

  const handlePasswordReset = async () => {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Email is required',
      });
      return;
    }

    try {
      const resultAction = await dispatch(resetPassword(email));
      unwrapResult(resultAction);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'A password reset link has been sent to your email.',
      });
      navigation.navigate('SignIn');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to send reset email.',
      });
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
