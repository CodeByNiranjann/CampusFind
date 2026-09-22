// <<<<<<< HEAD
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   Pressable,
// // // //   ScrollView,
// // // // } from "react-native";

// // // // import { theme } from "../constants/theme";

// // // // export default function HomeScreen({ navigation }) {
// // // //   return (
// // // //     <ScrollView
// // // //       style={styles.container}
// // // //       contentContainerStyle={styles.content}
// // // //     >
// // // //       {/* Header */}
// // // //       <View style={styles.header}>
// // // //         <View>
// // // //           <Text style={styles.greeting}>Hello 👋</Text>
// // // //           <Text style={styles.title}>FindBack</Text>
// // // //           <Text style={styles.subtitle}>
// // // //             Find what you lost. Return what you found.
// // // //           </Text>
// // // //         </View>

// // // //         <Pressable
// // // //           style={styles.notificationButton}
// // // //           onPress={() => navigation.navigate("Notifications")}
// // // //         >
// // // //           <Text style={styles.notificationIcon}>🔔</Text>
// // // //         </Pressable>
// // // //       </View>

// // // //       {/* Search */}
// // // //       <Pressable
// // // //         style={styles.searchBox}
// // // //         onPress={() => navigation.navigate("Search")}
// // // //       >
// // // //         <Text style={styles.searchIcon}>🔍</Text>
// // // //         <Text style={styles.searchText}>
// // // //           Search lost or found items...
// // // //         </Text>
// // // //       </Pressable>

// // // //       {/* Main Actions */}
// // // //       <Text style={styles.sectionTitle}>What happened?</Text>

// // // //       <View style={styles.actionRow}>
// // // //         <Pressable
// // // //           style={[styles.actionCard, styles.lostCard]}
// // // //           onPress={() =>
// // // //             navigation.navigate("ReportItem", {
// // // //               type: "LOST",
// // // //             })
// // // //           }
// // // //         >
// // // //           <View style={styles.iconCircle}>
// // // //             <Text style={styles.actionIcon}>🔎</Text>
// // // //           </View>

// // // //           <Text style={styles.actionTitle}>I Lost Something</Text>

// // // //           <Text style={styles.actionDescription}>
// // // //             Report an item you lost on campus
// // // //           </Text>
// // // //         </Pressable>

// // // //         <Pressable
// // // //           style={[styles.actionCard, styles.foundCard]}
// // // //           onPress={() =>
// // // //             navigation.navigate("ReportItem", {
// // // //               type: "FOUND",
// // // //             })
// // // //           }
// // // //         >
// // // //           <View style={styles.iconCircle}>
// // // //             <Text style={styles.actionIcon}>📦</Text>
// // // //           </View>

// // // //           <Text style={styles.actionTitle}>I Found Something</Text>

// // // //           <Text style={styles.actionDescription}>
// // // //             Help someone find their item
// // // //           </Text>
// // // //         </Pressable>
// // // //       </View>

// // // //       {/* Possible Matches */}
// // // //       <View style={styles.sectionHeader}>
// // // //         <Text style={styles.sectionTitle}>Possible Matches</Text>

// // // //         <Pressable
// // // //           onPress={() => navigation.navigate("Search")}
// // // //         >
// // // //           <Text style={styles.seeAll}>See All</Text>
// // // //         </Pressable>
// // // //       </View>

// // // //       <View style={styles.emptyCard}>
// // // //         <Text style={styles.emptyIcon}>🔗</Text>

// // // //         <Text style={styles.emptyTitle}>
// // // //           No possible matches yet
// // // //         </Text>

// // // //         <Text style={styles.emptyText}>
// // // //           When we find a possible match for your lost or found item,
// // // //           it will appear here.
// // // //         </Text>
// // // //       </View>

// // // //       {/* Recent Items */}
// // // //       <View style={styles.sectionHeader}>
// // // //         <Text style={styles.sectionTitle}>Recent Items</Text>

// // // //         <Pressable
// // // //           onPress={() => navigation.navigate("Search")}
// // // //         >
// // // //           <Text style={styles.seeAll}>View All</Text>
// // // //         </Pressable>
// // // //       </View>

// // // //       <View style={styles.itemCard}>
// // // //         <View style={styles.itemIcon}>
// // // //           <Text style={styles.itemEmoji}>📱</Text>
// // // //         </View>

// // // //         <View style={styles.itemInfo}>
// // // //           <Text style={styles.itemName}>Example Item</Text>

// // // //           <Text style={styles.itemLocation}>
// // // //             📍 Library
// // // //           </Text>

// // // //           <Text style={styles.itemDate}>
// // // //             Recently reported
// // // //           </Text>
// // // //         </View>

// // // //         <View style={styles.foundBadge}>
// // // //           <Text style={styles.foundBadgeText}>FOUND</Text>
// // // //         </View>
// // // //       </View>

// // // //       {/* Quick Info */}
// // // //       <View style={styles.infoCard}>
// // // //         <Text style={styles.infoTitle}>
// // // //           💡 How FindBack works
// // // //         </Text>

// // // //         <Text style={styles.infoText}>
// // // //           Report your lost or found item → We find possible matches →
// // // //           Connect securely → Verify ownership → Return the item.
// // // //         </Text>
// // // //       </View>

// // // //       {/* Bottom spacing */}
// // // //       <View style={styles.bottomSpace} />
// // // //     </ScrollView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: theme.colors.background,
// // // //   },

// // // //   content: {
// // // //     padding: theme.spacing.lg,
// // // //     paddingBottom: theme.spacing.xxl,
// // // //   },

// // // //   header: {
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "flex-start",
// // // //     marginTop: theme.spacing.md,
// // // //     marginBottom: theme.spacing.lg,
// // // //   },

// // // //   greeting: {
// // // //     fontSize: theme.fontSize.body,
// // // //     color: theme.colors.muted,
// // // //     marginBottom: theme.spacing.xs,
// // // //   },

// // // //   title: {
// // // //     fontSize: 30,
// // // //     fontWeight: "700",
// // // //     color: theme.colors.text,
// // // //   },

// // // //   subtitle: {
// // // //     fontSize: theme.fontSize.small,
// // // //     color: theme.colors.muted,
// // // //     marginTop: theme.spacing.xs,
// // // //   },

// // // //   notificationButton: {
// // // //     width: 46,
// // // //     height: 46,
// // // //     borderRadius: theme.radius.full,
// // // //     backgroundColor: theme.colors.surface,
// // // //     borderWidth: 1,
// // // //     borderColor: theme.colors.border,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },

// // // //   notificationIcon: {
// // // //     fontSize: 21,
// // // //   },

// // // //   searchBox: {
// // // //     height: 54,
// // // //     backgroundColor: theme.colors.surface,
// // // //     borderWidth: 1,
// // // //     borderColor: theme.colors.border,
// // // //     borderRadius: theme.radius.md,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     paddingHorizontal: theme.spacing.md,
// // // //     marginBottom: theme.spacing.xl,
// // // //   },

// // // //   searchIcon: {
// // // //     fontSize: 18,
// // // //     marginRight: theme.spacing.sm,
// // // //   },

// // // //   searchText: {
// // // //     color: theme.colors.muted,
// // // //     fontSize: theme.fontSize.body,
// // // //   },

// // // //   sectionTitle: {
// // // //     fontSize: theme.fontSize.subtitle,
// // // //     fontWeight: "700",
// // // //     color: theme.colors.text,
// // // //     marginBottom: theme.spacing.md,
// // // //   },

// // // //   actionRow: {
// // // //     flexDirection: "row",
// // // //     gap: theme.spacing.md,
// // // //     marginBottom: theme.spacing.xl,
// // // //   },

// // // //   actionCard: {
// // // //     flex: 1,
// // // //     minHeight: 180,
// // // //     borderRadius: theme.radius.lg,
// // // //     padding: theme.spacing.md,
// // // //     borderWidth: 1,
// // // //   },

// // // //   lostCard: {
// // // //     backgroundColor: "#FEF2F2",
// // // //     borderColor: "#FECACA",
// // // //   },

