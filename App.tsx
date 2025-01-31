import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/home';
import Login from './app/login'; 
import SignUp from './app/signUp';
import { RootStackParamList } from './types';
import userProfile from './app/userProfile';
import MedicalProfile from './app/MedicalProfile';
import additionalMedicalProfile from './app/additionalMedicalProfile';
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
        <Stack.Screen name="userProfile" component={userProfile} options={{ title: 'userProfile' }} />
        <Stack.Screen name="medicalProfile" component={MedicalProfile} options={{ title: 'medicalProfile' }} />
        <Stack.Screen name="additionalMedicalProfile" component={additionalMedicalProfile} options={{ title: 'additionalMedicalProfile' }} />
        <Stack.Screen name="generateQrCode" component={generateQrCode} options={{ title: 'generateQrCode' }} />
        <Stack.Screen name="userProfileScreen" component={UserProfileScreen} options={{ title: 'userProfileScreen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



