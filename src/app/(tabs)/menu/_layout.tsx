import {Link, Stack} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@constants/Colors";
import {Appearance, Pressable} from "react-native";
import getColorScheme = Appearance.getColorScheme;
import React from "react";

export default function MenuStack() {
    return <Stack screenOptions={{
        headerRight: () => (
            <Link href="/cart" asChild>
                <Pressable>
                    {({pressed}) => (
                        <FontAwesome
                            name="shopping-cart"
                            size={25}
                            color={Colors[getColorScheme() ?? "light"].tint}
                            style={{opacity: pressed ? 0.5 : 1}}
                        />
                    )}
                </Pressable>
            </Link>
        )
    }} />
}
