import {View,Text,TouchableOpacity,ScrollView,StyleSheet,Alert,} from 'react-native'
import React, { useState } from 'react'

// Trip data
const tripData = [
  {
    from: 'Mumbai',
    to: 'Nashik',
    date: '15 May 2025',
    time: '10:00 AM',
    status: 'Upcoming',
  },
  {
    from: 'Nashik',
    to: 'Shirdi',
    date: '10 May 2025',
    time: '09:00 AM',
    status: 'Completed',
  },
  {
    from: 'Nashik',
    to: 'Trimbakeshwar',
    date: '02 May 2025',
    time: '07:30 AM',
    status: 'Completed',
  },
];

const MyTrips = () => {
  // Store selected tab
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  return (
    <View style={styles.container}>

      {/* Heading */}
      <Text style={styles.header}>My Trips</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedTab('Upcoming')}>
          <Text
            style={
              selectedTab === 'Upcoming'
                ? styles.activeTab
                : styles.inactiveTab
            }>
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedTab('Completed')}>
          <Text
            style={
              selectedTab === 'Completed'
                ? styles.activeTab
                : styles.inactiveTab
            }>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {/* Trip List */}
      <ScrollView>

        {tripData.map((trip, index) => {

          // Show only trips of selected tab
          if (trip.status === selectedTab) {
            return (
              <View key={index} style={styles.card}>
                
                <Text style={styles.route}>
                  {trip.from} → {trip.to}
                </Text>

                <Text style={styles.date}>
                  {trip.date} | {trip.time}
                </Text>

                <Text style={styles.status}>
                  {trip.status}
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(
                      'Trip Details',
                      `${trip.from} to ${trip.to}`
                    )
                  }>
                  <Text style={styles.detailsButton}>
                    View Details
                  </Text>
                </TouchableOpacity>

              </View>
            );
          }
        })}

      </ScrollView>

      {/* Book Trip Button */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => Alert.alert('Book New Trip')}>
        <Text style={styles.bookButtonText}>
          + Book New Trip
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default MyTrips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15,
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },

  tabContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  inactiveTab: {
    color: 'gray',
    marginRight: 20,
    fontSize: 16,
  },

  activeTab: {
    color: '#4C8DFF',
    marginRight: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  route: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  date: {
    color: '#cccccc',
    marginTop: 5,
  },

  status: {
    color: 'lightgreen',
    marginTop: 5,
  },

  detailsButton: {
    color: '#4C8DFF',
    textAlign: 'right',
    marginTop: 10,
  },

  bookButton: {
    backgroundColor: '#4C8DFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});