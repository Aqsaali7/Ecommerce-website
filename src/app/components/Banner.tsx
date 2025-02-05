import React from "react";
import Image from "next/image";
export default function Banner(){
    return(
        <div className="relative overflow-hidden font-sans px-6 py-12 mb-7  "> 
       <div className="absolute inset-0 opacity-20">
            <Image
                    src="https://admin.broadwaypizza.com.pk/images/banner/web-bannernew.jpg"
                    className="w-full h-full object-cover" alt={""} 
                    width={823}
                    height={433}/>
        </div>
        <div className="mt-3  flex flex-cols justify-center items-center font-serif font-bold text-lg">
            shop now for exclusive pizza deals
        </div>
         </div>
        
    )
}