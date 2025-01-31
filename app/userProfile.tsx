import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type UserProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'userProfile'>;

interface UserProfileProps {
  navigation: UserProfileScreenNavigationProp;
}

const userProfile: React.FC = () => {
  const navigation = useNavigation<UserProfileScreenNavigationProp>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [otherGender, setOtherGender] = useState('');
  const [role, setRole] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyFirstName, setEmergencyFirstName] = useState('');
  const [emergencyLastName, setEmergencyLastName] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>User Profile</Text>

        <Text style={styles.label}>Your Name</Text>
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.halfInput}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={gender}
              onChangeText={setGender}
            />
            {gender === 'other' && (
              <TextInput
                style={styles.input}
                placeholder="Please specify"
                value={otherGender}
                onChangeText={setOtherGender}
              />
            )}
          </View>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Role</Text>
            <TextInput
              style={styles.input}
              placeholder="Role"
              value={role}
              onChangeText={setRole}
            />
          </View>
        </View>

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />

        <Text style={styles.label}>Emergency Contact</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="First Name"
            value={emergencyFirstName}
            onChangeText={setEmergencyFirstName}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Last Name"
            value={emergencyLastName}
            onChangeText={setEmergencyLastName}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={emergencyPhoneNumber}
          onChangeText={setEmergencyPhoneNumber}
          keyboardType="phone-pad"
        />
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('medicalProfile')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Image source={require('../assets/images/footer.png')} style={styles.footer} resizeMode="contain" />
      </View>
    </>
  );
};

export default userProfile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#EF476F',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '50%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  halfInput: {
    width: '45%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#EF476F',
    alignItems: 'center',
  },
  button: {
    width: '30%',
    backgroundColor: '#FFF8EF',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
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
});
