import {Text, View} from "@components/Themed";
import {StatusBar} from "expo-status-bar";
import {FlatList, Platform, StyleSheet} from "react-native";
import {useCart} from "@providers/CartProvider";
import CartListItem from "@components/CartListItem";
import Button from "@components/Button";


export default function CartScreen() {
    const {items, total} = useCart()

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => <CartListItem cartItem={item}/>}
                contentContainerStyle={{gap: 10}}
            />

            <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
            <Button text="Checkout" />

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    total: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
