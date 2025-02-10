import { CameraView } from 'expo-camera';
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, ActivityIndicator, AppState } from 'react-native';
import Overlay from "./Overlay";
import React, { useEffect, useState , useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { getUserProfile } from '../services/api';

type ScanningPageScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'scanningPage'>;

const ScanningPage: React.FC = () => {
    const navigation = useNavigation<ScanningPageScreenNavigationProp>();

    const [userId, setUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [userProfile, setUserProfile] = useState<any>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!userId) return; 
            
            setLoading(true);
            try {
                const response = await getUserProfile(userId);
                const { user_data, medical_profiles } = response;

                setUserProfile({
                    user_data,
                    medical_profile: medical_profiles[0] || {},
                    link: {
                        color: '#1E90FF',
                        textDecorationLine: 'underline',
                    },
                });

                // Navigate to user profile screen
                navigation.navigate('userProfileScreen', { userId });

            } catch (error) {
                console.error("Error fetching user profile:", error);
                setUserProfile(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId]); 

    const handleQrCodeScanned = ({ data }: { data: string }) => {
        console.log("Scanned QR Code data:", data);
    
        try {
            // Extract the userId from the URL
            const url = new URL(data);
            const extractedUserId = url.pathname.split('/').pop(); // Get last part of the path
            
            console.log("Extracted userId:", extractedUserId);
    
            if (extractedUserId) {
                setUserId(extractedUserId); // Update state to trigger useEffect
            } else {
                console.error('Invalid userId:', extractedUserId);
            }
        } catch (error) {
            console.error("Error parsing URL:", error);
        }
    };
    
    const qrlLock = useRef(false);
    const appState = useRef(AppState.currentState);

    useEffect(() => { 
        const subscription = AppState.addEventListener("change", (nextAppState) => {
            if (appState.current.match(/inactive|background/) && 
            nextAppState === 'active'
        ) {
                qrlLock.current = false;
            }
        appState.current = nextAppState;
        });
        return () => {
            subscription.remove();
        }
    }, []);

    return (
        <SafeAreaView style={StyleSheet.absoluteFillObject}>
            {Platform.OS === "android" ? <StatusBar hidden /> : null}
            <CameraView 
                style={StyleSheet.absoluteFillObject} 
                facing="back"
                onBarcodeScanned={(event) => {
                    if(event.data && !qrlLock.current) {
                    // console.log("QR Code scanned event:", event);
                    setTimeout(async () => {
                        handleQrCodeScanned(event);
                    }, 500);
                }}
            }
            />
            <Overlay />
            {loading && <ActivityIndicator style={styles.loading} />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    loading: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },
});

export default ScanningPage;




