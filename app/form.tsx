import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { createNewUserProfile } from '../services/api';

type FormScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'form'>;

interface FormProps {
  navigation: FormScreenNavigationProp;
}

const Form: React.FC<FormProps> = () => {
  const navigation = useNavigation<FormScreenNavigationProp>();
  console.log('navigation:', navigation);

  const [formFields, setFormFields] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    phoneNumber: '',
    role: 'new_user',
    blood_group: '',
    allergies: '',
    do_not_resuscitate: '',
    organ_donor_status: '',
    pregnant: '',
    past_surgeries: '',
    medications: '',
    preferred_hospital: '',
    special_instructions: '',
    emergency_contact: {
      first_name: '',
      last_name: '',
      phone_number: '',
    },
    QRCode: {
      qr_code_type: '',
    },
  });

  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
  });

  const validateFields = () => {
    let valid = true;
    const newErrors = { first_name: '', last_name: '', date_of_birth: '' };

    if (!formFields.first_name) {
      newErrors.first_name = 'First name is required';
      valid = false;
    }
    if (!formFields.last_name) {
      newErrors.last_name = 'Last name is required';
      valid = false;
    }
    if (!formFields.date_of_birth) {
      newErrors.date_of_birth = 'Date of birth is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }
    // Set default QR Code Type if empty
    if (!formFields.QRCode.qr_code_type) {
      setFormFields({
        ...formFields,
        QRCode: {
          ...formFields.QRCode,
          qr_code_type: 'emergency',
        },
      });
    }

    try {
      const response = await createNewUserProfile(formFields);
      console.log('Profile created:', response);
      if(response && response.message === 'New user created successfully') {
        Alert.alert('Success', 'Profile created successfully');
        // navigation.navigate('userProfileScreen', { userId: response.user_data.user_id });
        navigation.navigate('generateQrCode', { qrCodeData: response.qr_code_base64 });
      }
    } catch (error) {
      console.error('Error creating profile:', error);
      Alert.alert('Error', 'Failed to create profile');
    }
  };

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleEmergencyContactChange = (name: string, value: string) => {
    setFormFields({
      ...formFields,
      emergency_contact: {
        ...formFields.emergency_contact,
        [name]: value,
      },
    });
  };

  const handleQRCodeChange = (name: string, value: string) => {
    setFormFields({
      ...formFields,
      QRCode: {
        ...formFields.QRCode,
        [name]: value,
      },
    });
  };

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 0 }}>
      <View style={styles.formContainer}>
      <Text style={styles.header}>Create your Profile</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={formFields.first_name}
          onChangeText={(value) => handleInputChange('first_name', value)}
        />
        {errors.first_name ? <Text style={styles.error}>{errors.first_name}</Text> : null}

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={formFields.last_name}
          onChangeText={(value) => handleInputChange('last_name', value)}
        />
        {errors.last_name ? <Text style={styles.error}>{errors.last_name}</Text> : null}

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          value={formFields.date_of_birth}
          onChangeText={(value) => handleInputChange('date_of_birth', value)}
        />
        {errors.date_of_birth ? <Text style={styles.error}>{errors.date_of_birth}</Text> : null}

        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          value={formFields.gender}
          onChangeText={(value) => handleInputChange('gender', value)}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formFields.phoneNumber}
          onChangeText={(value) => handleInputChange('phoneNumber', value)}
        />

        <Text style={styles.label}>Blood Group</Text>
        <TextInput
          style={styles.input}
          value={formFields.blood_group}
          onChangeText={(value) => handleInputChange('blood_group', value)}
        />

        <Text style={styles.label}>Allergies</Text>
        <TextInput
          style={styles.input}
          value={formFields.allergies}
          onChangeText={(value) => handleInputChange('allergies', value)}
        />

        <Text style={styles.label}>Do Not Resuscitate</Text>
        <TextInput
          style={styles.input}
          value={formFields.do_not_resuscitate.toString()}
          onChangeText={(value) => handleInputChange('do_not_resuscitate', value)}
        />

        <Text style={styles.label}>Organ Donor Status</Text>
        <TextInput
          style={styles.input}
          value={formFields.organ_donor_status.toString()}
          onChangeText={(value) => handleInputChange('organ_donor_status', value)}
        />

        <Text style={styles.label}>Pregnant</Text>
        <TextInput
          style={styles.input}
          value={formFields.pregnant}
          onChangeText={(value) => handleInputChange('pregnant', value)}
        />

        <Text style={styles.label}>Past Surgeries</Text>
        <TextInput
          style={styles.input}
          value={formFields.past_surgeries}
          onChangeText={(value) => handleInputChange('past_surgeries', value)}
        />

        <Text style={styles.label}>Medications</Text>
        <TextInput
          style={styles.input}
          value={formFields.medications}
          onChangeText={(value) => handleInputChange('medications', value)}
        />

        <Text style={styles.label}>Preferred Hospital</Text>
        <TextInput
          style={styles.input}
          value={formFields.preferred_hospital}
          onChangeText={(value) => handleInputChange('preferred_hospital', value)}
        />

        <Text style={styles.label}>Special Instructions</Text>
        <TextInput
          style={styles.input}
          value={formFields.special_instructions}
          onChangeText={(value) => handleInputChange('special_instructions', value)}
        />

        <Text style={styles.label}>Emergency Contact First Name</Text>
        <TextInput
          style={styles.input}
          value={formFields.emergency_contact.first_name}
          onChangeText={(value) => handleEmergencyContactChange('first_name', value)}
        />

        <Text style={styles.label}>Emergency Contact Last Name</Text>
        <TextInput
          style={styles.input}
          value={formFields.emergency_contact.last_name}
          onChangeText={(value) => handleEmergencyContactChange('last_name', value)}
        />

        <Text style={styles.label}>Emergency Contact Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formFields.emergency_contact.phone_number}
          onChangeText={(value) => handleEmergencyContactChange('phone_number', value)}
        />

        <Text style={styles.label}>QR Code Type</Text>
        <TextInput
          style={styles.input}
          value={formFields.QRCode.qr_code_type}
          onChangeText={(value) => handleQRCodeChange('qr_code_type', value)}
        />
        {Object.values(errors).some(error => error) && (
          <Text style={styles.errorIndicator}>Missing Fields!</Text>
          )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    padding: 15,
    backgroundColor: '#06D6A0',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'blue',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'blue', 
    marginBottom: 10,
  },
  errorIndicator: {
    color: 'blue',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default Form;




// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../types';
// import { createNewUserProfile } from '../services/api';


// type FormScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'form'>;

// const Form: React.FC = () => {
//   const navigation = useNavigation<FormScreenNavigationProp>();

//   const [formFields, setFormFields] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     phoneNumber: '',
//     role: 'new_user',
//     bloodGroup: '',
//     allergies: '',
//     doNotResuscitate: '',
//     organDonorStatus: '',
//     pregnant: '',
//     pastSurgeries: '',
//     medications: '',
//     preferredHospital: '',
//     specialInstructions: '',
//   });

//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//   });

//   const validateFields = () => {
//     let valid = true;
//     const newErrors = { firstName: '', lastName: '', dateOfBirth: '' };

//     if (!formFields.firstName) {
//       newErrors.firstName = 'First name is required';
//       valid = false;
//     }

//     if (!formFields.lastName) {
//       newErrors.lastName = 'Last name is required';
//       valid = false;
//     }

//     if (!formFields.dateOfBirth) {
//       newErrors.dateOfBirth = 'Date of birth is required';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleGenerateQRCode = async () => {
//     if (validateFields()) {
//       try {
//         console.log(formFields);
//         const response = await createNewUserProfile(formFields);
//         Alert.alert('Success', 'New user created successfully');
//         navigation.navigate('generateQrCode', { qrCodeData: response.qr_code_base64 });
//         } catch (error) {
//         console.error('Error creating new user profile:', error);
//         Alert.alert('Error', 'Failed to create new user');
//         }
//       }
//   };

//   const handleChange = (name: string, value: string) => {
//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <KeyboardAvoidingView 
//     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     style={styles.container}
//     keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
        
//         <View style={styles.formContainer}>
//         <Text style={styles.header}>User Profile</Text>
//         <Text style={styles.label}>First Name</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.firstName}
//             onChangeText={(text) => handleChange('firstName', text)}
//         />
//         {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}

//         <Text style={styles.label}>Last Name</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.lastName}
//             onChangeText={(text) => handleChange('lastName', text)}
//         />
//         {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}

//         <Text style={styles.label}>Date of Birth</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Date of Birth"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.dateOfBirth}
//             onChangeText={(text) => handleChange('dateOfBirth', text)}
//         />
//         {errors.dateOfBirth ? <Text style={styles.errorText}>{errors.dateOfBirth}</Text> : null}

//         <Text style={styles.label}>Role</Text>
//         <TextInput
//             style={styles.input}
//             value={formFields.role}
//             editable={false}
//         />

//         <Text style={styles.header}>Medical Profile</Text>
//         <Text style={styles.label}>Blood Group</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Blood Group"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.bloodGroup}
//             onChangeText={(text) => handleChange('bloodGroup', text)}
//         />

//         <Text style={styles.label}>Allergies</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Allergies"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.allergies}
//             onChangeText={(text) => handleChange('allergies', text)}
//         />

//         <Text style={styles.label}>Do Not Resuscitate</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Yes or No"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.doNotResuscitate}
//             onChangeText={(text) => handleChange('doNotResuscitate', text)}
//         />

//         <Text style={styles.label}>Organ Donor Status</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Organ Donor Status"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.organDonorStatus}
//             onChangeText={(text) => handleChange('organDonorStatus', text)}
//         />

//         <Text style={styles.label}>Pregnant</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Yes or No"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.pregnant}
//             onChangeText={(text) => handleChange('pregnant', text)}
//         />

//         <Text style={styles.header}>Additional Medical Profile</Text>
//         <Text style={styles.label}>Past Surgeries</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Past Surgeries"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.pastSurgeries}
//             onChangeText={(text) => handleChange('pastSurgeries', text)}
//         />

//         <Text style={styles.label}>Medications</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Medications"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.medications}
//             onChangeText={(text) => handleChange('medications', text)}
//         />

//         <Text style={styles.label}>Preferred Hospital</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Preferred Hospital"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.preferredHospital}
//             onChangeText={(text) => handleChange('preferredHospital', text)}
//         />

//         <Text style={styles.label}>Special Instructions</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Special Instructions"
//             placeholderTextColor="#A9A9A9"
//             value={formFields.specialInstructions}
//             onChangeText={(text) => handleChange('specialInstructions', text)}
//         />

//         <View style={styles.buttonContainer}>
//             <View style={styles.buttonWrapper}>
//             <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
//                 <Text style={styles.buttonText}>Generate QR Code</Text>
//             </TouchableOpacity>
//             {Object.values(errors).some(error => error) && (
//                 <Text style={styles.errorIndicator}>Missing Fields!</Text>
//             )}
//             </View>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
//             <Text style={styles.buttonText}>Back</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
//             <Text style={styles.buttonText}>Back to Home</Text>
//             </TouchableOpacity>
//             </View>
//         </View>
//         </ScrollView>
//         </KeyboardAvoidingView>
//   );
// };

// export default Form;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#EF476F',
//     },
//     formContainer: {
//         backgroundColor: '#EF476F',
//         padding: 20,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 3,
//       },
//     scrollContainer: {
//       padding: 16,
//       flexGrow: 1,
//     },
//     header: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginBottom: 20,
//       textAlign: 'center',
//       color: '#000000',
//     },
//     label: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginBottom: 5,
//       color: '#000000',
//     },
//     input: {
//       backgroundColor: '#FFF',
//       padding: 10,
//       borderRadius: 5,
//       marginBottom: 10,
//       borderWidth: 1,
//       borderColor: '#000',
//     },
//     errorText: {
//       fontSize: 14,
//       color: 'blue', 
//       marginBottom: 10,
//     },
//     buttonContainer: {
//       marginTop: 20,
//       alignItems: 'center',
//     },
//     buttonWrapper: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       width: '100%', 
//       justifyContent: 'center', 
//     },
//     button: {
//       backgroundColor: '#FFF8EF',
//       padding: 10,
//       borderRadius: 5,
//       borderWidth: 1,
//       borderColor: '#000',
//       alignItems: 'center',
//       marginBottom: 10,
//       width: '80%', 
//     },
//     buttonText: {
//       color: '#000',
//       fontWeight: 'bold',
//     },
//     errorIndicator: {
//       color: 'blue',
//       fontSize: 14,
//       marginLeft: 10,
//     },
//   });

