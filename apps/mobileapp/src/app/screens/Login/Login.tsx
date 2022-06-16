import { Button } from '@nx-react-web-mobile/ui-mobile';
import { Images } from '@nx-react-web-mobile/ui-token';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import LoginStyles from './Login.styles';

const Login: React.FC = () => {
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.loginForm}>
        <Images.UserAvatar style={LoginStyles.userAvatar} />
        <View style={LoginStyles.formField}>
          <Text style={LoginStyles.label}>Username</Text>
          <TextInput style={LoginStyles.formFieldInput} />
        </View>
        <View style={LoginStyles.formField}>
          <Text style={LoginStyles.label}>Password</Text>
          <TextInput style={LoginStyles.formFieldInput} secureTextEntry />
        </View>
        <Button style={LoginStyles.loginButton}>Login</Button>
      </View>
    </View>
  );
};

export default Login;
