import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { secondaryColor } from "@/constants/Colors";
export const PrimaryButton: React.FC<Button> = ({
  children,
  onPress,
  disabled,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={styles.container}>
      {children}
    </Pressable>
  );
};

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
