import { Button } from '@nx-react-web-mobile/ui';
import { useLogin } from '@nx-react-web-mobile/domain';
import React from 'react';
import { Svgs } from '@nx-react-web-mobile/ui-res';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const onSuccess = React.useCallback(() => {
    navigate('/home');
  }, [navigate]);

  const onFailure = React.useCallback(() => {
    //TODO: Handle failure
  }, []);

  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useLogin({ onSuccess, onFailure });

  const loginButtonStyle = [styles['loginButton']];

  if (!username || !password) {
    loginButtonStyle.push(styles['loginButtonDisabled']);
  }

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['loginForm']}>
          <img className={styles['loginAvatar']} src={Svgs.UserAvatar} />
          <div className={styles['loginInputBox']}>
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
            />
            <label>Password</label>
            <input
              type={'password'}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
          <Button
            className={loginButtonStyle.join(' ')}
            isFluid
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
