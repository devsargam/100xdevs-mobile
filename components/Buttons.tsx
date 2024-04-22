import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { secondaryColor } from "@/constants/Colors";
// Primary Button Coomponent to use the same Button everywhere possible So the UI remains the same
export const PrimaryButton = React.forwardRef<View, { onPress: () => void; children: React.ReactNode }>((props, ref) => {
  const { onPress, children } = props;

  return (
    <Pressable ref={ref} onPress={onPress} style={styles.container}>
      {children}
    </Pressable>
  );
});

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