// // // //   foundCard: {
// // // //     backgroundColor: "#F0FDF4",
// // // //     borderColor: "#BBF7D0",
// // // //   },

// // // //   iconCircle: {
// // // //     width: 46,
// // // //     height: 46,
// // // //     borderRadius: theme.radius.full,
// // // //     backgroundColor: theme.colors.surface,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     marginBottom: theme.spacing.md,
// // // //   },

// // // //   actionIcon: {
// // // //     fontSize: 22,
// // // //   },

// // // //   actionTitle: {
// // // //     fontSize: theme.fontSize.body,
// // // //     fontWeight: "700",
// // // //     color: theme.colors.text,
// // // //     marginBottom: theme.spacing.sm,
// // // //   },

// // // //   actionDescription: {
// // // //     fontSize: theme.fontSize.small,
// // // //     color: theme.colors.muted,
// // // //     lineHeight: 18,
// // // //   },

// // // //   sectionHeader: {
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     marginBottom: theme.spacing.md,
// // // //   },

// // // //   seeAll: {
// // // //     color: theme.colors.primary,
// // // //     fontSize: theme.fontSize.small,
// // // //     fontWeight: "600",
// // // //   },

// // // //   emptyCard: {
// // // //     backgroundColor: theme.colors.surface,
// // // //     borderWidth: 1,
// // // //     borderColor: theme.colors.border,
// // // //     borderRadius: theme.radius.lg,
// // // //     padding: theme.spacing.xl,
// // // //     alignItems: "center",
// // // //     marginBottom: theme.spacing.xl,
// // // //   },

// // // //   emptyIcon: {
// // // //     fontSize: 34,
// // // //     marginBottom: theme.spacing.sm,
// // // //   },

// // // //   emptyTitle: {
// // // //     fontSize: theme.fontSize.body,
// // // //     fontWeight: "700",
// // // //     color: theme.colors.text,
// // // //     textAlign: "center",
// // // //   },

// // // //   emptyText: {
// // // //     fontSize: theme.fontSize.small,
// // // //     color: theme.colors.muted,
// // // //     textAlign: "center",
// // // //     lineHeight: 18,
// // // //     marginTop: theme.spacing.sm,
// // // //   },

// // // //   itemCard: {
// // // //     backgroundColor: theme.colors.surface,
// // // //     borderWidth: 1,
// // // //     borderColor: theme.colors.border,
// // // //     borderRadius: theme.radius.lg,
// // // //     padding: theme.spacing.md,
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     marginBottom: theme.spacing.xl,
// // // //   },

// // // //   itemIcon: {
// // // //     width: 58,
// // // //     height: 58,
// // // //     borderRadius: theme.radius.md,
// // // //     backgroundColor: theme.colors.primaryLight,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     marginRight: theme.spacing.md,
// // // //   },

// // // //   itemEmoji: {
// // // //     fontSize: 25,
// // // //   },

// // // //   itemInfo: {
// // // //     flex: 1,
// // // //   },

// // // //   itemName: {
// // // //     fontSize: theme.fontSize.body,
// // // //     fontWeight: "700",
// // // //     color: theme.colors.text,
// // // //   },

// // // //   itemLocation: {
// // // //     fontSize: theme.fontSize.small,
// // // //     color: theme.colors.muted,
// // // //     marginTop: 4,
// // // //   },

// // // //   itemDate: {
// // // //     fontSize: theme.fontSize.small,
// // // //     color: theme.colors.muted,
// // // //     marginTop: 2,
// // // //   },

// // // //   foundBadge: {
// // // //     backgroundColor: "#DCFCE7",
// // // //     paddingHorizontal: theme.spacing.sm,
// // // //     paddingVertical: 6,
// // // //     borderRadius: theme.radius.full,
// // // //   },

// // // //   foundBadgeText: {
// // // //     color: theme.colors.found,
// // // //     fontSize: 10,
// // // //     fontWeight: "700",
// // // //   },

// // // //   infoCard: {
// // // //     backgroundColor: theme.colors.primaryLight,
// // // //     borderRadius: theme.radius.lg,
// // // //     padding: theme.spacing.lg,
// // // //     borderWidth: 1,
// // // //     borderColor: "#DBEAFE",
// // // //   },

// // // //   infoTitle: {
// // // //     fontSize: theme.fontSize.body,
// // // //     fontWeight: "700",
// // // //     color: theme.colors.primary,
// // // //     marginBottom: theme.spacing.sm,
// // // //   },

// // // //   infoText: {
// // // //     fontSize: theme.fontSize.small,
// // // //     color: theme.colors.textSecondary,
// // // //     lineHeight: 19,
// // // //   },

// // // //   bottomSpace: {
// // // //     height: theme.spacing.xl,
// // // //   },
// // // // });

// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   Pressable,
// // //   ScrollView,
// // // } from "react-native";

// // // import { theme } from "../constants/theme";

// // // export default function HomeScreen({ navigation }) {
// // //   return (
// // //     <ScrollView
// // //       style={styles.container}
// // //       contentContainerStyle={styles.content}
// // //     >
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <View style={styles.headerText}>
// // //           <Text style={styles.greeting}>Hello 👋</Text>

// // //           <Text style={styles.title}>FindBack</Text>

// // //           <Text style={styles.subtitle}>
// // //             Find what you lost. Return what you found.
// // //           </Text>
// // //         </View>

// // //         <Pressable
// // //           style={styles.notificationButton}
// // //           onPress={() => {
// // //             // Notifications screen will be added later
// // //           }}
// // //         >
// // //           <Text style={styles.notificationIcon}>🔔</Text>
// // //         </Pressable>
// // //       </View>

// // //       {/* Search */}
// // //       <Pressable
// // //         style={styles.searchBox}
// // //         onPress={() => navigation.navigate("Search")}
// // //       >
// // //         <Text style={styles.searchIcon}>🔍</Text>

// // //         <Text style={styles.searchText}>
// // //           Search lost or found items...
// // //         </Text>
// // //       </Pressable>

// // //       {/* My Items */}
// // //       <Pressable
// // //         style={styles.myItemsCard}
// // //         onPress={() => navigation.navigate("MyItems")}
// // //       >
// // //         <View style={styles.myItemsIcon}>
// // //           <Text style={styles.myItemsEmoji}>📋</Text>
// // //         </View>

// // //         <View style={styles.myItemsInfo}>
// // //           <Text style={styles.myItemsTitle}>
// // //             My Items
// // //           </Text>

// // //           <Text style={styles.myItemsDescription}>
// // //             View your lost and found reports
// // //           </Text>
// // //         </View>

// // //         <Text style={styles.myItemsArrow}>
// // //           →
// // //         </Text>
// // //       </Pressable>

// // //       {/* Main Actions */}
// // //       <Text style={styles.sectionTitle}>
// // //         What happened?
// // //       </Text>

// // //       <View style={styles.actionRow}>
// // //         {/* Lost */}
// // //         <Pressable
// // //           style={[styles.actionCard, styles.lostCard]}
// // //           onPress={() =>
// // //             navigation.navigate("ReportItem", {
// // //               type: "LOST",
// // //             })
// // //           }
// // //         >
// // //           <View style={styles.iconCircle}>
// // //             <Text style={styles.actionIcon}>🔎</Text>
// // //           </View>

// // //           <Text style={styles.actionTitle}>
// // //             I Lost Something
// // //           </Text>

// // //           <Text style={styles.actionDescription}>
// // //             Report an item you lost on campus
// // //           </Text>
// // //         </Pressable>

// // //         {/* Found */}
// // //         <Pressable
// // //           style={[styles.actionCard, styles.foundCard]}
// // //           onPress={() =>
// // //             navigation.navigate("ReportItem", {
// // //               type: "FOUND",
// // //             })
// // //           }
// // //         >
// // //           <View style={styles.iconCircle}>
// // //             <Text style={styles.actionIcon}>📦</Text>
// // //           </View>

// // //           <Text style={styles.actionTitle}>
// // //             I Found Something
// // //           </Text>

