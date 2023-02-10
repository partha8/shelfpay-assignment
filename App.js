import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ContactsScreen from "./screens/ContactsScreen";
import { StateProvider } from "./context/StateProvider";
import NewGroup from "./screens/NewGroup";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Groups" }}
          />
          <Stack.Screen
            name="Contacts"
            component={ContactsScreen}
            options={{ title: "Add Participants" }}
          />
          <Stack.Screen name="New Group" component={NewGroup} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}
