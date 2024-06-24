import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Animated, {
  LayoutAnimationConfig,
  ZoomInRotate,
} from "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { cn } from "@/lib/cn";
import { COLORS } from "@/theme/colors";

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={`toggle-${colorScheme}`}
        entering={ZoomInRotate}
      >
        <Pressable onPress={toggleColorScheme}>
          {colorScheme === "dark"
            ? ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Feather name="sun" size={24} color={COLORS.white} />
                </View>
              )
            : ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Ionicons name="moon" size={24} color={COLORS.white} />
                </View>
              )}
        </Pressable>
      </Animated.View>
    </LayoutAnimationConfig>
  );
}
