import React from 'react';
import { Button } from '@nx-react-web-mobile/ui-mobile';
import { Svgs } from '@nx-react-web-mobile/ui-res';
import { Text, TextInput, View } from 'react-native';
import LoginStyles from './Login.styles';
import { useAppNavigation } from '../../lib/navigation';
import { useLogin } from '@nx-react-web-mobile/domain';

const Login: React.FC = () => {
  const navigation = useAppNavigation();

  const onSuccess = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const onFailure = React.useCallback(() => {
    //TODO: Handle login failure here
  }, []);

  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
    ready,
  } = useLogin({
    onSuccess,
    onFailure,
  });
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.loginForm}>
        <Svgs.UserAvatar style={LoginStyles.userAvatar} />
        <View style={LoginStyles.formField}>
          <Text style={LoginStyles.label}>Username</Text>
          <TextInput
            style={LoginStyles.formFieldInput}
            onChangeText={handleUsernameChange}
            value={username}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
        </View>
        <View style={LoginStyles.formField}>
          <Text style={LoginStyles.label}>Password</Text>
          <TextInput
            style={LoginStyles.formFieldInput}
            secureTextEntry
            onChangeText={handlePasswordChange}
            value={password}
          />
        </View>
        <Button style={LoginStyles.loginButton} onClick={handleSubmit} isDisabled={!ready}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default Login;
