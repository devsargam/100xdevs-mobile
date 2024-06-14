import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Pressable, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { DrawerContent } from "@/components";
import { useColorScheme } from "@/hooks/useColorScheme";
import { cn } from "@/lib/cn";
import { DrawerNavigationOptions } from "@react-navigation/drawer";

export default function drawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={SCREEN_OPTIONS}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="(tabs)"
          options={INDEX_OPTIONS}
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

const INDEX_OPTIONS:DrawerNavigationOptions = {
  title: "100xdevs",
  headerRight: () => <SettingsIcon />,
  drawerLabel: "Home",
  drawerIcon: (props) => <AntDesign name="home" {...props} />,
} as const;

function SettingsIcon() {
  const { colors } = useColorScheme();
  return (
    <Link href="/notification" asChild>
      <Pressable className="mx-4">
        {({ pressed }) => (
          <View className={cn(pressed ? "opacity-50" : "opacity-90")}>
            <Ionicons name="notifications" size={24} color={colors.foreground} />
          </View>
        )}
      </Pressable>
    </Link>
  );
}

