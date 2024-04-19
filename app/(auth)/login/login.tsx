import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";
import { PrimaryButton } from "@/components/Buttons";

export default function LoginScreen() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!input.length || !password.length) return;
    // TODO: Fix this stupid mock
    if (Math.random() > 0.5) {
      // TODO: Save this in local storage
    }
  };

  //FIXME: using a mock routing system, make it work with the real one

  return (
    <View style={styles.container}>
      <View style={styles.emailContainer}>
        <View className="flex flex-row items-center gap-1">
          <FontAwesome name="envelope" size={20} />
          <Text className="text-xl">E-Mail Address</Text>
        </View>
        <TextInput
          style={styles.emailInputContainer}
          value={input}
          placeholder="xyz@abc.com"
          autoCapitalize="none"
          onChangeText={(text) => {
            setInput(text);
          }}
        />
      </View>
      <View style={styles.passwordContainer}>
        <View className="flex flex-row items-center gap-1">
          <FontAwesome name="lock" size={20} />
          <Text className="text-xl">Password</Text>
        </View>
        <TextInput
          style={styles.passwordInputContainer}
          secureTextEntry
          value={password}
          placeholder="**********"
          autoCapitalize="none"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.loginButtonContainer}>
        <Link href="/(tabs)/" asChild>
          <PrimaryButton onPress={() => { }}>
            <Text className="text-white text-center">Login</Text>
          </PrimaryButton>
        </Link>
      </View>
      <View style={styles.longTextContainer}>

        <Text style={styles.longText}>Don't have an account?{' '}
          <Link href="/(auth)/register/register" asChild>
            <Text className="text-black underline" style={styles.longText}>Register</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  emailContainer: {
    width: '100%',
    marginVertical: 10
  },
  passwordContainer: {
    width: '100%',
    marginVertical: 10
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%'
  },
  emailInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 2,
    color: "black",
    paddingVertical: 5,
    borderWidth: 0.2,
    borderColor: "black",
  },
  passwordInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 2,
    color: "black",
    paddingVertical: 5,
    borderWidth: 0.2,
    borderColor: "black",
  },
  longTextContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  longText: {
    fontSize: 18,
  }
})