import React from "react";

export default function Banner(){
    return(
        <div className="relative overflow-hidden font-sans px-6 py-12 mb-7  "> 
       <div className="absolute inset-0 opacity-20">
            <img
            src="https://admin.broadwaypizza.com.pk/images/banner/web-bannernew.jpg"
           className="w-full h-full object-cover" />
        </div>
        <div className="mt-3  flex flex-cols justify-center items-center font-serif font-bold text-lg">
            shop now for exclusive pizza deals
        </div>
         </div>
        
    )
}