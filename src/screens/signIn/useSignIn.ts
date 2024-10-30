import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {loginUser} from '../../redux/slice/authSlice';
import {RootState, AppDispatch} from '../../redux/store';
import Toast from 'react-native-toast-message';
import {unwrapResult} from '@reduxjs/toolkit';
import {validateEmail, validatePassword} from '../../utils/Validation';

const useSignIn = (navigation: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state: RootState) => state?.auth?.error);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = async () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `${emailError || ''} ${passwordError || ''}`,
      });
      return;
    }

    try {
      const resultAction = await dispatch(loginUser({email, password}));
      const unwrappedResult = unwrapResult(resultAction);
      navigation.navigate('Home');
    } catch (rejectedAction: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: rejectedAction.error.message || 'Login failed',
      });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
    handleCheckboxPress,
    isChecked,
  };
};

export default useSignIn;
