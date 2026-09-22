


// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import HomeScreen from "./screens/HomeScreen";
// import ReportItemScreen from "./screens/ReportItemScreen";
// import SearchScreen from "./screens/SearchScreen";
// import ItemDetailsScreen from "./screens/ItemDetailsScreen";
// import MyItemsScreen from "./screens/MyItemsScreen";
// import PossibleMatchesScreen from "./screens/PossibleMatchesScreen";
// <<<<<<< HEAD
// import ChatbotScreen from "./screens/ChatbotScreen";
// =======
// import NotificationsScreen from "./screens/NotificationsScreen";
// >>>>>>> 6718ed9e20ce99b2decccdf6d064e3f66c393e4d

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Login"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen
// name="ReportItem"
//   component={ReportItemScreen}
// />
//         <Stack.Screen
//   name="Search"
//   component={SearchScreen}
// />
// <Stack.Screen
//   name="ItemDetails"
//   component={ItemDetailsScreen}
// />
// <Stack.Screen
//   name="MyItems"
//   component={MyItemsScreen}
// />
// <Stack.Screen
//   name="PossibleMatches"
//   component={PossibleMatchesScreen}
// />
// <Stack.Screen
// <<<<<<< HEAD
//   name="Chatbot"
//   component={ChatbotScreen}
// =======
//   name="Notifications"
//   component={NotificationsScreen}
// >>>>>>> 6718ed9e20ce99b2decccdf6d064e3f66c393e4d
// />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ReportItemScreen from "./screens/ReportItemScreen";
import SearchScreen from "./screens/SearchScreen";
import ItemDetailsScreen from "./screens/ItemDetailsScreen";
import MyItemsScreen from "./screens/MyItemsScreen";
import PossibleMatchesScreen from "./screens/PossibleMatchesScreen";
import ChatbotScreen from "./screens/ChatbotScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="ReportItem"
          component={ReportItemScreen}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />

        <Stack.Screen
          name="ItemDetails"
          component={ItemDetailsScreen}
        />

        <Stack.Screen
          name="MyItems"
          component={MyItemsScreen}
        />

        <Stack.Screen
          name="PossibleMatches"
          component={PossibleMatchesScreen}
        />

        <Stack.Screen
          name="Chatbot"
          component={ChatbotScreen}
        />

        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}