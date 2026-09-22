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

// export default function RegisterScreen({ navigation }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleRegister = () => {
//   const cleanEmail = email.trim().toLowerCase();

//   if (!isValidKonguEmail(cleanEmail)) {
//     console.log("Please use your Kongu Engineering College email.");
//     return;
//   }

//   if (password !== confirmPassword) {
//     console.log("Passwords do not match.");
//     return;
//   }

//   if (password.length < 6) {
//     console.log("Password must be at least 6 characters.");
//     return;
//   }

//   console.log("Valid Kongu email:", cleanEmail);

//   // Firebase registration will go here
// };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       <AuthHeader
//         title="Create Account"
//         subtitle="Join your campus Lost & Found"
//       />

//       <View style={styles.form}>
//         <AppInput
//           label="Full Name"
//           placeholder="Enter your full name"
//           value={name}
//           onChangeText={setName}
//           autoCapitalize="words"
//         />

//         <AppInput
//           label="College Email"
//           placeholder="Enter your college email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />

//         <AppInput
//           label="Password"
//           placeholder="Create a password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />

//         <AppInput
//           label="Confirm Password"
//           placeholder="Confirm your password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           secureTextEntry
//         />

//         <AppButton
//           title="Create Account"
//           onPress={handleRegister}
//         />

//         <View style={styles.loginRow}>
//           <Text style={styles.normalText}>
//             Already have an account?
//           </Text>

//           <Pressable
//             onPress={() => navigation.navigate("Login")}
//           >
//             <Text style={styles.linkText}>
//               Login
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

//   loginRow: {
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

import { registerUser } from "../services/auth";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    // Check fields
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert(
        "Missing Details",
        "Please fill in all fields."
      );
      return;
    }

    // Check passwords
    if (password !== confirmPassword) {
      Alert.alert(
        "Passwords Do Not Match",
        "Please enter the same password in both fields."
      );
      return;
    }

    // Check password length
    if (password.length < 6) {
      Alert.alert(
        "Password Too Short",
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      console.log("Starting Firebase registration...");
      console.log("Email:", email);

      // Firebase registration
      const user = await registerUser(email, password);

      console.log(
        "Firebase account created:",
        user.email
      );

      Alert.alert(
        "Account Created!",
        "A verification email has been sent to your Kongu email. Please verify your email before logging in.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    } catch (error) {
      console.log("Firebase registration error:", error);

      Alert.alert(
        "Registration Failed",
        error.message
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <AuthHeader
        title="Create Account"
        subtitle="Join your campus Lost & Found"
      />

      <View style={styles.form}>
        <AppInput
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <AppInput
          label="College Email"
          placeholder="Enter your @kongu.edu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <AppInput
          label="Password"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <AppInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <AppButton
          title="Create Account"
          onPress={handleRegister}
        />

        <View style={styles.loginRow}>
          <Text style={styles.normalText}>
            Already have an account?
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.linkText}>
              Login
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

  loginRow: {
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