// // //           <Text style={styles.actionDescription}>
// // //             Help someone find their item
// // //           </Text>
// // //         </Pressable>
// // //       </View>

// // //       {/* Possible Matches */}
// // //       <View style={styles.sectionHeader}>
// // //         <Text style={styles.sectionTitle}>
// // //           Possible Matches
// // //         </Text>

// // //         <Pressable
// // //           onPress={() => navigation.navigate("Search")}
// // //         >
// // //           <Text style={styles.seeAll}>
// // //             See All
// // //           </Text>
// // //         </Pressable>
// // //       </View>

// // //       <View style={styles.emptyCard}>
// // //         <Text style={styles.emptyIcon}>🔗</Text>

// // //         <Text style={styles.emptyTitle}>
// // //           No possible matches yet
// // //         </Text>

// // //         <Text style={styles.emptyText}>
// // //           When we find a possible match for your lost
// // //           or found item, it will appear here.
// // //         </Text>
// // //       </View>

// // //       {/* Recent Items */}
// // //       <View style={styles.sectionHeader}>
// // //         <Text style={styles.sectionTitle}>
// // //           Recent Items
// // //         </Text>

// // //         <Pressable
// // //           onPress={() => navigation.navigate("Search")}
// // //         >
// // //           <Text style={styles.seeAll}>
// // //             View All
// // //           </Text>
// // //         </Pressable>
// // //       </View>

// // //       <View style={styles.itemCard}>
// // //         <View style={styles.itemIcon}>
// // //           <Text style={styles.itemEmoji}>📱</Text>
// // //         </View>

// // //         <View style={styles.itemInfo}>
// // //           <Text style={styles.itemName}>
// // //             Example Item
// // //           </Text>

// // //           <Text style={styles.itemLocation}>
// // //             📍 Library
// // //           </Text>

// // //           <Text style={styles.itemDate}>
// // //             Recently reported
// // //           </Text>
// // //         </View>

// // //         <View style={styles.foundBadge}>
// // //           <Text style={styles.foundBadgeText}>
// // //             FOUND
// // //           </Text>
// // //         </View>
// // //       </View>

// // //       {/* How FindBack Works */}
// // //       <View style={styles.infoCard}>
// // //         <Text style={styles.infoTitle}>
// // //           💡 How FindBack works
// // //         </Text>

// // //         <Text style={styles.infoText}>
// // //           Report your lost or found item → We find
// // //           possible matches → Connect securely →
// // //           Verify ownership → Return the item.
// // //         </Text>
// // //       </View>

// // //       <View style={styles.bottomSpace} />
// // //     </ScrollView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: theme.colors.background,
// // //   },

// // //   content: {
// // //     padding: theme.spacing.lg,
// // //     paddingBottom: theme.spacing.xxl,
// // //   },

// // //   header: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "flex-start",
// // //     marginTop: theme.spacing.md,
// // //     marginBottom: theme.spacing.lg,
// // //   },

// // //   headerText: {
// // //     flex: 1,
// // //     paddingRight: theme.spacing.md,
// // //   },

// // //   greeting: {
// // //     fontSize: theme.fontSize.body,
// // //     color: theme.colors.muted,
// // //     marginBottom: theme.spacing.xs,
// // //   },

// // //   title: {
// // //     fontSize: 30,
// // //     fontWeight: "700",
// // //     color: theme.colors.text,
// // //   },

// // //   subtitle: {
// // //     fontSize: theme.fontSize.small,
// // //     color: theme.colors.muted,
// // //     marginTop: theme.spacing.xs,
// // //   },

// // //   notificationButton: {
// // //     width: 46,
// // //     height: 46,
// // //     borderRadius: theme.radius.full,
// // //     backgroundColor: theme.colors.surface,
// // //     borderWidth: 1,
// // //     borderColor: theme.colors.border,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },

// // //   notificationIcon: {
// // //     fontSize: 21,
// // //   },

// // //   searchBox: {
// // //     height: 54,
// // //     backgroundColor: theme.colors.surface,
// // //     borderWidth: 1,
// // //     borderColor: theme.colors.border,
// // //     borderRadius: theme.radius.md,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     paddingHorizontal: theme.spacing.md,
// // //     marginBottom: theme.spacing.lg,
// // //   },

// // //   searchIcon: {
// // //     fontSize: 18,
// // //     marginRight: theme.spacing.sm,
// // //   },

// // //   searchText: {
// // //     color: theme.colors.muted,
// // //     fontSize: theme.fontSize.body,
// // //   },

// // //   /* My Items */

// // //   myItemsCard: {
// // //     backgroundColor: theme.colors.surface,
// // //     borderWidth: 1,
// // //     borderColor: theme.colors.border,
// // //     borderRadius: theme.radius.lg,
// // //     padding: theme.spacing.md,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: theme.spacing.xl,
// // //   },

// // //   myItemsIcon: {
// // //     width: 50,
// // //     height: 50,
// // //     borderRadius: theme.radius.md,
// // //     backgroundColor: theme.colors.primaryLight,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginRight: theme.spacing.md,
// // //   },

// // //   myItemsEmoji: {
// // //     fontSize: 23,
// // //   },

// // //   myItemsInfo: {
// // //     flex: 1,
// // //   },

// // //   myItemsTitle: {
// // //     fontSize: theme.fontSize.body,
// // //     fontWeight: "700",
// // //     color: theme.colors.text,
// // //   },

// // //   myItemsDescription: {
// // //     fontSize: theme.fontSize.small,
// // //     color: theme.colors.muted,
// // //     marginTop: 4,
// // //   },

// // //   myItemsArrow: {
// // //     fontSize: 22,
// // //     color: theme.colors.primary,
// // //     fontWeight: "600",
// // //   },

// // //   /* Sections */

// // //   sectionTitle: {
// // //     fontSize: theme.fontSize.subtitle,
// // //     fontWeight: "700",
// // //     color: theme.colors.text,
// // //     marginBottom: theme.spacing.md,
// // //   },

// // //   actionRow: {
// // //     flexDirection: "row",
// // //     gap: theme.spacing.md,
// // //     marginBottom: theme.spacing.xl,
// // //   },

// // //   actionCard: {
// // //     flex: 1,
// // //     minHeight: 180,
// // //     borderRadius: theme.radius.lg,
// // //     padding: theme.spacing.md,
// // //     borderWidth: 1,
// // //   },

// // //   lostCard: {
// // //     backgroundColor: "#FEF2F2",
// // //     borderColor: "#FECACA",
// // //   },

// // //   foundCard: {
// // //     backgroundColor: "#F0FDF4",
// // //     borderColor: "#BBF7D0",
// // //   },

// // //   iconCircle: {
// // //     width: 46,
// // //     height: 46,
// // //     borderRadius: theme.radius.full,
// // //     backgroundColor: theme.colors.surface,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: theme.spacing.md,
// // //   },

// // //   actionIcon: {
// // //     fontSize: 22,
// // //   },

// // //   actionTitle: {
// // //     fontSize: theme.fontSize.body,
// // //     fontWeight: "700",
// // //     color: theme.colors.text,
// // //     marginBottom: theme.spacing.sm,
// // //   },

// // //   actionDescription: {
// // //     fontSize: theme.fontSize.small,
// // //     color: theme.colors.muted,
// // //     lineHeight: 18,
// // //   },

// // //   sectionHeader: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     marginBottom: theme.spacing.md,
// // //   },

// // //   seeAll: {
// // //     color: theme.colors.primary,
// // //     fontSize: theme.fontSize.small,
// // //     fontWeight: "600",
// // //   },

// // //   /* Possible Matches */

// // //   emptyCard: {
// // //     backgroundColor: theme.colors.surface,
// // //     borderWidth: 1,
// // //     borderColor: theme.colors.border,
// // //     borderRadius: theme.radius.lg,
// // //     padding: theme.spacing.xl,
// // //     alignItems: "center",
// // //     marginBottom: theme.spacing.xl,
// // //   },

