import React from 'react';
import { Button } from '@nx-react-web-mobile/ui-mobile';
import { Svgs } from '@nx-react-web-mobile/ui-res';
import { Text, TextInput, View } from 'react-native';
import LoginStyles from './Login.styles';
import { useAppNavigation } from '../../lib/navigation';

const Login: React.FC = () => {
  const navigation = useAppNavigation();
  const handleLoginClick = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.loginForm}>
        <Svgs.UserAvatar style={LoginStyles.userAvatar} />
        <View style={LoginStyles.formField}>
          <Text style={LoginStyles.label}>Username</Text>
          <TextInput style={LoginStyles.formFieldInput} />
        </View>
        <View style={LoginStyles.formField}>
          <Text style={LoginStyles.label}>Password</Text>
          <TextInput style={LoginStyles.formFieldInput} secureTextEntry />
        </View>
        <Button style={LoginStyles.loginButton} onClick={handleLoginClick}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default Login;
