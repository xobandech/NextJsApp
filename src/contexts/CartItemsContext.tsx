import { createContext, useState } from "react";
import { Product } from "@/types/Product";

interface ICartItemsContext {
    cartItems: Product[];
    setCartItems: (cartItems: Product[]) => void;
}

export const CartItemsContext = createContext<ICartItemsContext>({
    cartItems: [],
    setCartItems: () => null,
})

const CartItemsProvider = ({children}:{ children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const value: ICartItemsContext = { cartItems, setCartItems}
    return (
        <CartItemsContext.Provider value={ value }>
            {children}
        </CartItemsContext.Provider>
    )
}

export default CartItemsProvider