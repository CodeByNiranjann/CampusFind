import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { auth } from "../services/firebase";

import {
  createChat,
  sendMessage,
  listenToMessages,
} from "../services/chat";

export default function ChatScreen({
  route,
  navigation,
}) {
  const { item } = route.params;

  const currentUserId =
    auth.currentUser?.uid;

  const finderUserId = item?.userId;

  const [chatId, setChatId] =
    useState(null);

  const [messages, setMessages] =
    useState([]);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [chatError, setChatError] =
    useState("");

  useEffect(() => {
    let unsubscribe;

    const startChat = async () => {
      try {
        console.log(
          "Current User ID:",
          currentUserId
        );

        console.log(
          "Finder User ID:",
          finderUserId
        );

        console.log(
          "Item ID:",
          item?.id
        );

        if (!currentUserId) {
          setChatError(
            "You are not logged in."
          );

          setLoading(false);
          return;
        }

        if (!finderUserId) {
          setChatError(
            "This item does not have the finder's user ID."
          );

          setLoading(false);
          return;
        }

        if (!item?.id) {
          setChatError(
            "Item ID is missing."
          );

          setLoading(false);
          return;
        }

        if (
          currentUserId === finderUserId
        ) {
          setChatError(
            "You cannot message yourself."
          );

          setLoading(false);
          return;
        }

        const id = await createChat({
          currentUserId,
          finderUserId,
          itemId: item.id,
        });

        console.log(
          "Chat created:",
          id
        );

        setChatId(id);

        unsubscribe =
          listenToMessages(
            id,
            (newMessages) => {
              console.log(
                "Messages received:",
                newMessages.length
              );

              setMessages(
                newMessages
              );
            }
          );

        setLoading(false);
      } catch (error) {
        console.log(
          "Chat creation error:",
          error
        );

        setChatError(
          error.message ||
            "Unable to open chat."
        );

        setLoading(false);
      }
    };

    startChat();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const handleSendMessage =
    async () => {
      const text = message.trim();

      if (!text) {
        return;
      }

      if (!currentUserId) {
        Alert.alert(
          "Login Required",
          "Please login before sending a message."
        );

        return;
      }

      if (!finderUserId) {
        Alert.alert(
          "Cannot Send",
          "This item does not have the finder's user ID."
        );

        return;
      }

      if (!chatId) {
        Alert.alert(
          "Chat Not Ready",
          "Please wait for the chat to open."
        );

        return;
      }

      setMessage("");

      try {
        console.log(
          "Sending message:",
          text
        );

        await sendMessage({
          chatId,
          senderId: currentUserId,
          receiverId: finderUserId,
          text,
        });

        console.log(
          "Message sent successfully"
        );
      } catch (error) {
        console.log(
          "Send message error:",
          error
        );

        setMessage(text);

        Alert.alert(
          "Message Failed",
          error.message ||
            "Could not send the message."
        );
      }
    };

  const renderMessage = ({
    item: chatMessage,
  }) => {
    const isMine =
      chatMessage.senderId ===
      currentUserId;

    return (
      <View
        style={[
          styles.messageBubble,
          isMine
            ? styles.myMessage
            : styles.theirMessage,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            isMine
              ? styles.myMessageText
              : styles.theirMessageText,
          ]}
        >
          {chatMessage.text}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : "height"
      }
    >
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

        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>
            Chat with Finder
          </Text>

          <Text style={styles.headerSubtitle}>
            {item?.itemName ||
              "Found Item"}
          </Text>
        </View>
      </View>

      <View style={styles.itemInfoCard}>
        <Text style={styles.itemInfoTitle}>
          Regarding
        </Text>

        <Text style={styles.itemInfoName}>
          {item?.itemName ||
            "Found Item"}
        </Text>

        <Text style={styles.itemInfoLocation}>
          📍{" "}
          {item?.location ||
            "Location not available"}
        </Text>
      </View>

      {loading ? (
        <View style={styles.center}>
          <Text style={styles.loadingText}>
            Opening chat...
          </Text>
        </View>
      ) : chatError ? (
        <View style={styles.center}>
          <Text style={styles.errorTitle}>
            Unable to open chat
          </Text>

          <Text style={styles.errorText}>
            {chatError}
          </Text>
        </View>
      ) : (
        <FlatList
          data={messages}
          keyExtractor={(chatMessage) =>
            chatMessage.id
          }
          renderItem={renderMessage}
          contentContainerStyle={
            styles.messageList
          }
          showsVerticalScrollIndicator={
            false
          }
        />
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <Pressable
          style={styles.sendButton}
          onPress={handleSendMessage}
        >
          <Text style={styles.sendText}>
            ➤
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
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
    paddingHorizontal: 18,
    paddingBottom: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  back: {
    fontSize: 30,
    marginRight: 15,
  },

  headerInfo: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  headerSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },

  itemInfoCard: {
    backgroundColor: "#FFFFFF",
    margin: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  itemInfoTitle: {
    fontSize: 12,
    color: "#6B7280",
  },

  itemInfoName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginTop: 3,
  },

  itemInfoLocation: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 5,
  },

  messageList: {
    padding: 15,
    paddingBottom: 20,
  },

  messageBubble: {
    maxWidth: "78%",
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
  },

  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#2563EB",
    borderBottomRightRadius: 4,
  },

  theirMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderBottomLeftRadius: 4,
  },

  messageText: {
    fontSize: 15,
    lineHeight: 21,
  },

  myMessageText: {
    color: "#FFFFFF",
  },

  theirMessageText: {
    color: "#111827",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  loadingText: {
    color: "#6B7280",
    fontSize: 14,
  },

  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#DC2626",
    marginBottom: 8,
    textAlign: "center",
  },

  errorText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 21,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 100,
    backgroundColor: "#F1F5F9",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111827",
  },

  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  sendText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});