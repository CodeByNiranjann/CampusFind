import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

import { theme } from "../constants/theme";

export default function ItemDetailsScreen({ route, navigation }) {
  const item = route?.params?.item;

  if (!item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Item not found</Text>

        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const isLost = item.type === "LOST";

  const handleContact = () => {
    Alert.alert(
      "Coming Soon",
      "Private chat will be connected with Firebase later."
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Item Details</Text>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Text style={styles.imageEmoji}>
          {item.category === "ID Card"
            ? "🪪"
            : item.category === "Wallet"
            ? "👛"
            : "📦"}
        </Text>
      </View>

      {/* Basic Information */}
      <View style={styles.mainCard}>
        <View style={styles.titleRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemName}>{item.name}</Text>

            <Text style={styles.category}>
              {item.category}
            </Text>
          </View>

          <View
            style={[
              styles.statusBadge,
              isLost
                ? styles.lostBadge
                : styles.foundBadge,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                isLost
                  ? styles.lostText
                  : styles.foundText,
              ]}
            >
              {item.type}
            </Text>
          </View>
        </View>

        {/* Details */}
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>📍</Text>

          <View>
            <Text style={styles.detailLabel}>
              Location
            </Text>

            <Text style={styles.detailValue}>
              {item.location}
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>📅</Text>

          <View>
            <Text style={styles.detailLabel}>
              Date
            </Text>

            <Text style={styles.detailValue}>
              {item.date}
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>🕐</Text>

          <View>
            <Text style={styles.detailLabel}>
              Reported
            </Text>

            <Text style={styles.detailValue}>
              Recently
            </Text>
          </View>
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Description
        </Text>

        <View style={styles.descriptionCard}>
          <Text style={styles.description}>
            This item was reported on campus. If you believe
            this item belongs to you, use the contact option
            below. Ownership will be verified before handover.
          </Text>
        </View>
      </View>

      {/* Possible Match */}
      <View style={styles.matchCard}>
        <View style={styles.matchIcon}>
          <Text>🔗</Text>
        </View>

        <View style={styles.matchInfo}>
          <Text style={styles.matchTitle}>
            Possible Match
          </Text>

          <Text style={styles.matchText}>
            FindBack will compare this item with opposite
            lost/found reports.
          </Text>
        </View>
      </View>

      {/* Security Information */}
      <View style={styles.securityCard}>
        <Text style={styles.securityTitle}>
          🔐 Safe Handover
        </Text>

        <Text style={styles.securityText}>
          Personal contact details are not publicly displayed.
          Ownership verification is required before returning
          an item.
        </Text>
      </View>

      {/* Contact */}
      <Pressable
        style={styles.contactButton}
        onPress={handleContact}
      >
        <Text style={styles.contactButtonText}>
          {isLost
            ? "I Found This Item"
            : "I Think This Is Mine"}
        </Text>
      </Pressable>

      <View style={styles.bottomSpace} />
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
    marginBottom: theme.spacing.lg,
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

  headerTitle: {
    fontSize: theme.fontSize.heading,
    fontWeight: "700",
    color: theme.colors.text,
  },

  imageContainer: {
    height: 220,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.radius.lg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  imageEmoji: {
    fontSize: 80,
  },

  mainCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.lg,
  },

  titleContainer: {
    flex: 1,
    marginRight: theme.spacing.md,
  },

  itemName: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.text,
  },

  category: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 4,
  },

  statusBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: theme.radius.full,
  },

  lostBadge: {
    backgroundColor: "#FEF2F2",
  },

  foundBadge: {
    backgroundColor: "#F0FDF4",
  },

  statusText: {
    fontSize: 10,
    fontWeight: "700",
  },

  lostText: {
    color: theme.colors.lost,
  },

  foundText: {
    color: theme.colors.found,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing.md,
  },

  detailIcon: {
    fontSize: 20,
    width: 36,
  },

  detailLabel: {
    fontSize: 11,
    color: theme.colors.muted,
  },

  detailValue: {
    fontSize: theme.fontSize.body,
    color: theme.colors.text,
    fontWeight: "600",
    marginTop: 2,
  },

  section: {
    marginTop: theme.spacing.xl,
  },

  sectionTitle: {
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },

  descriptionCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
  },

  description: {
    fontSize: theme.fontSize.body,
    color: theme.colors.textSecondary,
    lineHeight: 23,
  },

  matchCard: {
    flexDirection: "row",
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#DBEAFE",
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.xl,
  },

  matchIcon: {
    width: 42,
    height: 42,
    borderRadius: theme.radius.full,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  matchInfo: {
    flex: 1,
  },

  matchTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.primary,
  },

  matchText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary,
    lineHeight: 18,
    marginTop: 4,
  },

  securityCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.md,
  },

  securityTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  securityText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    lineHeight: 18,
    marginTop: theme.spacing.sm,
  },

  contactButton: {
    height: 54,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.xl,
  },

  contactButtonText: {
    color: "#FFFFFF",
    fontSize: theme.fontSize.body,
    fontWeight: "700",
  },

  bottomSpace: {
    height: theme.spacing.xl,
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },

  errorText: {
    fontSize: theme.fontSize.body,
    color: theme.colors.text,
  },

  backLink: {
    color: theme.colors.primary,
    marginTop: theme.spacing.md,
    fontWeight: "600",
  },
});