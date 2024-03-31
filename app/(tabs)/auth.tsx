import { Image, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function AuthScreen() {
  return (
    <View className="flex overflow-scroll flex-col gap-10 h-[95vh] items-center justify-center">
      <Image
        source={require('@/assets/images/harkirat.jpeg')}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
        }}
      />
      <View className="flex flex-row px-20 justify-center items-center gap-10">
        <Pressable className="bg-blue-500 hover:bg-blue-700 active:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded">
          <Link href={'/(tabs)/(register)/register'}>
            <Text className="text-white">Register</Text>
          </Link>
        </Pressable>
        <View className="h-2" />
        <Pressable className="bg-blue-500 hover:bg-blue-700 active:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded">
          <Text className="text-white">Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
