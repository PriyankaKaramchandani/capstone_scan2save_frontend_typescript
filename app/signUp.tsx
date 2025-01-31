import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'signUp'>;

// Define the props for the SignUp component
interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUp: React.FC<SignUpProps> = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = () => {
    // Basic validation
    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }
    // Call authentication API or validation here
    // If successful, navigate to another screen
    // navigation.navigate('CreateProfile'); // Ensure 'CreateProfile' exists in RouteStackParamList
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up Page</Text>
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
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('userProfile')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Image source={require('../assets/images/footer.png')} style={styles.footer} resizeMode="contain" />
      </View>
    </>
  );
};

export default SignUp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF476F',
    padding: 20,
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#EF476F',
    marginTop: 'auto',
  },
  footer: {
    width: '100%',
    height: 88,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFF8EF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#000000',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  backButton: {
    marginLeft: 10, 
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
}
});

