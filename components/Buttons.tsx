import React from "react";
import { Pressable, View } from "react-native";

// Primary Button Coomponent to use the same Button everywhere possible So the UI remains the same
export const PrimaryButton = React.forwardRef<
  View,
  { onPress: () => void; children: React.ReactNode; disabled?: boolean }
>((props, ref) => {
  const { onPress, children, disabled } = props;

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className="bg-secondaryColor w-full py-10 px-10 rounded-lg flex items-center justify-center"
      disabled={disabled}
    >
      {children}
    </Pressable>
  );
});
