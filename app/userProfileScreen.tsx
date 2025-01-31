import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import axios from 'axios';

type UserProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'userProfile'>;

interface UserProfileProps {
    navigation: UserProfileScreenNavigationProp;
    }

const UserProfileScreen: React.FC = () => {
  const navigation = useNavigation<UserProfileScreenNavigationProp>();

  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('https://api.example.com/user-profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (!userProfile) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load user profile.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Text style={styles.label}>First Name</Text>
      <Text style={styles.value}>{userProfile.firstName}</Text>
      <Text style={styles.label}>Last Name</Text>
      <Text style={styles.value}>{userProfile.lastName}</Text>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.value}>{userProfile.email}</Text>
      <Text style={styles.label}>Phone Number</Text>
      <Text style={styles.value}>{userProfile.phoneNumber}</Text>
      <Text style={styles.label}>Blood Group</Text>
      <Text style={styles.value}>{userProfile.bloodGroup}</Text>
      <Text style={styles.label}>Allergies</Text>
      <Text style={styles.value}>{userProfile.allergies}</Text>
      <Text style={styles.label}>Do Not Resuscitate</Text>
      <Text style={styles.value}>{userProfile.doNotResuscitate ? 'Yes' : 'No'}</Text>
      <Text style={styles.label}>Organ Donor Status</Text>
      <Text style={styles.value}>{userProfile.organDonorStatus}</Text>
      <Text style={styles.label}>Pregnant</Text>
      <Text style={styles.value}>{userProfile.pregnant ? 'Yes' : 'No'}</Text>
      <Text style={styles.label}>Past Surgeries</Text>
      <Text style={styles.value}>{userProfile.pastSurgeries}</Text>
      <Text style={styles.label}>Medications</Text>
      <Text style={styles.value}>{userProfile.medications}</Text>
      <Text style={styles.label}>Preferred Hospital</Text>
      <Text style={styles.value}>{userProfile.preferredHospital}</Text>
      <Text style={styles.label}>Special Instructions</Text>
      <Text style={styles.value}>{userProfile.specialInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Edit Profile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserProfileScreen;

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
    color: '#FFF',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFF',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#FFF',
  },
  loadingText: {
    fontSize: 18,
    color: '#FFF',
  },
  errorText: {
    fontSize: 18,
    color: '#FFF',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFF8EF',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});