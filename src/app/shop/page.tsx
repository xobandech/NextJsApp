"use client";
import { useEffect, useContext } from "react";
import Link from "next/link";
import { getProducts } from "./functions";
import { Product } from "@/types/Product";
import { ProductsContext } from "@/contexts/ProductContext";
import { CartItemsContext } from "@/contexts/CartItemsContext";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const { products, setProducts } = useContext(ProductsContext)
  const { cartItems, setCartItems } = useContext(CartItemsContext)
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <header className="">
        <h1>ShopPage</h1>
        <Link href="/shop/cart">Cart</Link>
      </header>
      <main>
        <div>
          {products.map((product) => {
            return (
              <ProductCard   
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              handleAddToCart={() => handleAddToCart(product)}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
