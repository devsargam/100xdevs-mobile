import { useLocalSearchParams } from "expo-router";
import React, { FC } from "react";
import { View, Text } from "react-native";

import Video from "@/components/videoplayer/video";

const trailer: FC<TrailerProps> = () => {
  const params = useLocalSearchParams();
  const {
    description,
    subtitle,
    syllabusdescription,
    foundation,
    price,
    title,
    vedioUrl,
  } = params;
  console.log(foundation);
  return (
    <View>
      <Video uri={vedioUrl} />
      <View>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
        <Text>{description}</Text>
        <Text>Syllabus</Text>
        <Text>{syllabusdescription}</Text>
        {foundation.split(",").map((item) => {
          return <Text>{item}</Text>;
        })}
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export default trailer;
