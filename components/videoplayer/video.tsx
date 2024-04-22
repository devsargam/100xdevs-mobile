import { Video as VedioPlayer, ResizeMode } from "expo-av";
import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
const Video = ({ uri }: { uri: string }) => {
  const vedioRef = useRef<any>();
  const [status, setStatus] = React.useState({});
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
        resizeMode={ResizeMode.COVER}
        isLooping
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
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
