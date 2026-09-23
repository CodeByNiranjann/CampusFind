// import { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Pressable,
//   ActivityIndicator,
// } from "react-native";

// import { db, auth } from "../services/firebase";

// import {
//   collection,
//   query,
//   where,
//   onSnapshot,
// } from "firebase/firestore";

// import { theme } from "../constants/theme";

// export default function PossibleMatchesScreen({ navigation }) {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const currentUser = auth.currentUser;

//     if (!currentUser) {
//       setErrorMessage("Please login to view possible matches.");
//       setLoading(false);
//       return;
//     }

//     const lostQuery = query(
//       collection(db, "matches"),
//       where("lostUserId", "==", currentUser.uid)
//     );

//     const foundQuery = query(
//       collection(db, "matches"),
//       where("foundUserId", "==", currentUser.uid)
//     );

//     let lostMatches = [];
//     let foundMatches = [];

//     const updateMatches = () => {
//       const combined = [...lostMatches, ...foundMatches];

//       const uniqueMatches = combined.filter(
//         (match, index, array) =>
//           array.findIndex((item) => item.id === match.id) === index
//       );

//       uniqueMatches.sort(
//         (a, b) => (b.score || 0) - (a.score || 0)
//       );

//       setMatches(uniqueMatches);
//       setLoading(false);
//     };

//     const unsubscribeLost = onSnapshot(
//       lostQuery,
//       (snapshot) => {
//         lostMatches = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         updateMatches();
//       },
//       (error) => {
//         console.log("Lost matches error:", error);
//         setErrorMessage("Unable to load possible matches.");
//         setLoading(false);
//       }
//     );

//     const unsubscribeFound = onSnapshot(
//       foundQuery,
//       (snapshot) => {
//         foundMatches = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         updateMatches();
//       },
//       (error) => {
//         console.log("Found matches error:", error);
//         setErrorMessage("Unable to load possible matches.");
//         setLoading(false);
//       }
//     );

//     return () => {
//       unsubscribeLost();
//       unsubscribeFound();
//     };
//   }, []);

//   const getScoreText = (score) => {
//     if (score >= 90) {
//       return "Strong Match";
//     }

//     if (score >= 80) {
//       return "Good Match";
//     }

//     return "Possible Match";
//   };

//   if (loading) {
//     return (
//       <View style={styles.centerContainer}>
//         <ActivityIndicator
//           size="large"
//           color={theme.colors.primary}
//         />

//         <Text style={styles.loadingText}>
//           Checking possible matches...
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.screen}>
//       <ScrollView
//         style={styles.scrollView}
//         contentContainerStyle={styles.container}
//       >
//         <Text style={styles.title}>Possible Matches</Text>

//         <Text style={styles.subtitle}>
//           Items that may match your reports
//         </Text>

//         <Pressable
//           style={styles.backButton}
//           onPress={() => navigation.navigate("Home")}
//         >
//           <Text style={styles.backButtonText}>
//             ← Back to Home
//           </Text>
//         </Pressable>

//         {errorMessage ? (
//           <View style={styles.errorBox}>
//             <Text style={styles.errorTitle}>
//               Something went wrong
//             </Text>

//             <Text style={styles.errorText}>
//               {errorMessage}
//             </Text>
//           </View>
//         ) : null}

//         {!errorMessage && matches.length === 0 ? (
//           <View style={styles.emptyCard}>
//             <Text style={styles.emptyIcon}>🔍</Text>

//             <Text style={styles.emptyTitle}>
//               No Possible Matches Yet
//             </Text>

//             <Text style={styles.emptyText}>
//               We'll show a possible match here when another
//               report looks similar to yours.
//             </Text>
//           </View>
//         ) : null}

//         {matches.map((match) => {
//           const isLostUser =
//             match.lostUserId === auth.currentUser?.uid;

//           return (
//             <View key={match.id} style={styles.matchCard}>
//               <View style={styles.matchHeader}>
//                 <View style={styles.matchIcon}>
//                   <Text style={styles.matchEmoji}>🔔</Text>
//                 </View>

//                 <View style={styles.matchHeaderText}>
//                   <Text style={styles.matchTitle}>
//                     Possible Match Found
//                   </Text>

//                   <Text style={styles.matchSubtitle}>
//                     {getScoreText(match.score)}
//                   </Text>
//                 </View>

