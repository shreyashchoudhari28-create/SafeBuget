import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const Safebuget = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F172A" }}>
      
      {/* Header */}
      <View
        style={{
          backgroundColor: "#1E293B",
          padding: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
          }}
        >
          SafeBudget
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#CBD5E1",
            marginTop: 5,
          }}
        >
          Travel Safe • Spend Smart
        </Text>

        <View
          style={{
            backgroundColor: "#334155",
            marginTop: 20,
            padding: 15,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Trip Budget
          </Text>

          <Text
            style={{
              color: "#22C55E",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            ₹15,000
          </Text>
        </View>
      </View>

      {/* SOS Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#EF4444",
          margin: 20,
          padding: 20,
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          🚨 SOS EMERGENCY
        </Text>
      </TouchableOpacity>

      {/* Features Grid */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#22C55E",
            width: "42%",
            padding: 25,
            borderRadius: 20,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 30 }}>💰</Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Budget
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#F59E0B",
            width: "42%",
            padding: 25,
            borderRadius: 20,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 30 }}>🛡️</Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Safety
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#3B82F6",
            width: "42%",
            padding: 25,
            borderRadius: 20,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 30 }}>📍</Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Nearby
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#8B5CF6",
            width: "42%",
            padding: 25,
            borderRadius: 20,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 30 }}>💱</Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Currency
          </Text>
        </TouchableOpacity>
      </View>

      {/* Safety Card */}
      <View
        style={{
          backgroundColor: "#1E293B",
          margin: 20,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Safety Score
        </Text>

        <Text
          style={{
            color: "#22C55E",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          92/100
        </Text>

        <Text
          style={{
            color: "#CBD5E1",
            marginTop: 5,
          }}
        >
          Current area is safe for tourists.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Safebuget;