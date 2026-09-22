import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";

import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { theme } from "../constants/theme";

export default function ReportItemScreen({ route, navigation }) {
  const type = route?.params?.type || "LOST";

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const isLost = type === "LOST";

  const handleSubmit = () => {
    if (
      !itemName ||
      !category ||
      !description ||
      !location ||
      !date ||
      !time
    ) {
      Alert.alert(
        "Missing Details",
        "Please fill in all the required fields."
      );
      return;
    }

    Alert.alert(
      isLost ? "Lost Item Reported" : "Found Item Reported",
      "Your report has been submitted successfully.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home"),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <View style={styles.headerText}>
          <Text style={styles.title}>
            {isLost ? "Report Lost Item" : "Report Found Item"}
          </Text>

          <Text style={styles.subtitle}>
            {isLost
              ? "Tell us about the item you lost"
              : "Help someone recover their item"}
          </Text>
        </View>
      </View>

      {/* Type */}
      <Text style={styles.sectionTitle}>Item Type</Text>

      <View style={styles.typeRow}>
        <Pressable
          style={[
            styles.typeButton,
            isLost && styles.activeLostButton,
          ]}
          onPress={() =>
            navigation.setParams?.({ type: "LOST" })
          }
        >
          <Text
            style={[
              styles.typeText,
              isLost && styles.activeLostText,
            ]}
          >
            🔎 Lost
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.typeButton,
            !isLost && styles.activeFoundButton,
          ]}
          onPress={() =>
            navigation.setParams?.({ type: "FOUND" })
          }
        >
          <Text
            style={[
              styles.typeText,
              !isLost && styles.activeFoundText,
            ]}
          >
            📦 Found
          </Text>
        </Pressable>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <AppInput
          label="Item Name *"
          placeholder="Example: Black Wallet"
          value={itemName}
          onChangeText={setItemName}
          autoCapitalize="words"
        />

        <AppInput
          label="Category *"
          placeholder="Example: Wallet, ID Card, Electronics"
          value={category}
          onChangeText={setCategory}
        />

        <AppInput
          label="Description *"
          placeholder="Describe the item and any identifying details"
          value={description}
          onChangeText={setDescription}
        />

        <AppInput
          label="Location *"
          placeholder="Example: Library, C Block, Cafeteria"
          value={location}
          onChangeText={setLocation}
          autoCapitalize="words"
        />

        <AppInput
          label="Date *"
          placeholder="DD/MM/YYYY"
          value={date}
          onChangeText={setDate}
          keyboardType="numbers-and-punctuation"
        />

        <AppInput
          label="Time *"
          placeholder="Example: 10:30 AM"
          value={time}
          onChangeText={setTime}
        />

        {/* Image placeholder */}
        <Text style={styles.imageLabel}>Item Image</Text>

        <Pressable style={styles.imageBox}>
          <Text style={styles.imageIcon}>📷</Text>

          <Text style={styles.imageTitle}>
            Add Item Image
          </Text>

          <Text style={styles.imageSubtitle}>
            Image upload will be connected to Firebase Storage
          </Text>
        </Pressable>

        {/* Submit */}
        <AppButton
          title={
            isLost
              ? "Submit Lost Report"
              : "Submit Found Report"
          }
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  backText: {
    fontSize: 32,
    color: theme.colors.text,
    lineHeight: 34,
  },

  headerText: {
    flex: 1,
  },

  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: "700",
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
  },

  sectionTitle: {
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  typeRow: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },

  typeButton: {
    flex: 1,
    height: 50,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
  },

  activeLostButton: {
    backgroundColor: "#FEF2F2",
    borderColor: theme.colors.lost,
  },

  activeFoundButton: {
    backgroundColor: "#F0FDF4",
    borderColor: theme.colors.found,
  },

  typeText: {
    fontSize: theme.fontSize.body,
    fontWeight: "600",
    color: theme.colors.muted,
  },

  activeLostText: {
    color: theme.colors.lost,
  },

  activeFoundText: {
    color: theme.colors.found,
  },

  form: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
  },

  imageLabel: {
    fontSize: theme.fontSize.body,
    fontWeight: "600",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  imageBox: {
    minHeight: 150,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: "dashed",
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },

  imageIcon: {
    fontSize: 32,
    marginBottom: theme.spacing.sm,
  },

  imageTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "600",
    color: theme.colors.text,
  },

  imageSubtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },
});