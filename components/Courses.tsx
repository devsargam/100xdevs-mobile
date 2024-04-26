import React from "react";
import { ScrollView, Dimensions, StyleSheet } from "react-native";

import Course from "./Course";

const Courses = ({ data }: { data: CoursesResponse[] }) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((course) => {
        return <Course data={course} />;
      })}
    </ScrollView>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
