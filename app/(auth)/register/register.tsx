import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/Buttons";

export default function RegisterScreen() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //TODO: have a top back nav button, have 5 fields name , phone number, email password, state and and agreement to terms and conditon and button to  register
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center px-4 w-screen h-screen">
        <View className="flex flex-row justify-start w-full mt-8 mb-1">
          <MaterialIcons name="person" size={24} color="black" />
          <Text className="text-black text-center text-base ml-2">Name</Text>
        </View>
        <TextInput
          className="w-full px-4 py-2 border border-black border-opacity-20 rounded-md text-black"
          value={name}
          placeholder="Walter White"
          autoCapitalize="words"
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <View className="flex flex-row justify-start w-full mt-8 mb-1">
          <Entypo name="phone" size={24} color="black" />
          <Text className="text-black text-center text-base ml-2">
            Phone Number
          </Text>
        </View>
        <TextInput
          className="w-full px-4 py-2 border border-black border-opacity-20 rounded-md text-black"
          value={phoneNumber}
          placeholder="+91 9876543210"
          autoCapitalize="words"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
        />
        <View className="flex flex-row justify-start w-full mt-8 mb-1">
          <MaterialIcons name="email" size={24} color="black" />
          <Text className="text-black text-center text-base ml-2">Email</Text>
        </View>
        <TextInput
          className="w-full px-4 py-2 border border-black border-opacity-20 rounded-md text-black"
          value={email}
          placeholder="youremail@abc.com"
          autoCapitalize="words"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <View className="flex flex-row justify-start w-full mt-8 mb-1">
          <MaterialIcons name="password" size={24} color="black" />
          <Text className="text-black text-center text-base ml-2">
            Password
          </Text>
        </View>
        <TextInput
          className="w-full px-4 py-2 border border-black border-opacity-20 rounded-md text-black"
          value={password}
          placeholder="**********"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <View className="flex flex-row justify-start w-full mt-8 mb-1">
          <Entypo name="location" size={24} color="black" />
          <Text className="text-black text-center text-base ml-2">State</Text>
        </View>
        <View className="absolute bottom-20 w-full">
          <Link href="/(drawer)/(tabs)/" asChild>
            <PrimaryButton disabled={false} onPress={() => {}}>
              <Text className="text-white text-center">Register</Text>
            </PrimaryButton>
          </Link>
        </View>
        <View className="absolute bottom-4 flex justify-center items-center">
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
