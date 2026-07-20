import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

const Scam = () => {
  const [selectedTab, setSelectedTab] = useState('Recent');
  const [selectedScam, setSelectedScam] = useState(null);

  const scams = [
    {
      id: '1',
      title: 'Overcharging by Auto',
      place: 'Nashik',
      time: '2 hours ago',
      icon: '🚨',
      description: 'Auto drivers are charging extra money.',
    },
    {
      id: '2',
      title: 'Fake Taxi Drivers',
      place: 'Pune',
      time: '5 hours ago',
      icon: '⚠️',
      description: 'Fake taxi drivers are cheating tourists.',
    },
    {
      id: '3',
      title: 'Hotel Booking Scam',
      place: 'Jalgaon',
      time: '1 day ago',
      icon: '⚠️',
      description: 'Fake hotel bookings are reported.',
    },
    {
      id: '4',
      title: 'Restaurant Overcharge',
      place: 'Mumbai',
      time: '1 day ago',
      icon: '🚨',
      description: 'Restaurants are charging extra bills.',
    },
    {
      id: '5',
      title: 'Tourist Guide Scam',
      place: 'Satpur',
      time: '2 days ago',
      icon: '🚨',
      description: 'Fake guides are misleading tourists.',
    },
  ];

  if (selectedScam) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setSelectedScam(null)}
          style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.detailIcon}>{selectedScam.icon}</Text>

        <Text style={styles.detailTitle}>
          {selectedScam.title}
        </Text>

        <Text style={styles.detailText}>
          📍 {selectedScam.place}
        </Text>

        <Text style={styles.detailText}>
          ⏰ {selectedScam.time}
        </Text>

        <Text style={styles.description}>
          {selectedScam.description}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Scam Alerts</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Recent' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Recent')}>
          <Text style={styles.tabText}>Recent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Nearby' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Nearby')}>
          <Text style={styles.tabText}>Nearby</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={scams}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelectedScam(item)}>
            <Text style={styles.icon}>{item.icon}</Text>

            <View style={{marginLeft: 15}}>
              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.subtitle}>
                {item.place} • {item.time}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            'Report',
            'Scam reported successfully!',
          )
        }>
        <Text style={styles.buttonText}>
          Report a Scam
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Scam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  header: {
    backgroundColor: '#0D47A1',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    margin: 15,
    borderRadius: 12,
  },

  tabButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },

  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#42A5F5',
  },

  tabText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 18,
    borderRadius: 15,
  },

  icon: {
    fontSize: 30,
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#bbb',
    marginTop: 5,
    fontSize: 15,
  },

  button: {
    backgroundColor: '#E53935',
    margin: 20,
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },

  backText: {
    color: '#fff',
    fontSize: 20,
  },

  detailIcon: {
    fontSize: 70,
    textAlign: 'center',
    marginTop: 40,
  },

  detailTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  detailText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },

  description: {
    color: '#ccc',
    fontSize: 18,
    margin: 20,
  },
});