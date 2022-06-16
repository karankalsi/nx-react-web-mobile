import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonStyles from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity style={[ButtonStyles.container, props.style]}>
      <Text style={ButtonStyles.content}>
      {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
