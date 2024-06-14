import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

export const OnBoardLogo = () => {
  const dimensions = useWindowDimensions();
  const translateY = useSharedValue(dimensions.height / 2 - 100);
  const fontSize = useSharedValue(45);

  useEffect(() => {
    translateY.value = withTiming(100, { duration: 400 });
    fontSize.value = withTiming(30, { duration: 400 });
  }, []);

  return (
    <Animated.Text
      style={{ fontFamily: 'InterBold', transform: [{ translateY }], fontSize }}
      allowFontScaling={false}
      className="absolute w-full text-center text-primary z-10"
    >
      100xdevs
    </Animated.Text>
  );
};
