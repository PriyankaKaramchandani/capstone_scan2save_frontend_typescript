import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type SuccessSignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'successSignUp'>;

interface SuccessSignUpProps {
    navigation: SuccessSignUpScreenNavigationProp;
}

const successSignUp: React.FC = () => {
    const navigation = useNavigation<SuccessSignUpScreenNavigationProp>();

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Success!</Text>
                <Text style={styles.text}>You have signed up.</Text>
                <Text style={styles.explanation}>
                    This app is used for emergency purposes. Once you create your user and medical profile, a QR code will be generated. You can download and save this QR code for emergency situations.
                </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('form')}>
                    <Text style={styles.buttonText}>Create Your Profile</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.footerContainer}>
                <Image source={require('../assets/images/footer.png')} style={styles.footer} resizeMode="contain" />
            </View>
        </>
    );
};

export default successSignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF476F',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000',
      },
      explanation: {
        fontSize: 16,
        marginBottom: 20,
        color: '#000000',
        textAlign: 'center',
      },
    text: {
        fontSize: 24,
        color: '#000000',
        marginBottom: 150,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        width: '50%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
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


