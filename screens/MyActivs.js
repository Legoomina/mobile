import { Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Text,
  Touchable,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { events } from "../data/mock";
import UserContext, { UserProvider } from "../data/UserContext";
import NavBar from "./NavBar";
import { faker } from "@faker-js/faker";
import { Agenda, Card } from "react-native-calendars";

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

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

function MyActivs() {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = "2023-01-15";

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Card>
          <Card.Content>
            <View>
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2023-01-15"}
        refreshControl={null}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
      />
    </View>
  );
}

export default MyActivs;

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
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});
