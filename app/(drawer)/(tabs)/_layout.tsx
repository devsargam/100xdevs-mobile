import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import Colors from "@/constants/Colors";
import { useClientOnlyValue } from "@/hooks/useClientOnlyValue";
import { useColorScheme } from "@/hooks/useColorScheme";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24
        },

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerTitle: "All Courses",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="downloads"
        options={{
          tabBarLabel: "Downloads",
          headerTitle: "Downloads",

          tabBarIcon: ({ color }) => (
            <TabBarIcon name="download" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myZone"
        options={{
          tabBarLabel: "My Zone",
          headerTitle: "My Zone",

          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="codeLab"
        options={{
          tabBarLabel: "Code Lab",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTitle: "Code Lab",
          headerTitleAlign: "center"
        }}
      />
      <Tabs.Screen
        name="codeHelp"
        options={{
          tabBarLabel: "Code Help",
          headerTitle: "Help",

          tabBarIcon: ({ color }) => (
            <TabBarIcon name="codepen" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
