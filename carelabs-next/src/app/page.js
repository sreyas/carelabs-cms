
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
import { ArrowRight, Play, Zap } from "lucide-react";
import { useEffect, useState } from "react";


export default function Home() {

  const [homeData,setHomeData]=useState();

  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);

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

const randomVideos = [
  "dQw4w9WgXcQ",
  "kXYiU_JCYtU",
  "RgKAFK5djSk",
  "3JZ_D3ELwOQ",
  "9bZkp7q19f0",
];

const openRandomVideo = () => {
  const randomId = randomVideos[Math.floor(Math.random() * randomVideos.length)];
  setVideoId(randomId);
  setShowVideo(true);
};

useEffect(()=> {
  if (typeof window !== "undefined") {
    window.openRandomVideoGlobal = () => openRandomVideo();
  }
},[])




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
   <div className="home-cover relative w-full min-h-[calc(100vh-80px)] 2xl:h-[calc(100vh-80px)] top-[80px] flex flex-col items-center justify-center">
  {/* Section 1 */}
  <div 
  data-aos="fade-up"
  data-aos-duration="2000"
  className="homeBanner  w-11/12 flex flex-col items-center justify-center border boreder-[#0f172914] glass-panel rounded-3xl  p-4
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
    <div className="w-full flex flex-col items-center justify-center text-center xl:text-[72px] title-Text"

    >
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
          <button className="bg-[#FF7038] flex items-center justify-center gap-2  text-white py-2 px-6 rounded-full text-[14px] poppins-font hover:bg-[#FF4C05]">
            <a 
            
            //href={homeData.btn1_link}
            onClick={(e) => {
            e.preventDefault();
          window.openContactModal();
          }}
            
            >{homeData.btn1_text}</a>
            <ArrowRight size={14} />
          </button>

          {/* <button className=" flex items-center justify-center gap-2 border hover:bg-[#f15c30] hover:text-white border-[#0f172914] bg-white py-2 px-6 rounded-full text-[14px] poppins-font">
            <Play  size={14}/>
            <a href={homeData.btn2_link}>{homeData.btn2_text}</a>
          </button> */}

  <button
  onClick={openRandomVideo}
  className="flex items-center justify-center gap-2 hover:bg-[#FF7038] border hover:border-[#157de54d] hover:text-white border-[#0f172914] bg-white py-2 px-6 rounded-full text-[14px] poppins-font"
>
  <Play size={14} />
  {homeData.btn2_text}
</button>


        </div>
      </div>

      {/* Stats */}
      <div
      data-aos="fade-up"
     data-aos-duration="2000"
      className="w-full flex flex-col sm:flex-row  items-center justify-evenly py-4 gap-4 ">
        {homeData.stats?.map((item, idx) => {
          let numberColor = "";
          if (idx === 0 || idx === 2) numberColor = "#157DE5";
          else if (idx === 1) numberColor = "#FF7038";

          return (
            <div
              key={item.id}
              className="w-full sm:w-[45%] md:w-[30%] flex flex-col items-center justify-center p-4 rounded-2xl card-shadow"
            >
              <HomeCounter end={item.number} duration={2} color={numberColor} />
              <p className="text-[14px] py-1 text-[#65758B] poppins-font">{item.label}</p>
            </div>
          );
        })}
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

      {/* youtubevideo */}

      {showVideo && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={(e) => e.target === e.currentTarget && setShowVideo(false)}
  >
    <div className="bg-black rounded-2xl shadow-xl relative w-[90%] max-w-3xl">
      
      {/* Close button */}
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-3 right-3 text-white text-xl font-bold"
      >
        ✖
      </button>

      {/* YouTube iframe */}
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}



    </>
  );
}
