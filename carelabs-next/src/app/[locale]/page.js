
"use client";

import GlobalReach from "@/components/GlobalReach";
import HomeBlog from "@/components/HomeBlog";
import HomeCounter from "@/components/Homecounter";
import HomeServices from "@/components/HomeServices";
import HomeTestimonials from "@/components/HomeTestimonials";
import RegionClients from "@/components/RegionClients";
// import RegionClients from "@/components/RegionClients";
import RegionIndustries from "@/components/RegionIndustries";
import { GET_HOME_SECTION_12 } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";
import { TextGenerateEffect } from "@/lib/ui/text-generate-effect";
import Aos from "aos";
import { ArrowRight, Play, Zap } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  
const params = useParams();
console.log("Pararar",params);
console.log("Pararar111",params['locale']);
  

  const localeMap = {
  ca: "en-CA",
  ar: "ar",
  en: "en",
  fr: "fr-FR",   // example additional
  es: "es-ES",   // example additional
};
  var locale = "";
  locale = localeMap[params.locale] || "en";
  console.log("para-Local 7777",locale);
 
//  if(params['locale']=='ca')
//  {
//   console.log("GARRAR")
//   locale='en-CA';
//  }

  console.log("para-Local 44",locale);
  
  const [homeData,setHomeData]=useState();

  useEffect(() => {
    Aos.init({ 
      once: true,
    });
  }, []);

  const statsData = [
    { number: "50", label: "Countries Served" },
    { number: "1200", label: "Projects Delivered" },
    { number: "350", label: "Global Clients" },
  ];

  const fetchedData = async()=> {
    try{
      const { data } = await client.query({
        query: GET_HOME_SECTION_12,
        variables: { locale },
      });
      console.log("Home banner data1:",  data?.homes?.[0]);
      setHomeData(data?.homes?.[0]);
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


  if (!homeData) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-4">

        {/* Skeleton for main card / hero section */}
        <div className="w-[80%]  h-[90%] flex items-center justify-center bg-gray-200 rounded-2xl p-4 animate-pulse flex-col gap-4">
          
          {/* Large placeholder for main heading */}
          <div className="w-full h-full bg-gray-300 rounded-lg"></div>

          {/* Placeholder for subheading */}
          <div className="w-3/4 h-8 bg-gray-300 rounded-lg"></div>

          {/* Inner content / stats placeholders */}
          <div className="w-full flex flex-col sm:flex-row items-center  justify-between gap-4 mt-4">
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
          </div>

        </div>

      

      </div>
    );
  }

  return (
    <>
      <div className="home-cover relative w-full min-h-[calc(100vh-80px)] 2xl:h-[calc(100vh-80px)]  top-[80px] flex flex-col items-center justify-center">
        {/* Section 1 */}
        <div 
          data-aos="fade-up"
          data-aos-duration="2000"
          className="  w-11/12 flex flex-col items-center justify-center border boreder-[#0f172914] glass-panel rounded-3xl  p-4
          md:w-4/5 md:h-[85%] md:mt-2  md:p-6
          lg:w-[85%] lg:mt-5
          xl:w-[80%] xl:mt-16
          2xl:mt-0 2xl:w-[65%]">

            <div className="w-full flex flex-col items-center justify-evenly space-y-6 md:space-y-8">
                {/* Heading Button */}
                <div className="flex justify-center items-center">
                  <button className="px-4 flex items-center justify-center gap-2 py-2 border border-[#157de54d] rounded-full ">
                    <div className="text-[#157de5]">
                        <Zap size={18} />
                    </div>

                    <div>
                      <p className="curved-Text text-[14px] montserrat-font">{homeData.heading}</p>
                    </div>
                    
                    
                  </button>
                </div>

                  {/* Title */}
                <div className="w-full flex flex-col items-center justify-center text-center xl:text-[72px] title-Text">
                  <p className="w-full  md:w-3/5  text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text  py-2">
                    {homeData.title1}
                  </p>

                  <p className=" w-full md:w-3/5  text-3xl sm:text-4xl md:text-5xl lg:text-6xl  py-2">
                    {homeData.title2}
                  </p>

                  <p className="w-full md:w-3/5  text-3xl sm:text-4xl md:text-5xl lg:text-6xl  py-2 text-[#157de5]">
                    {homeData.title3}
                  </p>
                </div>
            </div>

            {/* Description */}
            <div className="w-full flex items-center justify-center text-center px-4 md:px-8">
              <div className="w-full md:w-11/12 text-[20px]   md:text-xl py-2 ">
                <p className="para-text poppins-font">{homeData.description}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full flex items-center justify-center py-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full md:w-3/5">
                <button className="secondary-bg flex items-center justify-center gap-2  text-white py-2 px-6 rounded-full text-[14px] poppins-font">
                  <a href={homeData.btn1_link}>{homeData.btn1_text}</a>
                  <ArrowRight size={14} />
                </button>
                <button className=" flex items-center justify-center gap-2 border hover:bg-[#f15c30] hover:text-white border-[#0f172914] bg-white py-2 px-6 rounded-full text-[14px] poppins-font">
                  <Play  size={14}/>
                  <a href={homeData.btn2_link}>{homeData.btn2_text}</a>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-full flex flex-col sm:flex-row  items-center justify-evenly py-4 gap-4 ">
              {statsData.map((item, index) => (
                <div key={index}
                className="w-full sm:w-[45%] md:w-[30%] flex flex-col items-center justify-center p-4 rounded-2xl card-shadow">
                  <HomeCounter end={item.number} duration={2} />
                  <p className="text-[14px] py-1 text-[#65758B] poppins-font">{item.label}</p>
                </div>
              ))}
            </div>

        </div>
      </div>


      {/* section-2 */}
      <div className="w-full h-[100px]  2xl:h-[250px]"></div>

      <section>   
      <HomeServices/>
      </section>

      <section>
      <RegionIndustries/>
      </section>

      <section>
        <RegionClients/>
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
