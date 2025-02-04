import React, { useState, useEffect, useRef } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Alert, Platform, Pressable} from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Camera, CameraType, useCameraPermissions } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScanQRCodeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'scanQrCode'>;

interface ScanQRCodeProps {
    navigation: ScanQRCodeScreenNavigationProp;
}

const ScanQRCode: React.FC<ScanQRCodeProps> = () => {
    const navigation = useNavigation<ScanQRCodeScreenNavigationProp>();

    const [permission, requestPermission] = useCameraPermissions();
    const isPermissionGranted = Boolean(permission?.granted);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Scan QR Code</Text>
            <View style={{ gap: 20 }}>
                <Pressable onPress={requestPermission} style={styles.button}>
                    <Text style={styles.buttonText}>Request Camera Permission</Text>
                </Pressable>
                {/* <Link href={"/scanner"} asChild>
                    <Pressable disabled={isPermissionGranted} style={styles.button}> */}
                    <Pressable onPress={() => navigation.navigate('scanningPage')} style={styles.button} disabled={!isPermissionGranted}>
                        <Text style={[styles.buttonText,
                            {opacity: !isPermissionGranted ? 0.5 : 1},
                        ]}>
                            Scan QR Code
                        </Text>
                    </Pressable>
                {/* </Link> */}

            </View>
        </SafeAreaView>
        );
    };

    


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EF476F',
      },
      header: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
      },
      button: {
        backgroundColor: '#FFF8EF',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
      },
      overlayText: {
        color: '#fff',
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

export default ScanQRCode;
