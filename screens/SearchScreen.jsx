// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Pressable,
//   TextInput,
// } from "react-native";
// import { useState } from "react";

// import { theme } from "../constants/theme";

// export default function SearchScreen({ navigation }) {
//   const [search, setSearch] = useState("");
//   const [selectedType, setSelectedType] = useState("ALL");

//   const items = [
//     {
//       id: "1",
//       name: "Black Wallet",
//       category: "Wallet",
//       location: "Library",
//       type: "LOST",
//       date: "22 Sep 2026",
//     },
//     {
//       id: "2",
//       name: "Blue Water Bottle",
//       category: "Bottle",
//       location: "Cafeteria",
//       type: "FOUND",
//       date: "22 Sep 2026",
//     },
//     {
//       id: "3",
//       name: "Student ID Card",
//       category: "ID Card",
//       location: "C Block",
//       type: "LOST",
//       date: "21 Sep 2026",
//     },
//   ];

//   const filteredItems = items.filter((item) => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.category.toLowerCase().includes(search.toLowerCase()) ||
//       item.location.toLowerCase().includes(search.toLowerCase());

//     const matchesType =
//       selectedType === "ALL" || item.type === selectedType;

//     return matchesSearch && matchesType;
//   });

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Pressable
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={styles.backText}>‹</Text>
//         </Pressable>

//         <Text style={styles.title}>Search Items</Text>
//       </View>

//       {/* Search */}
//       <View style={styles.searchBox}>
//         <Text style={styles.searchIcon}>🔍</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Search item, category or location..."
//           placeholderTextColor={theme.colors.muted}
//           value={search}
//           onChangeText={setSearch}
//         />
//       </View>

//       {/* Filters */}
//       <Text style={styles.filterTitle}>Filter by type</Text>

//       <View style={styles.filterRow}>
//         <FilterButton
//           title="All"
//           active={selectedType === "ALL"}
//           onPress={() => setSelectedType("ALL")}
//         />

//         <FilterButton
//           title="Lost"
//           active={selectedType === "LOST"}
//           onPress={() => setSelectedType("LOST")}
//         />

//         <FilterButton
//           title="Found"
//           active={selectedType === "FOUND"}
//           onPress={() => setSelectedType("FOUND")}
//         />
//       </View>

//       {/* Results */}
//       <View style={styles.resultHeader}>
//         <Text style={styles.resultTitle}>
//           Items
//         </Text>

//         <Text style={styles.resultCount}>
//           {filteredItems.length} result
//           {filteredItems.length !== 1 ? "s" : ""}
//         </Text>
//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.list}
//       >
//         {filteredItems.length === 0 ? (
//           <View style={styles.empty}>
//             <Text style={styles.emptyIcon}>🔍</Text>

//             <Text style={styles.emptyTitle}>
//               No items found
//             </Text>

//             <Text style={styles.emptyText}>
//               Try a different search term or filter.
//             </Text>
//           </View>
//         ) : (
//           filteredItems.map((item) => (
//             <ItemCard
//               key={item.id}
//               item={item}
//               onPress={() =>
//                 navigation.navigate("ItemDetails", {
//                   item,
//                 })
//               }
//             />
//           ))
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// function FilterButton({ title, active, onPress }) {
//   return (
//     <Pressable
//       style={[
//         styles.filterButton,
//         active && styles.activeFilter,
//       ]}
//       onPress={onPress}
//     >
//       <Text
//         style={[
//           styles.filterText,
//           active && styles.activeFilterText,
//         ]}
//       >
//         {title}
//       </Text>
//     </Pressable>
//   );
// }

// function ItemCard({ item, onPress }) {
//   const isLost = item.type === "LOST";

//   return (
//     <Pressable style={styles.itemCard} onPress={onPress}>
//       <View style={styles.itemImage}>
//         <Text style={styles.itemEmoji}>
//           {item.category === "ID Card"
//             ? "🪪"
//             : item.category === "Wallet"
//             ? "👛"
//             : "📦"}
//         </Text>
//       </View>

