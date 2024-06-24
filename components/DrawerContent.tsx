import { Entypo, Feather } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSetRecoilState } from "recoil";

import { Button } from "./Button";
import { ProfileCard } from "./ProfileCard";
import { Text } from "./Text";
import { View } from "./View";

import { useColorScheme } from "@/hooks/useColorScheme";
import { cn } from "@/lib/cn";
import { userAtom } from "@/store";

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { colors } = useColorScheme();
  const { state, descriptors, navigation } = props;
  const insets = useSafeAreaInsets();
  const setUser = useSetRecoilState(userAtom);
  const handleLogout = () => {
    setUser(null);
  };
  // console.log(insets);

  return (
    <View
      variant="secondary"
      className="flex-1"
      style={{ paddingBottom: insets.bottom }}
    >
      <ProfileCard />
      <View className="p-4">
        {state.routes.map((route) => {
          const onPress = () => {
            const event = navigation.emit({
              type: "drawerItemPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.dispatch({
                ...CommonActions.navigate({ name: route.name, merge: true }),
                target: state.key,
              });
            }
          };

          const { title, drawerLabel, drawerIcon, drawerItemStyle } =
            descriptors[route.key].options;
          const label =
            drawerLabel !== undefined
              ? drawerLabel
              : title !== undefined
                ? title
                : route.name;
          return (
            <Button
              variant="ghosted"
              key={route.key}
              onPress={onPress}
              style={drawerItemStyle}
              className={cn("my-1 flex-row items-center justify-start gap-4")}
            >
              {drawerIcon
                ? drawerIcon({
                    size: 20,
                    focused: true,
                    color: colors.secondary,
                  })
                : null}
              {typeof label === "string" ? (
                <Text variant="secondary" className="font-medium capitalize">
                  {label}
                </Text>
              ) : (
                label({ color: "white", focused: true })
              )}
            </Button>
          );
        })}
      </View>
      <View className="flex-1 justify-between border-t border-slate-300 p-4">
        <View>
          <Button
            variant="ghosted"
            className="flex-row justify-start gap-6"
            onPress={handleLogout}
          >
            <Entypo name="star" size={20} color="rgb(234 179 8)" />
            <Text className="font-medium text-yellow-500">Rate</Text>
          </Button>
          <Button
            variant="ghosted"
            className="flex-row justify-start gap-6"
            onPress={handleLogout}
          >
            <Entypo name="share" size={20} color="rgb(59 130 246)" />
            <Text className="font-medium text-blue-500">Share</Text>
          </Button>
        </View>
        <Button
          variant="ghosted"
          className="flex-row items-center justify-start gap-6"
          onPress={handleLogout}
        >
          <Feather name="log-out" size={20} color={colors.destructive} />
          <Text variant="destructive" className="font-medium">
            Log Out
          </Text>
        </Button>
      </View>
    </View>
  );
};
