import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../redux/slice/authSlice';
import {RootState, AppDispatch} from '../../redux/store';
import {unwrapResult} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

const useChangePassword = () => {
  const dispatch: AppDispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const error = useSelector((state: RootState) => state.auth.error);

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Passwords do not match',
      });
      return;
    }

    try {
      const resultAction = await dispatch(
        changePassword({currentPassword, newPassword}),
      );
      unwrapResult(resultAction);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Password updated successfully!',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to update password.',
      });
    }
  };

  return {
    currentPassword,
    newPassword,
    confirmPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    handleChangePassword,
    error,
  };
};

export default useChangePassword;
