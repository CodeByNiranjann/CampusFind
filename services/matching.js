import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

function normalizeText(value) {
  return (value || "").trim().toLowerCase();
}

function textSimilarity(text1, text2) {
  const a = normalizeText(text1);
  const b = normalizeText(text2);

  if (!a || !b) {
    return 0;
  }

  if (a === b) {
    return 1;
  }

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

function calculateMatchScore(item1, item2) {
  let score = 0;

  // 1. Category — 30 points
  if (
    normalizeText(item1.category) &&
    normalizeText(item1.category) ===
      normalizeText(item2.category)
  ) {
    score += 30;
  }

  // 2. Location — 25 points
  const locationSimilarity = textSimilarity(
    item1.location,
    item2.location
  );

  if (locationSimilarity >= 0.5) {
    score += 25;
  } else if (locationSimilarity > 0) {
    score += 15;
  }

  // 3. Date — 20 points
  if (
    normalizeText(item1.date) &&
    normalizeText(item1.date) ===
      normalizeText(item2.date)
  ) {
    score += 20;
  }

  // 4. Time — 10 points
  if (
    normalizeText(item1.time) &&
    normalizeText(item1.time) ===
      normalizeText(item2.time)
  ) {
    score += 10;
  }

  // 5. Description — 15 points
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

      // Don't match a user's own reports
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

      // 70 or more = possible match
      if (score >= 70) {
        const lostItem =
          newItem.type === "LOST"
            ? newItem
            : existingItem;

        const foundItem =
          newItem.type === "FOUND"
            ? newItem
            : existingItem;

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