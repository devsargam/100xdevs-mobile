import React, { useRef, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

const CodeLab = () => {
  const [code, setCode] = useState<string>("console.log('Hello World!')");
  const [codeState, setCodeState] = useState<"input" | "output">("input");
  const [input, setInput] = useState<string>("[1,2,3,4,5,6,7,8,9]")
  const [output, setOutput] = useState<string>("")
  const textInputRef = useRef(null)
  const generateLineNumbers = () => {
    const lines = code.split('\n');
    return Array.from(Array(lines.length), (_, i) => i + 1);
  };
  return (
    <View className="w-full h-full bg-white ">
      <View className="w-full bg-black flex-row h-3/4 pl-5 pr-3 pt-2">
        <View className="pl-1 pr-3 pt-2">
          {generateLineNumbers().map((lineNumber) => (
            <Text key={lineNumber} style={{
              textAlign: 'right',
              color: "white",
              fontSize: 12,
              lineHeight: 16
            }}>{lineNumber}</Text>
          ))}
        </View>
        <TextInput
          ref={textInputRef}
          multiline={true}
          textAlignVertical="top"
          className="w-full bg-black text-white text-xs pt-2"
          spellCheck={false}
          autoCapitalize={"none"}
          style={{
            textAlign: 'left',
            letterSpacing: 1,
            color: "white",
            fontSize: 12,
          }}
          value={code}
          onChangeText={(e) => {
            setCode(e)
          }}
        />
      </View>

      <View className="w-full h-1/4 bg-slate-900 pl-5 pr-5 pt-2">
        <View className="w-1/2 flex-row justify-between">
          <Pressable onPress={() => {
            setCodeState("output")
          }} className={"flex-1 h-6"} style={{
            backgroundColor: codeState === "output" ? "black" : "transparent",
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 5

          }}>
            <Text className="text-white">Output</Text>
          </Pressable>
          <Pressable onPress={() => {
            setCodeState("input")
          }} className={"flex-1 h-6"} style={{
            backgroundColor: codeState === "input" ? "black" : "transparent",
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 5
          }}>
            <Text className="text-white">Input</Text>
          </Pressable>
        </View>
        <View className="w-full h-full bg-black mt-2 mb-2">
          <TextInput
            ref={textInputRef}
            multiline={true}
            editable={codeState !== "output"}
            textAlignVertical="top"
            className="w-full h-full bg-black text-white text-xs pt-2 pl-2 pr-2"
            style={{
              textAlign: 'left',
              letterSpacing: 1,
              color: "white",
              fontSize: 12,
            }}
            value={codeState === "input" ? input : output}
            onChangeText={(e) => {
              setInput(e)
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CodeLab;
