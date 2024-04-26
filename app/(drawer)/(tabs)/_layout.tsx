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
        headerShown: useClientOnlyValue(false, false),
        // title: "Hkirat Bhaiya Image",
        // headerLeft: () => (
        //   <Link href="/(drawer)/" asChild>
        //     <Pressable>
        //       {({ pressed }) => (
        //         <FontAwesome
        //           name="bars"
        //           size={25}
        //           color={Colors[colorScheme ?? "light"].text}
        //           style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
        //         />
        //       )}
        //     </Pressable>
        //   </Link>
        // ),
        // headerRight: () => (
        //   <Link href="/modal" asChild>
        //     <Pressable>
        //       {({ pressed }) => (
        //         <FontAwesome
        //           name="bell"
        //           size={25}
        //           color={Colors[colorScheme ?? "light"].text}
        //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
        //         />
        //       )}
        //     </Pressable>
        //   </Link>
        // ),
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
