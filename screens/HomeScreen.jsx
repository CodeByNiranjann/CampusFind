import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import { theme } from "../constants/theme";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.title}>FindBack</Text>
          <Text style={styles.subtitle}>
            Find what you lost. Return what you found.
          </Text>
        </View>

        <Pressable
          style={styles.notificationButton}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Text style={styles.notificationIcon}>🔔</Text>
        </Pressable>
      </View>

      {/* Search */}
      <Pressable
        style={styles.searchBox}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchText}>
          Search lost or found items...
        </Text>
      </Pressable>

      {/* Main Actions */}
      <Text style={styles.sectionTitle}>What happened?</Text>

      <View style={styles.actionRow}>
        <Pressable
          style={[styles.actionCard, styles.lostCard]}
          onPress={() =>
            navigation.navigate("ReportItem", {
              type: "LOST",
            })
          }
        >
          <View style={styles.iconCircle}>
            <Text style={styles.actionIcon}>🔎</Text>
          </View>

          <Text style={styles.actionTitle}>I Lost Something</Text>

          <Text style={styles.actionDescription}>
            Report an item you lost on campus
          </Text>
        </Pressable>

        <Pressable
          style={[styles.actionCard, styles.foundCard]}
          onPress={() =>
            navigation.navigate("ReportItem", {
              type: "FOUND",
            })
          }
        >
          <View style={styles.iconCircle}>
            <Text style={styles.actionIcon}>📦</Text>
          </View>

          <Text style={styles.actionTitle}>I Found Something</Text>

          <Text style={styles.actionDescription}>
            Help someone find their item
          </Text>
        </Pressable>
      </View>

      {/* Possible Matches */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Possible Matches</Text>

        <Pressable
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.seeAll}>See All</Text>
        </Pressable>
      </View>

      <View style={styles.emptyCard}>
        <Text style={styles.emptyIcon}>🔗</Text>

        <Text style={styles.emptyTitle}>
          No possible matches yet
        </Text>

        <Text style={styles.emptyText}>
          When we find a possible match for your lost or found item,
          it will appear here.
        </Text>
      </View>

      {/* Recent Items */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Items</Text>

        <Pressable
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.seeAll}>View All</Text>
        </Pressable>
      </View>

      <View style={styles.itemCard}>
        <View style={styles.itemIcon}>
          <Text style={styles.itemEmoji}>📱</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>Example Item</Text>

          <Text style={styles.itemLocation}>
            📍 Library
          </Text>

          <Text style={styles.itemDate}>
            Recently reported
          </Text>
        </View>

        <View style={styles.foundBadge}>
          <Text style={styles.foundBadgeText}>FOUND</Text>
        </View>
      </View>

      {/* Quick Info */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          💡 How FindBack works
        </Text>

        <Text style={styles.infoText}>
          Report your lost or found item → We find possible matches →
          Connect securely → Verify ownership → Return the item.
        </Text>
      </View>

      {/* Bottom spacing */}
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
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },

  greeting: {
    fontSize: theme.fontSize.body,
    color: theme.colors.muted,
    marginBottom: theme.spacing.xs,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
  },

  notificationButton: {
    width: 46,
    height: 46,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationIcon: {
    fontSize: 21,
  },

  searchBox: {
    height: 54,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: theme.spacing.sm,
  },

  searchText: {
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  sectionTitle: {
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },

  actionRow: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },

  actionCard: {
    flex: 1,
    minHeight: 180,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
  },

  lostCard: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA",
  },

  foundCard: {
    backgroundColor: "#F0FDF4",
    borderColor: "#BBF7D0",
  },

  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },

  actionIcon: {
    fontSize: 22,
  },

  actionTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  actionDescription: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    lineHeight: 18,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },

  seeAll: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.small,
    fontWeight: "600",
  },

  emptyCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  emptyIcon: {
    fontSize: 34,
    marginBottom: theme.spacing.sm,
  },

  emptyTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
    textAlign: "center",
  },

  emptyText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    textAlign: "center",
    lineHeight: 18,
    marginTop: theme.spacing.sm,
  },

  itemCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  itemIcon: {
    width: 58,
    height: 58,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  itemEmoji: {
    fontSize: 25,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  itemLocation: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 4,
  },

  itemDate: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 2,
  },

  foundBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: theme.radius.full,
  },

  foundBadgeText: {
    color: theme.colors.found,
    fontSize: 10,
    fontWeight: "700",
  },

  infoCard: {
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: "#DBEAFE",
  },

  infoTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },

  infoText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary,
    lineHeight: 19,
  },

  bottomSpace: {
    height: theme.spacing.xl,
  },
});

