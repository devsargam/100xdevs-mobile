import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function drawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="testimonials"
          options={{
            drawerLabel: "Write Testimonials",
            title: "testimonials",
          }}
        />
        <Drawer.Screen
          name="billing"
          options={{
            drawerLabel: "My Billing",
            title: "billing",
          }}
        />
        <Drawer.Screen
          name="helpChat"
          options={{
            drawerLabel: "Help Chat",
            title: "Contact",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "settings",
          }}
        />
        <Drawer.Screen
          name="rate"
          options={{
            drawerLabel: "Rate",
            title: "rate",
          }}
        />
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
      </Drawer>
    </GestureHandlerRootView>
  );
}
