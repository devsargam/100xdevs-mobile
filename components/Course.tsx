import { router } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { PrimaryButton } from "./Buttons";

const Course = ({ data }: { data: CoursesResponse }) => {
  const handleViewCoursePressed = () => {
    router.navigate({
      pathname: "/(drawer)/trailer",
      params: {
        courseID: data.id,
      },
    });
  };
  return (
    <View
      className="w-screen items-center mb-4"
      key={data?.appxCourseId}
      style={{
        paddingBottom: 20,
      }}
    >
      <Image
        // source={{ uri: data?.imageUrl }}
        source={require("@/assets/images/default_thumbnail.jpeg")}
        style={styles.thumbnail}
      />
      <Text>{data?.title}</Text>
      <Text>{data?.description}</Text>
      <PrimaryButton disabled={false} onPress={handleViewCoursePressed}>
        <Text style={styles.buttonText}>View Contents</Text>
      </PrimaryButton>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
