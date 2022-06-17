import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonStyles from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
  const containerStyle = [ButtonStyles.container, props.style];
  if (props.isDisabled) {
    containerStyle.push(ButtonStyles.containerDisabled);
  }
  return (
    <TouchableOpacity style={containerStyle} onPress={props.onClick}>
      <Text style={ButtonStyles.content}>{props.children}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  isDisabled: false,
};

export default React.memo(Button);
