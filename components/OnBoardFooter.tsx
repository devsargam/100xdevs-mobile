import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";

export const OnBoardFooter = ({
  lastPage,
  handleSkip,
}: {
  lastPage: boolean;
  handleSkip: () => void;
}) => {
  return (
    <View className="absolute bottom-0 w-full px-10">
      {!lastPage && (
        <AnimatedBtn
          entering={FadeInLeft.duration(150)}
          exiting={FadeOutLeft.duration(150)}
          className=""
          onPress={handleSkip}
        >
          <Text className="py-2 text-slate-600">Skip</Text>
        </AnimatedBtn>
      )}
      {lastPage && (
        <AnimatedBtn
          entering={FadeInRight.duration(150)}
          exiting={FadeOutRight.duration(150)}
          className="self-end"
          onPress={() => router.replace("/sign-in")}
        >
          <Text className="rounded-3xl bg-[#6C63FF] px-4 py-2 text-slate-100">
            Sign In
          </Text>
        </AnimatedBtn>
      )}
    </View>
  );
};

const AnimatedBtn = Animated.createAnimatedComponent(Pressable);
