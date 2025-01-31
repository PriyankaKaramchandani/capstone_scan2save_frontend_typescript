import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type MedicalProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'userProfile'>;

interface MedicalProfileProps {
  navigation: MedicalProfileScreenNavigationProp;
}

const medicalProfile: React.FC = () => {
  const navigation = useNavigation<MedicalProfileScreenNavigationProp>();

  const [bloodGroup, setBloodGroup] = useState('');
  const [allergies, setAllergies] = useState('');
  const [doNotResuscitate, setDoNotResuscitate] = useState('');
  const [organDonorStatus, setOrganDonorStatus] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [pastSurgeries, setPastSurgeries] = useState('');
  const [medications, setMedications] = useState('');
  const [preferredHospital, setPreferredHospital] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Medical Profile</Text>
        
        <Text style={styles.label}>Blood Group</Text>
        <TextInput
          style={styles.input}
          placeholder="Blood Group"
          value={bloodGroup}
          onChangeText={setBloodGroup}
        />

        <Text style={styles.label}>Allergies</Text>
        <TextInput
          style={styles.input}
          placeholder="Allergies"
          value={allergies}
          onChangeText={setAllergies}
        />

        <Text style={styles.label}>Preferences</Text>
        
        <Text style={styles.label}>Do Not Resuscitate</Text>
        <TextInput
          style={styles.input}
          placeholder="Yes or No"
          value={doNotResuscitate}
          onChangeText={setDoNotResuscitate}
          />
        <Text style={styles.label}>Organ Donor Status</Text>
        <TextInput
          style={styles.input}
          placeholder="Organ Donor Status"
          value={organDonorStatus}
          onChangeText={setOrganDonorStatus}
        />

        <Text style={styles.label}>Pregnant</Text>
        <TextInput
          style={styles.input}
          placeholder="Yes or NO"
          value={pregnant}
          onChangeText={setPregnant}
        />

        <Text style={styles.label}>Past Surgeries</Text>
        <TextInput
          style={styles.input}
          placeholder="Past Surgeries"
          value={pastSurgeries}
          onChangeText={setPastSurgeries}
        />

        <Text style={styles.label}>Medications</Text>
        <TextInput
          style={styles.input}
          placeholder="Medications"
          value={medications}
          onChangeText={setMedications}
        />

        <Text style={styles.label}>Preferred Hospital</Text>
        <TextInput
          style={styles.input}
          placeholder="Preferred Hospital"
          value={preferredHospital}
          onChangeText={setPreferredHospital}
        />

        <Text style={styles.label}>Special Instructions</Text>
        <TextInput
          style={styles.input}
          placeholder="Special Instructions"
          value={specialInstructions}
          onChangeText={setSpecialInstructions}
        />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('userProfile')}>
          <Text style={styles.buttonText}>Back to User Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('additionalmedicalProfile')}>
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

export default medicalProfile;

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
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    width: '30%',
    backgroundColor: '#FFF8EF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footer: {
    width: '100%',
    height: 50,
  },
});