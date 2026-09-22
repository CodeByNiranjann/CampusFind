import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export default function AuthHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>F</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  logo: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },

  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: "700",
    color: theme.colors.text,
  },

  subtitle: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.body,
    color: theme.colors.muted,
    textAlign: "center",
  },
});