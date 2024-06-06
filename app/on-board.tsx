import {
  OnBoardContent,
  OnBoardFooter,
  OnBoardLogo,
  OnBoardSlider,
} from "@/components";
import { ONBOARD_DATA } from "@/constants";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

export default function OnBoard() {
  const [isLastPage, setLastPage] = useState(false);
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const handleLastScreen = (active: number) => {
    setLastPage(active === ONBOARD_DATA.length - 1);
  };

  useDerivedValue(() => {
    const active = Math.round(translateX.value / width);
    runOnJS(handleLastScreen)(active);
  });

  const handleSkip = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };
  return (
    <Animated.View className="relative flex-1" entering={FadeInDown}>
      <OnBoardLogo />
      <Animated.View entering={FadeIn.delay(500)} className={"relative"}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={scrollHandler}
          scrollEventThrottle={16}>
          {ONBOARD_DATA.map((data, index) => (
            <OnBoardContent
              data={data}
              index={index}
              x={translateX}
              key={index}
            />
          ))}
        </Animated.ScrollView>
        <OnBoardFooter lastPage={isLastPage} handleSkip={handleSkip} />
        <OnBoardSlider translateX={translateX} />
      </Animated.View>
    </Animated.View>
  );
}
