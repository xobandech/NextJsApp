export type ProductCardProps = {
    id: string;
    price: number;
    name: string;
    handleAddToCart?: () => void;
  };