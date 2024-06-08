import { Image, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { userAtom } from '@/store';
import { ThemeToggle } from './ThemeToggle';

export const ProfileCard = () => {
  const user = useRecoilValue(userAtom);
  console.log(user);

  return (
    <View className="h-1/4 w-full justify-end bg-[#6C63FF] p-4">
      <View className="flex-row justify-between">
        <View className="aspect-square h-20 items-center  justify-center overflow-hidden rounded-full bg-white">
          <Image
            source={require('@assets/images/avatar.png')}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>
        <ThemeToggle />
      </View>
      <Text className="my-2 text-lg text-white">Display Name</Text>
    </View>
  );
};