//                 <View style={styles.scoreBadge}>
//                   <Text style={styles.scoreNumber}>
//                     {match.score}
//                   </Text>

//                   <Text style={styles.scoreLabel}>
//                     /100
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.divider} />

//               <Text style={styles.sectionLabel}>
//                 Match Information
//               </Text>

//               <Text style={styles.infoText}>
//                 {isLostUser
//                   ? "A found report may match your lost item."
//                   : "A lost report may match the item you found."}
//               </Text>

//               <View style={styles.statusBox}>
//                 <Text style={styles.statusLabel}>
//                   Status
//                 </Text>

//                 <Text style={styles.statusValue}>
//                   POSSIBLE MATCH
//                 </Text>
//               </View>

//               <Pressable
//                 style={styles.viewButton}
//                 onPress={() =>
//                   navigation.navigate("ItemDetails", {
//                     item: {
//                       id: isLostUser
//                         ? match.foundItemId
//                         : match.lostItemId,

//                       name: isLostUser
//                         ? "Possible Found Item"
//                         : "Possible Lost Item",

//                       category: "Matching report",

//                       location:
//                         "See verification details",

//                       date: "Reported item",

//                       description:
//                         "This item has been identified as a possible match based on the matching algorithm.",

//                       type: isLostUser
//                         ? "FOUND"
//                         : "LOST",

//                       matchScore: match.score,
//                     },
//                   })
//                 }
//               >
//                 <Text style={styles.viewButtonText}>
//                   View Match
//                 </Text>
//               </Pressable>
//             </View>
//           );
//         })}

//         <View style={styles.bottomSpace} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: theme.colors.background,
//   },

//   scrollView: {
//     flex: 1,
//   },

//   container: {
//     padding: theme.spacing.lg,
//   },

//   centerContainer: {
//     flex: 1,
//     backgroundColor: theme.colors.background,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing.lg,
//   },

//   loadingText: {
//     marginTop: theme.spacing.md,
//     color: theme.colors.muted,
//     fontSize: theme.fontSize.body,
//   },

//   title: {
//     fontSize: theme.fontSize.heading,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   subtitle: {
//     marginTop: theme.spacing.sm,
//     color: theme.colors.muted,
//     fontSize: theme.fontSize.body,
//   },

//   backButton: {
//     marginTop: theme.spacing.lg,
//     marginBottom: theme.spacing.lg,
//   },

//   backButtonText: {
//     color: theme.colors.primary,
//     fontSize: theme.fontSize.body,
//     fontWeight: "600",
//   },

//   matchCard: {
//     backgroundColor: theme.colors.surface,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.lg,
//     marginBottom: theme.spacing.lg,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//   },

//   matchHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   matchIcon: {
//     width: 48,
//     height: 48,
//     borderRadius: theme.radius.md,
//     backgroundColor: theme.colors.primaryLight,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   matchEmoji: {
//     fontSize: 24,
//   },

//   matchHeaderText: {
//     flex: 1,
//     marginLeft: theme.spacing.md,
//   },

//   matchTitle: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   matchSubtitle: {
//     marginTop: 4,
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//   },

//   scoreBadge: {
//     backgroundColor: theme.colors.primaryLight,
//     borderRadius: theme.radius.md,
//     paddingHorizontal: theme.spacing.sm,
//     paddingVertical: theme.spacing.sm,
//     alignItems: "center",
//   },

//   scoreNumber: {
//     color: theme.colors.primary,
//     fontSize: 20,
//     fontWeight: "700",
//   },

//   scoreLabel: {
//     color: theme.colors.primary,
//     fontSize: 11,
//   },

//   divider: {
//     height: 1,
//     backgroundColor: theme.colors.border,
//     marginVertical: theme.spacing.md,
//   },

//   sectionLabel: {
//     fontSize: theme.fontSize.small,
//     fontWeight: "700",
//     color: theme.colors.muted,
//     textTransform: "uppercase",
//     marginBottom: theme.spacing.sm,
//   },

//   infoText: {
//     fontSize: theme.fontSize.body,
//     color: theme.colors.text,
//     lineHeight: 24,
//   },

//   statusBox: {
//     marginTop: theme.spacing.md,
//     padding: theme.spacing.md,
//     backgroundColor: "#FEF3C7",
//     borderRadius: theme.radius.md,
//   },

//   statusLabel: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//   },

