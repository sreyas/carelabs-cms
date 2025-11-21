
"use client";

import GlobalReach from "@/components/GlobalReach";
import HomeBlog from "@/components/HomeBlog";
import HomeCounter from "@/components/Homecounter";
import HomeServices from "@/components/HomeServices";
import HomeTestimonials from "@/components/HomeTestimonials";
import {GET_HOME_SECTION_1 } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";
import { TextGenerateEffect } from "@/lib/ui/text-generate-effect";
import Aos from "aos";
import { useEffect, useState } from "react";


export default function Home() {

  const [homeData,setHomeData]=useState();
  const [blogData,setBlogData]=useState();



    useEffect(() => {
    Aos.init({ 
      once: true,     // animate only once
    });
  }, []);


   const fetchedData = async()=> {
    try{
    const res= await client.query({
                  query: GET_HOME_SECTION_1,
                 });
    console.log("Home banner data:", res.data.homes[0]);
   setHomeData(res.data.homes[0]);
    }catch(err){
      console.log("Error fetching home banner data:", err);
    }
   }

useEffect(() => {
  const fetchData = async () => {
    await fetchedData();
  };

  fetchData();
}, []);


console.log("Home Data",homeData);


if (!homeData) return null;
  return (
    <>
   <div className="home-cover relative top-[80px] w-full min-h-[calc(100vh-80px)]  flex flex-col items-center justify-center">
  {/* Section 1 */}
  <div className="w-11/12 md:w-4/5 lg:w-3/5 h-auto md:h-[85%] 2xl:h-[85%] 2xl:w-[65%]  bg-gray-50 rounded-3xl flex flex-col items-center justify-center navbar-shadow p-4 md:p-6">
    <div className="w-full flex flex-col items-center justify-evenly space-y-6 md:space-y-8">

      {/* Heading Button */}
      <div className="flex justify-center items-center">
        <button className="px-4 py-2 border-2 border-blue-400 rounded-full text-sm sm:text-base md:text-lg">
          <a>{homeData.heading}</a>
        </button>
      </div>

      {/* Title */}
      <div className="w-full flex items-center justify-center text-center px-4 md:px-8">
        <div className="w-full md:w-3/5 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-2"
          style={{ letterSpacing: "1px" }}
          dangerouslySetInnerHTML={{ __html: homeData.title }}
        />
      </div>

      {/* Description */}
      <div className="w-full flex items-center justify-center text-center px-4 md:px-8">
        <div className="w-full md:w-11/12 text-lg  md:text-xl py-2 text-[#65758B]">
          <p>{homeData.description}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex items-center justify-center py-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full md:w-3/5">
          <button className="bg-[#FF7038] text-white py-2 px-6 rounded-full text-sm sm:text-base md:text-lg">
            <a href={homeData.btn1_link}>{homeData.btn1_text}</a>
          </button>
          <button className="bg-[#FF7038] text-white py-2 px-6 rounded-full text-sm sm:text-base md:text-lg">
            <a href={homeData.btn2_link}>{homeData.btn2_text}</a>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full flex flex-col sm:flex-row  items-center justify-evenly py-4 gap-4">
        {homeData.stats?.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[45%] md:w-[30%] flex flex-col items-center justify-center p-4 rounded-2xl card-shadow"
          >
            <p className="text-4xl sm:text-5xl font-bold text-blue-500">{item.number}</p>
            <p className="text-sm sm:text-base py-1 text-[#65758B]">{item.label}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>


{/* section-2 */}
     <div className="w-full h-[100px]  2xl:h-[250px]"></div>

     <section>

  
          
      <HomeServices/>
     </section>



     {/* Section-3  */}


      <section>
        <GlobalReach />
      </section>


      {/* Section-4 */}

       <section>
        <HomeTestimonials/>
       </section>


      {/* Section-5 */}

      <section>
        <div className="w-full h-[100px]  2xl:h-[150px]"></div>
        <HomeBlog/>
      </section>


    </>
  );
}
