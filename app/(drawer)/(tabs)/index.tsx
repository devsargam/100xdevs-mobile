import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { getCourses } from "@/api/actions/courseActions";
import Courses from "@/components/Courses";
import { Text, View } from "@/components/Themed";

const API_URL =
  "https://api.oceandrivers.com:443/v1.0/getAemetStation/jfksdjfjfksdjfjkfdjkjfkdfjkfdjskfdjfksjfk/lastdata/";

interface IResponse {
  data: {
    TEMPERATE: number;
    TWD: number;
    PRESSURE: number;
    RAIN_MONTH: number;
    RAIN_DAY: 0;
    RAIN: 0;
    HUMIDITY: number;
  };
}
//TODO: this page will have a button of courses which will render a component on click, on press of his course click he will be redirected to videos
//TODO: then show them courses list
export default function TabOneScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoursesResponse[]>([]);
  // const [loading, data, error] = useHealthHook()
  useEffect(() => {
    getCourses()
      .then((courses) => {
        setData(courses);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setData([]);
      });
  }, [loading]);
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
