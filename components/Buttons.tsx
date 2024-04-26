import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { secondaryColor } from "@/constants/Colors";

export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export const PrimaryButton = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ children, onPress, disabled }, ref) => {
    return (
      <Pressable ref={ref} onPress={onPress} disabled={disabled} style={styles.container}>
        {children}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});