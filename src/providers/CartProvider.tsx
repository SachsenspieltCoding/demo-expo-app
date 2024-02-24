import React, {createContext, PropsWithChildren, useContext, useState} from "react";
import {CartItem, PizzaSize, Product} from "@/types";
import {randomUUID} from "expo-crypto";

type CartType = {
    items: CartItem[]
    addItem: (product: Product, size: PizzaSize) => void,
    updateQuantity: (itemId: string, amount: number) => void,
    total: number
}

export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {
    },
    updateQuantity: () => {
    },
    total: 0
})

export default function CartProvider({children}: PropsWithChildren) {
    const [items, setItems] = useState<CartItem[]>([]);

    function addItem(product: Product, size: PizzaSize) {
        const existingItem = items.find(item => item.product === product && item.size === size)

        if(existingItem) {
            updateQuantity(existingItem.id, 1)
            return
        }

        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1,
        }

        setItems([newCartItem, ...items])
    }

    function updateQuantity(itemId: string, amount: number) {
        setItems(items.map(item => item.id !== itemId ? item : {
            ...item,
            quantity: item.quantity + amount
        }).filter(item => item.quantity > 0))
    }

    const total = items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

    return (
        <CartContext.Provider value={{items, addItem, updateQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
