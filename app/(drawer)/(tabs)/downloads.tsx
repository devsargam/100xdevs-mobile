import SearchList from "@/components/SearchList";
import Selector from "@/components/Selector";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text } from "react-native";

//TODO: this needs to show the list of downloaded files

const Downloads = () => {
  const [selectedPage, setSelectedPage] = useState<"videos" | "pdfs">("videos")
  return (
    <View className="w-full h-full bg-white">
      <Selector data={["videos", "pdfs"]} selectedItem={selectedPage} onPress={(val) => setSelectedPage(val)} />
      <SearchList
        data={["Hello", "world", "Rice", "Sambar"]}
        ListHeaderComponent={() => {
          return <View className="flex-row w-full justify-between border-b-[0.5px] pb-2 mb-2 pt-2">
            <Feather name="video" size={30} color="black" />
            <Text className="text-xl text-center">Title</Text>
            <Text className="text-l">Last Seen</Text>
          </View>
        }}
        renderItem={({ item }) => {
          if (selectedPage === "pdfs") {
            return <View className="flex-row w-full justify-between p-4">
              <MaterialIcons name="picture-as-pdf" size={24} color="black" />
              <Text className="text-xl text-center">{item}</Text>
              <Text className="text-l">12-4-26</Text>
            </View>
          } else {
            return <View className="flex-row w-full justify-between p-4">
              <Feather name="video" size={30} color="black" />
              <Text className="text-xl text-center">{item}</Text>
              <Text className="text-l">12-4-26</Text>
            </View>
          }
        }} />
    </View>
  );
};

export default Downloads;