//       <View style={styles.itemInfo}>
//         <Text style={styles.itemName}>
//           {item.name}
//         </Text>

//         <Text style={styles.itemCategory}>
//           {item.category}
//         </Text>

//         <Text style={styles.itemLocation}>
//           📍 {item.location}
//         </Text>

//         <Text style={styles.itemDate}>
//           📅 {item.date}
//         </Text>
//       </View>

//       <View
//         style={[
//           styles.badge,
//           isLost
//             ? styles.lostBadge
//             : styles.foundBadge,
//         ]}
//       >
//         <Text
//           style={[
//             styles.badgeText,
//             isLost
//               ? styles.lostText
//               : styles.foundText,
//           ]}
//         >
//           {item.type}
//         </Text>
//       </View>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.colors.background,
//     padding: theme.spacing.lg,
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: theme.spacing.md,
//     marginBottom: theme.spacing.lg,
//   },

//   backButton: {
//     width: 42,
//     height: 42,
//     borderRadius: theme.radius.full,
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: theme.spacing.md,
//   },

//   backText: {
//     fontSize: 32,
//     color: theme.colors.text,
//     lineHeight: 34,
//   },

//   title: {
//     fontSize: theme.fontSize.heading,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   searchBox: {
//     height: 54,
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     borderRadius: theme.radius.md,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: theme.spacing.md,
//   },

//   searchIcon: {
//     fontSize: 18,
//     marginRight: theme.spacing.sm,
//   },

//   input: {
//     flex: 1,
//     fontSize: theme.fontSize.body,
//     color: theme.colors.text,
//     outlineStyle: "none",
//   },

//   filterTitle: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "600",
//     color: theme.colors.text,
//     marginTop: theme.spacing.lg,
//     marginBottom: theme.spacing.sm,
//   },

//   filterRow: {
//     flexDirection: "row",
//     gap: theme.spacing.sm,
//     marginBottom: theme.spacing.lg,
//   },

