import { Entypo, Feather } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { CommonActions, DrawerActions } from "@react-navigation/native";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSetRecoilState } from "recoil";

import { Button } from "./Button";
import { ProfileCard } from "./ProfileCard";

import { cn } from "@/lib/cn";
import { userAtom } from "@/store";

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { state, descriptors, navigation } = props;
  const insets = useSafeAreaInsets();
  const setUser = useSetRecoilState(userAtom);
  const handleLogout = () => {
    setUser(null);
  };
  // console.log(insets);

  return (
    <View className="flex-1" style={{ paddingBottom: insets.bottom }}>
      <ProfileCard />
      <View className="p-4">
        {state.routes.map((route, idx) => {
          const focused = idx === state.index;

          const onPress = () => {
            const event = navigation.emit({
              type: "drawerItemPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.dispatch({
                ...(focused
                  ? DrawerActions.closeDrawer()
                  : CommonActions.navigate({ name: route.name, merge: true })),
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
              variant="link"
              key={route.key}
              onPress={onPress}
              style={drawerItemStyle}
              className={cn("my-1 flex-row items-center justify-start gap-4")}
            >
              {drawerIcon
                ? drawerIcon({ size: 20, focused, color: "#545454" })
                : null}
              {typeof label === "string" ? (
                <Text className="text-base font-medium capitalize text-slate-600">
                  {label}
                </Text>
              ) : (
                label({ color: "white", focused })
              )}
            </Button>
          );
        })}
      </View>
      <View className="flex-1 justify-between border-t border-slate-200 p-4">
        <View>
          <Button
            variant="link"
            className="flex-row justify-start gap-6"
            onPress={handleLogout}
          >
            <Entypo name="star" size={20} color="rgb(234 179 8)" />
            <Text className="text-base font-medium text-yellow-500">Rate</Text>
          </Button>
          <Button
            variant="link"
            className="flex-row justify-start gap-6"
            onPress={handleLogout}
          >
            <Entypo name="share" size={20} color="rgb(59 130 246)" />
            <Text className="text-base font-medium text-blue-500">Share</Text>
          </Button>
        </View>
        <Button
          variant="link"
          className="flex-row items-center justify-start gap-6"
          onPress={handleLogout}
        >
          <Feather name="log-out" size={20} color="red" />
          <Text className="text-base font-medium text-red-500">Log Out</Text>
        </Button>
      </View>
    </View>
  );
};