// // //   emptyIcon: {
// // //     fontSize: 34,
// // //     marginBottom: theme.spacing.sm,
// // //   },

// // //   emptyTitle: {
// // //     fontSize: theme.fontSize.body,
// // //     fontWeight: "700",
// // //     color: theme.colors.text,
// // //     textAlign: "center",
// // //   },

// // //   emptyText: {
// // //     fontSize: theme.fontSize.small,
// // //     color: theme.colors.muted,
// // //     textAlign: "center",
// // //     lineHeight: 18,
// // //     marginTop: theme.spacing.sm,
// // //   },

// // //   /* Recent Items */

// // //   itemCard: {
// // //     backgroundColor: theme.colors.surface,
// // //     borderWidth: 1,
// // //     borderColor: theme.colors.border,
// // //     borderRadius: theme.radius.lg,
// // //     padding: theme.spacing.md,
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: theme.spacing.xl,
// // //   },

// // //   itemIcon: {
// // //     width: 58,
// // //     height: 58,
// // //     borderRadius: theme.radius.md,
// // //     backgroundColor: theme.colors.primaryLight,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginRight: theme.spacing.md,
// // //   },

// // //   itemEmoji: {
// // //     fontSize: 25,
// // //   },

// // //   itemInfo: {
// // //     flex: 1,
// // //   },

// // //   itemName: {
// // //     fontSize: theme.fontSize.body,
// // //     fontWeight: "700",
// // //     color: theme.colors.text,
// // //   },

// // //   itemLocation: {
// // //     fontSize: theme.fontSize.small,
// // //     color: theme.colors.muted,
// // //     marginTop: 4,
// // //   },

// // //   itemDate: {
// // //     fontSize: theme.fontSize.small,
// // //     color: theme.colors.muted,
// // //     marginTop: 2,
// // //   },

// // //   foundBadge: {
// // //     backgroundColor: "#DCFCE7",
// // //     paddingHorizontal: theme.spacing.sm,
// // //     paddingVertical: 6,
// // //     borderRadius: theme.radius.full,
// // //   },

// // //   foundBadgeText: {
// // //     color: theme.colors.found,
// // //     fontSize: 10,
// // //     fontWeight: "700",
// // //   },

// // //   /* Info */

// // //   infoCard: {
// // //     backgroundColor: theme.colors.primaryLight,
// // //     borderRadius: theme.radius.lg,
// // //     padding: theme.spacing.lg,
// // //     borderWidth: 1,
// // //     borderColor: "#DBEAFE",
// // //   },

// // //   infoTitle: {
// // //     fontSize: theme.fontSize.body,
// // //     fontWeight: "700",
// // //     color: theme.colors.primary,
// // //     marginBottom: theme.spacing.sm,
// // //   },

// // //   infoText: {
// // //     fontSize: theme.fontSize.small,
// // //     color: theme.colors.textSecondary,
// // //     lineHeight: 19,
// // //   },

// // //   bottomSpace: {
// // //     height: theme.spacing.xl,
// // //   },
// // // });
// =======

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Pressable,
// //   ScrollView,
// // } from "react-native";

// // import { theme } from "../constants/theme";

// // export default function HomeScreen({ navigation }) {
// //   return (
// //     <ScrollView
// //       style={styles.container}
// //       contentContainerStyle={styles.content}
// //     >
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <View style={styles.headerText}>
// //           <Text style={styles.greeting}>Hello 👋</Text>

// //           <Text style={styles.title}>FindBack</Text>

// //           <Text style={styles.subtitle}>
// //             Find what you lost. Return what you found.
// //           </Text>
// //         </View>

// //         <Pressable
// //           style={styles.notificationButton}
// //           onPress={() => {
// //             // Notifications screen will be added later
// //           }}
// //         >
// //           <Text style={styles.notificationIcon}>🔔</Text>
// //         </Pressable>
// //       </View>

// //       {/* Search */}
// //       <Pressable
// //         style={styles.searchBox}
// //         onPress={() => navigation.navigate("Search")}
// //       >
// //         <Text style={styles.searchIcon}>🔍</Text>

// //         <Text style={styles.searchText}>
// //           Search lost or found items...
// //         </Text>
// //       </Pressable>

// //       {/* My Items */}
// //       <Pressable
// //         style={styles.myItemsCard}
// //         onPress={() => navigation.navigate("MyItems")}
// //       >
// //         <View style={styles.myItemsIcon}>
// //           <Text style={styles.myItemsEmoji}>📋</Text>
// //         </View>

// //         <View style={styles.myItemsInfo}>
// //           <Text style={styles.myItemsTitle}>
// //             My Items
// //           </Text>

// //           <Text style={styles.myItemsDescription}>
// //             View your lost and found reports
// //           </Text>
// //         </View>

// //         <Text style={styles.myItemsArrow}>
// //           →
// //         </Text>
// //       </Pressable>

// //       {/* Main Actions */}
// //       <Text style={styles.sectionTitle}>
// //         What happened?
// //       </Text>

// //       <View style={styles.actionRow}>
// //         {/* Lost */}
// //         <Pressable
// //           style={[styles.actionCard, styles.lostCard]}
// //           onPress={() =>
// //             navigation.navigate("ReportItem", {
// //               type: "LOST",
// //             })
// //           }
// //         >
// //           <View style={styles.iconCircle}>
// //             <Text style={styles.actionIcon}>🔎</Text>
// //           </View>

// //           <Text style={styles.actionTitle}>
// //             I Lost Something
// //           </Text>

// //           <Text style={styles.actionDescription}>
// //             Report an item you lost on campus
// //           </Text>
// //         </Pressable>

// //         {/* Found */}
// //         <Pressable
// //           style={[styles.actionCard, styles.foundCard]}
// //           onPress={() =>
// //             navigation.navigate("ReportItem", {
// //               type: "FOUND",
// //             })
// //           }
// //         >
// //           <View style={styles.iconCircle}>
// //             <Text style={styles.actionIcon}>📦</Text>
// //           </View>

// //           <Text style={styles.actionTitle}>
// //             I Found Something
// //           </Text>

// //           <Text style={styles.actionDescription}>
// //             Help someone find their item
// //           </Text>
// //         </Pressable>
// //       </View>

// //       {/* Possible Matches */}
// //       <View style={styles.sectionHeader}>
// //         <Text style={styles.sectionTitle}>
// //           Possible Matches
// //         </Text>

// //         <Pressable
// //           onPress={() =>
// //             navigation.navigate("PossibleMatches")
// //           }
// //         >
// //           <Text style={styles.seeAll}>
// //             See All
// //           </Text>
// //         </Pressable>
// //       </View>

// //       {/* Clickable Possible Matches Card */}
// //       <Pressable
// //         style={styles.emptyCard}
// //         onPress={() =>
// //           navigation.navigate("PossibleMatches")
// //         }
// //       >
// //         <Text style={styles.emptyIcon}>🔗</Text>

// //         <Text style={styles.emptyTitle}>
// //           No possible matches yet
// //         </Text>

// //         <Text style={styles.emptyText}>
// //           When we find a possible match for your lost
// //           or found item, it will appear here.
// //         </Text>

// //         <Text style={styles.matchLink}>
// //           View Possible Matches →
// //         </Text>
// //       </Pressable>

// //       {/* Recent Items */}
// //       <View style={styles.sectionHeader}>
// //         <Text style={styles.sectionTitle}>
// //           Recent Items
// //         </Text>

// //         <Pressable
// //           onPress={() =>
// //             navigation.navigate("Search")
// //           }
// //         >
// //           <Text style={styles.seeAll}>
// //             View All
// //           </Text>
// //         </Pressable>
// //       </View>

// //       <View style={styles.itemCard}>
// //         <View style={styles.itemIcon}>
// //           <Text style={styles.itemEmoji}>📱</Text>
// //         </View>

// //         <View style={styles.itemInfo}>
// //           <Text style={styles.itemName}>
// //             Example Item
// //           </Text>

// //           <Text style={styles.itemLocation}>
// //             📍 Library
// //           </Text>

