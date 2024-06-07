import { Platform } from "react-native";

const IOS_SYSTEM_COLORS = {
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  light: {
    background: "rgb(249, 249, 247)",
    foreground: "rgb(51, 51, 51)",
    root: "rgb(255, 255, 255)",
    card: "rgb(255, 255, 255)",
    destructive: "rgb(239, 68, 68)",
    primary: "rgb(108, 99, 255)",
    secondary: "rgb(114, 114, 114)",
    muted: "rgb(143, 143, 143)",
    accent: "rgb(79, 70, 229)",
    border: "rgb(230, 230, 235)",
  },
  dark: {
    background: "rgb(30, 30, 30)",
    foreground: "rgb(247, 247, 249)",
    root: "rgb(0, 0, 0)",
    card: "rgb(21, 21, 24)",
    destructive: "rgb(206, 58, 58)",
    primary: "rgb(108, 99, 255)",
    secondary: "rgb(193, 193, 193)",
    muted: "rgb(212, 212, 212)",
    accent: "rgb(64, 57, 193)",
    border: "rgb(40, 40, 42)",
  },
} as const;

const ANDROID_COLORS = {
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  light: {
    background: "rgb(249, 249, 247)",
    foreground: "rgb(51, 51, 51)",
    root: "rgb(255, 255, 255)",
    card: "rgb(255, 255, 255)",
    destructive: "rgb(239, 68, 68)",
    primary: "rgb(108, 99, 255)",
    secondary: "rgb(114, 114, 114)",
    muted: "rgb(143, 143, 143)",
    accent: "rgb(79, 70, 229)",
    border: "rgb(230, 230, 235)",
  },
  dark: {
    background: "rgb(30, 30, 30)",
    foreground: "rgb(247, 247, 249)",
    root: "rgb(0, 0, 0)",
    card: "rgb(21, 21, 24)",
    destructive: "rgb(206, 58, 58)",
    primary: "rgb(108, 99, 255)",
    secondary: "rgb(193, 193, 193)",
    muted: "rgb(212, 212, 212)",
    accent: "rgb(64, 57, 193)",
    border: "rgb(40, 40, 42)",
  },
} as const;

const COLORS = Platform.OS === "ios" ? IOS_SYSTEM_COLORS : ANDROID_COLORS;

export { COLORS };
