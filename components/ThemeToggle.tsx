import { Pressable, Text, View } from "react-native";
import Animated, {
  LayoutAnimationConfig,
  ZoomInRotate,
} from "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { cn } from "@/lib/cn";

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={`toggle-${colorScheme}`}
        entering={ZoomInRotate}
      >
        <Pressable onPress={toggleColorScheme} className="opacity-80">
          {colorScheme === "dark"
            ? ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Text>Moon</Text>
                </View>
              )
            : ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Text>Sun</Text>
                </View>
              )}
        </Pressable>
      </Animated.View>
    </LayoutAnimationConfig>
  );
}
