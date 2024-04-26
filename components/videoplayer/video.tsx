import {
  Video as VedioPlayer,
  ResizeMode,
  VideoFullscreenUpdateEvent,
} from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const Video = ({ uri }: { uri: string }) => {
  const vedioRef = useRef<any>();
  const [status, setStatus] = React.useState({});
  const onFullscreenUpdate = async ({
    fullscreenUpdate,
  }: VideoFullscreenUpdateEvent) => {
    if (fullscreenUpdate < 2) {
      await ScreenOrientation.unlockAsync();
    } else if (fullscreenUpdate >= 2) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
  };
  return (
    <View>
      <VedioPlayer
        ref={vedioRef}
        style={styles.video}
        source={{
          uri,
        }}
        videoStyle={{
          width: "100%",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onFullscreenUpdate={onFullscreenUpdate}
        rotation={1}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: Dimensions.get("screen").width,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
