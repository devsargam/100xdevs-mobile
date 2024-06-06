import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";

import {
  useColorScheme,
  useInitialAndroidBarSync,
} from "@/hooks/useColorScheme";
import { NAV_THEME } from "@/theme";
import "../global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    InterBold: require("@assets/fonts/Inter-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const loadFont = async () => {
      if (loaded || error) {
        await SplashScreen.hideAsync();
      }
    };
    loadFont();
  }, [loaded, error]);
  if (!loaded && !error) return null;
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <RecoilRoot>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? "light" : "dark"}`}
        style={isDarkColorScheme ? "light" : "dark"}
      />
      <ThemeProvider value={NAV_THEME[colorScheme]}>
        <Slot />
      </ThemeProvider>
    </RecoilRoot>
  );
}
