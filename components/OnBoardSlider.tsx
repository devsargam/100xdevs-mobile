import { useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { ONBOARD_DATA } from '@/constants';
import { cn } from '@/lib/cn';
import { View } from './View';

export const OnBoardSlider = ({
  translateX,
}: {
  translateX: SharedValue<number>;
}) => {
  const { height } = useWindowDimensions();

  return (
    <View
      className="absolute left-1/2 -translate-x-1/2 flex-row gap-1"
      style={{ top: height / 2 + 100 }}
    >
      {ONBOARD_DATA.map((_, idx) => (
        <SlidePoiner index={idx} x={translateX} key={idx} />
      ))}
    </View>
  );
};
const SlidePoiner = ({
  index,
  x,
}: {
  index: number;
  x: SharedValue<number>;
}) => {
  const { width } = useWindowDimensions();
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 0.25) * width,
      index * width,
      (index + 0.25) * width,
    ];
    const opacity = withTiming(
      interpolate(x.value, inputRange, [0.35, 1, 0.35], Extrapolation.CLAMP),
      { duration: 150 }
    );
    return {
      opacity,
    };
  });
  return (
    <Animated.View
      key={index}
      style={animatedStyle}
      className={cn('h-2.5 w-2.5 rounded-full bg-primary/60')}
    />
  );
};
