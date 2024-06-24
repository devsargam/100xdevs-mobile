import { useWindowDimensions } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Text } from "./Text";
import { View } from "./View";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ScreenData } from "@/types/constant";
interface OnBoardContentProps {
  x: SharedValue<number>;
  index: number;
  data: ScreenData;
}

export const OnBoardContent: React.FC<OnBoardContentProps> = ({
  data,
  index,
  x,
}) => {
  const { width, height } = useWindowDimensions();
  const { colorScheme } = useColorScheme();
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 0.25) * width,
      index * width,
      (index + 0.25) * width,
    ];
    const scale = interpolate(
      x.value,
      inputRange,
      [0.85, 1, 0.85],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ scale }],
    };
  });
  return (
    <View
      variant="body"
      className="flex-1 items-center justify-center gap-20"
      key={index}
      style={{ width, height }}
    >
      <Animated.Image
        source={colorScheme === "dark" ? data["source-dark"] : data.source}
        style={animatedStyle}
      />
      <Animated.View className="items-center gap-2 px-10" style={animatedStyle}>
        <Text size="lg" className="font-semibold">
          {data.title}
        </Text>
        <Text variant="secondary" className="px-10 text-center">
          {data.description}
        </Text>
      </Animated.View>
    </View>
  );
};
