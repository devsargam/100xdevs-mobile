import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Courses from "@/components/Courses";
import { useCoursesHook } from "@/hooks/useCoursesHook";
export default function TabOneScreen() {
  const [loading, data, error] = useCoursesHook();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Courses data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
