import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import { useClientOnlyValue } from "@/hooks/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, false),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="downloads"
        options={{
          tabBarLabel: "Downloads",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="download" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myZone"
        options={{
          tabBarLabel: "My Zone",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="codeLab"
        options={{
          tabBarLabel: "Code Lab",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="codeHelp"
        options={{
          tabBarLabel: "Code Help",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="codepen" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
