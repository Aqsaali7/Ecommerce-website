import React from "react";
import Image from "next/image";

const products = [

    {
        id: "1",
        title: "Alferado Pasta ",
        category: "hot",
        price: " Rs 370.00",
        ImageUrl: "https://www.recipetineats.com/tachyon/2017/03/One-Pot-Chicken-Alfredo-2.jpg",
        bgColor: "bg-green-800",
    },

    {
        id: "2",
        title: " Lasagna ",
        category: "delights",
        price: "Rs 399.00",
        ImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGohv2HN7DLOcihJB3LsKEyBJxm4e6mFanqvvFA2w8mmK1wwf67ATyK8tJJ4bi_ZMncw&usqp=CAU",
        bgColor: "bg-green-800",
    },


    {
        id: "3",
        title: "Lemon Pasta ",
        category: "tastefull",
        price: "RS 299.00",
        ImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHnUTpZr5BGW-oko8nk061IMYIDu8XmbS6wxGqM7CYn7KbAFWCYqY58wTYQjlB0Jyoko&usqp=CAU"
        ,
        bgColor: "bg-green-800",
    },
];

export default function Pizza() {
    return (
        <div className="p-1 flex flex-wrap items-center justify-center mb-6">
            {products.map((product) => (
                <div key={product.id} className={"flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm"}     >
                    <svg className="absolute bottom-0 left-0 mb-8 scale-150 group:hover:scale-[1.65] transition-transform" viewBox=" 0 0 375 283" fill="none" style={{opacity:0.1}}> 
                        <rect x=" 159.52" y="152" height="152" width="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y=" 107.48" height="152" width="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>

                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 50%", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1", opacity: 0.2, }}
                        >

                        </div>

                        <Image
                        width={40}
                        height={40}
                         className="relative w-50 " src={product.ImageUrl} alt={product.title} />
                    </div>

                    <div className="relative text-black px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">{product.category}</span>

                        <div className="flex justify-between">
                            <span className="block font semi-bold text-xl">{product.title}</span>
                            <span className="block bg-emerald-700 rounded-full text-black text-xs font-bold px-3 py-2 leading-none items-center">{product.price}</span>


                        </div>




                    </div>








                </div>
            ))}






        </div>
    )
}