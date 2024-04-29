import { View, Text, FlatListProps, TextInput, Dimensions } from 'react-native'
import React, { FC, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

const SearchList: FC<FlatListProps<string>> = ({ data, renderItem, ListEmptyComponent, ...props }) => {
    const [input, setInput] = useState<string>("")

    return (
        <View>
            <TextInput
                value={input}
                onChangeText={(e) => setInput(e)}
                placeholder='Search for'
                style={{
                    width: Dimensions.get("screen").width - 40,
                    height: 50,
                    backgroundColor: "rgba(255,255,255,0.5)",
                    alignSelf: "center",
                    paddingLeft: 20,
                    color: "black",
                    borderColor: 'grey',
                    borderWidth: 0.4,
                    borderRadius: 5
                }} placeholderTextColor={"grey"} />
            <FlatList
                contentContainerStyle={{
                    paddingHorizontal: 20
                }}
                data={data}
                renderItem={renderItem}
                ListEmptyComponent={ListEmptyComponent}
                {...props}
            />
        </View>
    )
}

export default SearchList