//   statusValue: {
//     marginTop: 4,
//     color: "#92400E",
//     fontSize: theme.fontSize.small,
//     fontWeight: "700",
//   },

//   viewButton: {
//     marginTop: theme.spacing.md,
//     height: 48,
//     borderRadius: theme.radius.md,
//     backgroundColor: theme.colors.primary,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   viewButtonText: {
//     color: "#FFFFFF",
//     fontSize: theme.fontSize.body,
//     fontWeight: "600",
//   },

//   emptyCard: {
//     backgroundColor: theme.colors.surface,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.xl,
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//   },

//   emptyIcon: {
//     fontSize: 40,
//     marginBottom: theme.spacing.md,
//   },

//   emptyTitle: {
//     fontSize: theme.fontSize.title,
//     fontWeight: "700",
//     color: theme.colors.text,
//     textAlign: "center",
//   },

//   emptyText: {
//     marginTop: theme.spacing.sm,
//     fontSize: theme.fontSize.body,
//     color: theme.colors.muted,
//     textAlign: "center",
//     lineHeight: 24,
//   },

//   errorBox: {
//     backgroundColor: "#FEE2E2",
//     borderWidth: 1,
//     borderColor: "#FCA5A5",
//     borderRadius: theme.radius.md,
//     padding: theme.spacing.md,
//     marginBottom: theme.spacing.lg,
//   },

//   errorTitle: {
//     color: "#B91C1C",
//     fontWeight: "700",
//     marginBottom: 4,
//   },

//   errorText: {
//     color: "#B91C1C",
//   },

//   bottomSpace: {
//     height: 40,
//   },
// });

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
  doc,
  getDoc,
} from "firebase/firestore";

import { theme } from "../constants/theme";

