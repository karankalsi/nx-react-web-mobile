import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginNavParams, HomeNavParams } from '../../screens';

export enum AppRootScreens {
  Login = 'Login',
  Home = 'Home'
}

export type AppStackNavigatorParamList = {
  Login: LoginNavParams;
  Home: HomeNavParams;
};

export type AppNavigator =
  NativeStackNavigationProp<AppStackNavigatorParamList>;
