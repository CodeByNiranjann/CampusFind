import { Pressable, Text, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export default function AppButton({
  title,
  onPress,
  variant = "primary",
}) {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "secondary" && styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === "secondary" && styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },

  secondaryButton: {
    backgroundColor: theme.colors.primaryLight,
  },

  text: {
    color: "#FFFFFF",
    fontSize: theme.fontSize.body,
    fontWeight: "600",
  },

  secondaryText: {
    color: theme.colors.primary,
  },
});