import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

import { logoutUser } from "../services/auth";

export default function HomeScreen({ navigation }) {

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      await logoutUser();

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });

    } catch (error) {
      Alert.alert(
        "Logout Failed",
        "Unable to logout. Please try again."
      );
    }
  };

  return (
    <ScrollView style={styles.container}>

      {/* ================= HEADER ================= */}
      <View style={styles.header}>

        <View>
          <Text style={styles.hello}>
            Hello 👋
          </Text>

          <Text style={styles.title}>
            FindBack
          </Text>

          <Text style={styles.subtitle}>
            Find what you lost. Return what you found.
          </Text>
        </View>

        {/* HEADER BUTTONS */}
        <View style={styles.headerButtons}>

          {/* Notification */}
          <TouchableOpacity
            style={styles.notificationButton}
          >
            <Text style={styles.notificationIcon}>
              🔔
            </Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutIcon}>
              🚪
            </Text>
          </TouchableOpacity>

        </View>

      </View>


      {/* ================= SEARCH ================= */}
      <TouchableOpacity
        style={styles.searchBox}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={styles.searchIcon}>
          🔍
        </Text>

        <Text style={styles.searchText}>
          Search lost or found items...
        </Text>
      </TouchableOpacity>


      {/* ================= MY ITEMS ================= */}
      <TouchableOpacity
        style={styles.myItemsCard}
        onPress={() => navigation.navigate("MyItems")}
      >

        <View style={styles.cardLeft}>

          <View style={styles.iconBox}>
            <Text style={styles.cardIcon}>
              📋
            </Text>
          </View>

          <View>
            <Text style={styles.cardTitle}>
              My Items
            </Text>

            <Text style={styles.cardSubtitle}>
              View your lost and found reports
            </Text>
          </View>

        </View>

        <Text style={styles.arrow}>
          →
        </Text>

      </TouchableOpacity>


      {/* ================= AI CHATBOT ================= */}
      <TouchableOpacity
        style={styles.chatbotCard}
        onPress={() => navigation.navigate("Chatbot")}
      >

        <View style={styles.cardLeft}>

          <View style={styles.chatbotIconBox}>
            <Text style={styles.chatbotIcon}>
              🤖
            </Text>
          </View>

          <View>
            <Text style={styles.chatbotTitle}>
              AI Chatbot
            </Text>

            <Text style={styles.chatbotSubtitle}>
              Ask questions about your lost or found item
            </Text>
          </View>

        </View>

        <Text style={styles.chatbotArrow}>
          →
        </Text>

      </TouchableOpacity>


      {/* ================= WHAT HAPPENED ================= */}
      <Text style={styles.sectionTitle}>
        What happened?
      </Text>


      {/* ================= LOST / FOUND ================= */}
      <View style={styles.actionRow}>

        {/* Lost Something */}
        <TouchableOpacity
          style={styles.lostCard}
          onPress={() => navigation.navigate("ReportItem")}
        >

          <View style={styles.circleIcon}>
            <Text style={styles.largeIcon}>
              🔍
            </Text>
          </View>

          <Text style={styles.actionTitle}>
            I Lost Something
          </Text>

          <Text style={styles.actionSubtitle}>
            Report an item you lost on campus
          </Text>

        </TouchableOpacity>


        {/* Found Something */}
        <TouchableOpacity
          style={styles.foundCard}
          onPress={() => navigation.navigate("ReportItem")}
        >

          <View style={styles.circleIcon}>
            <Text style={styles.largeIcon}>
              📦
            </Text>
          </View>

          <Text style={styles.actionTitle}>
            I Found Something
          </Text>

          <Text style={styles.actionSubtitle}>
            Help someone find their item
          </Text>

        </TouchableOpacity>

      </View>


      {/* ================= POSSIBLE MATCHES ================= */}
      <View style={styles.matchesHeader}>

        <Text style={styles.sectionTitle}>
          Possible Matches
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.seeAll}>
            See All
          </Text>
        </TouchableOpacity>

      </View>


      {/* ================= EMPTY MATCH CARD ================= */}
      <View style={styles.matchCard}>

        <Text style={styles.linkIcon}>
          🔗
        </Text>

        <Text style={styles.noMatchText}>
          No possible matches yet
        </Text>

        <Text style={styles.noMatchSubText}>
          Your possible matches will appear here.
        </Text>

      </View>

    </ScrollView>
  );
}


/* ================================================= */
/*                    STYLES                         */
/* ================================================= */

const styles = StyleSheet.create({

  /* Main container */
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 24,
  },


  /* ================= HEADER ================= */

  header: {
    marginTop: 45,
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  hello: {
    fontSize: 18,
    color: "#64748B",
    marginBottom: 8,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0F172A",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 5,
  },


  /* Header buttons */
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },


  /* Notification button */
  notificationButton: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  notificationIcon: {
    fontSize: 25,
  },


  /* Logout button */
  logoutButton: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "#FFF1F2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FECDD3",
  },

  logoutIcon: {
    fontSize: 25,
  },


  /* ================= SEARCH ================= */

  searchBox: {
    height: 68,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 28,
  },

  searchIcon: {
    fontSize: 23,
    marginRight: 14,
  },

  searchText: {
    fontSize: 17,
    color: "#64748B",
  },


  /* ================= MY ITEMS ================= */

  myItemsCard: {
    backgroundColor: "#FFFFFF",
    minHeight: 105,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconBox: {
    width: 62,
    height: 62,
    borderRadius: 14,
    backgroundColor: "#EEF5FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },

  cardIcon: {
    fontSize: 30,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
  },

  arrow: {
    fontSize: 28,
    color: "#2563EB",
  },


  /* ================= CHATBOT ================= */

  chatbotCard: {
    backgroundColor: "#EAF2FF",
    minHeight: 105,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#C7D9FF",
    paddingHorizontal: 20,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  chatbotIconBox: {
    width: 62,
    height: 62,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },

  chatbotIcon: {
    fontSize: 30,
  },

  chatbotTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
  },

  chatbotSubtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
    paddingRight: 10,
  },

  chatbotArrow: {
    fontSize: 28,
    color: "#2563EB",
  },


  /* ================= SECTION ================= */

  sectionTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 38,
    marginBottom: 18,
  },


  /* ================= LOST / FOUND ================= */

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  lostCard: {
    width: "48.5%",
    minHeight: 225,
    backgroundColor: "#FFF1F2",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFCDD2",
    padding: 20,
  },

  foundCard: {
    width: "48.5%",
    minHeight: 225,
    backgroundColor: "#F0FDF4",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#BBF7D0",
    padding: 20,
  },

  circleIcon: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },

  largeIcon: {
    fontSize: 28,
  },

  actionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 8,
  },

  actionSubtitle: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
  },


  /* ================= MATCHES ================= */

  matchesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  seeAll: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "600",
  },

  matchCard: {
    backgroundColor: "#FFFFFF",
    minHeight: 180,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  linkIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  noMatchText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#334155",
  },

  noMatchSubText: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
  },

});