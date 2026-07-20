import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Settingss = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);
  const [notification, setNotification] = useState(true);

  return (
    <View style={styles.container}>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>

          <View style={styles.modalContainer}>

            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="arrow-back" size={28} color="#fff" />
              </TouchableOpacity>

              <Text style={styles.headerText}>Settings</Text>
            </View>

            {/* First Card */}
            <View style={styles.card}>

              <View style={styles.row}>
                <Text style={styles.title}>Dark Mode</Text>

                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: '#767577', true: '#00D26A' }}
                  thumbColor="#fff"
                />
              </View>

              <View style={styles.line} />

              <View style={styles.row}>
                <Text style={styles.title}>Location Access</Text>

                <Switch
                  value={location}
                  onValueChange={setLocation}
                  trackColor={{ false: '#767577', true: '#00D26A' }}
                  thumbColor="#fff"
                />
              </View>

              <View style={styles.line} />

              <View style={styles.row}>
                <Text style={styles.title}>Notifications</Text>

                <Switch
                  value={notification}
                  onValueChange={setNotification}
                  trackColor={{ false: '#767577', true: '#00D26A' }}
                  thumbColor="#fff"
                />
              </View>

              <View style={styles.line} />

              <TouchableOpacity style={styles.row}>
                <Text style={styles.title}>Language</Text>

                <View style={styles.rightRow}>
                  <Text style={styles.subTitle}>English</Text>

                  <Icon
                    name="keyboard-arrow-right"
                    size={25}
                    color="#7E8CA0"
                  />
                </View>
              </TouchableOpacity>

            </View>

            {/* Second Card */}
            <View style={styles.card}>

              <TouchableOpacity style={styles.row}>
                <Text style={styles.title}>Privacy Policy</Text>

                <Icon
                  name="keyboard-arrow-right"
                  size={25}
                  color="#7E8CA0"
                />
              </TouchableOpacity>

              <View style={styles.line} />

              <TouchableOpacity style={styles.row}>
                <Text style={styles.title}>Terms & Conditions</Text>

                <Icon
                  name="keyboard-arrow-right"
                  size={25}
                  color="#7E8CA0"
                />
              </TouchableOpacity>

            </View>

            {/* Delete Button */}
            <TouchableOpacity style={styles.deleteCard}>
              <Text style={styles.deleteText}>
                Delete Account
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

    </View>
  );
};

export default Settingss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1320',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },

  modalContainer: {
    height: '90%',
    backgroundColor: '#0B1320',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  header: {
    height: 75,
    backgroundColor: '#2458D3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  card: {
    backgroundColor: '#111D30',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 18,
    paddingHorizontal: 20,
  },

  row: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#22324C',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },

  subTitle: {
    color: '#8D99AE',
    fontSize: 18,
    marginRight: 5,
  },

  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  deleteCard: {
    backgroundColor: '#111D30',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 18,
    padding: 25,
  },

  deleteText: {
    color: '#FF3B3B',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
});