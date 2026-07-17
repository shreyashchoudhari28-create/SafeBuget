import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Smartfare = () => {
  return (
    <>
      <StatusBar backgroundColor="#071323" barStyle="light-content" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Smart Fare</Text>
            <Text style={styles.subHeading}>Live fare prices in your area</Text>
          </View>

          <View style={{ width: 35 }} />
        </View>

        {/* Auto */}
        <View style={styles.card}>
          <View style={styles.left}>
            <View style={[styles.iconCircle,{backgroundColor:"#143D2D"}]}>
              <Text style={styles.icon}>🛺</Text>
            </View>

            <View>
              <Text style={styles.vehicle}>Auto</Text>
              <Text style={styles.small}>Meter Fare</Text>
            </View>
          </View>

          <View>
            <Text style={styles.green}>₹12/km</Text>
            <Text style={styles.small}>Min ₹40</Text>
          </View>
        </View>

        {/* Taxi */}
        <View style={styles.card}>
          <View style={styles.left}>
            <View style={[styles.iconCircle,{backgroundColor:"#4A3910"}]}>
              <Text style={styles.icon}>🚖</Text>
            </View>

            <View>
              <Text style={styles.vehicle}>Taxi</Text>
              <Text style={styles.small}>Meter Fare</Text>
            </View>
          </View>

          <View>
            <Text style={styles.yellow}>₹18/km</Text>
            <Text style={styles.small}>Min ₹60</Text>
          </View>
        </View>

        {/* Cab */}
        <View style={styles.card}>
          <View style={styles.left}>
            <View style={[styles.iconCircle,{backgroundColor:"#123A67"}]}>
              <Text style={styles.icon}>🚘</Text>
            </View>

            <View>
              <Text style={styles.vehicle}>Cab</Text>
              <Text style={styles.small}>Meter Fare</Text>
            </View>
          </View>

          <View>
            <Text style={styles.blue}>₹22/km</Text>
            <Text style={styles.small}>Min ₹80</Text>
          </View>
        </View>

        {/* Bike Taxi */}
        <View style={styles.card}>
          <View style={styles.left}>
            <View style={[styles.iconCircle,{backgroundColor:"#4C1D95"}]}>
              <Text style={styles.icon}>🏍️</Text>
            </View>

            <View>
              <Text style={styles.vehicle}>Bike Taxi</Text>
              <Text style={styles.small}>Meter Fare</Text>
            </View>
          </View>

          <View>
            <Text style={styles.purple}>₹8/km</Text>
            <Text style={styles.small}>Min ₹25</Text>
          </View>
        </View>
                {/* Government Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Text style={{fontSize:26}}>ℹ️</Text>
          </View>

          <Text style={styles.infoText}>
            Fare estimates are based on government
            transport guidelines and average local rates.
          </Text>
        </View>

        {/* Wallet Card */}
        <View style={styles.walletCard}>
          <Text style={styles.walletIcon}>👛💰</Text>

          <Text style={styles.walletTitle}>
            Travel Smart, Save More
          </Text>

          <Text style={styles.walletSub}>
            Compare fares before booking and
            choose the best option for your budget.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Compare Fares →
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>
  );
};
export default Smartfare
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#08121F",
    padding:20,
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:15,
    marginBottom:25,
  },

  backBtn:{
    width:40,
    height:40,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#132033",
  },

  back:{
    color:"#fff",
    fontSize:24,
    fontWeight:"bold",
  },

  heading:{
    color:"#fff",
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
  },

  subHeading:{
    color:"#9CA3AF",
    fontSize:15,
    marginTop:5,
    textAlign:"center",
  },

  card:{
    backgroundColor:"#111827",
    borderRadius:20,
    padding:18,
    marginBottom:18,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  left:{
    flexDirection:"row",
    alignItems:"center",
  },

  iconCircle:{
    width:60,
    height:60,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
    marginRight:15,
  },

  icon:{
    fontSize:30,
  },

  vehicle:{
    color:"#fff",
    fontSize:21,
    fontWeight:"bold",
  },

  small:{
    color:"#9CA3AF",
    marginTop:4,
    fontSize:14,
  },

  green:{
    color:"#22C55E",
    fontSize:25,
    fontWeight:"bold",
  },

  yellow:{
    color:"#FACC15",
    fontSize:25,
    fontWeight:"bold",
  },

  blue:{
    color:"#3B82F6",
    fontSize:25,
    fontWeight:"bold",
  },

  purple:{
    color:"#A855F7",
    fontSize:25,
    fontWeight:"bold",
  },

  infoCard:{
    backgroundColor:"#0F1D36",
    borderRadius:18,
    borderWidth:1,
    borderColor:"#2563EB",
    padding:18,
    flexDirection:"row",
    alignItems:"center",
    marginBottom:25,
  },

  infoIcon:{
    marginRight:15,
  },

  infoText:{
    color:"#E5E7EB",
    fontSize:15,
    flex:1,
    lineHeight:22,
  },

  walletCard:{
    backgroundColor:"#173B87",
    borderRadius:25,
    padding:25,
    alignItems:"center",
    marginBottom:30,
  },

  walletIcon:{
    fontSize:70,
    marginBottom:15,
  },

  walletTitle:{
    color:"#fff",
    fontSize:28,
    fontWeight:"bold",
  },

  walletSub:{
    color:"#D1D5DB",
    textAlign:"center",
    marginTop:10,
    fontSize:16,
    lineHeight:24,
    marginBottom:25,
  },

  button:{
    backgroundColor:"#2563EB",
    paddingVertical:16,
    borderRadius:15,
    width:"100%",
    alignItems:"center",
  },

  buttonText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold",
  },
});

