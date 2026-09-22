// import { useState } from "react";
// import { isValidKonguEmail } from "../utils/validation";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   ScrollView,
// } from "react-native";

// import AuthHeader from "../components/AuthHeader";
// import AppInput from "../components/AppInput";
// import AppButton from "../components/AppButton";
// import { theme } from "../constants/theme";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//   const cleanEmail = email.trim().toLowerCase();

//   if (!isValidKonguEmail(cleanEmail)) {
//     console.log("Please use your Kongu Engineering College email.");
//     return;
//   }

//   if (!password) {
//     console.log("Please enter your password.");
//     return;
//   }

//   // Firebase login will go here
// };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       <AuthHeader
//         title="Welcome Back"
//         subtitle="Login to find your lost belongings"
//       />

//       <View style={styles.form}>
//         <AppInput
//           label="College Email"
//           placeholder="Enter your college email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />

//         <AppInput
//           label="Password"
//           placeholder="Enter your password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />

//         <Pressable onPress={() => console.log("Forgot password")}>
//           <Text style={styles.forgotPassword}>
//             Forgot Password?
//           </Text>
//         </Pressable>

//         <AppButton
//           title="Login"
//           onPress={handleLogin}
//         />

//         <View style={styles.registerRow}>
//           <Text style={styles.normalText}>
//             Don't have an account?
//           </Text>

//           <Pressable
//             onPress={() => navigation.navigate("Register")}
//           >
//             <Text style={styles.linkText}>
//               Register
//             </Text>
//           </Pressable>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: theme.colors.background,
//     padding: theme.spacing.lg,
//     justifyContent: "center",
//   },

//   form: {
//     width: "100%",
//     maxWidth: 500,
//     alignSelf: "center",
//   },

//   forgotPassword: {
//     color: theme.colors.primary,
//     fontSize: theme.fontSize.small,
//     fontWeight: "600",
//     textAlign: "right",
//     marginBottom: theme.spacing.md,
//   },

//   registerRow: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: theme.spacing.lg,
//     gap: theme.spacing.xs,
//   },

//   normalText: {
//     color: theme.colors.muted,
//     fontSize: theme.fontSize.body,
//   },

//   linkText: {
//     color: theme.colors.primary,
//     fontSize: theme.fontSize.body,
//     fontWeight: "600",
//   },
// });

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";

import AuthHeader from "../components/AuthHeader";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";
import { theme } from "../constants/theme";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Missing Details", "Please enter email and password.");
      return;
    }

    // Temporary login
    navigation.navigate("Home");
  };

  const handleForgotPassword = () => {
    Alert.alert(
      "Forgot Password",
      "Password reset will be connected with Firebase later."
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <AuthHeader
        title="Welcome Back"
        subtitle="Login to find your lost belongings"
      />

      <View style={styles.form}>
        <AppInput
          label="College Email"
          placeholder="Enter your college email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </Pressable>

        <AppButton
          title="Login"
          onPress={handleLogin}
        />

        <View style={styles.registerRow}>
          <Text style={styles.normalText}>
            Don't have an account?
          </Text>

          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkText}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    justifyContent: "center",
  },

  form: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },

  forgotPassword: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.small,
    fontWeight: "600",
    textAlign: "right",
    marginBottom: theme.spacing.md,
  },

  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.lg,
    gap: theme.spacing.xs,
  },

  normalText: {
    color: theme.colors.muted,
    fontSize: theme.fontSize.body,
  },

  linkText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.body,
    fontWeight: "600",
  },
});