//   filterButton: {
//     paddingHorizontal: theme.spacing.lg,
//     height: 40,
//     borderRadius: theme.radius.full,
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   activeFilter: {
//     backgroundColor: theme.colors.primary,
//     borderColor: theme.colors.primary,
//   },

//   filterText: {
//     fontSize: theme.fontSize.small,
//     fontWeight: "600",
//     color: theme.colors.muted,
//   },

//   activeFilterText: {
//     color: "#FFFFFF",
//   },

//   resultHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   resultTitle: {
//     fontSize: theme.fontSize.subtitle,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   resultCount: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//   },

//   list: {
//     paddingTop: theme.spacing.md,
//     paddingBottom: theme.spacing.xxl,
//   },

//   itemCard: {
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.md,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: theme.spacing.md,
//   },

//   itemImage: {
//     width: 64,
//     height: 64,
//     borderRadius: theme.radius.md,
//     backgroundColor: theme.colors.primaryLight,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: theme.spacing.md,
//   },

//   itemEmoji: {
//     fontSize: 28,
//   },

//   itemInfo: {
//     flex: 1,
//   },

//   itemName: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   itemCategory: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     marginTop: 2,
//   },

//   itemLocation: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.textSecondary,
//     marginTop: 4,
//   },

//   itemDate: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     marginTop: 2,
//   },

//   badge: {
//     paddingHorizontal: theme.spacing.sm,
//     paddingVertical: 6,
//     borderRadius: theme.radius.full,
//     alignSelf: "flex-start",
//   },

//   lostBadge: {
//     backgroundColor: "#FEF2F2",
//   },

//   foundBadge: {
//     backgroundColor: "#F0FDF4",
//   },

//   badgeText: {
//     fontSize: 10,
//     fontWeight: "700",
//   },

//   lostText: {
//     color: theme.colors.lost,
//   },

//   foundText: {
//     color: theme.colors.found,
//   },

//   empty: {
//     backgroundColor: theme.colors.surface,
//     borderRadius: theme.radius.lg,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     padding: theme.spacing.xl,
//     alignItems: "center",
//     marginTop: theme.spacing.md,
//   },

//   emptyIcon: {
//     fontSize: 36,
//     marginBottom: theme.spacing.sm,
//   },

//   emptyTitle: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   emptyText: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     marginTop: theme.spacing.sm,
//     textAlign: "center",
//   },
// });

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { theme } from "../constants/theme";
import { db } from "../services/firebase";

import {
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("ALL");

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("Loading items from Firestore...");

    const itemsQuery = query(
      collection(db, "items")
    );

    const unsubscribe = onSnapshot(
      itemsQuery,
      (snapshot) => {
        const itemList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(itemList);
        setLoading(false);
        setErrorMessage("");

        console.log(
          "Items loaded:",
          itemList.length
        );
      },
      (error) => {
        console.log(
          "Search Firestore error:",
          error
        );

        setErrorMessage(
          "Unable to load items. Please try again."
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredItems = items.filter((item) => {
    const searchText = search.trim().toLowerCase();

    const itemName = (
      item.itemName || ""
    ).toLowerCase();

    const category = (
      item.category || ""
    ).toLowerCase();

    const location = (
      item.location || ""
    ).toLowerCase();

    const description = (
      item.description || ""
    ).toLowerCase();

    const matchesSearch =
      searchText === "" ||
      itemName.includes(searchText) ||
      category.includes(searchText) ||
      location.includes(searchText) ||
      description.includes(searchText);

    const matchesType =
      selectedType === "ALL" ||
      item.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ‹
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Search Items
        </Text>
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>
          🔍
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Search item, category or location..."
          placeholderTextColor={theme.colors.muted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filters */}
      <Text style={styles.filterTitle}>
        Filter by type
      </Text>

      <View style={styles.filterRow}>

        <FilterButton
          title="All"
          active={selectedType === "ALL"}
          onPress={() => setSelectedType("ALL")}
        />

        <FilterButton
          title="Lost"
          active={selectedType === "LOST"}
          onPress={() => setSelectedType("LOST")}
        />

        <FilterButton
          title="Found"
          active={selectedType === "FOUND"}
          onPress={() => setSelectedType("FOUND")}
        />

      </View>

      {/* Results Header */}
      <View style={styles.resultHeader}>
        <Text style={styles.resultTitle}>
          Items
        </Text>

        {!loading && (
          <Text style={styles.resultCount}>
            {filteredItems.length} result
            {filteredItems.length !== 1
              ? "s"
              : ""}
          </Text>
        )}
      </View>

      {/* Results */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >

        {/* Loading */}
        {loading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator
              size="large"
              color={theme.colors.primary}
            />

            <Text style={styles.loadingText}>
              Loading items...
            </Text>
          </View>
        ) : null}

        {/* Error */}
        {!loading && errorMessage ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>
              ⚠️
            </Text>

            <Text style={styles.emptyTitle}>
              Unable to load items
            </Text>

            <Text style={styles.emptyText}>
              {errorMessage}
            </Text>
          </View>
        ) : null}

        {/* No results */}
        {!loading &&
        !errorMessage &&
        filteredItems.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>
              🔍
            </Text>

            <Text style={styles.emptyTitle}>
              No items found
            </Text>

            <Text style={styles.emptyText}>
              Try a different search term or filter.
            </Text>
          </View>
        ) : null}

        {/* Items */}
        {!loading &&
        !errorMessage &&
        filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onPress={() =>
              navigation.navigate(
                "ItemDetails",
                {
                  item: {
                    ...item,

                    // ItemDetails currently expects "name"
                    name:
                      item.itemName ||
                      "Unknown Item",
                  },
                }
              )
            }
          />
        ))}

      </ScrollView>
    </View>
  );
}

/* Filter Button */

function FilterButton({
  title,
  active,
  onPress,
}) {
  return (
    <Pressable
      style={[
        styles.filterButton,
        active && styles.activeFilter,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.filterText,
          active && styles.activeFilterText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

/* Item Card */

function ItemCard({ item, onPress }) {
  const isLost = item.type === "LOST";

  let emoji = "📦";

  if (item.category === "ID Card") {
    emoji = "🪪";
  } else if (item.category === "Wallet") {
    emoji = "👛";
  } else if (item.category === "Bottle") {
    emoji = "🍼";
  } else if (
    item.category === "Electronics"
  ) {
    emoji = "📱";
  }

  return (
    <Pressable
      style={styles.itemCard}
      onPress={onPress}
    >
      {/* Icon */}
      <View style={styles.itemImage}>
        <Text style={styles.itemEmoji}>
          {emoji}
        </Text>
      </View>

      {/* Information */}
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>
          {item.itemName || "Unknown Item"}
        </Text>

        <Text style={styles.itemCategory}>
          {item.category || "Other"}
        </Text>

        <Text style={styles.itemLocation}>
          📍 {item.location || "Unknown location"}
        </Text>

        <Text style={styles.itemDate}>
          📅 {item.date || "Date not available"}
        </Text>
      </View>

      {/* Status */}
      <View
        style={[
          styles.badge,
          isLost
            ? styles.lostBadge
            : styles.foundBadge,
        ]}
      >
        <Text
          style={[
            styles.badgeText,
            isLost
              ? styles.lostText
              : styles.foundText,
          ]}
        >
          {item.type || "UNKNOWN"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      theme.colors.background,
    padding: theme.spacing.lg,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: theme.radius.full,
    backgroundColor:
      theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  backText: {
    fontSize: 32,
    color: theme.colors.text,
    lineHeight: 34,
  },

  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: "700",
    color: theme.colors.text,
  },

  searchBox: {
    height: 54,
    backgroundColor:
      theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: theme.spacing.sm,
  },

  input: {
    flex: 1,
    fontSize: theme.fontSize.body,
    color: theme.colors.text,
    outlineStyle: "none",
  },

  filterTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "600",
    color: theme.colors.text,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
  },

  filterRow: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },

  filterButton: {
    paddingHorizontal: theme.spacing.lg,
    height: 40,
    borderRadius: theme.radius.full,
    backgroundColor:
      theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
  },

  activeFilter: {
    backgroundColor:
      theme.colors.primary,
    borderColor:
      theme.colors.primary,
  },

  filterText: {
    fontSize: theme.fontSize.small,
    fontWeight: "600",
    color: theme.colors.muted,
  },

  activeFilterText: {
    color: "#FFFFFF",
  },

  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  resultTitle: {
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
  },

  resultCount: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
  },

  list: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xxl,
  },

  loadingBox: {
    paddingVertical: theme.spacing.xxl,
    alignItems: "center",
  },

  loadingText: {
    marginTop: theme.spacing.md,
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  itemCard: {
    backgroundColor:
      theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },

  itemImage: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  itemEmoji: {
    fontSize: 28,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  itemCategory: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 2,
  },

  itemLocation: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },

  itemDate: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 2,
  },

  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: theme.radius.full,
    alignSelf: "flex-start",
  },

  lostBadge: {
    backgroundColor: "#FEF2F2",
  },

  foundBadge: {
    backgroundColor: "#F0FDF4",
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "700",
  },

  lostText: {
    color: theme.colors.lost,
  },

  foundText: {
    color: theme.colors.found,
  },

  empty: {
    backgroundColor:
      theme.colors.surface,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.xl,
    alignItems: "center",
    marginTop: theme.spacing.md,
  },

  emptyIcon: {
    fontSize: 36,
    marginBottom: theme.spacing.sm,
  },

  emptyTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  emptyText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: theme.spacing.sm,
    textAlign: "center",
  },
});