// //           <Text style={styles.itemDate}>
// //             Recently reported
// //           </Text>
// //         </View>

// //         <View style={styles.foundBadge}>
// //           <Text style={styles.foundBadgeText}>
// //             FOUND
// //           </Text>
// //         </View>
// //       </View>

// //       {/* How FindBack Works */}
// //       <View style={styles.infoCard}>
// //         <Text style={styles.infoTitle}>
// //           💡 How FindBack works
// //         </Text>

// //         <Text style={styles.infoText}>
// //           Report your lost or found item → We find
// //           possible matches → Connect securely →
// //           Verify ownership → Return the item.
// //         </Text>
// //       </View>

// //       <View style={styles.bottomSpace} />
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: theme.colors.background,
// //   },

// //   content: {
// //     padding: theme.spacing.lg,
// //     paddingBottom: theme.spacing.xxl,
// //   },

// //   /* Header */

// //   header: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     marginTop: theme.spacing.md,
// //     marginBottom: theme.spacing.lg,
// //   },

// //   headerText: {
// //     flex: 1,
// //     paddingRight: theme.spacing.md,
// //   },

// //   greeting: {
// //     fontSize: theme.fontSize.body,
// //     color: theme.colors.muted,
// //     marginBottom: theme.spacing.xs,
// //   },

// //   title: {
// //     fontSize: 30,
// //     fontWeight: "700",
// //     color: theme.colors.text,
// //   },

// //   subtitle: {
// //     fontSize: theme.fontSize.small,
// //     color: theme.colors.muted,
// //     marginTop: theme.spacing.xs,
// //   },

// //   notificationButton: {
// //     width: 46,
// //     height: 46,
// //     borderRadius: theme.radius.full,
// //     backgroundColor: theme.colors.surface,
// //     borderWidth: 1,
// //     borderColor: theme.colors.border,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },

// //   notificationIcon: {
// //     fontSize: 21,
// //   },

// //   /* Search */

// //   searchBox: {
// //     height: 54,
// //     backgroundColor: theme.colors.surface,
// //     borderWidth: 1,
// //     borderColor: theme.colors.border,
// //     borderRadius: theme.radius.md,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: theme.spacing.md,
// //     marginBottom: theme.spacing.lg,
// //   },

// //   searchIcon: {
// //     fontSize: 18,
// //     marginRight: theme.spacing.sm,
// //   },

// //   searchText: {
// //     color: theme.colors.muted,
// //     fontSize: theme.fontSize.body,
// //   },

// //   /* My Items */

// //   myItemsCard: {
// //     backgroundColor: theme.colors.surface,
// //     borderWidth: 1,
// //     borderColor: theme.colors.border,
// //     borderRadius: theme.radius.lg,
// //     padding: theme.spacing.md,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: theme.spacing.xl,
// //   },

// //   myItemsIcon: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: theme.radius.md,
// //     backgroundColor: theme.colors.primaryLight,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginRight: theme.spacing.md,
// //   },

// //   myItemsEmoji: {
// //     fontSize: 23,
// //   },

// //   myItemsInfo: {
// //     flex: 1,
// //   },

// //   myItemsTitle: {
// //     fontSize: theme.fontSize.body,
// //     fontWeight: "700",
// //     color: theme.colors.text,
// //   },

// //   myItemsDescription: {
// //     fontSize: theme.fontSize.small,
// //     color: theme.colors.muted,
// //     marginTop: 4,
// //   },

// //   myItemsArrow: {
// //     fontSize: 22,
// //     color: theme.colors.primary,
// //     fontWeight: "600",
// //   },

// //   /* Sections */

// //   sectionTitle: {
// //     fontSize: theme.fontSize.subtitle,
// //     fontWeight: "700",
// //     color: theme.colors.text,
// //     marginBottom: theme.spacing.md,
// //   },

// //   actionRow: {
// //     flexDirection: "row",
// //     gap: theme.spacing.md,
// //     marginBottom: theme.spacing.xl,
// //   },

// //   actionCard: {
// //     flex: 1,
// //     minHeight: 180,
// //     borderRadius: theme.radius.lg,
// //     padding: theme.spacing.md,
// //     borderWidth: 1,
// //   },

// //   lostCard: {
// //     backgroundColor: "#FEF2F2",
// //     borderColor: "#FECACA",
// //   },

// //   foundCard: {
// //     backgroundColor: "#F0FDF4",
// //     borderColor: "#BBF7D0",
// //   },

// //   iconCircle: {
// //     width: 46,
// //     height: 46,
// //     borderRadius: theme.radius.full,
// //     backgroundColor: theme.colors.surface,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: theme.spacing.md,
// //   },

// //   actionIcon: {
// //     fontSize: 22,
// //   },

// //   actionTitle: {
// //     fontSize: theme.fontSize.body,
// //     fontWeight: "700",
// //     color: theme.colors.text,
// //     marginBottom: theme.spacing.sm,
// //   },

// //   actionDescription: {
// //     fontSize: theme.fontSize.small,
// //     color: theme.colors.muted,
// //     lineHeight: 18,
// //   },

// //   sectionHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: theme.spacing.md,
// //   },

// //   seeAll: {
// //     color: theme.colors.primary,
// //     fontSize: theme.fontSize.small,
// //     fontWeight: "600",
// //   },

// //   /* Possible Matches */

// //   emptyCard: {
// //     backgroundColor: theme.colors.surface,
// //     borderWidth: 1,
// //     borderColor: theme.colors.border,
// //     borderRadius: theme.radius.lg,
// //     padding: theme.spacing.xl,
// //     alignItems: "center",
// //     marginBottom: theme.spacing.xl,
// //   },

// //   emptyIcon: {
// //     fontSize: 34,
// //     marginBottom: theme.spacing.sm,
// //   },

// //   emptyTitle: {
// //     fontSize: theme.fontSize.body,
// //     fontWeight: "700",
// //     color: theme.colors.text,
// //     textAlign: "center",
// //   },

// //   emptyText: {
// //     fontSize: theme.fontSize.small,
// //     color: theme.colors.muted,
// //     textAlign: "center",
// //     lineHeight: 18,
// //     marginTop: theme.spacing.sm,
// //   },

// //   matchLink: {
// //     marginTop: theme.spacing.md,
// //     color: theme.colors.primary,
// //     fontSize: theme.fontSize.small,
// //     fontWeight: "700",
// //   },

// //   /* Recent Items */

// //   itemCard: {
// //     backgroundColor: theme.colors.surface,
// //     borderWidth: 1,
// //     borderColor: theme.colors.border,
// //     borderRadius: theme.radius.lg,
// //     padding: theme.spacing.md,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: theme.spacing.xl,
// //   },

// //   itemIcon: {
// //     width: 58,
// //     height: 58,
// //     borderRadius: theme.radius.md,
// //     backgroundColor: theme.colors.primaryLight,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginRight: theme.spacing.md,
// //   },

// //   itemEmoji: {
// //     fontSize: 25,
// //   },

// //   itemInfo: {
// //     flex: 1,
// //   },

// //   itemName: {
// //     fontSize: theme.fontSize.body,
// //     fontWeight: "700",
// //     color: theme.colors.text,
// //   },

// //   itemLocation: {
// //     fontSize: theme.fontSize.small,
// //     color: theme.colors.muted,
// //     marginTop: 4,
// //   },

// //   itemDate: {
// //     fontSize: theme.fontSize.small,
// //     color: theme.colors.muted,
// //     marginTop: 2,
// //   },

// //   foundBadge: {
// //     backgroundColor: "#DCFCE7",
// //     paddingHorizontal: theme.spacing.sm,
// //     paddingVertical: 6,
// //     borderRadius: theme.radius.full,
// //   },

// //   foundBadgeText: {
// //     color: theme.colors.found,
// //     fontSize: 10,
// //     fontWeight: "700",
// //   },

// //   /* Info */

// //   infoCard: {
// //     backgroundColor: theme.colors.primaryLight,
// //     borderRadius: theme.radius.lg,
// //     padding: theme.spacing.lg,
// //     borderWidth: 1,
// //     borderColor: "#DBEAFE",
// //   },

