import { router } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { PrimaryButton } from "./Buttons";

const Course = ({ data }: { data: CoursesResponse }) => {
  const handleViewCoursePressed = () => {
    router.navigate({
      pathname: "/(drawer)/trailer",
      params: {
        title: data?.title,
        subtitle: data?.description,
        description: data?.description,
        vedioUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        syllabusdescription: data?.description,
        foundation: ["Nodejs", "React", "Recoil", "Nextjs", "Backend"],
        price: 5999,
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
