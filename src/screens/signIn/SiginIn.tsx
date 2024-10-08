import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useSignIn from './useSignIn';
import {styles} from './SignInStyle';
import Input from '../../components/inputs/Inputs';
import Button from '../../components/button/Button';
import GoogleButton from '../../components/googleButton/GoogleButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {handleGoogleSignIn} from '../../hooks/useGoogleLogin';

const SignIn = ({navigation}: {navigation: StackNavigationProp<any, any>}) => {
  const {email, setEmail, password, setPassword, handleLogin} =
    useSignIn(navigation);
  const inputs = [
    {
      placeholder: 'Email',
      value: email,
      onChangeText: setEmail,
      keyboardType: 'email-address' as 'email-address',
    },
    {
      placeholder: 'Password',
      value: password,
      onChangeText: setPassword,
      secureTextEntry: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {inputs.map((inputProps, index) => (
        <Input key={index} {...inputProps} />
      ))}

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button title="Login" onPress={handleLogin} />

      <GoogleButton onPress={handleGoogleSignIn} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
