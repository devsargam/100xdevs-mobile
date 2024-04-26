import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function drawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />

        {/* FIXME: Probably name me Review? and push me second bottom in the list? */}
        <Drawer.Screen
          name="testimonials"
          options={{
            drawerLabel: "Write Testimonials",
            title: "testimonials",
          }}
        />
        {/* FIXME: Probably name me My Courses */}
        <Drawer.Screen
          name="billing"
          options={{
            drawerLabel: "My Billing",
            title: "billing",
          }}
        />
        {/* FIXME: A better Name */}
        <Drawer.Screen
          name="helpChat"
          options={{
            drawerLabel: "Help Chat",
            title: "Contact",
          }}
        />
        {/* FIXME: I should be renamed to profile i guess */}
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "settings",
          }}
        />
        {/* FIXME: I dont seem to have real value in app */}
        <Drawer.Screen
          name="rate"
          options={{
            drawerLabel: "Rate",
            title: "rate",
          }}
        />
        {/* FIXME: I dont seem to have real value in app, as app is for course enabled students only */}
        <Drawer.Screen
          name="share"
          options={{
            drawerLabel: "Share",
            title: "share",
          }}
        />
        <Drawer.Screen
          name="logout"
          options={{
            drawerLabel: "Logout",
            title: "logout",
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
