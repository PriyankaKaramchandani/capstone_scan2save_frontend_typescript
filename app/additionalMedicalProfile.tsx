import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type AdditionalMedicalProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'userProfile'>;

const additionalMedicalProfile: React.FC = () => {
  const navigation = useNavigation<AdditionalMedicalProfileScreenNavigationProp>();

  const [bloodGroup, setBloodGroup] = useState('');
  const [allergies, setAllergies] = useState('');
  const [doNotResuscitate, setDoNotResuscitate] = useState('no');
  const [organDonorStatus, setOrganDonorStatus] = useState('');
  const [pregnant, setPregnant] = useState('no');
  const [pastSurgeries, setPastSurgeries] = useState('');
  const [medications, setMedications] = useState('');
  const [preferredHospital, setPreferredHospital] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Additional Medical Profile</Text>
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
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('generateQrCode')}>
          <Text style={styles.buttonText}>Generate QR Code</Text>
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

export default additionalMedicalProfile;

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