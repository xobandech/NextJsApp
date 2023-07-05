"use client"
import { createContext, useState } from "react";
import { Product } from "@/types/Product";

interface IProductsContext {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export const ProductsContext = createContext<IProductsContext>({
    products: [],
    setProducts: () => null,
})

const ProductsContextProvider = ({children}:{ children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const value: IProductsContext = { products, setProducts}
    return (
        <ProductsContext.Provider value={ value }>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider
