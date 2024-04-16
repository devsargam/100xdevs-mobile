import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register/register" options={{ headerShown: false }} />
      <Stack.Screen name="login/login" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
