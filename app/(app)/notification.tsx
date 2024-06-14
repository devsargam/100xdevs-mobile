import { Image } from "react-native";

import { Button, Container, Text, View } from "@/components";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function Notification() {
  const { colors, colorScheme } = useColorScheme();
  const notificationImg =
    colorScheme === "dark"
      ? require("assets/images/dark-notify.png")
      : require("@assets/images/notify.png");
  return (
    <Container className="items-center gap-3 mt-[25%]">
      <Image source={notificationImg} />
      <View className="items-center gap-1 p-4">
        <Text className="text-xl font-semibold">No Notification to show</Text>
        <Text variant="secondary" className="text-center">
          You currently have no notification, We will notify you when something
          new happens!
        </Text>
      </View>
      <Button size="sm">
        <Text variant="primary-lite">Explore</Text>
      </Button>
    </Container>
  );
}
