import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/Buttons";
import { Text, View } from "react-native";

export default function AuthScreen() {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center px-5 w-screen h-screen">
        <Image
          source={require("@/assets/images/harkirat.jpeg")}
          className="object-contain"
          style={styles.image}
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

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
    resizeMode: "contain",
  },
});
