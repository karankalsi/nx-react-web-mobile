import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const buttonStyle = [styles['appButton']];
  if (props.isFluid) {
    buttonStyle.push(styles['fluid']);
  }

  if (props.className) {
    buttonStyle.push(props.className);
  }
  return <button className={buttonStyle.join(' ')}>{props.children}</button>;
};

Button.defaultProps = {
  isFluid: false,
};

export default Button;
