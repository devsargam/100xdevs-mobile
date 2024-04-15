import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, TextInput } from 'react-native';

export default function LoginScreen() {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!input.length || !password.length) return;
    // TODO: Fix this stupid mock
    if (Math.random() > 0.5) {
      // TODO: Save this in local storage
    }
  };

  //FIXME: using a mock routing system, make it work with the real one

  return (
    <View className="flex overflow-scroll flex-col gap-10 h-[95vh] p-10">
      <Text className="text-xl font-bold">Login to Continue</Text>
      <View className="flex flex-col gap-1">
        <View className="flex flex-row items-center gap-1">
          <FontAwesome name="envelope" size={20} />
          <Text className="text-xl">E-mail Address</Text>
        </View>
        <TextInput
          className="border h-10 p-1"
          value={input}
          autoCapitalize="none"
          onChangeText={(text) => {
            setInput(text);
          }}
        />
      </View>
      <View className="flex flex-col gap-1">
        <View className="flex flex-row items-center gap-1">
          <FontAwesome name="lock" size={20} />
          <Text className="text-xl">Password</Text>
        </View>
        <TextInput
          className="border h-10 p-1"
          secureTextEntry
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <Link href="/(tabs)/" asChild>
      <Pressable
        onPress={handleLogin}
        className="bg-blue-500 hover:bg-blue-700 active:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded"
      >
        <Text className="text-white text-center">Login</Text>
      </Pressable>
      </Link>
    </View>
  );
}
