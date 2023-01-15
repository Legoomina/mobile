import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export const Header = ({ navigation, title }) => {
    const openMenu = () => {
      navigation.openDrawer();
    };
  
    return (
      <View >
        <TouchableOpacity onPress={openMenu}>
          <Ionicons name="md-menu" size={28} color="white" />
        </TouchableOpacity>
        <View >
          <Text >{title}Title for header</Text>
        </View>
      </View>
    );
  };