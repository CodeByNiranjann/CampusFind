import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useEffect, useState } from "react";

import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db, auth } from "../services/firebase";

import { theme } from "../constants/theme";

export default function NotificationsScreen({ navigation }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setLoading(false);
      return;
    }

    const notificationsQuery = query(
      collection(db, "notifications"),
      where("userId", "==", currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      notificationsQuery,
      (snapshot) => {
        const data = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));

        setNotifications(data);
        setLoading(false);
      },
      (error) => {
        console.log(
          "Notification error:",
          error
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleNotificationPress = async (
    notification
  ) => {
    try {
      // Mark notification as read
      if (!notification.read) {
        await updateDoc(
          doc(
            db,
            "notifications",
            notification.id
          ),
          {
            read: true,
          }
        );
      }

      // Open possible matches
      if (
        notification.type === "POSSIBLE_MATCH"
      ) {
        navigation.navigate("PossibleMatches");
      }
    } catch (error) {
      console.log(
        "Notification update error:",
        error
      );
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "Just now";
    }

    try {
      const date = timestamp.toDate();

      return date.toLocaleString();
    } catch (error) {
      return "Recently";
    }
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
          onPress={() =>
            navigation.goBack()
          }
        >
          <Text style={styles.backText}>
            ←
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Notifications
        </Text>

        <View style={styles.headerSpace} />
      </View>

      {/* Loading */}

      {loading && (
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
          />

          <Text style={styles.loadingText}>
            Loading notifications...
          </Text>
        </View>
      )}

      {/* Empty */}

      {!loading &&
        notifications.length === 0 && (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>
              🔔
            </Text>

            <Text style={styles.emptyTitle}>
              No notifications yet
            </Text>

            <Text style={styles.emptyText}>
              When a possible match is found
              for your item, you'll see a
              notification here.
            </Text>
          </View>
        )}

      {/* Notifications */}

      {!loading &&
        notifications.map((notification) => (
          <Pressable
            key={notification.id}
            style={[
              styles.notificationCard,
              !notification.read &&
                styles.unreadCard,
            ]}
            onPress={() =>
              handleNotificationPress(
                notification
              )
            }
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>
                🔗
              </Text>
            </View>

            <View style={styles.notificationContent}>
              <View
                style={
                  styles.notificationHeader
                }
              >
                <Text
                  style={styles.notificationTitle}
                >
                  {notification.title ||
                    "Notification"}
                </Text>

                {!notification.read && (
                  <View
                    style={styles.unreadDot}
                  />
                )}
              </View>

              <Text
                style={styles.notificationMessage}
              >
                {notification.message ||
                  "You have a new notification."}
              </Text>

              <Text
                style={styles.notificationDate}
              >
                {formatDate(
                  notification.createdAt
                )}
              </Text>
            </View>
          </Pressable>
        ))}
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
    justifyContent: "space-between",
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
  },

  backText: {
    fontSize: 24,
    color: theme.colors.text,
  },

  title: {
    fontSize: theme.fontSize.title,
    fontWeight: "700",
    color: theme.colors.text,
  },

  headerSpace: {
    width: 42,
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },

  loadingText: {
    marginTop: theme.spacing.md,
    fontSize: theme.fontSize.body,
    color: theme.colors.muted,
  },

  emptyCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    alignItems: "center",
    marginTop: theme.spacing.lg,
  },

  emptyIcon: {
    fontSize: 45,
    marginBottom: theme.spacing.md,
  },

  emptyTitle: {
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
    textAlign: "center",
  },

  emptyText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    textAlign: "center",
    lineHeight: 19,
    marginTop: theme.spacing.sm,
  },

  notificationCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    flexDirection: "row",
    marginBottom: theme.spacing.md,
  },

  unreadCard: {
    backgroundColor: theme.colors.primaryLight,
    borderColor: "#BFDBFE",
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  icon: {
    fontSize: 23,
  },

  notificationContent: {
    flex: 1,
  },

  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  notificationTitle: {
    flex: 1,
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  unreadDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    marginLeft: theme.spacing.sm,
  },

  notificationMessage: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary,
    lineHeight: 18,
    marginTop: 5,
  },

  notificationDate: {
    fontSize: 11,
    color: theme.colors.muted,
    marginTop: 7,
  },
});