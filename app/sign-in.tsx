import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useSetRecoilState } from "recoil";
import { Container } from "@/components";
import { userAtom } from "@/store";
export default function SignIn() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userAtom);
  const handleForgot = () => {
    console.warn("HAHA you forgot!");
  };

  const handleBack = () => {
    router.replace("/on-board");
  };

  const handleSubmit = () => {
    if (email.length !== 0 && password.length !== 0) {
      setUser(true);
      router.replace("/");
    }
  };
  const handleCreateAccount = () => {
    console.warn("Not creating now");
  };

  return (
    <Container>
      <View className="py-5">
        <Ionicons
          name="arrow-back"
          size={24}
          color="rgb(30 41 59)"
          onPress={handleBack}
        />
      </View>
      <View className="gap-10 p-5">
        <View className="gap-2">
          <View className="flex-row items-center gap-1">
            <Text className="text-2xl font-semibold text-slate-700">
              Welcome
            </Text>
            <Text className="text-2xl font-semibold text-[#4F46E5]">Dev!</Text>
            <Entypo name="code" size={20} color="#4F46E5" />
          </View>
          <Text className="text-slate-600">
            Sign in to explore your account
          </Text>
        </View>
        <View className="gap-4">
          <View className="gap-1.5">
            <Text className="text-sm">Enter your email id</Text>
            <View className="rounded bg-neutral-100 px-5 py-2">
              <TextInput
                placeholder="test@example.com"
                className="text-base"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View className="gap-1.5">
            <Text className="text-sm">Enter your password</Text>
            <View className="flex-row items-center rounded bg-neutral-100 px-5 py-2">
              <TextInput
                placeholder="check caps-lock"
                className="flex-1 text-base"
                secureTextEntry={!visible}
                value={password}
                onChangeText={setPassword}
              />
              <FontAwesome5
                name={visible ? "eye" : "eye-slash"}
                size={14}
                color="#545454"
                onPress={() => {
                  setVisible((prev) => !prev);
                }}
              />
            </View>
          </View>
          <Pressable onPress={handleForgot}>
            <Text className="text-right text-sm text-blue-600">
              Forgot Password
            </Text>
          </Pressable>
          <Pressable
            className="rounded-lg bg-blue-600 p-4"
            onPress={handleSubmit}>
            <Text className="text-center text-slate-50">Sign In</Text>
          </Pressable>
          <View className="flex-row justify-center gap-1">
            <Text className="text-slate-600">Don't have an account?</Text>
            <Pressable onPress={handleCreateAccount}>
              <Text className="text-blue-600">Create Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Container>
  );
}
