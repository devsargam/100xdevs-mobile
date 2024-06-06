import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRecoilValueLoadable } from "recoil";

import { DrawerContent, ThemeToggle } from "@/components";
import { useColorScheme } from "@/hooks/useColorScheme";
import { cn } from "@/lib/cn";
import { userAtom } from "@/store";

export default function drawerLayout() {
  const { contents: user, state } = useRecoilValueLoadable(userAtom);

  if (!user) {
    return <Redirect href="/on-board" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={SCREEN_OPTIONS}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            drawerIcon: (props) => <AntDesign name="home" {...props} />,
          }}
        />
        <Drawer.Screen
          name="invoices"
          options={{
            drawerLabel: "Invoice",
            drawerIcon: (props) => <MaterialIcons name="payment" {...props} />,
          }}
        />
        <Drawer.Screen
          name="feedback"
          options={{
            drawerLabel: "Feedback",
            drawerIcon: (props) => <MaterialIcons name="feedback" {...props} />,
          }}
        />
        <Drawer.Screen
          name="help"
          options={{
            drawerLabel: "Help",
            drawerIcon: (props) => (
              <MaterialIcons name="support-agent" {...props} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            drawerIcon: (props) => (
              <Ionicons name="settings-outline" {...props} />
            ),
          }}
        />
        <Drawer.Screen
          name="notification"
          options={{ drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="trailer"
          options={{
            headerTitle: "Trailer",
            headerTitleAlign: "center",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
const SCREEN_OPTIONS = {} as const;

const INDEX_OPTIONS = {
  headerLargeTitle: true,
  title: "NativeWindUI",
  headerRight: () => <SettingsIcon />,
} as const;

function SettingsIcon() {
  const { colors } = useColorScheme();
  return (
    <Link href="/modal" asChild>
      <Pressable className="opacity-80">
        {({ pressed }) => (
          <View className={cn(pressed ? "opacity-50" : "opacity-90")}>
            <Text>Hello</Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

const MODAL_OPTIONS = {
  presentation: "modal",
  animation: "fade_from_bottom", // for android
  title: "Settings",
  headerRight: () => <ThemeToggle />,
} as const;
