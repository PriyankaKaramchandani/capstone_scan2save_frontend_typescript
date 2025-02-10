import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image, ScrollView, Platform, KeyboardAvoidingView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { getUserProfile } from '../services/api';

type UserProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'userProfileScreen'>;
type UserProfileScreenRouteProp = RouteProp<RootStackParamList, 'userProfileScreen'>;


interface UserProfileProps {
    navigation: UserProfileScreenNavigationProp;
    }

const UserProfileScreen: React.FC = () => {
  const navigation = useNavigation<UserProfileScreenNavigationProp>();
  const route = useRoute<UserProfileScreenRouteProp>();

  const { userId } = route.params || {};
  console.log('Route params:', route.params);

  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<any>(null);


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile(userId);
        
        const { user_data, medical_profiles } = response;

        setUserProfile({
          user_data,
        medical_profile: {
          ...medical_profiles[0],
          allergies: medical_profiles[0]?.allergies || [], // Ensure allergies is an array
          past_surgeries: medical_profiles[0]?.past_surgeries || [], // Ensure past_surgeries is an array
          medications: medical_profiles[0]?.medications || [], // Ensure medications is an array
        },
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);
  
  if (loading) {
    return <ActivityIndicator />;
  }

  if (userProfile === null) {
    return <Text>Error fetching user profile</Text>;
  }

    return (
      <>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 0 }}>
        <View style={styles.formContainer}>
        <Text style={styles.header}>Your Profile</Text>
          <Text style={styles.label}>First Name: {userProfile.user_data?.first_name}</Text>
          <Text style={styles.label}>Last Name: {userProfile.user_data?.last_name}</Text>
          <Text style={styles.label}>Date of Birth: {userProfile.user_data?.date_of_birth}</Text>
          <Text style={styles.label}>Gender: {userProfile.user_data?.gender}</Text>
          <Text style={styles.label}>Phone Number: {userProfile.user_data?.phoneNumber}</Text>
          <Text style={styles.label}>Role: {userProfile.user_data?.role}</Text>
          <Text style={styles.label}>Blood Group: {userProfile.medical_profile?.blood_group}</Text>
          <Text style={styles.label}>Allergies: {userProfile.medical_profile?.allergies.length > 0 ? userProfile.medical_profile.allergies.join(', ') : 'None'}</Text>
          <Text style={styles.label}>Do Not Resuscitate: {userProfile.medical_profile?.preferences?.do_not_resuscitate ? 'Yes' : 'No'}</Text>
          <Text style={styles.label}>Organ Donor Status: {userProfile.medical_profile?.preferences?.organ_donor_status ? 'Yes' : 'No'}</Text>
          <Text style={styles.label}>Pregnant: {userProfile.medical_profile?.pregnant}</Text>
          <Text style={styles.label}>Past Surgeries: {userProfile.medical_profile?.past_surgeries.length > 0 ? userProfile.medical_profile.past_surgeries.join(', ') : 'None'}</Text>
          <Text style={styles.label}>Medications: {userProfile.medical_profile?.medications.length > 0 ? userProfile.medical_profile.medications.join(', ') : 'None'}</Text>
          <Text style={styles.label}>Preferred Hospital: {userProfile.medical_profile?.preferred_hospital}</Text>
          <Text style={styles.label}>Special Instructions: {userProfile.medical_profile?.special_instructions}</Text>
          <Text style={styles.label}>QR Code Type: {userProfile.medical_profile?.qr_code_type}</Text>
          <Text style={styles.label}>QR Code:</Text>
          <Image source={{ uri: `data:image/png;base64,${userProfile.user_data?.qr_code_base64}` }} style={styles.qrCode} />
        </View>
      </ScrollView>
      </>
      );
    };


    const styles = StyleSheet.create({
      formContainer: {
      backgroundColor: '#EF476F',
      padding: 20,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      },
      scrollContainer: {
        padding: 16,
        flexGrow: 1,
      },
      header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#000000',
    },
    label: {
      fontSize: 18,
      fontWeight: 'semibold',
      marginBottom: 5,
      color: '#000000',
    },
      qrCode: {
        width: 250,
        height: 250,
        marginBottom: 20,
        alignSelf: 'center',
      },
      link: {
        color: 'navy',
        textDecorationLine: 'underline',
      }
    });

    export default UserProfileScreen;