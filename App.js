import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./components/LoginScreen";
import NavBar from "./screens/NavBar";
import HomePage from "./screens/HomePage";
import Settings from "./screens/Settings";
import Logout from "./screens/Logout";
import Chat from "./screens/Chat";
import FindActivs from "./screens/FindActivs";
import MyActivs from "./screens/MyActivs";
import UserContext from "./data/UserContext";
import { useState } from "react";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState({
    email: "Antananarywa.adsa@gmail.com",
    id: 121,
    isLoggedIn: true,
    accessToken: "Asdasdasdasda",
    refreshToken: "Awdawdawdadad",
    firstName: "Mateusz",
    lastName: "Jam",
    isStudent: true,
    isTeacher: true,
    isUserLoaded: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: "Please log in!",
              headerBackVisible: false,
            }}
          />

          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{
              title: null,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: null,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Logout"
            component={Logout}
            options={{
              title: null,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              title: null,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="FindActivs"
            component={FindActivs}
            options={{
              title: null,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="MyActivs"
            component={MyActivs}
            options={{
              title: null,
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
