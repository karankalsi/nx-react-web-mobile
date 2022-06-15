import styles from './App.module.css';

import { Route, Routes, Link } from 'react-router-dom';
import { Button } from '@nx-react-web-mobile/ui';
import { performLogin } from '@nx-react-web-mobile/domain';
import React from 'react';

export function App() {
  React.useEffect(() => {
    performLogin({ user: '', password: '' });
  }, []);
  return (
    <>
      <div className={styles['container']}>
        {/* <Button>Hello</Button> */}'
        <form className={styles['loginForm']}>
          <img
            className={styles['loginAvatar']}
            src="./assets/img_avatar2.png"
          />
          <div className={styles['loginInputBox']}>
            <label>Username</label>
            <input></input>
            <label>Password</label>
            <input></input>
          </div>
          <Button className={styles['loginButton']} isFluid>
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default App;
