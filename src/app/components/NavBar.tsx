import React from "react";
import { GiCartwheel, GiFullPizza, GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";

export default function NavBar() {
    return (
        <div>
            <div className="grid xl:grid-cols-1 grid-cols-1">
                <div className="p-5 ">
                    <div className="py-3 px-3 rounded-xl border w-full border-emerald-700 ">
                        <div className=" flex justify-between items-center">
                            <div className="flex justify-items-center items-center gap-2 ">
                                {/*logo*/}
                                <GiFullPizza className="w-6 h-6 text-yellow-600 hover:text-yellow-500" />

                                <div style={{ position: "relative" }}>
                                    <input className=" rounded-3xl py-3 px-3 outline-none text-xs  w-[350px] pr-10 hidden lg:block md:block border-2 border-emerald-700"
                                        placeholder="Search here" />
                                    <FaSearch className="w-5 h-5 text-emerald-800 absolute right-3 top-1/3 transform-translate-y-1/2 hidden lg:block md:block" />
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2 ">
<GiScooter className="  w-5 h-5 text-emerald-700 hidden lg:block md:block"/>
<p> Order now get in with 
    <span className="text-emerald-700 "> 20 minutes!</span>
 </p>

<GiShoppingCart className="p-1 w-8 h-8 text-emerald-700 realative "/>
<Image
width={823}
height={432}
className="inline-block w-8 h-8 rounded-full ring-2"
src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
alt="use avtar"

/>


</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}