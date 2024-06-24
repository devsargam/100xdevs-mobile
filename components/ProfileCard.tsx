import { Image } from "react-native";
import { useRecoilValue } from "recoil";

import { Text } from "./Text";
import { ThemeToggle } from "./ThemeToggle";
import { View } from "./View";

import { userAtom } from "@/store";

export const ProfileCard = () => {
  const user = useRecoilValue(userAtom);
  console.log(user);

  return (
    <View variant="primary" className="h-1/4 w-full justify-end p-4">
      <View className="flex-row justify-between bg-transparent">
        <View className="aspect-square h-20 items-center  justify-center overflow-hidden rounded-full bg-white">
          <Image
            source={require("@assets/images/avatar.png")}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>
        <ThemeToggle />
      </View>
      <Text variant="primary-lite" size="lg" className="my-2">
        Display Name
      </Text>
    </View>
  );
};
