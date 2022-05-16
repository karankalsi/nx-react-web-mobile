import React from 'react';
import { TouchableOpacity } from 'react-native';

/**
 * TODO: Re-write below component.
 */
const Button: React.FC<{ title?: string }> = ({ title }) => {
  return <TouchableOpacity>{title}</TouchableOpacity>;
};

export default Button;
