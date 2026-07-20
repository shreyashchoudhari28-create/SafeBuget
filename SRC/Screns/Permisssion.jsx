import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  Dimensions
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

 const Permisssion=()=> {
  const [modalVisible, setModalVisible] = useState(false);
  const [permissionType, setPermissionType] = useState('');

  const requestPermission = (type) => {
    setPermissionType(type);
    setModalVisible(true);
  };

  const handleModalAction = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />

        <View style={styles.contentContainer}>
          <View style={styles.graphicContainer}>
            <View style={styles.mapBackground}>
              <View style={styles.pinLeft}>
                <Ionicons name="location" size={20} color="#FF6B6B" />
              </View>
              <View style={styles.pinRight}>
                <Ionicons name="location" size={20} color="#2ECC71" />
              </View>
              <View style={styles.shieldContainer}>
                <Ionicons name="shield-checkmark" size={55} color="#FFFFFF" />
              </View>
            </View>
          </View>

          <Text style={styles.title}>Allow Permissions</Text>
          <Text style={styles.subtitle}>
            We need access to your location for real-time safety, fares and alerts.
          </Text>

          <View style={styles.listContainer}>
            <TouchableOpacity 
              style={styles.permissionRow} 
              activeOpacity={0.7}
              onPress={() => requestPermission('Location')}
            >
              <View style={styles.iconWrapperBlue}>
                <Ionicons name="location-sharp" size={22} color="#3897F5" />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.permissionTitle}>Location Access</Text>
                <Text style={styles.permissionDesc}>Allow location for safety & fare</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.permissionRow} 
              activeOpacity={0.7}
              onPress={() => requestPermission('Notifications')}
            >
              <View style={styles.iconWrapperBlue}>
                <Ionicons name="notifications" size={22} color="#3897F5" />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.permissionTitle}>Notifications</Text>
                <Text style={styles.permissionDesc}>Get real-time alerts</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            activeOpacity={0.8}
            onPress={() => requestPermission('Location & Notifications')}
          >
            <Text style={styles.primaryButtonText}>Allow All</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton}
            activeOpacity={0.6}
          >
            <Text style={styles.secondaryButtonText}>Maybe Later</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Allow "SafeBudget" to access this device's {permissionType}?
              </Text>
              
              <View style={styles.modalDivider} />
              
              <TouchableOpacity 
                style={styles.modalButton} 
                onPress={handleModalAction}
              >
                <Text style={styles.modalButtonTextBold}>While using the app</Text>
              </TouchableOpacity>
              
              <View style={styles.modalDivider} />
              
              <TouchableOpacity 
                style={styles.modalButton} 
                onPress={handleModalAction}
              >
                <Text style={styles.modalButtonTextBold}>Only this time</Text>
              </TouchableOpacity>
              
              <View style={styles.modalDivider} />
              
              <TouchableOpacity 
                style={styles.modalButton} 
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonTextRegular}>Don't allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Permisssion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'space-between',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
  },
  graphicContainer: {
    width: 200,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  mapBackground: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#1E1E1E',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
  shieldContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3897F5', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#3897F5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  pinLeft: {
    position: 'absolute',
    left: 15,
    top: 40,
    opacity: 0.8,
  },
  pinRight: {
    position: 'absolute',
    right: 15,
    bottom: 40,
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
    marginBottom: 35,
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 4,
  },
  permissionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
  iconWrapperBlue: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(56, 151, 245, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textWrapper: {
    flex: 1,
  },
  permissionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  permissionDesc: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#3897F5',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  secondaryButtonText: {
    color: '#3897F5',
    fontSize: 14,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: '#252525',
    borderRadius: 14,
    overflow: 'hidden',
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '600',
    padding: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight: 22,
  },
  modalDivider: {
    height: 1,
    backgroundColor: '#3D3D3D',
  },
  modalButton: {
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252525',
  },
  modalButtonTextBold: {
    color: '#2F95DC',
    fontSize: 17,
    fontWeight: '600',
  },
  modalButtonTextRegular: {
    color: '#FF4A4A',
    fontSize: 17,
    fontWeight: '400',
  },
});