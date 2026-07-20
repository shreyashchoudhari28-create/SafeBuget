import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const TravelTips = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Safety",
    "Transport",
    "Money",
    "Weather",
    "Food",
  ];

const tips = [

  // ================= SAFETY =================

  { category: "Safety", icon: "🗺️", text: "Plan your route before starting your journey." },
  { category: "Safety", icon: "🎒", text: "Keep your luggage close to you at all times." },
  { category: "Safety", icon: "🚦", text: "Follow local traffic and safety rules." },
  { category: "Safety", icon: "🏨", text: "Book hotels from trusted websites only." },
  { category: "Safety", icon: "🌦️", text: "Check the weather forecast before travelling." },
  { category: "Safety", icon: "💳", text: "Keep extra cash and a backup card." },
  { category: "Safety", icon: "🔒", text: "Lock your bags and important belongings." },
  { category: "Safety", icon: "📶", text: "Keep your phone connected to the internet." },
  { category: "Safety", icon: "🧴", text: "Carry sanitiser and first-aid essentials." },
  { category: "Safety", icon: "👨‍👩‍👧", text: "Inform your family about your travel plans." },
  { category: "Safety", icon: "🪪", text: "Carry your ID proof while travelling." },
  { category: "Safety", icon: "🚨", text: "Save emergency contact numbers." },
  { category: "Safety", icon: "📍", text: "Share your location with family." },
  { category: "Safety", icon: "🔋", text: "Keep your phone fully charged." },
  { category: "Safety", icon: "🏕️", text: "Avoid isolated places at night." },

  // ================= TRANSPORT =================

  { category: "Transport", icon: "🚕", text: "Use trusted taxis and public transport." },
  { category: "Transport", icon: "🚌", text: "Keep your tickets safe." },
  { category: "Transport", icon: "🚉", text: "Reach early at stations." },
  { category: "Transport", icon: "🗺️", text: "Check routes before travelling." },
  { category: "Transport", icon: "⛽", text: "Refuel before long journeys." },
  { category: "Transport", icon: "🛵", text: "Wear a helmet and seat belt." },
  { category: "Transport", icon: "📱", text: "Keep navigation apps ready." },
  { category: "Transport", icon: "🚦", text: "Follow traffic rules." },
  { category: "Transport", icon: "🎫", text: "Carry printed tickets." },
  { category: "Transport", icon: "🔋", text: "Carry a power bank." },
  { category: "Transport", icon: "🚗", text: "Check your vehicle before travel." },
  { category: "Transport", icon: "🧭", text: "Use maps for directions." },
  { category: "Transport", icon: "🛣️", text: "Avoid unknown shortcuts." },
  { category: "Transport", icon: "🚲", text: "Inspect your bike regularly." },
  { category: "Transport", icon: "🚍", text: "Check transport timings." },

  // ================= MONEY =================

  { category: "Money", icon: "💵", text: "Carry small denominations of cash." },
  { category: "Money", icon: "💳", text: "Keep cards separately." },
  { category: "Money", icon: "🏧", text: "Use safe ATMs." },
  { category: "Money", icon: "📱", text: "Keep payment apps ready." },
  { category: "Money", icon: "🔒", text: "Protect bank details." },
  { category: "Money", icon: "🧾", text: "Keep purchase receipts." },
  { category: "Money", icon: "💰", text: "Set a travel budget." },
  { category: "Money", icon: "🌍", text: "Check exchange rates." },
  { category: "Money", icon: "🎒", text: "Store cash safely." },
  { category: "Money", icon: "🚫", text: "Avoid carrying too much cash." },
  { category: "Money", icon: "🏦", text: "Keep emergency money." },
  { category: "Money", icon: "📊", text: "Track your expenses." },
  { category: "Money", icon: "🪙", text: "Carry local currency." },
  { category: "Money", icon: "💸", text: "Avoid unnecessary spending." },
  { category: "Money", icon: "📂", text: "Keep cards and cash organized." },

  // ================= WEATHER =================

  { category: "Weather", icon: "🌦️", text: "Check the weather forecast." },
  { category: "Weather", icon: "☔", text: "Carry an umbrella." },
  { category: "Weather", icon: "🧥", text: "Pack warm clothes." },
  { category: "Weather", icon: "🧴", text: "Apply sunscreen." },
  { category: "Weather", icon: "🕶️", text: "Wear sunglasses." },
  { category: "Weather", icon: "💧", text: "Drink enough water." },
  { category: "Weather", icon: "🌡️", text: "Prepare for temperature changes." },
  { category: "Weather", icon: "👟", text: "Wear comfortable shoes." },
  { category: "Weather", icon: "⚡", text: "Avoid thunderstorms." },
  { category: "Weather", icon: "❄️", text: "Carry winter clothes." },
  { category: "Weather", icon: "🌬️", text: "Protect belongings from wind." },
  { category: "Weather", icon: "🎒", text: "Pack weather essentials." },
  { category: "Weather", icon: "📱", text: "Enable weather updates." },
  { category: "Weather", icon: "🚗", text: "Drive carefully in bad weather." },
  { category: "Weather", icon: "🏕️", text: "Avoid extreme weather conditions." },

  // ================= FOOD =================

  { category: "Food", icon: "🍽️", text: "Eat at clean places." },
  { category: "Food", icon: "💧", text: "Drink clean water." },
  { category: "Food", icon: "🥗", text: "Choose healthy food." },
  { category: "Food", icon: "🍎", text: "Carry snacks." },
  { category: "Food", icon: "🥤", text: "Stay hydrated." },
  { category: "Food", icon: "🚫", text: "Avoid unhygienic food." },
  { category: "Food", icon: "🧊", text: "Be careful with ice." },
  { category: "Food", icon: "🥪", text: "Pack light food." },
  { category: "Food", icon: "🕒", text: "Eat meals on time." },
  { category: "Food", icon: "🍌", text: "Carry fruits." },
  { category: "Food", icon: "🍜", text: "Try local food carefully." },
  { category: "Food", icon: "🥛", text: "Drink fresh beverages." },
  { category: "Food", icon: "🍪", text: "Keep biscuits and snacks." },
  { category: "Food", icon: "🍞", text: "Carry breakfast items." },
  { category: "Food", icon: "🥘", text: "Avoid overeating." },

];  
const filteredTips =
  selectedCategory === "All"
    ? tips
    : tips.filter(
        (item) => item.category === selectedCategory
      );

