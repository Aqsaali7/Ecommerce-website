"use client"

import React from "react";

type Offer = {
    title: string;
    description: string;
}
 const specialOffers: React.FC = () => {
    const offers : Offer[] = [
{
    title: "Happy Hour",
    description: "Upto 50% Off till 7pm to 12pm"
},

{
    title: "Family Meal Deal",
    description: "Get 1 pizza free with ColaNext"
},

{
    title: "Weekly Brunch",
    description: "Get a coupon inside the box and get free gifts"
},
    ];

     function handleOfferClick (_description: string)  : void {
         throw new Error("Function not implemented.");
     }

    return(
        <section className="py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-black">Special Offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer,index) => (
<button key ={index}
onClick={() => handleOfferClick(offer.description)}
className="bg-white shadow-lg rounded-lg text-center hover:bg-emerald-700 transition duration-300 transform hover:scale-105">
<h3 className="text-2xl font-semibold text-black">{offer.title}</h3>
<p className="text-black mt-3">{offer.description}</p>


</button>
                    ))}
                </div>

            </div>


        </section>
    )

 }

 export default specialOffers