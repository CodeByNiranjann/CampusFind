import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

export default function FoundItemDetails({
  route,
  navigation,
}) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>

          <Text style={styles.backLabel}>
            Back
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Found Item Details
        </Text>

        <View style={styles.card}>
          <Text style={styles.itemName}>
            {item.itemName || "Unknown Item"}
          </Text>

          <Text style={styles.detail}>
            📁 Category:{" "}
            {item.category || "Not available"}
          </Text>

          <Text style={styles.detail}>
            📍 Location:{" "}
            {item.location || "Not available"}
          </Text>

          <Text style={styles.detail}>
            📝 Description:{" "}
            {item.description || "Not available"}
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {item.type || "FOUND"}
            </Text>
          </View>
        </View>

        <View style={styles.reporterCard}>
          <Text style={styles.reporterTitle}>
            Reported By
          </Text>

          <Text style={styles.reporterName}>
            {item.userName || "CampusFind User"}
          </Text>

          <Pressable
  style={styles.messageButton}
  onPress={() =>
    navigation.navigate("ChatScreen", {
      item: item,
    })
  }
>
            <Text style={styles.messageButtonText}>
              💬 Message Finder
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  content: {
    padding: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backText: {
    fontSize: 28,
    marginRight: 8,
  },

  backLabel: {
    fontSize: 16,
    color: "#111827",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#D9DEE7",
  },

  itemName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },

  detail: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 14,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 5,
  },

  badgeText: {
    color: "#15803D",
    fontWeight: "700",
  },

  reporterCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#D9DEE7",
  },

  reporterTitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 6,
  },

  reporterName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 20,
  },

  messageButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  messageButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});