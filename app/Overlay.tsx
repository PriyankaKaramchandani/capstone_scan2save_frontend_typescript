import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overlay: React.FC = () => {
  return (
    <View style={styles.overlayContainer}>
      <View style={styles.topOverlay} />
      <View style={styles.middleOverlay}>
        <View style={styles.sideOverlay} />
        <View style={styles.frame} />
        <View style={styles.sideOverlay} />
      </View>
      <View style={styles.bottomOverlay}>
        <Text style={styles.overlayText}>Align the QR code within the frame to scan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topOverlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  middleOverlay: {
    flexDirection: 'row',
  },
  sideOverlay: {
    flex: 1,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  frame: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  bottomOverlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Overlay;