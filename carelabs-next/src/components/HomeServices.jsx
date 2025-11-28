
import React, { useEffect, useState } from 'react'
import client from '@/lib/appollo-client';
import { GET_GLOBAL_REACH } from '@/lib/api-Collection';
import { CircleCheckBig, Zap } from 'lucide-react';
import * as LucideIcons from "lucide-react";

const HomeServices = () => {

const [globalReachData, setGlobalReachData] = useState(null)
const [activeServiceIndex, setActiveServiceIndex] = useState(0)
// const IconComponent = LucideIcons[activeItem?.icon];


const fetchGlobalReach = async () => {
    try {
        const response = await client.query({
            query:GET_GLOBAL_REACH,
        });
        console.log("globalData:", response.data.homeSerivices)

        setGlobalReachData(response.data.homeSerivices[0])
    } catch (error) {
        console.log("Error fetching Global Reach:", error);
    }
};

 useEffect(()=> {
  fetchGlobalReach()
 },[]);
 

 if (!globalReachData) return null;

 const items = globalReachData.home_service_items || [];

 const activeItem = items[activeServiceIndex];

  return (
<div className="">
         <div className="text w-full h-auto flex flex-col items-center justify-center py-8">
    
    <div
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4 not-odd:">
      
      {/* Heading */}
      <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
        <div className="text-[#157de5]">
              <Zap size={18} />
          </div>

        {/* Global Reach */}
        {globalReachData.badge}
      </h1>
      
      {/* Title */}
      <p className="gradient-text  text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold montserrat-font">
       {/* Comprehensive Power Solutions */}
       {globalReachData.title}
      </p>
      
      {/* Description */}
      <p className="px-4 sm:px-8 text-lg  md:text-xl poppins-font para-text">
       {/* From analysis to optimization, we deliver end-to-end power system solutions backed by cutting-edge technology and decades of expertise. */}
       {globalReachData.description}
      </p>

    </div>

  </div>

      <div className="w-full min-h-screen  py-8 lg:py-0 ">
      <div className="w-full h-full xl:h-screen flex items-center justify-center px-4">
        <div
         
        className="flex flex-col justify-center items-center gap-4
        lg:flex-row  lg:gap-0
        xl:w-[85%] xl:h-[80%]
        2xl:w-[65%]  ">

            {/* Service Cards Column */}
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className=" w-full h-full flex flex-col justify-start items-center p-3 gap-3 lg:gap-5 overflow-y-auto
            lg:w-[85%] 
            xl:w-[40%]   ">


                {items.map((item, index) => {
                  // Get the icon component dynamically from lucide-react
                  const IconComponent = LucideIcons[item.icon]; // item.icon must match the Lucide icon name exactly

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveServiceIndex(index)}
                      className={`w-full sm:w-[85%] lg:w-full min-h-[70px] lg:h-[80px] rounded-2xl p-4 lg:p-5 flex justify-start gap-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                        activeServiceIndex === index ? "border border-[#2575b6] bg-[#dae9fd]" : ""
                      }`}
                    >
                      <div className="text-[#2575b6] w-[20%] flex items-center justify-center">
                        <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#dae9fd] rounded-xl">
                          {IconComponent ? <IconComponent size={30} /> : null}
                        </div>
                      </div>
                      <div className="w-[80%]">
                        <p className="text-[16px] font-bold">{item.name}</p>
                        <p className="text-[12px] text-gray-600">Click to explore details</p>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Detail Panel */}
            <div      
            className="w-full  h-auto flex p-3 justify-center
            md:w-[85%]
            lg:h-full
            xl:w-[60%] ">
                <div 
                 data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                className="w-full h-full rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col">
                    
                    {/* Hero Section */}
                    <div

                        className="relative w-full h-[250px] sm:h-[300px] lg:h-[40%] bg-cover bg-center flex flex-col justify-end p-5 sm:p-6 lg:p-8 gap-3"
                        // style={{ backgroundImage: `url('https://proper-hug-7f40206151.media.strapiapp.com/service2_9d7db5d882.jpg')` }}
                        style={{ backgroundImage: `url('${activeItem?.Image?.url}')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-transparent z-10"></div>
                        <div className="z-20 mb-2 sm:mb-4 lg:mb-5 flex flex-col justify-end gap-2 sm:gap-3 lg:gap-4">
                          <div className="flex items-center gap-2">
                           <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#dae9fd] rounded-xl">
                              <Zap size={30}/>
                          </div>
                              <p className="text-2xl sm:text-3xl lg:text-[30px] font-bold montserrat-font">
                                {activeItem?.name}
                            </p>
                          </div>
                            
                            <p className="text-[16px] poppins-font text-[#4B5563] ">
                                {activeItem?.description}
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full flex-1 flex flex-col justify-between gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8">
                        
                        <hr className="w-[15%] rounded-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 border-none"/>
                        
                        {/* Key Features */}
                        <div>
                            <h4 className="mb-3 font-semibold text-[14px] primary-color">KEY FEATURES</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2  text-sm sm:text-base">
                                {activeItem?.serviceFeatures?.map((feat, idx) => (
                                  <div key={idx}
                                  className="flex items-center  gap-2 ">
                                    <CircleCheckBig size={20} className='text-green-300' />
                                    <li key={idx} className='poppins-font text-[16px] font-medium'> {feat.name}</li>
                                  </div>
                                
                                 ))}
                            </ul>
                        </div>

                        {/* Performance Metrics */}
                        <div>
                            <p className="mb-3 font-semibold text-[14px] primary-color">PERFORMANCE METRICS</p>
                            <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-evenly gap-4 sm:gap-2">

                                {activeItem?.performance?.map((p, idx) => (
                                 <div key={idx} className="flex items-center justify-center flex-col text-center">
                                  <p
                                    className="text-xl sm:text-2xl font-bold"
                                    dangerouslySetInnerHTML={{ __html: p.stats }}
                                  />
                                 <p className="text-xs sm:text-sm text-gray-600">{p.name}</p>
                                 </div>
                                 ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7038] rounded-full text-white font-bold hover:bg-[#ff5722] transition-colors">
                                <a href="#demo">Request Demo</a>
                            </button>
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-50 transition-colors">
                                <a href="#learn">Learn more</a>
                            </button>
                        </div> */}

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                    <a href={activeItem?.button1link}>
                      <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#FF7038] rounded-full text-white font-bold hover:bg-[#ff5722] transition-colors">
                        {activeItem?.button1text}
                      </button>
                    </a>

                    <a href={activeItem?.button2link}>
                      <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-50 transition-colors">
                        {activeItem?.button2text}
                      </button>
                    </a>
                  </div>

                    </div>
                </div>
            </div>
           
        </div>
      </div>
    </div>

</div>


  )
}

export default HomeServices
