"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
const handleBackClick = () => {
  redirect("/shop");
};
export default function CartPage() {
  return (
    <>
      <h1>ShopPage</h1>
      <Link href="../shop" onClick={handleBackClick}>Back to shop</Link>
    </>
  );
}