// //   infoTitle: {
// //     fontSize: theme.fontSize.body,
// //     fontWeight: "700",
// //     color: theme.colors.primary,
// //     marginBottom: theme.spacing.sm,
// //   },

// //   infoText: {
// //     fontSize: theme.fontSize.small,
// //     color: theme.colors.textSecondary,
// //     lineHeight: 19,
// //   },

// //   bottomSpace: {
// //     height: theme.spacing.xl,
// //   },
// // });

// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   ScrollView,
//   Alert,
// } from "react-native";

// import { signOut } from "firebase/auth";
// import { auth } from "../services/firebase";

// import { theme } from "../constants/theme";

// export default function HomeScreen({ navigation }) {
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigation.replace("Login");
//     } catch (error) {
//       Alert.alert(
//         "Logout Failed",
//         "Something went wrong. Please try again."
//       );
//     }
//   };

//   return (
// <<<<<<< HEAD
//     <View style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.content}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.header}>
//           <View style={styles.headerText}>
//             <Text style={styles.greeting}>Hello 👋</Text>
// =======
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.content}
//     >
//       {/* =========================
//           HEADER
//       ========================= */}
//       <View style={styles.header}>
//         <View style={styles.headerText}>
//           <Text style={styles.greeting}>
//             Hello 👋
//           </Text>

//           <Text style={styles.title}>
//             FindBack
//           </Text>

//           <Text style={styles.subtitle}>
//             Find what you lost. Return what you found.
//           </Text>
//         </View>

//         <View style={styles.headerButtons}>
//           {/* Notification */}
//           <Pressable
//             style={styles.notificationButton}
//             onPress={() => {
//               // Notifications screen will be added next
//             }}
//           >
//             <Text style={styles.notificationIcon}>
//               🔔
//             </Text>
//           </Pressable>

//           {/* Logout */}
//           <Pressable
//             style={styles.logoutButton}
//             onPress={handleLogout}
//           >
//             <Text style={styles.logoutText}>
//               ↪
//             </Text>
//           </Pressable>
//         </View>
//       </View>

//       {/* =========================
//           SEARCH
//       ========================= */}
//       <Pressable
//         style={styles.searchBox}
//         onPress={() => navigation.navigate("Search")}
//       >
//         <Text style={styles.searchIcon}>
//           🔍
//         </Text>
// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1

//             <Text style={styles.title}>FindBack</Text>

// <<<<<<< HEAD
//             <Text style={styles.subtitle}>
//               Find what you lost. Return what you found.
// =======
//       {/* =========================
//           MY ITEMS
//       ========================= */}
//       <Pressable
//         style={styles.myItemsCard}
//         onPress={() => navigation.navigate("MyItems")}
//       >
//         <View style={styles.myItemsIcon}>
//           <Text style={styles.myItemsEmoji}>
//             📋
//           </Text>
//         </View>

//         <View style={styles.myItemsInfo}>
//           <Text style={styles.myItemsTitle}>
//             My Items
//           </Text>

//           <Text style={styles.myItemsDescription}>
//             View your lost and found reports
//           </Text>
//         </View>

//         <Text style={styles.myItemsArrow}>
//           →
//         </Text>
//       </Pressable>

//       {/* =========================
//           MAIN ACTIONS
//       ========================= */}
//       <Text style={styles.sectionTitle}>
//         What happened?
//       </Text>

//       <View style={styles.actionRow}>
//         {/* LOST */}
//         <Pressable
//           style={[
//             styles.actionCard,
//             styles.lostCard,
//           ]}
//           onPress={() =>
//             navigation.navigate("ReportItem", {
//               type: "LOST",
//             })
//           }
//         >
//           <View style={styles.iconCircle}>
//             <Text style={styles.actionIcon}>
//               🔎
// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//             </Text>
//           </View>

//           <Pressable
//             style={styles.notificationButton}
//             onPress={() => {}}
//           >
//             <Text style={styles.notificationIcon}>🔔</Text>
//           </Pressable>
//         </View>

//         <Pressable
//           style={styles.searchBox}
//           onPress={() => navigation.navigate("Search")}
//         >
//           <Text style={styles.searchIcon}>🔍</Text>

//           <Text style={styles.searchText}>
//             Search lost or found items...
//           </Text>
//         </Pressable>

// <<<<<<< HEAD
//         <Pressable
//           style={styles.myItemsCard}
//           onPress={() => navigation.navigate("MyItems")}
//         >
//           <View style={styles.myItemsIcon}>
//             <Text style={styles.myItemsEmoji}>📋</Text>
// =======
//         {/* FOUND */}
//         <Pressable
//           style={[
//             styles.actionCard,
//             styles.foundCard,
//           ]}
//           onPress={() =>
//             navigation.navigate("ReportItem", {
//               type: "FOUND",
//             })
//           }
//         >
//           <View style={styles.iconCircle}>
//             <Text style={styles.actionIcon}>
//               📦
//             </Text>
// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//           </View>

//           <View style={styles.myItemsInfo}>
//             <Text style={styles.myItemsTitle}>My Items</Text>

//             <Text style={styles.myItemsDescription}>
//               View your lost and found reports
//             </Text>
//           </View>

//           <Text style={styles.myItemsArrow}>→</Text>
//         </Pressable>

// <<<<<<< HEAD
// =======
//       {/* =========================
//           POSSIBLE MATCHES
//       ========================= */}
//       <View style={styles.sectionHeader}>
// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//         <Text style={styles.sectionTitle}>
//           What happened?
//         </Text>

//         <View style={styles.actionRow}>
//           <Pressable
//             style={[styles.actionCard, styles.lostCard]}
//             onPress={() =>
//               navigation.navigate("ReportItem", {
//                 type: "LOST",
//               })
//             }
//           >
//             <View style={styles.iconCircle}>
//               <Text style={styles.actionIcon}>🔎</Text>
//             </View>

//             <Text style={styles.actionTitle}>
//               I Lost Something
//             </Text>

//             <Text style={styles.actionDescription}>
//               Report an item you lost on campus
//             </Text>
//           </Pressable>

//           <Pressable
//             style={[styles.actionCard, styles.foundCard]}
//             onPress={() =>
//               navigation.navigate("ReportItem", {
//                 type: "FOUND",
//               })
//             }
//           >
//             <View style={styles.iconCircle}>
//               <Text style={styles.actionIcon}>📦</Text>
//             </View>

//             <Text style={styles.actionTitle}>
//               I Found Something
//             </Text>

//             <Text style={styles.actionDescription}>
//               Help someone find their item
//             </Text>
//           </Pressable>
//         </View>

//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>
//             Possible Matches
//           </Text>

//           <Pressable
//             onPress={() =>
//               navigation.navigate("PossibleMatches")
//             }
//           >
//             <Text style={styles.seeAll}>See All</Text>
//           </Pressable>
//         </View>

//         <Pressable
//           style={styles.emptyCard}
//           onPress={() =>
//             navigation.navigate("PossibleMatches")
//           }
//         >
//           <Text style={styles.emptyIcon}>🔗</Text>

//           <Text style={styles.emptyTitle}>
//             No possible matches yet
//           </Text>

//           <Text style={styles.emptyText}>
//             When we find a possible match for your lost
//             or found item, it will appear here.
//           </Text>

//           <Text style={styles.matchLink}>
//             View Possible Matches →
//           </Text>
//         </Pressable>

// <<<<<<< HEAD
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>
//             Recent Items
//           </Text>

//           <Pressable
//             onPress={() => navigation.navigate("Search")}
//           >
//             <Text style={styles.seeAll}>View All</Text>
//           </Pressable>
//         </View>

//         <View style={styles.itemCard}>
//           <View style={styles.itemIcon}>
//             <Text style={styles.itemEmoji}>📱</Text>
//           </View>

//           <View style={styles.itemInfo}>
//             <Text style={styles.itemName}>
//               Example Item
//             </Text>

