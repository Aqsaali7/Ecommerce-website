import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div>
      <section>
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            
            {/* First Image Container */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="https://cdn.tasteatlas.com/images/recipes/946f07b7b5ec4f23a6fea58a2ac72650.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  alt="Pizza"
                  width={825}
                  height={433}
                
                />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                </h3>
              </a>
            </div>
            
            {/* Second Image Container */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  src="https://img.tastelife.tv/assets/uploads/2022/06/Found_a_new_way_to_make_Double_Cheese_Pizza_No_kneading_Incredibly_easy_Best_pizza_in_the_world-825x433.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded"
                  alt="Pizza"
                  width={825}
                  height={433}
              
                />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                </h3>
              </a>

              {/* Grid of smaller images */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="https://preppykitchen.com/wp-content/uploads/2021/10/Cheese-Pizza-Feature.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    alt="Cheese Pizza"
                    width={823}
                    height={433}
                    
                  />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {" "}
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pt-40"
                >
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-cG04tD6xsFELD9I9xGn189XU3qXXuVe6A&s"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    alt="Pizza"
                    width={823}
                    height={433}
                    
                  />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    {" "}
                  </h3>
                </a>
              </div>
            </div>

            {/* Third Image Container */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                width={433}
                height={433}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZvhLoBq-TYkVlBlbGzhT0xS2eagmhC4-wg&s"
                  className=" w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  alt="Pizza"
                 
                
                />
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  {" "}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}















































































































































{/**import React from "react";
import Image from "next/image";
export default function Features() {
    return (
        <div>
            <section>
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 ">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col ">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <Image src="https://cdn.tasteatlas.com/images/recipes/946f07b7b5ec4f23a6fea58a2ac72650.jpg"
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" alt={""}
                                width={825}
                                height={433} />
                                <div className="absolute inset-0 ">
                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                              {" "}
                                </h3>
                            </a>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2  ">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <Image src="https://img.tastelife.tv/assets/uploads/2022/06/Found_a_new_way_to_make_Double_Cheese_Pizza_No_kneading_Incredibly_easy_Best_pizza_in_the_world-825x433.jpg"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded" alt={""}
                                width={825}
                                height={833}
                                />
                                <div className="absolute inset-0 ">
                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    {" "}
                                    {" "}
                                </h3>
                            </a>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <Image src="https://preppykitchen.com/wp-content/uploads/2021/10/Cheese-Pizza-Feature.jpg"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                                    alt={""}
                                    width={823}
                                    height={433} />
                                    <div className="absolute inset-0 ">
                                    </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        {" "}
                                        {" "}
                                    </h3>
                                </a>

                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pt-40">
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-cG04tD6xsFELD9I9xGn189XU3qXXuVe6A&s"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                     alt={""} 
                                    width={823}
                                    height={433}/>
                                    <div className="absolute inset-0 ">
                                    </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        {" "}
                                 {" "}
                                    </h3>
                                </a>
                            </div>
                        </div>


<div className="col-span-2 sm:col-span-2 md:col-span-1 h-auto md:h-full flex flex-col ">
<a href=""
  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZvhLoBq-TYkVlBlbGzhT0xS2eagmhC4-wg&s"
  className = "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
  alt={""}
 height={823} 
width={433}/>
  <div className="absolute inset-0 ">
  </div>
  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
    {" "}
    {" "}
  </h3>
</a>
</div>
                    </div>
                    </div>
            </section>
        </div>
    )
}*/ }