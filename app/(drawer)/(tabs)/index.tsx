import axios from "axios";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<IResponse | null>(null);
  const fetchData = async () => {
    const res = await axios.get(API_URL);
    setResponse(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View className="flex flex-1 align-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-1 align-center justify-center">
      <Text>
        <Text>{response?.data.PRESSURE}</Text>
        {JSON.stringify(response, null, 2)}
      </Text>
    </View>
  );
}
