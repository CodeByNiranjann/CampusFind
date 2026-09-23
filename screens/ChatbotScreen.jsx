import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

export default function ChatbotScreen({ navigation }) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "text",
      sender: "bot",
      text:
        "Hi 👋 I'm CampusFind Assistant.\n\nI can help you report lost/found items and search the CampusFind database.\n\nTry asking:\n• How can I report a lost item?\n• How can I report a found item?\n• I lost my phone\n• I found a wallet",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const searchDatabase = async (keyword, intent) => {
    try {
      const snapshot = await getDocs(
        collection(db, "items")
      );

      const searchText = keyword.toLowerCase();

      const results = [];

      snapshot.forEach((doc) => {
        const item = doc.data();

        const itemName = String(
          item.itemName || ""
        ).toLowerCase();

        const category = String(
          item.category || ""
        ).toLowerCase();

        const description = String(
          item.description || ""
        ).toLowerCase();

        const location = String(
          item.location || ""
        ).toLowerCase();

        const fullText =
          `${itemName} ${category} ${description} ${location}`;

        const keywordMatch =
          fullText.includes(searchText);

        const typeMatch =
          intent === "LOST"
            ? item.type === "FOUND"
            : item.type === "LOST";

        if (keywordMatch && typeMatch) {
          results.push({
            id: doc.id,
            ...item,
          });
        }
      });

      return results;
    } catch (error) {
      console.log(
        "Database search error:",
        error
      );

      return [];
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || loading) {
      return;
    }

    const userText = message.trim();

    const userMessage = {
      id: Date.now(),
      type: "text",
      sender: "user",
      text: userText,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setMessage("");
    setLoading(true);

    const text = userText.toLowerCase();

    let reply = "";
    let intent = null;
    let keyword = "";

    if (
      text.includes("how") &&
      (text.includes("lost") ||
        text.includes("report"))
    ) {
      reply =
        "To report a LOST item, follow these steps:\n\n" +
        "1️⃣ Go to the Home page\n" +
        "2️⃣ Tap 'I Lost Something'\n" +
        "3️⃣ Enter the item name\n" +
        "4️⃣ Select the category\n" +
        "5️⃣ Enter where you lost it\n" +
        "6️⃣ Enter the date and time\n" +
        "7️⃣ Add a description\n" +
        "8️⃣ Submit the report\n\n" +
        "Your lost item will then be stored in CampusFind.";

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          type: "text",
          sender: "bot",
          text: reply,
        },
      ]);

      setLoading(false);
      return;
    }

    if (
      text.includes("how") &&
      text.includes("found")
    ) {
      reply =
        "To report a FOUND item, follow these steps:\n\n" +
        "1️⃣ Go to the Home page\n" +
        "2️⃣ Tap 'I Found Something'\n" +
        "3️⃣ Enter the item name\n" +
        "4️⃣ Select the category\n" +
        "5️⃣ Enter where you found it\n" +
        "6️⃣ Enter the date and time\n" +
        "7️⃣ Add a description\n" +
        "8️⃣ Submit the report\n\n" +
        "The found item will then be stored in CampusFind.";

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          type: "text",
          sender: "bot",
          text: reply,
        },
      ]);

      setLoading(false);
      return;
    }

    if (
      text.includes("lost") ||
      text.includes("missing")
    ) {
      intent = "LOST";
    }

    if (
      text.includes("found") ||
      text.includes("find")
    ) {
      intent = "FOUND";
    }

    const words = text
      .replace(/[?.!,]/g, "")
      .split(" ");

    const ignoredWords = [
      "i",
      "a",
      "the",
      "my",
      "is",
      "was",
      "lost",
      "missing",
      "found",
      "find",
      "something",
      "item",
      "please",
      "can",
      "you",
      "help",
      "me",
      "where",
      "how",
      "what",
      "about",
      "have",
      "had",
      "to",
      "in",
      "on",
      "of",
      "for",
      "and",
      "or",
    ];

    const usefulWords = words.filter(
      (word) =>
        word.length > 2 &&
        !ignoredWords.includes(word)
    );

    keyword = usefulWords.join(" ");

    if (intent && keyword) {
      const results = await searchDatabase(
        keyword,
        intent
      );

      if (results.length > 0) {
        setMessages((previous) => [
          ...previous,
          {
            id: Date.now() + 1,
            type: "text",
            sender: "bot",
            text:
              `🔎 I found ${results.length} possible item(s) in the database.\n\n` +
              `These are ${
                intent === "LOST"
                  ? "FOUND"
                  : "LOST"
              } reports related to "${keyword}".`,
          },
          {
            id: Date.now() + 2,
            type: "items",
            sender: "bot",
            items: results,
          },
        ]);

        setLoading(false);
        return;
      }

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          type: "text",
          sender: "bot",
          text:
            `🔎 I searched the CampusFind database for "${keyword}", but I couldn't find a matching ${
              intent === "LOST"
                ? "found"
                : "lost"
            } item.\n\n` +
            "You can try another item name, category, or description.",
        },
      ]);

      setLoading(false);
      return;
    }

    if (
      text.includes("hello") ||
      text.includes("hi")
    ) {
      reply =
        "Hello 👋 How can I help you?\n\n" +
        "You can ask me about:\n" +
        "• Reporting a lost item\n" +
        "• Reporting a found item\n" +
        "• Searching for an item\n" +
        "• Possible matching items";
    } else if (
      text.includes("report")
    ) {
      reply =
        "I can guide you through reporting an item.\n\n" +
        "If you LOST something, ask:\n" +
        "\"How can I report a lost item?\"\n\n" +
        "If you FOUND something, ask:\n" +
        "\"How can I report a found item?\"";
    } else if (
      text.includes("search")
    ) {
      reply =
        "Sure 🔎 Tell me what you lost or found.\n\n" +
        "For example:\n" +
        "\"I lost my Samsung phone\"\n" +
        "\"I found a wallet\"\n\n" +
        "I'll search the CampusFind database.";
    } else {
      reply =
        "I can help you with:\n\n" +
        "📱 Lost item reporting\n" +
        "📦 Found item reporting\n" +
        "🔎 Searching items\n" +
        "🔗 Possible matches\n\n" +
        "Try asking:\n" +
        "\"I lost my phone\"";
    }

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now() + 1,
        type: "text",
        sender: "bot",
        text: reply,
      },
    ]);

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButton}>
            ←
          </Text>
        </Pressable>

        <View>
          <Text style={styles.title}>
            CampusFind Assistant
          </Text>

          <Text style={styles.subtitle}>
            Lost & Found Helper
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.chatArea}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((item) => {
          if (item.type === "items") {
            return (
              <View
                key={item.id}
                style={styles.resultsContainer}
              >
                {item.items.map((foundItem) => (
                  <Pressable
                    key={foundItem.id}
                    style={styles.itemCard}
                    onPress={() =>
                      navigation.navigate(
                        "FoundItemDetails",
                        {
                          item: foundItem,
                        }
                      )
                    }
                  >
                    <Text style={styles.itemName}>
                      📱{" "}
                      {foundItem.itemName ||
                        "Unknown Item"}
                    </Text>

                    <Text style={styles.itemInfo}>
                      📂 Category:{" "}
                      {foundItem.category ||
                        "Not specified"}
                    </Text>

                    <Text style={styles.itemInfo}>
                      📍 Location:{" "}
                      {foundItem.location ||
                        "Not specified"}
                    </Text>

                    <Text style={styles.itemInfo}>
                      📝{" "}
                      {foundItem.description ||
                        "No description"}
                    </Text>

                    <View
                      style={styles.typeBadge}
                    >
                      <Text
                        style={
                          styles.typeBadgeText
                        }
                      >
                        {foundItem.type}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            );
          }

          return (
            <View
              key={item.id}
              style={[
                styles.messageBubble,
                item.sender === "user"
                  ? styles.userBubble
                  : styles.botBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  item.sender === "user"
                    ? styles.userText
                    : styles.botText,
                ]}
              >
                {item.text}
              </Text>
            </View>
          );
        })}

        {loading && (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="small" />

            <Text style={styles.loadingText}>
              Searching CampusFind...
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask CampusFind..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={sendMessage}
        />

        <Pressable
          style={styles.sendButton}
          onPress={sendMessage}
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
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  backButton: {
    fontSize: 30,
    marginRight: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },

  chatArea: {
    flex: 1,
  },

  chatContent: {
    padding: 16,
  },

  messageBubble: {
    maxWidth: "82%",
    padding: 13,
    borderRadius: 16,
    marginBottom: 12,
  },

  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#2563EB",
  },

  messageText: {
    fontSize: 15,
    lineHeight: 21,
  },

  botText: {
    color: "#111827",
  },

  userText: {
    color: "#FFFFFF",
  },

  resultsContainer: {
    width: "90%",
    alignSelf: "flex-start",
  },

  itemCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },

  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  itemInfo: {
    fontSize: 13,
    color: "#4B5563",
    marginBottom: 5,
  },

  typeBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#DCFCE7",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },

  typeBadgeText: {
    color: "#166534",
    fontSize: 11,
    fontWeight: "700",
  },

  loadingBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
  },

  loadingText: {
    marginLeft: 8,
    color: "#6B7280",
    fontSize: 13,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    height: 48,
    backgroundColor: "#F1F5F9",
    borderRadius: 24,
    paddingHorizontal: 18,
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