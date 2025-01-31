import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
// import axios from 'axios';

type QRCodeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'generateQrCode'>;

const QRCodeScreen: React.FC = () => {
  const navigation = useNavigation<QRCodeScreenNavigationProp>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call to generate QR code
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Text style={styles.loadingText}>Generating QR Code...</Text>
          <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />
        </>
      ) : (
        <>
            <Text style={styles.loadingText}>QR Code generated successfully!</Text>
            // You can add the QR code display logic here
        
          <View style={styles.buttonsContainer}></View>
            <TouchableOpacity style={styles.button} onPress={downloadQRCode}>
                <Text style={styles.buttonText}>Download QR Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
          <View/>
          <View style={styles.footerContainer}>
            <Image source={require('../assets/images/footer.png')} style={styles.footer} resizeMode="contain" />
          </View>
        </>
      )}
    </View>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF476F',
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#FFF',
  },
  activityIndicator: {
    marginTop: 20,
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