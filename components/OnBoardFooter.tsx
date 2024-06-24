import { router } from "expo-router";
import { Pressable } from "react-native";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";

import { Text } from "./Text";
import { View } from "./View";

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
          <Text variant="secondary" className="py-2">
            Skip
          </Text>
        </AnimatedBtn>
      )}
      {lastPage && (
        <AnimatedBtn
          entering={FadeInRight.duration(150)}
          exiting={FadeOutRight.duration(150)}
          className="self-end bg-primary active:bg-primary/70 rounded-3xl"
          onPress={() => router.replace("/sign-in")}
        >
          <Text variant="primary-lite" className="px-4 py-2">
            Sign In
          </Text>
        </AnimatedBtn>
      )}
    </View>
  );
};

const AnimatedBtn = Animated.createAnimatedComponent(Pressable);