//             <Text style={styles.itemLocation}>
//               📍 Library
//             </Text>

//             <Text style={styles.itemDate}>
//               Recently reported
//             </Text>
//           </View>

//           <View style={styles.foundBadge}>
//             <Text style={styles.foundBadgeText}>
//               FOUND
//             </Text>
//           </View>
//         </View>

//         <View style={styles.infoCard}>
//           <Text style={styles.infoTitle}>
//             💡 How FindBack works
//           </Text>

//           <Text style={styles.infoText}>
//             Report your lost or found item → We find
//             possible matches → Connect securely →
//             Verify ownership → Return the item.
//           </Text>
//         </View>

//         <View style={styles.bottomSpace} />
//       </ScrollView>

// =======
// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//       <Pressable
//         style={styles.chatbotButton}
//         onPress={() => navigation.navigate("Chatbot")}
//       >
// <<<<<<< HEAD
//         <Text style={styles.chatbotIcon}>💬</Text>
// =======
//         <Text style={styles.emptyIcon}>
//           🔗
//         </Text>
// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1

//         <Text style={styles.chatbotText}>
//           Chat
//         </Text>
//       </Pressable>
// <<<<<<< HEAD
//     </View>
// =======

//       {/* =========================
//           RECENT ITEMS
//       ========================= */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>
//           Recent Items
//         </Text>

//         <Pressable
//           onPress={() =>
//             navigation.navigate("Search")
//           }
//         >
//           <Text style={styles.seeAll}>
//             View All
//           </Text>
//         </Pressable>
//       </View>

//       <View style={styles.itemCard}>
//         <View style={styles.itemIcon}>
//           <Text style={styles.itemEmoji}>
//             📱
//           </Text>
//         </View>

//         <View style={styles.itemInfo}>
//           <Text style={styles.itemName}>
//             Example Item
//           </Text>

//           <Text style={styles.itemLocation}>
//             📍 Library
//           </Text>

//           <Text style={styles.itemDate}>
//             Recently reported
//           </Text>
//         </View>

//         <View style={styles.foundBadge}>
//           <Text style={styles.foundBadgeText}>
//             FOUND
//           </Text>
//         </View>
//       </View>

//       {/* =========================
//           HOW FINDBACK WORKS
//       ========================= */}
//       <View style={styles.infoCard}>
//         <Text style={styles.infoTitle}>
//           💡 How FindBack works
//         </Text>

//         <Text style={styles.infoText}>
//           Report your lost or found item → We find
//           possible matches → Connect securely →
//           Verify ownership → Return the item.
//         </Text>
//       </View>

//       <View style={styles.bottomSpace} />
//     </ScrollView>
// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.colors.background,
//   },

//   content: {
//     padding: theme.spacing.lg,
//     paddingBottom: 100,
//   },

// <<<<<<< HEAD
// =======
//   /* =========================
//      HEADER
//   ========================= */

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     marginTop: theme.spacing.md,
//     marginBottom: theme.spacing.lg,
//   },

//   headerText: {
//     flex: 1,
//     paddingRight: theme.spacing.md,
//   },

//   greeting: {
//     fontSize: theme.fontSize.body,
//     color: theme.colors.muted,
//     marginBottom: theme.spacing.xs,
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   subtitle: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     marginTop: theme.spacing.xs,
//   },

//   headerButtons: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },

