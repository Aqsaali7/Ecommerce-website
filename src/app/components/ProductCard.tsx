import {Product} from "@/pages/type" ;
import React from "react";

interface ProductCardProps extends Product{
    onAddToCart:(Product:Product) => void;
}

const ProductCard : React.FC<ProductCardProps> =({
   id ,
   name,
   price,
   image,
   onAddToCart,
}) => {
    return(
      <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
<img
src={image}
alt={name}
className="w-full h-56 object-cover rounded-md transform transition-all duration-300 ease-in-out hover:110"
/>
<h3 className="text-xl font-semibold mb-2">{name}</h3>
<p className="text-lg text-black mb-4">{price}</p>
<button onClick={() => onAddToCart ({id, name, price, image })}
    className="bg-white text-black rounded-lg text-lg shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out">
    Add To Cart
</button>
      </div>
    );
};

export default ProductCard;


