import {router, Stack, useLocalSearchParams} from "expo-router";
import {Appearance, Image, Pressable, StyleSheet} from "react-native";
import {Text, View} from "@components/Themed";
import products from "@assets/data/products";
import {PizzaSize} from "@/types";
import Colors from "@constants/Colors";
import {useState} from "react";
import Button from "@components/Button";
import getColorScheme = Appearance.getColorScheme;
import {useCart} from "@providers/CartProvider";

const sizes = ["S", "M", "L", "XL"] as PizzaSize[];

export default function ProductDetailsScreen() {
    const {id} = useLocalSearchParams();
    const product = products.find((product) => product.id.toString() === id);
    const {addItem} = useCart();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>("M")

    if (!product) {
        return (
            <View>
                <Stack.Screen options={{title: "Product Not Found"}}/>
                <Text>Product Not Found</Text>
            </View>
        )
    }

    const addToCart = () => {
        addItem(product, selectedSize)
        router.push("/cart")
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product.name}}/>

            <Image source={{uri: product.image}} style={styles.image}/>

            <Text>Select size</Text>
            <View style={styles.sizes}>
                {sizes.map((size) => (
                    <Pressable
                        onPress={() => setSelectedSize(size)} key={size}
                        style={[styles.size, {backgroundColor: size === selectedSize ? "gainsboro" : Colors[getColorScheme() ?? "light"].background}]}
                    >
                        <Text style={[styles.sizeText, {color: selectedSize === size ? "black" : "gray"}]}>{size}</Text>
                    </Pressable>
                ))}
            </View>

            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button onPress={addToCart} text="Add to cart"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: "auto"
    },
    sizes: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10
    },
    size: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    sizeText: {
        fontSize: 20,
        fontWeight: "500",
    },
})
