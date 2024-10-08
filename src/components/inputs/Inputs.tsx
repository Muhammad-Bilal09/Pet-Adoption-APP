import React from 'react';
import {TextInput} from 'react-native';
import {InputProps} from '../../types/types';
import {styles} from './InputStyle';

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
