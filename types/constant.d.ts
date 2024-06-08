import { ImageProps } from "react-native";

interface ScreenData extends Pick<ImageProps, "source"> {
  title: string;
  description: string;
  "source-dark": ImageSourcePropType | undefined;
}
