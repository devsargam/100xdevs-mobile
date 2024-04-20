import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "@/api/actions/loginActions";
import { PrimaryButton } from "@/components/Buttons";
import { Text, View } from "@/components/Themed";

export default function LoginScreen() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = () => {
    setLoading(true);
    login(input, password)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {}, [loading]);

  //FIXME: using a mock routing system, make it work with the real one
  if (loading) {
    return (
      <SafeAreaView>
        <View className="flex items-center justify-center px-5 w-screen h-screen">
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center px-5 w-screen h-screen">
        <View className="w-full my-4">
          <View className="flex flex-row items-center gap-1">
            <FontAwesome name="envelope" size={20} />
            <Text className="text-xl">E-Mail Address</Text>
          </View>
          <TextInput
            className="px-4 py-2 border border-b-slate-800 rounded-md text-black-800"
            value={input}
            placeholder="xyz@abc.com"
            autoCapitalize="none"
            onChangeText={(text) => {
              setInput(text);
            }}
          />
        </View>
        <View className="w-full my-4">
          <View className="flex flex-row items-center gap-1">
            <FontAwesome name="lock" size={20} />
            <Text className="text-xl">Password</Text>
          </View>
          <TextInput
            className="px-4 py-2 border border-b-slate-800 rounded-md text-black-600"
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
          <PrimaryButton
            disabled={input.length < 6 || password.length < 5}
            onPress={handleLogin}
          >
            <Text className="text-white text-center">Login</Text>
          </PrimaryButton>
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
