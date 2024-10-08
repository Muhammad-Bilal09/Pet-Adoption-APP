import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from './ChangeStyle';
import Input from '../../components/inputs/Inputs';
import useChangePassword from './useChangePassword';

const ChangePassword = () => {
  const {
    currentPassword,
    newPassword,
    confirmPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    handleChangePassword,
    error,
  } = useChangePassword();

  const inputs = [
    {
      label: 'Current Password',
      placeholder: 'Enter your current password',
      value: currentPassword,
      onChangeText: setCurrentPassword,
      secureTextEntry: true,
    },
    {
      label: 'New Password',
      placeholder: 'Enter your new password',
      value: newPassword,
      onChangeText: setNewPassword,
      secureTextEntry: true,
    },
    {
      label: 'Confirm New Password',
      placeholder: 'Confirm your new password',
      value: confirmPassword,
      onChangeText: setConfirmPassword,
      secureTextEntry: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        {inputs.map((inputProps, index) => (
          <Input key={index} {...inputProps} />
        ))}
      </View>
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      <Button
        mode="contained"
        onPress={handleChangePassword}
        style={styles.updateButton}>
        Change Password
      </Button>
    </SafeAreaView>
  );
};

export default ChangePassword;