export default function PossibleMatchesScreen({ navigation }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setErrorMessage("Please login to view possible matches.");
      setLoading(false);
      return;
    }

    const lostQuery = query(
      collection(db, "matches"),
      where("lostUserId", "==", currentUser.uid)
    );

    const foundQuery = query(
      collection(db, "matches"),
      where("foundUserId", "==", currentUser.uid)
    );

    let lostMatches = [];
    let foundMatches = [];

    const loadItem = async (itemId) => {
      if (!itemId) {
        return null;
      }

      try {
        const itemRef = doc(db, "items", itemId);
        const itemSnapshot = await getDoc(itemRef);

        if (!itemSnapshot.exists()) {
          return null;
        }

        return {
          id: itemSnapshot.id,
          ...itemSnapshot.data(),
        };
      } catch (error) {
        console.log("Unable to load item:", error);
        return null;
      }
    };

    const updateMatches = async () => {
      const combined = [
        ...lostMatches,
        ...foundMatches,
      ];

      const uniqueMatches = combined.filter(
        (match, index, array) =>
          array.findIndex(
            (item) => item.id === match.id
          ) === index
      );

      uniqueMatches.sort(
        (a, b) =>
          (b.score || 0) - (a.score || 0)
      );

      const matchesWithItems = await Promise.all(
        uniqueMatches.map(async (match) => {
          const isLostUser =
            match.lostUserId === currentUser.uid;

          const itemId = isLostUser
            ? match.foundItemId
            : match.lostItemId;

          const item = await loadItem(itemId);

          return {
            ...match,
            matchedItem: item,
          };
        })
      );

      setMatches(matchesWithItems);
      setLoading(false);
    };

    const unsubscribeLost = onSnapshot(
      lostQuery,
      (snapshot) => {
        lostMatches = snapshot.docs.map(
          (document) => ({
            id: document.id,
            ...document.data(),
          })
        );

        updateMatches();
      },
      (error) => {
        console.log(
          "Lost matches error:",
          error
        );

        setErrorMessage(
          "Unable to load possible matches."
        );

        setLoading(false);
      }
    );

    const unsubscribeFound = onSnapshot(
      foundQuery,
      (snapshot) => {
        foundMatches = snapshot.docs.map(
          (document) => ({
            id: document.id,
            ...document.data(),
          })
        );

        updateMatches();
      },
      (error) => {
        console.log(
          "Found matches error:",
          error
        );

        setErrorMessage(
          "Unable to load possible matches."
        );

        setLoading(false);
      }
    );

    return () => {
      unsubscribeLost();
      unsubscribeFound();
    };
  }, []);

  const getScoreText = (score) => {
    if (score >= 90) {
      return "Strong Match";
    }

    if (score >= 80) {
      return "Good Match";
    }

    return "Possible Match";
  };

  const openMatch = (match) => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return;
    }

    const isLostUser =
      match.lostUserId === currentUser.uid;

    const item = match.matchedItem;

    if (!item) {
      return;
    }

    navigation.navigate("ItemDetails", {
      item: {
        ...item,
        matchScore: match.score,
      },
    });
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator
          size="large"
          color={theme.colors.primary}
        />

        <Text style={styles.loadingText}>
          Checking possible matches...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.title}>
          Possible Matches
        </Text>

        <Text style={styles.subtitle}>
          Items that may match your reports
        </Text>

        <Pressable
          style={styles.backButton}
          onPress={() =>
            navigation.navigate("Home")
          }
        >
          <Text style={styles.backButtonText}>
            ← Back to Home
          </Text>
        </Pressable>

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

        {!errorMessage &&
        matches.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>
              🔍
            </Text>

            <Text style={styles.emptyTitle}>
              No Possible Matches Yet
            </Text>

            <Text style={styles.emptyText}>
              We'll show a possible match here when
              another report looks similar to yours.
            </Text>
          </View>
        ) : null}

        {matches.map((match) => {
          const currentUser = auth.currentUser;

          const isLostUser =
            match.lostUserId ===
            currentUser?.uid;

          const item = match.matchedItem;

          return (
            <View
              key={match.id}
              style={styles.matchCard}
            >
              {/* Header */}
              <View style={styles.matchHeader}>
                <View style={styles.matchIcon}>
                  <Text style={styles.matchEmoji}>
                    {item?.category === "Wallet"
                      ? "👛"
                      : item?.category === "Pen"
                      ? "🖊️"
                      : item?.category === "Mouse"
                      ? "🖱️"
                      : item?.category === "Phone"
                      ? "📱"
                      : item?.category === "Bag"
                      ? "🎒"
                      : item?.category ===
                        "ID Card"
                      ? "🪪"
                      : "📦"}
                  </Text>
                </View>

                <View
                  style={styles.matchHeaderText}
                >
                  <Text
                    style={styles.matchTitle}
                  >
                    Possible Match
                  </Text>

                  <Text
                    style={styles.matchSubtitle}
                  >
                    {getScoreText(match.score)}
                  </Text>
                </View>

                <View
                  style={styles.scoreBadge}
                >
                  <Text
                    style={styles.scoreNumber}
                  >
                    {match.score || 0}
                  </Text>

                  <Text
                    style={styles.scoreLabel}
                  >
                    /100
                  </Text>
                </View>
              </View>

              <View style={styles.divider} />

              {/* Actual Item */}
              {item ? (
                <>
                  <Text
                    style={styles.itemName}
                  >
                    {item.itemName ||
                      item.name ||
                      "Unknown Item"}
                  </Text>

                  <Text
                    style={styles.itemCategory}
                  >
                    Category:{" "}
                    {item.category ||
                      "Not specified"}
                  </Text>

                  {item.description ? (
                    <Text
                      style={styles.itemDescription}
                    >
                      {item.description}
                    </Text>
                  ) : null}

                  {item.location ? (
                    <View
                      style={styles.detailRow}
                    >
                      <Text
                        style={styles.detailIcon}
                      >
                        📍
                      </Text>

                      <Text
                        style={styles.detailText}
                      >
                        {item.location}
                      </Text>
                    </View>
                  ) : null}

                  {item.date ? (
                    <View
                      style={styles.detailRow}
                    >
                      <Text
                        style={styles.detailIcon}
                      >
                        📅
                      </Text>

                      <Text
                        style={styles.detailText}
                      >
                        {item.date}
                      </Text>
                    </View>
                  ) : null}

                  <View
                    style={styles.typeBox}
                  >
                    <Text
                      style={styles.typeLabel}
                    >
                      MATCHED ITEM TYPE
                    </Text>

                    <Text
                      style={styles.typeValue}
                    >
                      {item.type ||
                        (isLostUser
                          ? "FOUND"
                          : "LOST")}
                    </Text>
                  </View>
                </>
              ) : (
                <View
                  style={styles.notFoundBox}
                >
                  <Text
                    style={styles.notFoundText}
                  >
                    Item details are no longer
                    available.
                  </Text>
                </View>
              )}

              {/* Status */}
              <View style={styles.statusBox}>
                <Text style={styles.statusLabel}>
                  Status
                </Text>

                <Text style={styles.statusValue}>
                  POSSIBLE MATCH
                </Text>
              </View>

              {/* View Match */}
              <Pressable
                style={[
                  styles.viewButton,
                  !item &&
                    styles.disabledButton,
                ]}
                disabled={!item}
                onPress={() =>
                  openMatch(match)
                }
              >
                <Text
                  style={
                    styles.viewButtonText
                  }
                >
                  View Match
                </Text>
              </Pressable>
            </View>
          );
        })}

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:
      theme.colors.background,
  },

  scrollView: {
    flex: 1,
  },

  container: {
    padding: theme.spacing.lg,
  },

  centerContainer: {
    flex: 1,
    backgroundColor:
      theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },

  loadingText: {
    marginTop: theme.spacing.md,
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: "700",
    color: theme.colors.text,
  },

  subtitle: {
    marginTop: theme.spacing.sm,
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  backButton: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },

  backButtonText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.body,
    fontWeight: "600",
  },

  matchCard: {
    backgroundColor:
      theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  matchHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  matchIcon: {
    width: 48,
    height: 48,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },

  matchEmoji: {
    fontSize: 24,
  },

  matchHeaderText: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },

  matchTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  matchSubtitle: {
    marginTop: 4,
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
  },

  scoreBadge: {
    backgroundColor:
      theme.colors.primaryLight,
    borderRadius: theme.radius.md,
    paddingHorizontal:
      theme.spacing.sm,
    paddingVertical:
      theme.spacing.sm,
    alignItems: "center",
  },

  scoreNumber: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },

  scoreLabel: {
    color: theme.colors.primary,
    fontSize: 11,
  },

  divider: {
    height: 1,
    backgroundColor:
      theme.colors.border,
    marginVertical:
      theme.spacing.md,
  },

  itemName: {
    fontSize: 22,
    fontWeight: "700",
    color: theme.colors.text,
  },

  itemCategory: {
    marginTop: 5,
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
  },

  itemDescription: {
    marginTop: theme.spacing.md,
    fontSize: theme.fontSize.body,
    color: theme.colors.text,
    lineHeight: 22,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },

  detailIcon: {
    fontSize: 17,
    marginRight: 8,
  },

  detailText: {
    flex: 1,
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary,
  },

  typeBox: {
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: "#EFF6FF",
    borderRadius: theme.radius.md,
  },

  typeLabel: {
    fontSize: 10,
    color: theme.colors.muted,
    fontWeight: "700",
  },

  typeValue: {
    marginTop: 4,
    fontSize: theme.fontSize.small,
    color: theme.colors.primary,
    fontWeight: "700",
  },

  statusBox: {
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: "#FEF3C7",
    borderRadius: theme.radius.md,
  },

  statusLabel: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
  },

  statusValue: {
    marginTop: 4,
    color: "#92400E",
    fontSize: theme.fontSize.small,
    fontWeight: "700",
  },

  viewButton: {
    marginTop: theme.spacing.md,
    height: 48,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  disabledButton: {
    opacity: 0.5,
  },

  viewButtonText: {
    color: "#FFFFFF",
    fontSize: theme.fontSize.body,
    fontWeight: "600",
  },

  notFoundBox: {
    padding: theme.spacing.md,
    backgroundColor: "#F3F4F6",
    borderRadius: theme.radius.md,
  },

  notFoundText: {
    color: theme.colors.muted,
    fontSize: theme.fontSize.small,
  },

  emptyCard: {
    backgroundColor:
      theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  emptyIcon: {
    fontSize: 40,
    marginBottom:
      theme.spacing.md,
  },

  emptyTitle: {
    fontSize: theme.fontSize.title,
    fontWeight: "700",
    color: theme.colors.text,
    textAlign: "center",
  },

  emptyText: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.body,
    color: theme.colors.muted,
    textAlign: "center",
    lineHeight: 24,
  },

  errorBox: {
    backgroundColor: "#FEE2E2",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom:
      theme.spacing.lg,
  },

  errorTitle: {
    color: "#B91C1C",
    fontWeight: "700",
    marginBottom: 4,
  },

  errorText: {
    color: "#B91C1C",
  },

  bottomSpace: {
    height: 40,
  },
});