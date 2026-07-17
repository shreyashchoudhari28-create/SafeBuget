import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

const SplashScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      }}
      style={styles.container}
    >
      <StatusBar backgroundColor="#0A4DA2" barStyle="light-content" />

      {/* Dark Overlay */}
      <View style={styles.overlay}>

        {/* Logo */}
        <View style={styles.logoBox}>
          <Text style={styles.logo}>🛡️</Text>
        </View>

        {/* App Name */}
        <Text style={styles.title}>SafeBudget</Text>

        {/* Tagline */}
        <Text style={styles.tagline}>
          Travel Safe, Spend Smart
        </Text>

        {/* Bottom Loading */}
        <View style={styles.bottom}>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text style={styles.loading}>Loading...</Text>
        </View>

      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  logoBox: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    fontSize: 50,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },

  tagline: {
    color: "#FFFFFF",
    fontSize: 17,
    marginTop: 8,
  },

  bottom: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
  },

  loading: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 10,
  },
});