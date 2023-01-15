import { useNavigation } from "@react-navigation/native";
import { Button, Header } from "@rneui/themed";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

// import { createDrawerNavigator } from "@react-navigation/drawer";
import Find from "./Find";

function NavBar({ children }) {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const BUTTONS = [
    { text: "HomePage", onPress: () => navigation.navigate("HomePage") },
    { text: "My activites", onPress: () => navigation.navigate("MyActivs") },
    {
      text: "Find activites",
      onPress: () => navigation.navigate("FindActivs"),
    },
    { text: "Chat", onPress: () => navigation.navigate("Chat") },
    { text: "Settings", onPress: () => navigation.navigate("Settings") },
    { text: "Logout", onPress: () => navigation.navigate("Logout") },
  ];

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          backgroundColor="white"
          style={styles.heaeder}
          rightComponent={
            <View>
              <TouchableOpacity
                style={styles.row}
                onPress={() => toggleExpand()}
              >
                <Icon
                  name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={30}
                  color={"black"}
                />
              </TouchableOpacity>
              <View style={styles.parentHr} />
              {expanded && (
                <View style={styles.child}>
                  {BUTTONS.map((btn) => {
                    return (
                      <Button
                        style={{ marginVertical: 5 }}
                        onPress={btn.onPress}
                      >
                        {btn.text}
                      </Button>
                    );
                  })}
                </View>
              )}
            </View>
          }
        />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {children}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
  },
  child: {
    width: 200,
  },
});

export default NavBar;
