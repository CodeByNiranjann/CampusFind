

// import { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   ScrollView,
//   Alert,
// } from "react-native";

// import AuthHeader from "../components/AuthHeader";
// import AppInput from "../components/AppInput";
// import AppButton from "../components/AppButton";
// import { theme } from "../constants/theme";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (!email || !password) {
//       Alert.alert("Missing Details", "Please enter email and password.");
//       return;
//     }

//     // Temporary login
//     navigation.navigate("Home");
//   };

//   const handleForgotPassword = () => {
//     Alert.alert(
//       "Forgot Password",
//       "Password reset will be connected with Firebase later."
//     );
//   };

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

//         <Pressable onPress={handleForgotPassword}>
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

//           <Pressable onPress={() => navigation.navigate("Register")}>
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

// import { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   ScrollView,
//   Alert,
// } from "react-native";

// import AuthHeader from "../components/AuthHeader";
// import AppInput from "../components/AppInput";
// import AppButton from "../components/AppButton";
// import { theme } from "../constants/theme";
// import { loginUser, resetPassword } from "../services/auth";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//   if (!email || !password) {
//     Alert.alert(
//       "Missing Details",
//       "Please enter email and password."
//     );
//     return;
//   }

//   try {
//     console.log("Starting login...");
//     console.log("Email:", email);

//     const user = await loginUser(email, password);

//     console.log("Login successful:", user.email);

//     navigation.replace("Home");
//   } catch (error) {
//     console.log("Login error:", error);

//     Alert.alert(
//       "Login Failed",
//       error.message || "Unable to login."
//     );
//   }
// };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       Alert.alert(
//         "Enter Email",
//         "Please enter your Kongu email first."
//       );
//       return;
//     }

//     try {
//       await resetPassword(email);

//       Alert.alert(
//         "Password Reset",
//         "A password reset email has been sent to your Kongu email."
//       );
//     } catch (error) {
//       console.log("Password reset error:", error);

//       Alert.alert(
//         "Reset Failed",
//         error.message || "Unable to send password reset email."
//       );
//     }
//   };

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

//         <Pressable onPress={handleForgotPassword}>
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
import { loginUser, resetPassword } from "../services/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async () => {
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");

    // Check empty fields
    if (!email.trim() || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    try {
      console.log("Starting login...");
      console.log("Email:", email);

      // Firebase login
      const user = await loginUser(email, password);

      console.log("Login successful:", user.email);

      setSuccessMessage("Login successful!");

      // Go to Home only after successful Firebase login
      navigation.replace("Home");
    } catch (error) {
      console.log("Login error:", error);

      setErrorMessage(
        error.message || "Unable to login. Please try again."
      );
    }
  };

  const handleForgotPassword = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!email.trim()) {
      setErrorMessage(
        "Please enter your Kongu email first."
      );
      return;
    }

    try {
      console.log("Sending password reset email...");

      await resetPassword(email);

      setSuccessMessage(
        "Password reset email sent. Please check your Kongu email."
      );
    } catch (error) {
      console.log("Password reset error:", error);

      setErrorMessage(
        error.message || "Unable to send password reset email."
      );
    }
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
        {/* Email */}
        <AppInput
          label="College Email"
          placeholder="Enter your college email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrorMessage("");
            setSuccessMessage("");
          }}
          keyboardType="email-address"
        />

        {/* Password */}
        <AppInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrorMessage("");
            setSuccessMessage("");
          }}
          secureTextEntry
        />

        {/* Forgot Password */}
        <Pressable onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </Pressable>

        {/* Error Message */}
        {errorMessage ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>
              {errorMessage}
            </Text>
          </View>
        ) : null}

        {/* Success Message */}
        {successMessage ? (
          <View style={styles.successBox}>
            <Text style={styles.successText}>
              {successMessage}
            </Text>
          </View>
        ) : null}

        {/* Login Button */}
        <AppButton
          title="Login"
          onPress={handleLogin}
        />

        {/* Register */}
        <View style={styles.registerRow}>
          <Text style={styles.normalText}>
            Don't have an account?
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Register")}
          >
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

  errorBox: {
    backgroundColor: "#FEE2E2",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },

  errorText: {
    color: "#B91C1C",
    fontSize: theme.fontSize.small,
    fontWeight: "600",
    textAlign: "center",
  },

  successBox: {
    backgroundColor: "#DCFCE7",
    borderWidth: 1,
    borderColor: "#86EFAC",
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },

  successText: {
    color: "#166534",
    fontSize: theme.fontSize.small,
    fontWeight: "600",
    textAlign: "center",
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