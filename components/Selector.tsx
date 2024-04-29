import { View, Text, FlatList, Dimensions, Pressable } from 'react-native'
import React, { FC } from 'react'

const Selector: FC<Selectors> = ({ data, onPress, selectedItem }) => {
    return (
        <View >
            <FlatList
                data={data}
                horizontal
                contentContainerStyle={{
                    width: Dimensions.get("screen").width,
                    paddingHorizontal: 10,
                }} renderItem={({ item }) => {
                    return <Pressable android_ripple={{ color: "grey" }} onPress={() => onPress(item)} style={{
                        width: (Dimensions.get("screen").width - 20) / data.length,
                        height: 70,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text style={{
                            textTransform: "uppercase",
                            fontWeight: "bold"
                        }}>{item}</Text>
                        <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: selectedItem === item ? "black" : "white", alignSelf: 'center' }} />
                    </Pressable>
                }} />
        </View>
    )
}

export default Selector