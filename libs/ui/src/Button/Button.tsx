import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const buttonStyle = [styles['appButton']];
  if (props.isFluid) {
    buttonStyle.push(styles['fluid']);
  }

  if (props.className) {
    buttonStyle.push(props.className);
  }
  return (
    <button className={buttonStyle.join(' ')} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  isFluid: false,
};

export default Button;
