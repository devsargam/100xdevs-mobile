import { secondaryColor } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const PrimaryButton: React.FC<Button> = ({ children, onPress }) => {
    return <Pressable onPress={onPress} style={styles.container}>
        {children}
    </Pressable>
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
    }
})