"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "./functions";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);

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
