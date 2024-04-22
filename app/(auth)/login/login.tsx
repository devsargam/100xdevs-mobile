import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { login } from "@/api/actions/loginActions";
import { PrimaryButton } from "@/components/Buttons";
import { Text, View } from "@/components/Themed";

export default function LoginScreen() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
      <View className="flex  justify-center px-[20px] w-screen h-screen">
        <View className="absolute top-10 m-4 items-center  w-full">
          <Image
            source={require("@/assets/images/harkirat.jpeg")}
            className="object-contain h-200 w-200"
          />
          <Text className="text-2xl font-bold">100xdevs</Text>
        </View>
        <View className="w-full my-4">
          {/* <View className="flex flex-row items-center gap-1"> */}
          <Text className="text-xl">email</Text>
          {/* </View> */}
          <View className=" flex-row px-4 align-middle border border-b-slate-800 rounded-md text-black-800">
            <FontAwesome name="envelope" size={20} className="" />
            <TextInput
              className="py-4 ml-4 w-85"
              value={input}
              placeholder="xyz@abc.com"
              autoCapitalize="none"
              onChangeText={(text) => {
                setInput(text);
              }}
            />
          </View>
        </View>
        <View className="w-full my-4">
          <View className="flex flex-row items-center gap-1">
            <Text className="text-xl">password</Text>
          </View>
          <View className=" flex-row px-4 align-middle justify-between border border-b-slate-800 rounded-md text-black-800">
            <FontAwesome name="lock" size={20} className="self-center" />
            <TextInput
              className="py-4 ml-4 w-85"
              secureTextEntry={!showPassword}
              value={password}
              placeholder="**********"
              autoCapitalize="none"
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              {showPassword ? (
                <Ionicons name="eye-off" size={24} color="black" />
              ) : (
                <Ionicons name="eye" size={24} color="black" />
              )}
            </Pressable>
          </View>
        </View>
        <View className="absolute bottom-20 self-center w-full">
          <PrimaryButton
            disabled={input.length < 6 || password.length < 5}
            onPress={handleLogin}
          >
            <Text className="text-white text-center">Login</Text>
          </PrimaryButton>
        </View>
        <View className="absolute bottom-5 w-full self-center items-center">
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
