import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define RouteStackParamList type
type RouteStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  CreateProfile: undefined;
};

// Define the type for the navigation prop
type LoginScreenNavigationProp = NativeStackNavigationProp<RouteStackParamList, 'Login'>;

// Define the props for the Login component
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }
    // Call authentication API or validation here
    // If successful, navigate to another screen
    navigation.navigate('CreateProfile'); // Ensure 'CreateProfile' exists in RouteStackParamList
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});