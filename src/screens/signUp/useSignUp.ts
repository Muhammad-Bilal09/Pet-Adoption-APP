import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {signUpUser} from '../../redux/slice/authSlice';
import {RootState, AppDispatch} from '../../redux/store';
import {Alert} from 'react-native';
import {unwrapResult} from '@reduxjs/toolkit';
import {validateEmail, validatePassword} from '../../utils/Validation';

const useSignUp = (navigation: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [state, setState] = useState({name: '', email: '', password: ''});
  const error = useSelector((state: RootState) => state?.auth?.error);

  const handleChange = (key: keyof typeof state, value: string) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const handleSignUp = async () => {
    const emailError = validateEmail(state?.email);
    const passwordError = validatePassword(state?.password);

    if (emailError || passwordError) {
      Alert.alert('Error', `${emailError || ''} ${passwordError || ''}`);
      return;
    }

    try {
      const resultAction = await dispatch(
        signUpUser({email: state?.email, password: state?.password}),
      );
      const unwrappedResult = unwrapResult(resultAction);
      navigation.navigate('Home');
    } catch (rejectedAction) {
      Alert.alert('Error', error || 'Sign up failed');
    }
  };

  return {
    state,
    handleChange,
    handleSignUp,
  };
};

export default useSignUp;
