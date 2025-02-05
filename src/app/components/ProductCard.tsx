
import { Product } from "@/pages/type";
import React from "react";
import Image from "next/image";

interface ProductCardProps extends Product {
  onAddToCart: (Product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  ImageSrc,  // Renamed prop here
  onAddToCart,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        src={ImageSrc}  // Using the renamed prop
        alt={name}
        width={500}  // Static width
        height={350} // Static height
      
        className="w-full h-56 object-cover rounded-md transform transition-all duration-300 ease-in-out hover:110"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-black mb-4">{price}</p>
      <button
        onClick={() => onAddToCart({
            id, name, price, ImageSrc,
            
        })}  // Passing the renamed prop
        className="bg-white text-black rounded-lg text-lg shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
