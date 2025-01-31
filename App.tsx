import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/home';
import Login from './app/login'; 
import SignUp from './app/signUp';
import { RootStackParamList } from './types';
import userProfile from './app/userProfile';
import medicalProfile from './app/medicalProfile';
import additionalmedicalProfile from './app/additionalMedicalProfile';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="signUp" component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="userProfile" component={userProfile} options={{ title: 'userProfile' }} />
        <Stack.Screen name="medicalProfile" component={medicalProfile} options={{ title: 'medicalProfile' }} />
        <Stack.Screen name="additionalmedicalProfile" component={additionalmedicalProfile} options={{ title: 'additionalmedicalProfile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

additionalmedicalProfile