return (
  <SafeAreaView style={styles.container}>
    
    {/* Header */}

    <View style={styles.header}>
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Back button pressed")
        }
      >
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>
        Travel Tips
      </Text>
    </View>

    {/* Main Container */}

    <View style={styles.card}>

      {/* Category Buttons */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 15,
        }}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(item)}
            style={[
              styles.categoryButton,
              selectedCategory === item &&
                styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item &&
                  styles.activeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tips List */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        {filteredTips.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tipCard}
            onPress={() =>
              Alert.alert(
                "Travel Tip",
                item.text
              )
            }
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>
                {item.icon}
              </Text>
            </View>

            <Text style={styles.tipText}>
              {item.text}
            </Text>

            <Text style={styles.arrow}>
              ›
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>

  </SafeAreaView>
);
};

export default TravelTips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    height: 120,
    backgroundColor: "#0A84FF",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  backArrow: {
    color: "#FFFFFF",
    fontSize: 28,
    marginRight: 15,
  },

  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },

  card: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },

  categoryContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  categoryButton: {
    backgroundColor: "#2A2A2A",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    minWidth: 100,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  activeButton: {
    backgroundColor: "#0A84FF",
  },

  categoryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  activeText: {
    color: "#FFFFFF",
  },

  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    elevation: 5,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#3A3A3A",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 28,
  },

  tipText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: "#FFFFFF",
  },

  arrow: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});