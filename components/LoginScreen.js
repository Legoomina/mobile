import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { Button } from "@react-native-material/core";
import ToggleSwitch from "toggle-switch-react-native";
import { TextInput } from "@react-native-material/core";
import { Text } from "@rneui/themed";
import { addUser } from "../data/API";

function LoginScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const handleGmailOAuthLogin = () => {
    // Linking.openURL('http://192.168.50.155:3001/api/auth/login/google');
    navigation.navigate("HomePage");
  };

  const handleGmailOAuthRegister = () => {
    // Linking.openURL('http://192.168.50.155:3001/api/auth/login/google');
  };

  const handleRegister = () => {
    navigation.navigate("HomePage");
    return;
    addUser(
      {
        email: "jamr.mat@@gmail.com",
        password: "password",
      },
      {}
    );
  };

  const handleLogin = () => {
    navigation.navigate("HomePage");
    return;
    addUser({
      email: email,
      password: password,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>

      <TextInput variant="outlined" style={styles.input} />

      <Text style={styles.label}>Password:</Text>

      <TextInput
        variant="outlined"
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        title={`Register or Login`}
        style={styles.notRegisteredLink}
        onPress={handleRegister}
        style={styles.inputBtn}
      />

      <Button
        title="OAuth2 Login"
        onPress={handleGmailOAuthLogin}
        style={styles.inputBtn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 30,
    backgroundColor: "pink",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    width: "70%",
    marginVertical: 30,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    // justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
    marginVertical: 9,
  },
  inputBtn: {
    width: "70%",
    marginVertical: 11,
    elevation: 5,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  label: {
    textAlign: "left",
    fontSize: 25,
  },
});

export default LoginScreen;

{
  /* <GoogleSignInButton
                style={{width: 192, height: 48}}
                // size={GoogleSigninButton.Size.Wide}
                // color={GoogleSigninButton.Color.Dark}
                // onPress={this._signIn}
                onPress={() => console.log("aa")} */
}
