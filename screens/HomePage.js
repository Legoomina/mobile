import { Header, Icon } from "@rneui/themed";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createDrawerNavigator } from '@react-navigation/drawer';
import Find from "./Find";


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Find" component={Find} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}



function HomePage() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Header
                    rightComponent={
                        <View>
                            <TouchableOpacity
                                style={{ marginLeft: 10 }}
                                // onPress={playgroundNavigate}
                                >
                                <Icon name="menu" onPress={console.log("aaa")} />
                            </TouchableOpacity>
                        </View>
                    }
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Page</Text>
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomePage;