import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/home';
import Login from './app/login'; 
import SignUp from './app/signUp';
import successSignUp from './app/successSignUp';
import Form from './app/Form';
import { RootStackParamList } from './types';
import generateQrCode from './app/generateQrCode';
import UserProfileScreen from './app/UserProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="signUp" component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="successSignUp" component={successSignUp} options={{ title: 'successSignUp' }} />
        <Stack.Screen name="form" component={Form} options={{ title: 'Form' }} />
        <Stack.Screen name="generateQrCode" component={generateQrCode} options={{ title: 'generateQrCode' }} />
        <Stack.Screen name="userProfileScreen" component={UserProfileScreen} options={{ title: 'userProfileScreen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



