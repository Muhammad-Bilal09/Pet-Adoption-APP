import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {signUpUser} from '../../redux/slice/authSlice';
import {RootState, AppDispatch} from '../../redux/store';
import Toast from 'react-native-toast-message';
import {unwrapResult} from '@reduxjs/toolkit';
import {validateEmail, validatePassword} from '../../utils/Validation';

const useSignUp = (navigation: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [state, setState] = useState({name: '', email: '', password: ''});
  const error = useSelector((state: RootState) => state?.auth?.error);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

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
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `${emailError || ''} ${passwordError || ''}`,
      });
      return;
    }

    try {
      const resultAction = await dispatch(
        signUpUser({email: state?.email, password: state?.password}),
      );
      const unwrappedResult = unwrapResult(resultAction);
      navigation.navigate('Home');
    } catch (rejectedAction) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error || 'Sign up failed',
      });
    }
  };

  return {
    state,
    handleChange,
    handleSignUp,
    handleCheckboxPress,
    isChecked,
    setIsChecked,
  };
};

export default useSignUp;
