import products from "@assets/data/products";
import {ProductListItem} from "@components/ProductListItem";
import {FlatList, StyleSheet, View} from "react-native";
import {Stack} from "expo-router";

export default function MenuScreen() {
    return (
        <View>
            <Stack.Screen options={{title: "Menu"}}/>

            <FlatList
                data={products}
                renderItem={({item}) => <ProductListItem product={item}/>}
                numColumns={2}
                contentContainerStyle={{ gap: 10, padding: 10 }}
                columnWrapperStyle={{ gap: 10 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})