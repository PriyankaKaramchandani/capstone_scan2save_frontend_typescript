import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Platform, Image, Alert, BackHandler } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
// import RNPrint from 'react-native-print';
// import RNFS from 'react-native-fs';


type QRCodeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'generateQrCode'>;
type QRCodeScreenRouteProp = RouteProp<RootStackParamList, 'generateQrCode'>;

const QRCodeScreen: React.FC = () => {
  const navigation = useNavigation<QRCodeScreenNavigationProp>();
  const route = useRoute<QRCodeScreenRouteProp>();
  const { qrCodeData } = route.params || {};
  
  const [loading, setLoading] = useState(true);

  // const downloadQRCode = async () => {
  //   //Logic to download the QR code
  //   try {
  //     const path = `${RNFS.DocumentDirectoryPath}/qr_code.png`;
  //     await RNFS.writeFile(path, qrCodeData, 'base64');
  //     Alert.alert('Download', `QR Code downloaded successfully to ${path}`);
  //   } catch (error) {
  //     console.error('Error downloading QR Code:', error);
  //     Alert.alert('Error', 'Failed to download QR Code');
  //   }
  // };

  // const printQRCode = async () => {
  //   try {
  //     await RNPrint.print({
  //       html: `<img src="data:image/png;base64,${qrCodeData}" style="width: 100%; height: auto;" />`,
  //     });
  //     Alert.alert('Print', 'QR Code printed successfully');
  //   } catch (error) {
  //     console.error('Error printing QR Code:', error);
  //     Alert.alert('Error', 'Failed to print QR Code');
  //   }
  // };

  const closeApplication = () => {
    Alert.alert(
      "Exit App",
      "Are you sure you want to exit?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => BackHandler.exitApp() }
      ]
    );
  };

  useEffect(() => {
    // API call to generate QR code
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
          {qrCodeData ? (
            <Image source={{ uri: `data:image/png;base64,${qrCodeData}` }} style={styles.qrCode} />
          ) : (
            <Text style={styles.loadingText}>No QR Code data available</Text>
          )}

          <View style={styles.buttonsContainer}>
            {/* <TouchableOpacity style={styles.button} onPress={downloadQRCode}> */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Download QR Code</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={styles.button} onPress={printQRCode}> */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Print QR Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
              <Text style={styles.buttonText}>Back Home</Text>
            </TouchableOpacity>
            </View>
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
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 20,
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