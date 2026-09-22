import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import AuthHeader from "../components/AuthHeader";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { theme } from "../constants/theme";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Register:", {
      name,
      email,
      password,
    });

    // Firebase registration will be added here later
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <AuthHeader
        title="Create Account"
        subtitle="Join your campus Lost & Found"
      />

      <View style={styles.form}>
        <AppInput
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <AppInput
          label="College Email"
          placeholder="Enter your college email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <AppInput
          label="Password"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <AppInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <AppButton
          title="Create Account"
          onPress={handleRegister}
        />

        <View style={styles.loginRow}>
          <Text style={styles.normalText}>
            Already have an account?
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.linkText}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    justifyContent: "center",
  },

  form: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.lg,
    gap: theme.spacing.xs,
  },

  normalText: {
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  linkText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.body,
    fontWeight: "600",
  },
});