import { getToken } from '@nx-react-web-mobile/data';
import React from 'react';
import { UseLoginAction, UseLoginParams } from './auth.types';

export default (params: UseLoginParams): UseLoginAction => {
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const { onSuccess, onFailure } = params;

  const handleUsernameChange = React.useCallback<
    UseLoginAction['handleUsernameChange']
  >((value) => {
    setUsername(value);
  }, []);

  const handlePasswordChange = React.useCallback<
    UseLoginAction['handlePasswordChange']
  >((value) => {
    setPassword(value);
  }, []);

  const handleSubmit = React.useCallback<
    UseLoginAction['handleSubmit']
  >(async () => {
    if (username && password) {
      try {
        const token = await getToken({ user: username, password: password });
        console.log(token);
        onSuccess();
      } catch (e) {
        onFailure(e);
      }
    }
  }, [username, password]);

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
};
