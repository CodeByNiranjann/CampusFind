import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";

import { db, auth } from "../services/firebase";

import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { theme } from "../constants/theme";

export default function MyItemsScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setErrorMessage("Please login to view your items.");
      setLoading(false);
      return;
    }

    console.log("Loading My Items for:", currentUser.email);

    const itemsQuery = query(
      collection(db, "items"),
      where("userId", "==", currentUser.uid)
    );

    const unsubscribe = onSnapshot(
      itemsQuery,
      (snapshot) => {
        const itemList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort newest first on the client
        itemList.sort((a, b) => {
          const dateA = a.createdAt?.toMillis?.() || 0;
          const dateB = b.createdAt?.toMillis?.() || 0;

          return dateB - dateA;
        });

        setItems(itemList);
        setLoading(false);
        setErrorMessage("");

        console.log(
          "My Items loaded:",
          itemList.length
        );
      },
      (error) => {
        console.log("My Items Firestore error:", error);

        setErrorMessage(
          "Unable to load your items. Please try again."
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const getReportedDate = (timestamp) => {
    if (!timestamp) {
      return "Recently reported";
    }

    try {
      return `Reported ${timestamp
        .toDate()
        .toLocaleDateString()}`;
    } catch {
      return "Recently reported";
    }
  };

  // Loading screen
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator
          size="large"
          color={theme.colors.primary}
        />

        <Text style={styles.loadingText}>
          Loading your items...
        </Text>

        <Pressable
          style={styles.loadingBackButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loadingBackText}>
            ← Back to Home
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              My Items
            </Text>

            <Text style={styles.subtitle}>
              Your lost and found reports
            </Text>
          </View>
        </View>

        {/* Back to Home */}
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backButtonText}>
            ← Back to Home
          </Text>
        </Pressable>

        {/* Error */}
        {errorMessage ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorTitle}>
              Something went wrong
            </Text>

            <Text style={styles.errorText}>
              {errorMessage}
            </Text>
          </View>
        ) : null}

        {/* Empty State */}
        {!errorMessage && items.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>
              📋
            </Text>

            <Text style={styles.emptyTitle}>
              No Items Yet
            </Text>

            <Text style={styles.emptyText}>
              You haven't reported any lost or found
              items yet.
            </Text>

            <Pressable
              style={styles.reportButton}
              onPress={() =>
                navigation.navigate("ReportItem")
              }
            >
              <Text style={styles.reportButtonText}>
                Report an Item
              </Text>
            </Pressable>
          </View>
        ) : null}

        {/* Items */}
        {items.map((item) => (
          <View
            key={item.id}
            style={styles.itemCard}
          >
            {/* Card Header */}
            <View style={styles.cardHeader}>
              <View style={styles.itemIcon}>
                <Text style={styles.itemEmoji}>
                  {item.type === "LOST"
                    ? "🔎"
                    : "📦"}
                </Text>
              </View>

              <View style={styles.itemMain}>
                <Text style={styles.itemName}>
                  {item.itemName}
                </Text>

                <Text style={styles.category}>
                  {item.category}
                </Text>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  item.type === "LOST"
                    ? styles.lostBadge
                    : styles.foundBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    item.type === "LOST"
                      ? styles.lostText
                      : styles.foundText,
                  ]}
                >
                  {item.type}
                </Text>
              </View>
            </View>

            {/* Description */}
            <Text style={styles.description}>
              {item.description}
            </Text>

            {/* Location */}
            <Text style={styles.detail}>
              📍 {item.location}
            </Text>

            {/* Date / Time */}
            <Text style={styles.detail}>
              📅 {item.date} • {item.time}
            </Text>

            {/* Report Date */}
            <Text style={styles.reported}>
              {getReportedDate(item.createdAt)}
            </Text>
          </View>
        ))}

        {/* Bottom Home Button */}
        <Pressable
          style={styles.homeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.homeButtonText}>
            🏠 Go to Home
          </Text>
        </Pressable>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  scrollView: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    padding: theme.spacing.lg,
  },

  centerContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },

  loadingText: {
    marginTop: theme.spacing.md,
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  loadingBackButton: {
    marginTop: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },

  loadingBackText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.body,
    fontWeight: "600",
  },

  header: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },

  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: "700",
    color: theme.colors.text,
  },

  subtitle: {
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.body,
    color: theme.colors.muted,
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primaryLight,
  },

  backButtonText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.small,
    fontWeight: "700",
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

  emptyCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    alignItems: "center",
    marginTop: theme.spacing.md,
  },

  emptyIcon: {
    fontSize: 42,
    marginBottom: theme.spacing.md,
  },

  emptyTitle: {
    fontSize: theme.fontSize.title,
    fontWeight: "700",
    color: theme.colors.text,
  },

  emptyText: {
    marginTop: theme.spacing.sm,
    color: theme.colors.muted,
    textAlign: "center",
    fontSize: theme.fontSize.body,
    lineHeight: 22,
  },

  reportButton: {
    marginTop: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.md,
  },

  reportButtonText: {
    color: "#FFFFFF",
    fontSize: theme.fontSize.body,
    fontWeight: "700",
  },

  itemCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemIcon: {
    width: 52,
    height: 52,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  itemEmoji: {
    fontSize: 24,
  },

  itemMain: {
    flex: 1,
  },

  itemName: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  category: {
    marginTop: 4,
    color: theme.colors.muted,
    fontSize: theme.fontSize.small,
  },

  statusBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: theme.radius.full,
  },

  lostBadge: {
    backgroundColor: "#FEE2E2",
  },

  foundBadge: {
    backgroundColor: "#DCFCE7",
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

  description: {
    marginTop: theme.spacing.md,
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.body,
    lineHeight: 22,
  },

  detail: {
    marginTop: theme.spacing.sm,
    color: theme.colors.muted,
    fontSize: theme.fontSize.small,
  },

  reported: {
    marginTop: theme.spacing.md,
    color: theme.colors.muted,
    fontSize: 11,
  },

  homeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    minHeight: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.lg,
  },

  homeButtonText: {
    color: "#FFFFFF",
    fontSize: theme.fontSize.body,
    fontWeight: "700",
  },

  bottomSpace: {
    height: theme.spacing.xl,
  },
});