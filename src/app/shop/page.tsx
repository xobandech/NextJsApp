"use client";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { CartItemsContext } from "@/contexts/CartItemsContext";
import { getProducts } from "./functions";
import { Product } from "@/types/Product";

export default function ShopPage() {
  const { cartItems, setCartItems } = useContext(CartItemsContext)

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

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
              <div className="w-[150px] outline outline-yellow-50 my-5 h-[200px]">
                <h1 key={product.id}>
                  {product.name} {product.price}
                </h1>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
