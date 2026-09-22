import { findMatches } from "../services/matching";

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { theme } from "../constants/theme";

import { db, auth } from "../services/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function ReportItemScreen({ navigation }) {
  const [type, setType] = useState("LOST");

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [loading, setLoading] = useState(false);

  // Messages shown inside the app
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    // Check required fields
    if (
      !itemName.trim() ||
      !category.trim() ||
      !description.trim() ||
      !location.trim() ||
      !date.trim() ||
      !time.trim()
    ) {
      setErrorMessage(
        "Please fill in all the item details."
      );
      return;
    }

    // Check login
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setErrorMessage(
        "Please login before reporting an item."
      );
      return;
    }

    try {
      setLoading(true);

      console.log("Saving item to Firestore...");

      const itemData = {
        itemName: itemName.trim(),
        category: category.trim(),
        description: description.trim(),
        location: location.trim(),
        date: date.trim(),
        time: time.trim(),

        type: type,
        status: type,

        userId: currentUser.uid,
        userEmail: currentUser.email,

        createdAt: serverTimestamp(),
      };

    const docRef = await addDoc(
  collection(db, "items"),
  itemData
);

console.log("Item saved:", docRef.id);

// Run matching algorithm
const newItem = {
  id: docRef.id,
  ...itemData,
};

const matches = await findMatches(newItem);

console.log("Possible matches found:", matches.length);

      // Show success message inside browser
      setSuccessMessage(
        `Your ${
          type === "LOST" ? "lost" : "found"
        } item has been submitted successfully!`
      );

      // Clear form
      setItemName("");
      setCategory("");
      setDescription("");
      setLocation("");
      setDate("");
      setTime("");

    } catch (error) {
      console.log("Firestore error:", error);

      setErrorMessage(
        error.message ||
          "Unable to submit your report. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>
        Report Item
      </Text>

      <Text style={styles.subtitle}>
        Tell us about the lost or found item
      </Text>

      {/* Success Message */}
      {successMessage ? (
        <View style={styles.successBox}>
          <Text style={styles.successTitle}>
            ✓ Submitted Successfully
          </Text>

          <Text style={styles.successText}>
            {successMessage}
          </Text>
        </View>
      ) : null}

      {/* Error Message */}
      {errorMessage ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>
            Submission Failed
          </Text>

          <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        </View>
      ) : null}

      {/* Report Type */}
      <Text style={styles.label}>
        Report Type
      </Text>

      <View style={styles.typeRow}>
        <Pressable
          style={[
            styles.typeButton,
            type === "LOST" && styles.lostSelected,
          ]}
          onPress={() => {
            setType("LOST");
            setSuccessMessage("");
            setErrorMessage("");
          }}
        >
          <Text
            style={[
              styles.typeText,
              type === "LOST" && styles.selectedText,
            ]}
          >
            I Lost Something
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.typeButton,
            type === "FOUND" && styles.foundSelected,
          ]}
          onPress={() => {
            setType("FOUND");
            setSuccessMessage("");
            setErrorMessage("");
          }}
        >
          <Text
            style={[
              styles.typeText,
              type === "FOUND" && styles.selectedText,
            ]}
          >
            I Found Something
          </Text>
        </Pressable>
      </View>

      {/* Item Name */}
      <AppInput
        label="Item Name"
        placeholder="Example: Black Wallet"
        value={itemName}
        onChangeText={setItemName}
        autoCapitalize="words"
      />

      {/* Category */}
      <AppInput
        label="Category"
        placeholder="Example: Wallet, ID Card, Electronics"
        value={category}
        onChangeText={setCategory}
        autoCapitalize="words"
      />

      {/* Description */}
      <AppInput
        label="Description"
        placeholder="Describe the item"
        value={description}
        onChangeText={setDescription}
        autoCapitalize="sentences"
      />

      {/* Location */}
      <AppInput
        label="Location"
        placeholder="Example: KEC Canteen"
        value={location}
        onChangeText={setLocation}
        autoCapitalize="words"
      />

      {/* Date */}
      <AppInput
        label="Date"
        placeholder="YYYY-MM-DD"
        value={date}
        onChangeText={setDate}
        keyboardType="numbers-and-punctuation"
      />

      {/* Time */}
      <AppInput
        label="Time"
        placeholder="Example: 14:30"
        value={time}
        onChangeText={setTime}
        keyboardType="numbers-and-punctuation"
      />

      {/* Submit */}
      <AppButton
        title={loading ? "Submitting..." : "Submit Report"}
        onPress={handleSubmit}
      />

      {/* Back */}
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>
          Back to Home
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },

  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  subtitle: {
    fontSize: theme.fontSize.body,
    color: theme.colors.muted,
    marginBottom: theme.spacing.xl,
  },

  successBox: {
    backgroundColor: "#DCFCE7",
    borderWidth: 1,
    borderColor: "#86EFAC",
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },

  successTitle: {
    color: "#166534",
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    marginBottom: theme.spacing.xs,
  },

  successText: {
    color: "#166534",
    fontSize: theme.fontSize.small,
  },

  errorBox: {
    backgroundColor: "#FEE2E2",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },

  errorTitle: {
    color: "#B91C1C",
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    marginBottom: theme.spacing.xs,
  },

  errorText: {
    color: "#B91C1C",
    fontSize: theme.fontSize.small,
  },

  label: {
    fontSize: theme.fontSize.body,
    fontWeight: "600",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  typeRow: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },

  typeButton: {
    flex: 1,
    minHeight: 52,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.sm,
  },

  lostSelected: {
    backgroundColor: theme.colors.lost,
    borderColor: theme.colors.lost,
  },

  foundSelected: {
    backgroundColor: theme.colors.found,
    borderColor: theme.colors.found,
  },

  typeText: {
    color: theme.colors.text,
    fontSize: theme.fontSize.small,
    fontWeight: "600",
    textAlign: "center",
  },

  selectedText: {
    color: "#FFFFFF",
  },

  backButton: {
    marginTop: theme.spacing.md,
    alignItems: "center",
    paddingVertical: theme.spacing.md,
  },

  backText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.body,
    fontWeight: "600",
  },
});