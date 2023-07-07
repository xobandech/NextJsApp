"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { CartItemsContext } from "@/contexts/CartItemsContext";
import { useContext } from "react";
export default function CartPage() {
  const { cartItems } = useContext(CartItemsContext);
  return (
    <>
      <h1>CartPage</h1>
      <Link href="../shop">Back to shop</Link>
      <div className="flex">
        {cartItems &&
          cartItems[0] &&
          cartItems.map((cartItem) => {
            return (
              <ProductCard
                key={cartItem.id}
                id={cartItem.id}
                name={cartItem.name}
                price={cartItem.price}
              />
            );
          })}
        <button onClick={() => console.log(cartItems)}>Show</button>
      </div>
    </>
  );
}
