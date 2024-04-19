import { Link } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { PrimaryButton } from "@/components/Buttons";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/harkirat.jpeg")}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <Link href="/(auth)/register/register" asChild>
          <PrimaryButton onPress={() => { }}>
            <Text className="text-white">Register</Text>
          </PrimaryButton>
        </Link>
      </View>
      <View style={styles.longTextContainer}>
        <Text style={styles.longText}>Allready have an account?{' '}
          <Link href="/(auth)/login/login" asChild>
            <Text className="text-black underline" style={styles.longText}>Log-in</Text>
          </Link>
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  longTextContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    alignItems: "center"
  },
  longText: {
    fontSize: 18,
  }
});
