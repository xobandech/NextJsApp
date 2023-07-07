"use client";
import { useEffect, useContext } from "react";
import Link from "next/link";
import { getProducts } from "./serverFunctions";
import { Product } from "@/types/Product";
import { ProductsContext } from "@/contexts/ProductContext";
import ProductCard from "@/components/ProductCard";


export default function ShopPage() {
  const { products, setProducts } = useContext(ProductsContext)
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  if (products.length < 1) return (
    <div>
      <h1>Loading...</h1>
    </div>
  )

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
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
