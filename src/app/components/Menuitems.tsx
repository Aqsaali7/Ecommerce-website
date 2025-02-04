"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/type";

const Menu = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
            
        }

        fetchProducts();
    }, []);

        // Local storage
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const toggleCart = () => {
        setShowCart((prev) => !prev);
    };

    const goToCheckout = () => {
        setIsCheckout(true);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
       <div className="relative min-h-screen py-6">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
                style={{
                    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/037/247/251/non_2x/ai-generated-pizza-advertisment-background-with-copy-space-free-photo.jpg')"
                }}
              ></div> 

            <div className="relative z-10">
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h1 className="text-4xl font-bold text-black mb-4">Delicious Pizza In Our Menu</h1>
                    <p className="text-xl text-black">
                        Explore our section and taste our delicious pizza!
                    </p>
                </div>

                {/* PRODUCT SECTION */}
                <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
                    {products.map((product) => (
                        <ProductCard 
                        key={product.id} 
                        {...product} 
                        onAddToCart={addToCart} />
                    ))}
                </div>

                {/* CART SECTION */}
                <div className="max-w-6xl mx-auto mt-8">
                    <button
                        onClick={toggleCart}
                        className="bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-emerald-600 transition duration-300 ease-out transform"
                    >
                        {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
                    </button>
                    {showCart && (
                        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-4xl font-bold text-black">Your Cart Items Include:</h2>
                            {cart.length > 0 ? (
                                <div>
                                    <ul>
                                        {cart.map((product, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-20 h-40 inline-block transition-transform duration-300 ease-in-out transform text-black"
                                                />
                                                <span className="ml-4 text-lg font-medium text-black">
                                                    {product.name} - ${product.price}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-between items-center mt-6 text-black">
                                        <span className="font-semibold text-xl">
                                            Total: ${cart.reduce((total, product) => total + product.price, 0)}
                                        </span>
                                        <div>
                                            <button
                                                onClick={goToCheckout}
                                                className="bg-emerald-700 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-emerald-600 transition duration-300 ease-in-out text-black transform hover:scale-105"
                                            >
                                                Proceed To Checkout
                                            </button>

                                            <button
                                                onClick={clearCart}
                                                className="bg-emerald-700 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-emerald-600 transition duration-300 ease-in-out text-black transform hover:scale-105"
                                            >
                                                Clear Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-lg text-black">Your cart is empty</p>
                            )}
                        </div>
                    )}
                </div>


{/*Checkout Section*/}
 
 {isCheckout && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
<div className="bg-white p-8 rounded-lg w-full sm:w-96">
    <h2 className="text-lg text-black font-bold mb-4">Chechout</h2>
    <p className="text-lg text-black">
        Please confirm your order before proceeding
    </p>
    <div className="mt-4">
<ul> 
    {cart.map ((product, index) => (
        <li key={index} className="flex justify-between mb-4">
<span>{product.name}</span>
<span>{product.price}</span>

        </li>
    ))}
</ul>

<div className="flex justify-between mt-4">
    <span className="font-semibold">Total:</span>
    <span className="font-semibold">${cart.reduce((total, product) => total+ product.price, 0)}</span>



</div>
    </div>

<div className="mt-6 flex justify-between">
    <button
    onClick={() => setIsCheckout(false)}
     className="bg-emerald-700 text-black py-2 px-6 rounded-lg text-lg shadow-md hover:bg-emerald-600 transition duration-300">
        Close

    </button>

<button
onClick={() => alert ("Order Confirm .... will deliverd at your door step just in 30 mintues")}
  className="bg-emerald-700 text-black py-2 px-6 rounded-lg text-lg shadow-md hover:bg-emerald-600 transition duration-300">
</button>


</div>






</div>
    </div>
 )}











{/*Checkout Section*/}





            </div>
        </div>
    );
};

export default Menu;