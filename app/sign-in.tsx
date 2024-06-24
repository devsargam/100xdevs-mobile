import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { useSetRecoilState } from "recoil";

import { Button, Container, Text, View } from "@/components";
import { useColorScheme } from "@/hooks/useColorScheme";
import { userAtom } from "@/store";
export default function SignIn() {
  const { colors } = useColorScheme();
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
          color={colors.foreground}
          onPress={handleBack}
        />
      </View>
      <View className="gap-10 p-5">
        <View className="gap-2">
          <View className="flex-row items-center gap-1">
            <Text className="text-2xl font-semibold">Welcome</Text>
            <Text className="text-2xl font-semibold" variant="primary">
              Dev!
            </Text>
            <Entypo name="code" size={20} color={colors.primary} />
          </View>
          <Text variant="secondary">Sign in to explore your account</Text>
        </View>
        <View className="gap-4">
          <View className="gap-1.5">
            <Text size="sm" variant="secondary">
              Enter your email id
            </Text>
            <View variant="secondary" className="rounded px-5 py-2">
              <TextInput
                placeholder="test@example.com"
                className="text-base text-foreground placeholder:text-secondary-foreground"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View className="gap-1.5">
            <Text size="sm" variant="secondary">
              Enter your password
            </Text>
            <View
              variant="secondary"
              className="flex-row items-center rounded px-5 py-2"
            >
              <TextInput
                placeholder="check caps-lock"
                className="flex-1 text-base text-foreground placeholder:text-secondary-foreground"
                secureTextEntry={!visible}
                value={password}
                onChangeText={setPassword}
              />
              <FontAwesome5
                name={visible ? "eye" : "eye-slash"}
                size={14}
                color={colors.secondary}
                onPress={() => {
                  setVisible((prev) => !prev);
                }}
              />
            </View>
          </View>
          <Button
            variant="ghosted"
            className="items-end px-0 py-0 min-h-0"
            onPress={handleForgot}
          >
            <Text size="sm" variant="accent">
              Forgot Password
            </Text>
          </Button>
          <Button onPress={handleSubmit} className="active:bg-primary/70">
            <Text variant="primary-lite">Sign In</Text>
          </Button>
          <View className="flex-row justify-center gap-1">
            <Text variant="secondary">Don't have an account?</Text>
            <Pressable onPress={handleCreateAccount}>
              <Text variant="accent">Create Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Container>
  );
}
