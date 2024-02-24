import {Stack, useLocalSearchParams} from "expo-router";
import {View} from "react-native";
import {Text} from "@components/Themed";

export default function ProductDetailsScreen() {
    const {id} = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{title: "Product details"}}/>

            <Text>Product Detail Page {id}</Text>
        </View>
    )
}
