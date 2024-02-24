import products from "@assets/data/products";
import {ProductListItem} from "@components/ProductListItem";
import {ScrollView, StyleSheet} from "react-native";

export default function MenuScreen() {
    return (
        <ScrollView>
            <ProductListItem product={products[0]}/>
            <ProductListItem product={products[1]}/>
            <ProductListItem product={products[2]}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})
