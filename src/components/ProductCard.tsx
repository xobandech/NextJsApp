import { ProductCardProps } from "@/types/ProductCardProps";

export default function ProductCard ({id, price, name, handleAddToCart}:ProductCardProps ) {
   return <div className="w-[150px] outline outline-yellow-50 my-5 h-[200px]">
    <h1 key={id}>
      {name} {price}
    </h1>
    <button onClick={() => {handleAddToCart}}>Add to Cart</button>
  </div>;
};
