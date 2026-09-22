import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const API_URL = "http://localhost:5000";

export default function ChatbotScreen({ navigation }) {
  const [description, setDescription] = useState("");

  const [messages, setMessages] = useState([]);

  const [answer, setAnswer] = useState("");

  const [questions, setQuestions] = useState([]);

  const [questionIndex, setQuestionIndex] = useState(0);

  const [started, setStarted] = useState(false);

  const [loading, setLoading] = useState(false);

  // Find the item category from user's description
  const findCategory = (text) => {
    const lowerText = text.toLowerCase();

    const categories = [
      "wallet",
      "phone",
      "bag",
      "watch",
      "money",
      "laptop",
      "id card",
      "id_card",
      "keys",
      "earphones",
      "calculator",
      "water bottle",
      "water_bottle",
      "helmet",
      "book",
      "pen drive",
      "pen_drive",
      "spectacles",
    ];

    for (const category of categories) {
      if (lowerText.includes(category.replace("_", " "))) {
        return category.replace(" ", "_");
      }
    }

    return null;
  };

  // Start the interview
  const startInterview = async () => {
    if (!description.trim()) {
      alert("Please enter your lost item description.");
      return;
    }

    setLoading(true);

    try {
      const category = findCategory(description);

      if (!category) {
        setMessages([
          {
            sender: "bot",
            text:
              "Sorry, I could not identify the item. Please mention the item clearly, such as watch, phone, wallet, bag, laptop, etc.",
          },
        ]);

        setLoading(false);
        return;
      }

      // Call backend
      const response = await fetch(
        `${API_URL}/questions/${category}`
      );

      const data = await response.json();

      if (!data.questions || data.questions.length === 0) {
        setMessages([
          {
            sender: "bot",
            text: "Sorry, I could not find questions for this item.",
          },
        ]);

        setLoading(false);
        return;
      }

      setQuestions(data.questions);
      setQuestionIndex(0);
      setStarted(true);

      setMessages([
        {
          sender: "user",
          text: description,
        },
        {
          sender: "bot",
          text: data.questions[0],
        },
      ]);

      setDescription("");
    } catch (error) {
      console.log("Backend error:", error);

      setMessages([
        {
          sender: "bot",
          text:
            "I cannot connect to the backend. Please make sure the backend server is running on port 5000.",
        },
      ]);
    }

    setLoading(false);
  };

  // Send user's answer
  const sendAnswer = () => {
    if (!answer.trim()) {
      return;
    }

    const userAnswer = answer.trim();

    // Add user's answer
    const newMessages = [
      ...messages,
      {
        sender: "user",
        text: userAnswer,
      },
    ];

    const nextIndex = questionIndex + 1;

    // If more questions are available
    if (nextIndex < questions.length) {
      newMessages.push({
        sender: "bot",
        text: questions[nextIndex],
      });

      setQuestionIndex(nextIndex);
    } else {
      // Interview completed
      newMessages.push({
        sender: "bot",
        text:
          "Thank you! I have collected all the details about your lost item.",
      });

      setQuestionIndex(nextIndex);
    }

    setMessages(newMessages);
    setAnswer("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.robot}>🤖</Text>

        <Text style={styles.title}>AI Interview</Text>
      </View>

      {/* Description */}
      {!started && (
        <>
          <Text style={styles.label}>Item Description</Text>

          <TextInput
            style={styles.descriptionInput}
            placeholder="Example: I lost my black watch near the library"
            placeholderTextColor="#888"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <TouchableOpacity
            style={styles.startButton}
            onPress={startInterview}
            disabled={loading}
          >
            <Text style={styles.startButtonText}>
              {loading ? "Loading..." : "Start Interview"}
            </Text>
          </TouchableOpacity>
        </>
      )}

      {/* Chat messages */}
      <ScrollView
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContent}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.sender === "user"
                ? styles.userBubble
                : styles.botBubble,
            ]}
          >
            <Text style={styles.messageText}>
              {message.sender === "bot" ? "🤖 " : "👤 "}
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Answer box */}
      {started && questionIndex < questions.length && (
        <View style={styles.answerContainer}>
          <TextInput
            style={styles.answerInput}
            placeholder="Type your answer..."
            placeholderTextColor="#888"
            value={answer}
            onChangeText={setAnswer}
            onSubmitEditing={sendAnswer}
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendAnswer}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  backButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#E8EDF5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  backText: {
    fontSize: 30,
    color: "#111827",
  },

  robot: {
    fontSize: 30,
    marginRight: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },

  label: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#172033",
  },

  descriptionInput: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    padding: 15,
    fontSize: 17,
    textAlignVertical: "top",
    marginBottom: 15,
  },

  startButton: {
    height: 65,
    borderRadius: 15,
    backgroundColor: "#2864E8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  chatContainer: {
    flex: 1,
  },

  chatContent: {
    paddingTop: 5,
    paddingBottom: 20,
  },

  messageBubble: {
    maxWidth: "80%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#E4E7EC",
  },

  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#DCEAFF",
  },

  messageText: {
    fontSize: 17,
    color: "#111827",
    lineHeight: 24,
  },

  answerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  answerInput: {
    flex: 1,
    height: 58,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    fontSize: 17,
  },

  sendButton: {
    width: 95,
    height: 58,
    borderRadius: 15,
    backgroundColor: "#2864E8",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});