import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";

import {
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
  doc,
} from "firebase/firestore";

import { db, auth } from "../services/firebase";

export default function MyMessagesScreen({
  navigation,
}) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUserId = auth.currentUser?.uid;

  useEffect(() => {
    if (!currentUserId) {
      setLoading(false);
      return;
    }

    const chatsQuery = query(
      collection(db, "chats"),
      where(
        "participants",
        "array-contains",
        currentUserId
      )
    );

    const unsubscribe = onSnapshot(
      chatsQuery,
      async (snapshot) => {
        const chatList = [];

        for (const chatDocument of snapshot.docs) {
          const chatData = chatDocument.data();

          let itemData = {};

          if (chatData.itemId) {
            try {
              const itemSnapshot = await getDoc(
                doc(
                  db,
                  "items",
                  chatData.itemId
                )
              );

              if (itemSnapshot.exists()) {
                itemData = {
                  id: itemSnapshot.id,
                  ...itemSnapshot.data(),
                };
              }
            } catch (error) {
              console.log(
                "Item fetch error:",
                error
              );
            }
          }

          const otherUserId =
            chatData.participants?.find(
              (userId) =>
                userId !== currentUserId
            );

          chatList.push({
            id: chatDocument.id,
            ...chatData,
            item: itemData,
            otherUserId,
          });
        }

        chatList.sort((a, b) => {
          const timeA =
            a.updatedAt?.seconds || 0;

          const timeB =
            b.updatedAt?.seconds || 0;

          return timeB - timeA;
        });

        setChats(chatList);
        setLoading(false);
      },
      (error) => {
        console.log(
          "Chats fetch error:",
          error
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [currentUserId]);

  const openChat = (chat) => {
    const item = {
      ...(chat.item || {}),

      id:
        chat.item?.id ||
        chat.itemId,

      userId:
        chat.otherUserId,

      itemName:
        chat.item?.itemName ||
        "CampusFind Item",

      location:
        chat.item?.location ||
        "Location not available",
    };

    navigation.navigate(
      "ChatScreen",
      {
        item,
      }
    );
  };

  const renderChat = ({ item }) => {
    return (
      <Pressable
        style={styles.chatCard}
        onPress={() => openChat(item)}
      >
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>
            💬
          </Text>
        </View>

        <View style={styles.chatInfo}>
          <Text style={styles.itemName}>
            {item.item?.itemName ||
              "CampusFind Item"}
          </Text>

          <Text style={styles.lastMessage}>
            {item.lastMessage ||
              "Start a conversation"}
          </Text>

          <Text style={styles.status}>
            Private CampusFind chat
          </Text>
        </View>

        <Text style={styles.arrow}>
          ›
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() =>
            navigation.goBack()
          }
        >
          <Text style={styles.back}>
            ←
          </Text>
        </Pressable>

        <View>
          <Text style={styles.title}>
            My Messages
          </Text>

          <Text style={styles.subtitle}>
            Your private conversations
          </Text>
        </View>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />

          <Text style={styles.loadingText}>
            Loading messages...
          </Text>
        </View>
      ) : chats.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyIcon}>
            💬
          </Text>

          <Text style={styles.emptyTitle}>
            No messages yet
          </Text>

          <Text style={styles.emptyText}>
            When you contact someone about a
            lost or found item, your
            conversation will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={chats}
          keyExtractor={(item) =>
            item.id
          }
          renderItem={renderChat}
          contentContainerStyle={
            styles.list
          }
          showsVerticalScrollIndicator={
            false
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  back: {
    fontSize: 30,
    marginRight: 15,
    color: "#111827",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },

  list: {
    padding: 16,
  },

  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 22,
  },

  chatInfo: {
    flex: 1,
    marginLeft: 12,
  },

  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 5,
  },

  lastMessage: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 4,
  },

  status: {
    fontSize: 11,
    color: "#9CA3AF",
  },

  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
    marginLeft: 8,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  loadingText: {
    marginTop: 10,
    color: "#6B7280",
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#6B7280",
    textAlign: "center",
  },
});