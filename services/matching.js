import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";
import { sendMatchEmail } from "./email";

// =========================
// TEXT HELPERS
// =========================

function normalizeText(value) {
  return (value || "").trim().toLowerCase();
}

function textSimilarity(text1, text2) {
  const a = normalizeText(text1);
  const b = normalizeText(text2);

  if (!a || !b) return 0;

  // Exact match
  if (a === b) return 1;

  // One contains the other
  if (a.includes(b) || b.includes(a)) {
    return 1;
  }

  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);

  const commonWords = wordsA.filter((word) =>
    wordsB.includes(word)
  );

  if (commonWords.length === 0) {
    return 0;
  }

  return (
    commonWords.length /
    Math.max(wordsA.length, wordsB.length)
  );
}

// =========================
// MATCH SCORE
// =========================

function calculateMatchScore(item1, item2) {
  let score = 0;

  // Category = 30 points
  if (
    normalizeText(item1.category) &&
    normalizeText(item1.category) ===
      normalizeText(item2.category)
  ) {
    score += 30;
  }

  // Location = 25 points
  const locationSimilarity = textSimilarity(
    item1.location,
    item2.location
  );

  if (locationSimilarity >= 0.5) {
    score += 25;
  } else if (locationSimilarity > 0) {
    score += 15;
  }

  // Date = 20 points
  if (
    normalizeText(item1.date) &&
    normalizeText(item1.date) ===
      normalizeText(item2.date)
  ) {
    score += 20;
  }

  // Time = 10 points
  if (
    normalizeText(item1.time) &&
    normalizeText(item1.time) ===
      normalizeText(item2.time)
  ) {
    score += 10;
  }

  // Description = 15 points
  const descriptionSimilarity = textSimilarity(
    item1.description,
    item2.description
  );

  if (descriptionSimilarity >= 0.5) {
    score += 15;
  } else if (descriptionSimilarity > 0) {
    score += 8;
  }

  return score;
}

// =========================
// FIND MATCHES
// =========================

export async function findMatches(newItem) {
  try {
    const oppositeType =
      newItem.type === "LOST" ? "FOUND" : "LOST";

    const itemsQuery = query(
      collection(db, "items"),
      where("type", "==", oppositeType)
    );

    const snapshot = await getDocs(itemsQuery);

    const matches = [];

    for (const document of snapshot.docs) {
      const existingItem = {
        id: document.id,
        ...document.data(),
      };

      // Don't match user's own items
      if (existingItem.userId === newItem.userId) {
        continue;
      }

      const score = calculateMatchScore(
        newItem,
        existingItem
      );

      console.log(
        "Checking match:",
        newItem.itemName,
        "vs",
        existingItem.itemName,
        "Score:",
        score
      );

      // 50 or more = possible match
      if (score >= 50) {
        const lostItem =
          newItem.type === "LOST"
            ? newItem
            : existingItem;

        const foundItem =
          newItem.type === "FOUND"
            ? newItem
            : existingItem;

        // =========================
        // SAVE MATCH
        // =========================

        const matchData = {
          lostItemId:
            newItem.type === "LOST"
              ? newItem.id
              : existingItem.id,

          foundItemId:
            newItem.type === "FOUND"
              ? newItem.id
              : existingItem.id,

          lostUserId: lostItem.userId,

          foundUserId: foundItem.userId,

          score,

          status: "POSSIBLE_MATCH",

          createdAt: serverTimestamp(),
        };

        const matchRef = await addDoc(
          collection(db, "matches"),
          matchData
        );

        console.log(
          "Match created:",
          matchRef.id
        );

        // =========================
        // EMAIL LOST USER
        // =========================

        if (lostItem.userEmail) {
          const lostEmailSent = await sendMatchEmail({
            toEmail: lostItem.userEmail,
            itemName: lostItem.itemName,
            matchScore: score,
            itemType: "LOST",
          });

          console.log(
            "Lost user email:",
            lostEmailSent ? "Sent" : "Failed"
          );
        } else {
          console.log(
            "Lost user has no email stored."
          );
        }

        // =========================
        // EMAIL FOUND USER
        // =========================

        if (foundItem.userEmail) {
          const foundEmailSent = await sendMatchEmail({
            toEmail: foundItem.userEmail,
            itemName: foundItem.itemName,
            matchScore: score,
            itemType: "FOUND",
          });

          console.log(
            "Found user email:",
            foundEmailSent ? "Sent" : "Failed"
          );
        } else {
          console.log(
            "Found user has no email stored."
          );
        }

        // =========================
        // RETURN MATCH
        // =========================

        matches.push({
          id: matchRef.id,
          ...matchData,
          matchedItem: existingItem,
        });
      }
    }

    console.log(
      "Total possible matches:",
      matches.length
    );

    return matches;
  } catch (error) {
    console.log("Matching error:", error);
    throw error;
  }
}