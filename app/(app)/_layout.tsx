import { Redirect, Stack } from "expo-router";
import React from "react";
import { useRecoilValueLoadable } from "recoil";

import { userAtom } from "@/store";

export default function ProtectedLayout() {
  const { contents: user, state } = useRecoilValueLoadable(userAtom);

  if (!user) {
    return <Redirect href="/on-board" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={MODAL_OPTIONS} />
    </Stack>
  );
}

const MODAL_OPTIONS = {
  presentation: "modal",
  animation: "fade_from_bottom", // for android
  title: "Notification",
} as const;
