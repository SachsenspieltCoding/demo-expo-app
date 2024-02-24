import {Text} from "@components/Themed";
import {Image, Pressable, StyleSheet} from "react-native";
import Colors from "@constants/Colors";
import {Product} from "@/types";
import {Link} from "expo-router";
import {defaultPizzaImage} from "@constants/Images";

type ProductListItemProps = {
    product: Product;
}

export function ProductListItem({product}: ProductListItemProps) {
    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{uri: product.image || defaultPizzaImage}}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        maxWidth: "50%",
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
