import { ProductCardProps } from "@/types/ProductCardProps";
import { Product } from "@/types/Product";
import { useContext } from "react";
import { CartItemsContext } from "@/contexts/CartItemsContext";

export default function ProductCard({ id, price, name }: ProductCardProps) {
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="w-[150px] outline outline-yellow-50 my-5 h-[200px]">
      <h1 key={id}>
        {name} {price}
      </h1>
      <button onClick={() => handleAddToCart({ id, name, price })}>
        Add to Cart
      </button>
    </div>
  );
}
  