import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useSignUp from './useSignUp';
import {styles} from './SignUpStyle';
import Input from '../../components/inputs/Inputs';
import Button from '../../components/button/Button';
import GoogleButton from '../../components/googleButton/GoogleButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {handleGoogleSignIn} from '../../hooks/useGoogleLogin';

const SignUp = ({navigation}: {navigation: StackNavigationProp<any, any>}) => {
  const {state, handleChange, handleSignUp} = useSignUp(navigation);

  const inputs = [
    {
      placeholder: 'Name',
      value: state.name,
      onChangeText: (value: string) => handleChange('name', value),
    },
    {
      placeholder: 'Email',
      value: state.email,
      onChangeText: (value: string) => handleChange('email', value),
      keyboardType: 'email-address' as 'email-address',
    },
    {
      placeholder: 'Password',
      value: state.password,
      onChangeText: (value: string) => handleChange('password', value),
      secureTextEntry: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {inputs.map((inputProps, index) => (
        <Input key={index} {...inputProps} />
      ))}

      <Button title="Sign Up" onPress={handleSignUp} />

      <GoogleButton onPress={handleGoogleSignIn} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signupText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
