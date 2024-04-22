import { Link } from "expo-router";
import { Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/Buttons";
import { Text, View } from "@/components/Themed";

export default function AuthScreen() {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center px-5 w-screen h-screen">
        <Image
          source={require("@/assets/images/harkirat.jpeg")}
          className="object-contain h-96 w-96 resize-contain"
        />
        <Text className="text-3xl font-bold">100xdevs</Text>
        <View className="w-full px-2 mt-20">
          <Link href="/(auth)/register/register" asChild>
            <PrimaryButton disabled={false} onPress={() => {}}>
              <Text className="text-white">Register</Text>
            </PrimaryButton>
          </Link>
        </View>
        <View className="absolute bottom-20 flex justify-center items-center">
          <Text className="text-lg">
            Allready have an account?{" "}
            <Link href="/(auth)/login/login" asChild>
              <Text className="text-black underline text-lg">Log-in</Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

