import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from './screens';
import { AppRootScreens } from './lib/navigation';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name={AppRootScreens.Login} component={LoginScreen} />
        <Stack.Screen name={AppRootScreens.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
