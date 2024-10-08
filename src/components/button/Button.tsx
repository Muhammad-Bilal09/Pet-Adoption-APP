import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from '../../types/types';
import {styles} from './ButtonStyle';

const Button: React.FC<ButtonProps> = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