//   notificationButton: {
//     width: 46,
//     height: 46,
//     borderRadius: theme.radius.full,
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   notificationIcon: {
//     fontSize: 21,
//   },

// <<<<<<< HEAD
// =======
//   logoutButton: {
//     width: 46,
//     height: 46,
//     borderRadius: theme.radius.full,
//     backgroundColor: "#FEE2E2",
//     borderWidth: 1,
//     borderColor: "#FCA5A5",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   logoutText: {
//     fontSize: 22,
//     color: "#DC2626",
//     fontWeight: "700",
//   },

//   /* =========================
//      SEARCH
//   ========================= */

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   searchBox: {
//     height: 54,
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     borderRadius: theme.radius.md,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: theme.spacing.md,
//     marginBottom: theme.spacing.lg,
//   },

//   searchIcon: {
//     fontSize: 18,
//     marginRight: theme.spacing.sm,
//   },

//   searchText: {
//     color: theme.colors.muted,
//     fontSize: theme.fontSize.body,
//   },

// <<<<<<< HEAD
// =======
//   /* =========================
//      MY ITEMS
//   ========================= */

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   myItemsCard: {
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.md,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: theme.spacing.xl,
//   },

//   myItemsIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: theme.radius.md,
//     backgroundColor: theme.colors.primaryLight,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: theme.spacing.md,
//   },

//   myItemsEmoji: {
//     fontSize: 23,
//   },

//   myItemsInfo: {
//     flex: 1,
//   },

//   myItemsTitle: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   myItemsDescription: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     marginTop: 4,
//   },

//   myItemsArrow: {
//     fontSize: 22,
//     color: theme.colors.primary,
//     fontWeight: "600",
//   },

// <<<<<<< HEAD
// =======
//   /* =========================
//      SECTIONS
//   ========================= */

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   sectionTitle: {
//     fontSize: theme.fontSize.subtitle,
//     fontWeight: "700",
//     color: theme.colors.text,
//     marginBottom: theme.spacing.md,
//   },

//   actionRow: {
//     flexDirection: "row",
//     gap: theme.spacing.md,
//     marginBottom: theme.spacing.xl,
//   },

//   actionCard: {
//     flex: 1,
//     minHeight: 180,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.md,
//     borderWidth: 1,
//   },

//   lostCard: {
//     backgroundColor: "#FEF2F2",
//     borderColor: "#FECACA",
//   },

//   foundCard: {
//     backgroundColor: "#F0FDF4",
//     borderColor: "#BBF7D0",
//   },

//   iconCircle: {
//     width: 46,
//     height: 46,
//     borderRadius: theme.radius.full,
//     backgroundColor: theme.colors.surface,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: theme.spacing.md,
//   },

//   actionIcon: {
//     fontSize: 22,
//   },

//   actionTitle: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.text,
//     marginBottom: theme.spacing.sm,
//   },

//   actionDescription: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     lineHeight: 18,
//   },

//   sectionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: theme.spacing.md,
//   },

//   seeAll: {
//     color: theme.colors.primary,
//     fontSize: theme.fontSize.small,
//     fontWeight: "600",
//   },

// <<<<<<< HEAD
// =======
//   /* =========================
//      POSSIBLE MATCHES
//   ========================= */

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   emptyCard: {
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.xl,
//     alignItems: "center",
//     marginBottom: theme.spacing.xl,
//   },

//   emptyIcon: {
//     fontSize: 34,
//     marginBottom: theme.spacing.sm,
//   },

//   emptyTitle: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.text,
//     textAlign: "center",
//   },

//   emptyText: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     textAlign: "center",
//     lineHeight: 18,
//     marginTop: theme.spacing.sm,
//   },

//   matchLink: {
//     marginTop: theme.spacing.md,
//     color: theme.colors.primary,
//     fontSize: theme.fontSize.small,
//     fontWeight: "700",
//   },

// <<<<<<< HEAD
// =======
//   /* =========================
//      RECENT ITEMS
//   ========================= */

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   itemCard: {
//     backgroundColor: theme.colors.surface,
//     borderWidth: 1,
//     borderColor: theme.colors.border,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.md,
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: theme.spacing.xl,
//   },

//   itemIcon: {
//     width: 58,
//     height: 58,
//     borderRadius: theme.radius.md,
//     backgroundColor: theme.colors.primaryLight,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: theme.spacing.md,
//   },

//   itemEmoji: {
//     fontSize: 25,
//   },

//   itemInfo: {
//     flex: 1,
//   },

//   itemName: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.text,
//   },

//   itemLocation: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     marginTop: 4,
//   },

//   itemDate: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.muted,
//     marginTop: 2,
//   },

//   foundBadge: {
//     backgroundColor: "#DCFCE7",
//     paddingHorizontal: theme.spacing.sm,
//     paddingVertical: 6,
//     borderRadius: theme.radius.full,
//   },

//   foundBadgeText: {
//     color: theme.colors.found,
//     fontSize: 10,
//     fontWeight: "700",
//   },

// <<<<<<< HEAD
// =======
//   /* =========================
//      INFO CARD
//   ========================= */

// >>>>>>> f40f8116c278c1106ff7d2164d714adc684210c1
//   infoCard: {
//     backgroundColor: theme.colors.primaryLight,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.lg,
//     borderWidth: 1,
//     borderColor: "#DBEAFE",
//   },

//   infoTitle: {
//     fontSize: theme.fontSize.body,
//     fontWeight: "700",
//     color: theme.colors.primary,
//     marginBottom: theme.spacing.sm,
//   },

//   infoText: {
//     fontSize: theme.fontSize.small,
//     color: theme.colors.textSecondary,
//     lineHeight: 19,
//   },

//   bottomSpace: {
//     height: theme.spacing.xl,
//   },

//   chatbotButton: {
//     position: "absolute",
//     right: 20,
//     bottom: 30,
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     backgroundColor: theme.colors.primary,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 8,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },

//   chatbotIcon: {
//     fontSize: 26,
//   },

//   chatbotText: {
//     color: "#FFFFFF",
//     fontSize: 9,
//     fontWeight: "700",
//     marginTop: 1,
//   },
// });
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

import { theme } from "../constants/theme";

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      Alert.alert(
        "Logout Failed",
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Hello 👋</Text>

            <Text style={styles.title}>FindBack</Text>

            <Text style={styles.subtitle}>
              Find what you lost. Return what you found.
            </Text>
          </View>

          <View style={styles.headerButtons}>
            <Pressable
              style={styles.notificationButton}
              onPress={() => {}}
            >
              <Text style={styles.notificationIcon}>🔔</Text>
            </Pressable>

            <Pressable
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>↪</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          style={styles.searchBox}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchIcon}>🔍</Text>

          <Text style={styles.searchText}>
            Search lost or found items...
          </Text>
        </Pressable>

        <Pressable
          style={styles.myItemsCard}
          onPress={() => navigation.navigate("MyItems")}
        >
          <View style={styles.myItemsIcon}>
            <Text style={styles.myItemsEmoji}>📋</Text>
          </View>

          <View style={styles.myItemsInfo}>
            <Text style={styles.myItemsTitle}>My Items</Text>

            <Text style={styles.myItemsDescription}>
              View your lost and found reports
            </Text>
          </View>

          <Text style={styles.myItemsArrow}>→</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>
          What happened?
        </Text>

        <View style={styles.actionRow}>
          <Pressable
            style={[
              styles.actionCard,
              styles.lostCard,
            ]}
            onPress={() =>
              navigation.navigate("ReportItem", {
                type: "LOST",
              })
            }
          >
            <View style={styles.iconCircle}>
              <Text style={styles.actionIcon}>🔎</Text>
            </View>

            <Text style={styles.actionTitle}>
              I Lost Something
            </Text>

            <Text style={styles.actionDescription}>
              Report an item you lost on campus
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.actionCard,
              styles.foundCard,
            ]}
            onPress={() =>
              navigation.navigate("ReportItem", {
                type: "FOUND",
              })
            }
          >
            <View style={styles.iconCircle}>
              <Text style={styles.actionIcon}>📦</Text>
            </View>

            <Text style={styles.actionTitle}>
              I Found Something
            </Text>

            <Text style={styles.actionDescription}>
              Help someone find their item
            </Text>
          </Pressable>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Possible Matches
          </Text>

          <Pressable
            onPress={() =>
              navigation.navigate("PossibleMatches")
            }
          >
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.emptyCard}
          onPress={() =>
            navigation.navigate("PossibleMatches")
          }
        >
          <Text style={styles.emptyIcon}>🔗</Text>

          <Text style={styles.emptyTitle}>
            No possible matches yet
          </Text>

          <Text style={styles.emptyText}>
            When we find a possible match for your lost
            or found item, it will appear here.
          </Text>

          <Text style={styles.matchLink}>
            View Possible Matches →
          </Text>
        </Pressable>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Items
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.seeAll}>
              View All
            </Text>
          </Pressable>
        </View>

        <View style={styles.itemCard}>
          <View style={styles.itemIcon}>
            <Text style={styles.itemEmoji}>📱</Text>
          </View>

          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>
              Example Item
            </Text>

            <Text style={styles.itemLocation}>
              📍 Library
            </Text>

            <Text style={styles.itemDate}>
              Recently reported
            </Text>
          </View>

          <View style={styles.foundBadge}>
            <Text style={styles.foundBadgeText}>
              FOUND
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💡 How FindBack works
          </Text>

          <Text style={styles.infoText}>
            Report your lost or found item → We find
            possible matches → Connect securely →
            Verify ownership → Return the item.
          </Text>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>

      <Pressable
        style={styles.chatbotButton}
        onPress={() => navigation.navigate("Chatbot")}
      >
        <Text style={styles.chatbotIcon}>💬</Text>

        <Text style={styles.chatbotText}>
          Chat
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    padding: theme.spacing.lg,
    paddingBottom: 100,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },

  headerText: {
    flex: 1,
    paddingRight: theme.spacing.md,
  },

  greeting: {
    fontSize: theme.fontSize.body,
    color: theme.colors.muted,
    marginBottom: theme.spacing.xs,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
  },

  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  notificationButton: {
    width: 46,
    height: 46,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationIcon: {
    fontSize: 21,
  },

  logoutButton: {
    width: 46,
    height: 46,
    borderRadius: theme.radius.full,
    backgroundColor: "#FEE2E2",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    fontSize: 22,
    color: "#DC2626",
    fontWeight: "700",
  },

  searchBox: {
    height: 54,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: theme.spacing.sm,
  },

  searchText: {
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  myItemsCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  myItemsIcon: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  myItemsEmoji: {
    fontSize: 23,
  },

  myItemsInfo: {
    flex: 1,
  },

  myItemsTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  myItemsDescription: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 4,
  },

  myItemsArrow: {
    fontSize: 22,
    color: theme.colors.primary,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: theme.fontSize.subtitle,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },

  actionRow: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },

  actionCard: {
    flex: 1,
    minHeight: 180,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
  },

  lostCard: {
    backgroundColor: "#FEF2F2",
    borderColor: "#FECACA",
  },

  foundCard: {
    backgroundColor: "#F0FDF4",
    borderColor: "#BBF7D0",
  },

  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },

  actionIcon: {
    fontSize: 22,
  },

  actionTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  actionDescription: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    lineHeight: 18,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },

  seeAll: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.small,
    fontWeight: "600",
  },

  emptyCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  emptyIcon: {
    fontSize: 34,
    marginBottom: theme.spacing.sm,
  },

  emptyTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
    textAlign: "center",
  },

  emptyText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    textAlign: "center",
    lineHeight: 18,
    marginTop: theme.spacing.sm,
  },

  matchLink: {
    marginTop: theme.spacing.md,
    color: theme.colors.primary,
    fontSize: theme.fontSize.small,
    fontWeight: "700",
  },

  itemCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  itemIcon: {
    width: 58,
    height: 58,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },

  itemEmoji: {
    fontSize: 25,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.text,
  },

  itemLocation: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 4,
  },

  itemDate: {
    fontSize: theme.fontSize.small,
    color: theme.colors.muted,
    marginTop: 2,
  },

  foundBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: theme.radius.full,
  },

  foundBadgeText: {
    color: theme.colors.found,
    fontSize: 10,
    fontWeight: "700",
  },

  infoCard: {
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: "#DBEAFE",
  },

  infoTitle: {
    fontSize: theme.fontSize.body,
    fontWeight: "700",
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },

  infoText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textSecondary,
    lineHeight: 19,
  },

  bottomSpace: {
    height: theme.spacing.xl,
  },

  chatbotButton: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  chatbotIcon: {
    fontSize: 26,
  },

  chatbotText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
    marginTop: 1,
  },
});