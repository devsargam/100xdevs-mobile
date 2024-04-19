import { Text, View } from "@/components/Themed";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function RegisterScreen() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  //TODO: have a top back nav button, have 5 fields name , phone number, email password, state and and agreement to terms and conditon and button to  register
  return (

    <View style={styles.container}>
      <View style={styles.inputTitleContainer}>
        <MaterialIcons name="person" size={24} color="black" />
        <Text style={styles.inputTitle}>Name</Text>
      </View>
      <TextInput
        style={styles.inputContainer}
        value={name}
        placeholder="Walter White"
        autoCapitalize="words"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <View style={styles.inputTitleContainer}>
        <Entypo name="phone" size={24} color="black" />
        <Text style={styles.inputTitle}>Phone Number</Text>
      </View>
      <TextInput
        style={styles.inputContainer}
        value={phoneNumber}
        placeholder="+91 9876543210"
        autoCapitalize="words"
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
      />
      <View style={styles.inputTitleContainer}>
        <MaterialIcons name="email" size={24} color="black" />
        <Text style={styles.inputTitle}>Email</Text>
      </View>
      <TextInput
        style={styles.inputContainer}
        value={email}
        placeholder="+91 9876543210"
        autoCapitalize="words"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <View style={styles.inputTitleContainer}>
        <MaterialIcons name="password" size={24} color="black" />
        <Text style={styles.inputTitle}>Password</Text>
      </View>
      <TextInput
        style={styles.inputContainer}
        value={password}
        placeholder="**********"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <View style={styles.inputTitleContainer}>
        <Entypo name="location" size={24} color="black" />
        <Text style={styles.inputTitle}>State</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 20
  },
  inputTitleContainer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  inputTitle: {
    color: "black",
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 8
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 2,
    color: "black",
    paddingVertical: 5,
    borderWidth: 0.2,
    borderColor: "black",
  },
})