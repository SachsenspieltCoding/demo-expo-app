import {Text, View} from "@components/Themed";
import {Image, StyleSheet} from "react-native";
import Colors from "@constants/Colors";
import {Product} from "@/types";

const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"

type ProductListItemProps = {
    product: Product;
}

export function ProductListItem({product}: ProductListItemProps) {
    return (
        <View style={styles.container}>
            <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image}/>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    image: {
        width: "100%",
        aspectRatio: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    }
});
