import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

import { PrimaryButton } from "@/components/Buttons";
import Video from "@/components/videoplayer/video";
import { useTrailerHook } from "@/hooks/useTrailerHook";

const trailer = () => {
  const params = useLocalSearchParams();
  const [loading, data, error] = useTrailerHook(params.courseID);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View className="w-full h-full bg-white">
      <Video uri={data.vedioUrl} />
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Text className="text-center text-xl font-bold m-2">{data.title}</Text>
        <Text className="text-left text-l font-bold m-2">{data.subtitle}</Text>
        <Text className="text-left text-l font-medium m-2">
          {data.syllabusdescription}
        </Text>
        <Text className="text-left text-l font-bold mt-4">Diliverables </Text>
        {data.foundation.map((diliverables: string) => {
          return <Text className="text-left text-l mt-4">*{diliverables}</Text>;
        })}
        <Text>{data.description}</Text>
        <View className="flex-row w-1/3 justify-between">
          <Text className="line-through text-red-400">{7999} Rs</Text>
          <Text>{data.price} Rs</Text>
        </View>
      </View>
      <View className="absolute bottom-5 flex-row flex-1">
        <View className="flex-1 p-1">
          <PrimaryButton disabled={false} onPress={() => {}}>
            <Text className="text-white">View Demo</Text>
          </PrimaryButton>
        </View>
        <View className="flex-1 p-1">
          <PrimaryButton disabled={false} onPress={() => {}}>
            <Text className="text-white">Buy Now</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default trailer;
