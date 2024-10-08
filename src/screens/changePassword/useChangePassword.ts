import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../redux/slice/authSlice';
import {RootState, AppDispatch} from '../../redux/store';
import {Alert} from 'react-native';
import {unwrapResult} from '@reduxjs/toolkit';

const useChangePassword = () => {
  const dispatch: AppDispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const error = useSelector((state: RootState) => state.auth.error);

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const resultAction = await dispatch(
        changePassword({currentPassword, newPassword}),
      );
      unwrapResult(resultAction);
      Alert.alert('Success', 'Password updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update password.');
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
