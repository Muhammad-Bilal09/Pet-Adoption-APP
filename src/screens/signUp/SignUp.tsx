import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import useSignUp from './useSignUp';
import {styles} from './SignUpStyle';
import Input from '../../components/inputs/Inputs';
import Button from '../../components/button/Button';
import GoogleButton from '../../components/googleButton/GoogleButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {handleGoogleSignIn} from '../../hooks/useGoogleLogin';
import {getSignUpInputs} from '../../constants/Inputs';

const SignUp = ({navigation}: {navigation: StackNavigationProp<any, any>}) => {
  const {
    state,
    handleChange,
    handleSignUp,
    handleCheckboxPress,
    isChecked,
    setIsChecked,
  } = useSignUp(navigation);

  const inputs = getSignUpInputs(state, handleChange);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {inputs.map((inputProps, index) => (
        <Input key={index} {...inputProps} />
      ))}

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={handleCheckboxPress}>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            tintColors={{true: '#007AFF', false: '#8e8e93'}}
          />
          <Text style={styles.text}>
            I agree to the <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <Button title="Sign Up" onPress={handleSignUp} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signupText}>Login</Text>
      </TouchableOpacity>
      <GoogleButton onPress={handleGoogleSignIn} />
    </View>
  );
};

export default SignUp;
