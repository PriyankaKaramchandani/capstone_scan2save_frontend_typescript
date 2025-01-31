import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FormScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'form'>;

const Form: React.FC = () => {
  const navigation = useNavigation<FormScreenNavigationProp>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [role] = useState('New User');
  const [bloodGroup, setBloodGroup] = useState('');
  const [allergies, setAllergies] = useState('');
  const [doNotResuscitate, setDoNotResuscitate] = useState('');
  const [organDonorStatus, setOrganDonorStatus] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [pastSurgeries, setPastSurgeries] = useState('');
  const [medications, setMedications] = useState('');
  const [preferredHospital, setPreferredHospital] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [dateOfBirthError, setDateOfBirthError] = useState('');
  const [showErrorIndicator, setShowErrorIndicator] = useState(false);

  const validateFields = () => {
    let valid = true;
    if (!firstName) {
      setFirstNameError('First name is required');
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('Last name is required');
      valid = false;
    } else {
      setLastNameError('');
    }

    if (!dateOfBirth) {
      setDateOfBirthError('Date of birth is required');
      valid = false;
    } else {
      setDateOfBirthError('');
    }

    setShowErrorIndicator(!valid);
    return valid;
  };

  const handleGenerateQRCode = () => {
    if (validateFields()) {
      // Proceed with generating the QR code
      console.log('Profile is valid, proceed with generating QR code');
      navigation.navigate('generateQrCode');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#A9A9A9"
        value={firstName}
        onChangeText={setFirstName}
      />
      {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#A9A9A9"
        value={lastName}
        onChangeText={setLastName}
      />
      {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        placeholderTextColor="#A9A9A9"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      {dateOfBirthError ? <Text style={styles.errorText}>{dateOfBirthError}</Text> : null}

      <Text style={styles.label}>Role</Text>
      <TextInput
        style={styles.input}
        value={role}
        editable={false}
      />

      <Text style={styles.header}>Medical Profile</Text>
      <Text style={styles.label}>Blood Group</Text>
      <TextInput
        style={styles.input}
        placeholder="Blood Group"
        placeholderTextColor="#A9A9A9"
        value={bloodGroup}
        onChangeText={setBloodGroup}
      />

      <Text style={styles.label}>Allergies</Text>
      <TextInput
        style={styles.input}
        placeholder="Allergies"
        placeholderTextColor="#A9A9A9"
        value={allergies}
        onChangeText={setAllergies}
      />

      <Text style={styles.label}>Do Not Resuscitate</Text>
      <TextInput
        style={styles.input}
        placeholder="Yes or No"
        placeholderTextColor="#A9A9A9"
        value={doNotResuscitate}
        onChangeText={setDoNotResuscitate}
      />

      <Text style={styles.label}>Organ Donor Status</Text>
      <TextInput
        style={styles.input}
        placeholder="Organ Donor Status"
        placeholderTextColor="#A9A9A9"
        value={organDonorStatus}
        onChangeText={setOrganDonorStatus}
      />

      <Text style={styles.label}>Pregnant</Text>
      <TextInput
        style={styles.input}
        placeholder="Yes or No"
        placeholderTextColor="#A9A9A9"
        value={pregnant}
        onChangeText={setPregnant}
      />

      <Text style={styles.label}>Past Surgeries</Text>
      <TextInput
        style={styles.input}
        placeholder="Past Surgeries"
        placeholderTextColor="#A9A9A9"
        value={pastSurgeries}
        onChangeText={setPastSurgeries}
      />

      <Text style={styles.label}>Medications</Text>
      <TextInput
        style={styles.input}
        placeholder="Medications"
        placeholderTextColor="#A9A9A9"
        value={medications}
        onChangeText={setMedications}
      />

      <Text style={styles.label}>Preferred Hospital</Text>
      <TextInput
        style={styles.input}
        placeholder="Preferred Hospital"
        placeholderTextColor="#A9A9A9"
        value={preferredHospital}
        onChangeText={setPreferredHospital}
      />

      <Text style={styles.label}>Special Instructions</Text>
      <TextInput
        style={styles.input}
        placeholder="Special Instructions"
        placeholderTextColor="#A9A9A9"
        value={specialInstructions}
        onChangeText={setSpecialInstructions}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>
        {showErrorIndicator && (
            <Text style={styles.errorIndicator}>Missing Information!</Text>
          )}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('successSignUp')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Form;

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
    marginBottom: 5,
    color: '#000000',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  errorText: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 10,
  },
  errorIndicator: {
    color: 'blue', 
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFF8EF',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    marginBottom: 10,
    width: '40%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});