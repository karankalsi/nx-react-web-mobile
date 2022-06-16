import { Button } from '@nx-react-web-mobile/ui';
import { performLogin } from '@nx-react-web-mobile/domain';
import React from 'react';
import { Svg } from '@nx-react-web-mobile/ui-token';
import { Navigate } from 'react-router-dom';
import styles from './Login.module.scss';

export function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  React.useEffect(() => {
    performLogin({ user: '', password: '' });
  }, []);

  return (
    <>
      {loggedIn && <Navigate to="/home" replace={true} />}
      <div className={styles['container']}>
        {/* <Button>Hello</Button> */}'
        <div className={styles['loginForm']}>
          <img className={styles['loginAvatar']} src={Svg.UserAvatar} />
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
