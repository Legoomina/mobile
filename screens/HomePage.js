import { Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Text,
  Touchable,
  Pressable,
} from "react-native";
import { events } from "../data/mock";
import UserContext, { UserProvider } from "../data/UserContext";
import NavBar from "./NavBar";
import { faker } from "@faker-js/faker";

export default HomePage = () => {
  const user = useContext(UserContext);
  const navigation = useNavigation();

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  console.log(events);

  return (
    <NavBar>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hi, Welcome back</Text>
        <Text style={styles.underHeadlineText}>Your recent tasks:</Text>

        <FlatList
          data={events.slice(0, 3)}
          style={{ flexGrow: 0 }}
          renderItem={({ item }) => {
            return (
              <View styles={styles.chart}>
                <Pressable
                  style={({ pressed }) => [
                    styles.chart,
                    pressed ? styles.chart : { backgroundColor: "white" },
                  ]}
                >
                  <Text style={{ fontSize: 25 }}>{item.name}</Text>
                  <Text style={{ fontSize: 18 }}>{faker.name.jobArea()}</Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>From</Text>
                  <Text style={{ fontSize: 18 }}>
                    {formatDate(faker.date.recent())}
                  </Text>

                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>To</Text>
                  <Text style={{ fontSize: 18 }}>
                    {formatDate(faker.date.future())}
                  </Text>
                </Pressable>
              </View>
            );
          }}
        />

        <Button
          title={"Show more"}
          style={styles.notRegisteredLink}
          onPress={() => navigation.navigate("MyActivs")}
          style={styles.inputBtn}
        />
      </View>
    </NavBar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    // justifyContent: "center",
  },
  welcomeText: {
    fontSize: 30,
  },
  underHeadlineText: {
    fontSize: 25,
  },
  chart: {
    flex: 1,
    height: 160,
    marginLeft: 15,
    marginBottom: 10,
    width: "90%",
    // borderWidth: 1,
    margin: 3,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#cfcecc",
    borderRadius: 5,
    elevation: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
});
