import {
  doc,
  setDoc,
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

export function createChatId(
  userA,
  userB,
  itemId
) {
  const users = [userA, userB].sort();

  return `${itemId}_${users[0]}_${users[1]}`;
}

export async function createChat({
  currentUserId,
  finderUserId,
  itemId,
}) {
  if (!currentUserId) {
    throw new Error(
      "Current user ID is missing."
    );
  }

  if (!finderUserId) {
    throw new Error(
      "Finder user ID is missing."
    );
  }

  if (!itemId) {
    throw new Error(
      "Item ID is missing."
    );
  }

  const chatId = createChatId(
    currentUserId,
    finderUserId,
    itemId
  );

  console.log(
    "Creating chat:",
    chatId
  );

  const chatRef = doc(
    db,
    "chats",
    chatId
  );

  await setDoc(
    chatRef,
    {
      participants: [
        currentUserId,
        finderUserId,
      ],

      itemId,

      lastMessage: "",

      updatedAt:
        serverTimestamp(),
    },
    {
      merge: true,
    }
  );

  console.log(
    "Chat created successfully:",
    chatId
  );

  return chatId;
}

export async function sendMessage({
  chatId,
  senderId,
  receiverId,
  text,
}) {
  const cleanText = text?.trim();

  if (!cleanText) {
    throw new Error(
      "Message cannot be empty."
    );
  }

  if (!chatId) {
    throw new Error(
      "Chat ID is missing."
    );
  }

  if (!senderId) {
    throw new Error(
      "Sender ID is missing."
    );
  }

  if (!receiverId) {
    throw new Error(
      "Receiver ID is missing."
    );
  }

  console.log(
    "Sending message..."
  );

  console.log(
    "Chat ID:",
    chatId
  );

  console.log(
    "Sender:",
    senderId
  );

  console.log(
    "Receiver:",
    receiverId
  );

  const messagesRef = collection(
    db,
    "chats",
    chatId,
    "messages"
  );

  await addDoc(
    messagesRef,
    {
      senderId,
      receiverId,
      text: cleanText,
      createdAt:
        serverTimestamp(),
    }
  );

  await setDoc(
    doc(
      db,
      "chats",
      chatId
    ),
    {
      lastMessage: cleanText,
      updatedAt:
        serverTimestamp(),
    },
    {
      merge: true,
    }
  );

  console.log(
    "Message sent successfully."
  );
}

export function listenToMessages(
  chatId,
  callback,
  onError
) {
  if (!chatId) {
    console.log(
      "Cannot listen to messages: chat ID missing."
    );

    return () => {};
  }

  const messagesRef = collection(
    db,
    "chats",
    chatId,
    "messages"
  );

  const messagesQuery = query(
    messagesRef,
    orderBy("createdAt", "asc")
  );

  return onSnapshot(
    messagesQuery,
    (snapshot) => {
      const messages =
        snapshot.docs.map(
          (document) => ({
            id: document.id,
            ...document.data(),
          })
        );

      console.log(
        "Messages received:",
        messages.length
      );

      callback(messages);
    },
    (error) => {
      console.log(
        "Message listener error:",
        error
      );

      if (onError) {
        onError(error);
      }
    }
  );
}