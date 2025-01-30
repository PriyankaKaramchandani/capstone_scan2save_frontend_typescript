import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/home';
import Login from './app/login';
// import SignUp from './app/signUp';
// import CreateProfile from './app/createProfile';

// Define RouteStackParamList type
type RouteStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  CreateProfile: undefined; 
};

const Stack = createNativeStackNavigator<RouteStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        {/* <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} /> */}
        {/* <Stack.Screen name="CreateProfile" component={CreateProfile} options={{ title: 'Create Profile' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

