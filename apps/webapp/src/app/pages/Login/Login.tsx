import { Button } from '@nx-react-web-mobile/ui';
import { performLogin } from '@nx-react-web-mobile/domain';
import React from 'react';
import { Svgs } from '@nx-react-web-mobile/ui-res';
import styles from './Login.module.scss';

export function App() {
  React.useEffect(() => {
    performLogin({ user: '', password: '' });
  }, []);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['loginForm']}>
          <img className={styles['loginAvatar']} src={Svgs.UserAvatar} />
          <div className={styles['loginInputBox']}>
            <label>Username</label>
            <input></input>
            <label>Password</label>
            <input></input>
          </div>
          <Button className={styles['loginButton']} isFluid>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
