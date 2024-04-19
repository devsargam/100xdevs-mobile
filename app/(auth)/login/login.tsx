import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/Buttons";
import { Text, View } from "@/components/Themed";

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
    <SafeAreaView>
      <View className="flex items-center justify-center px-5 w-screen h-screen">
        <View className="w-full my-10">
          <View className="flex flex-row items-center gap-1">
            <FontAwesome name="envelope" size={20} />
            <Text className="text-xl">E-Mail Address</Text>
          </View>
          <TextInput
            className="px-4 py-2 border border-b-slate-300 rounded-md text-black-800"
            value={input}
            placeholder="xyz@abc.com"
            autoCapitalize="none"
            onChangeText={(text) => {
              setInput(text);
            }}
          />
        </View>
        <View className="w-full my-10">
          <View className="flex flex-row items-center gap-1">
            <FontAwesome name="lock" size={20} />
            <Text className="text-xl">Password</Text>
          </View>
          <TextInput
            className="px-4 py-2 border border-b-slate-300 rounded-md text-black-600"
            secureTextEntry
            value={password}
            placeholder="**********"
            autoCapitalize="none"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
        <View className="absolute bottom-20 w-full">
          <Link href="/(tabs)/" asChild>
            <PrimaryButton onPress={() => {}}>
              <Text className="text-white text-center">Login</Text>
            </PrimaryButton>
          </Link>
        </View>
        <View className="absolute bottom-5">
          <Text className="text-lg">
            Don't have an account?{" "}
            <Link href="/(auth)/register/register" asChild>
              <Text className="text-black underline text-lg">Register</Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
