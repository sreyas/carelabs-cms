
import React, { useEffect, useState } from 'react'
import client from '@/lib/appollo-client';
import { GET_GLOBAL_REACH } from '@/lib/api-Collection';

const HomeServices = () => {

const [globalReachData, setGlobalReachData] = useState(null)
const [activeServiceIndex, setActiveServiceIndex] = useState(0)

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
 },[])

 if (!globalReachData) return null;

 const items = globalReachData.home_service_items || [];

 const activeItem = items[activeServiceIndex];

  return (
<div className="">
         <div className="text w-full h-auto flex flex-col items-center justify-center py-10">
    
    <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4">
      
      {/* Heading */}
      <h1 className="text-xs sm:text-sm md:text-base px-6 py-2 rounded-full border border-blue-500">
        {/* Global Reach */}
        {globalReachData.badge}
      </h1>
      
      {/* Title */}
      <p className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
       {/* Comprehensive Power Solutions */}
       {globalReachData.title}
      </p>
      
      {/* Description */}
      <p className="px-4 sm:px-8 text-lg  md:text-xl text-[#65758B]">
       {/* From analysis to optimization, we deliver end-to-end power system solutions backed by cutting-edge technology and decades of expertise. */}
       {globalReachData.description}
      </p>

    </div>

  </div>

      <div className="w-full min-h-screen  py-8 lg:py-0 ">
      <div className="w-full h-full lg:h-screen flex items-center justify-center px-4">
        <div className="flex flex-col lg:flex-row xl:w-full 2xl:w-[65%] lg:h-[80%] gap-4 lg:gap-0">

            {/* Service Cards Column */}
            <div className="w-full lg:w-[35%] h-full flex flex-col justify-start items-center p-3 gap-3 lg:gap-5 overflow-y-auto">


                {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`w-full sm:w-[85%] lg:w-full min-h-[70px] lg:h-[80px] rounded-2xl bg-white p-4 lg:p-5 flex justify-center flex-col shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                    activeServiceIndex === index ? "border border-blue-500" : ""
                  }`}
                >
                  <p className="text-lg sm:text-xl  font-bold">
                    {item.name}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-[14px] text-gray-600">
                    Click to explore details
                  </p>
                </div>
              ))}

            </div>

            {/* Detail Panel */}
            <div className="w-full lg:w-[65%] h-auto lg:h-full flex p-3 justify-center">
                <div className="w-full h-full rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col">
                    
                    {/* Hero Section */}
                    <div
                        className="relative w-full h-[250px] sm:h-[300px] lg:h-[40%] bg-cover bg-center flex flex-col justify-end p-5 sm:p-6 lg:p-8 gap-3"
                        // style={{ backgroundImage: `url('https://proper-hug-7f40206151.media.strapiapp.com/service2_9d7db5d882.jpg')` }}
                        style={{ backgroundImage: `url('${activeItem?.Image?.url}')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10"></div>
                        <div className="z-20 mb-2 sm:mb-4 lg:mb-5 flex flex-col justify-end gap-2 sm:gap-3 lg:gap-4">
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                {activeItem?.name}
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg">
                                {activeItem?.description}
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full flex-1 flex flex-col justify-between gap-4 sm:gap-6 p-5 sm:p-6 lg:p-8">
                        
                        <hr className="w-[15%] rounded-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 border-none"/>
                        
                        {/* Key Features */}
                        <div>
                            <p className="mb-3 font-semibold text-sm sm:text-base">Key Features</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-sm sm:text-base">
                                {/* <li>Demand Response</li>
                                <li>Load Shifting</li>
                                <li>Energy Storage</li>
                                <li>Peak Management</li> */}
                                {activeItem?.serviceFeatures?.map((feat, idx) => (
                                 <li key={idx}>{feat.name}</li>
                                 ))}
                            </ul>
                        </div>

                        {/* Performance Metrics */}
                        <div>
                            <p className="mb-3 font-semibold text-sm sm:text-base">PERFORMANCE METRICS</p>
                            <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-evenly gap-4 sm:gap-2">
                                {/* <div className="flex items-center justify-center flex-col text-center">
                                    <p className="text-xl sm:text-2xl font-bold">35% Savings</p>
                                    <p className="text-xs sm:text-sm text-gray-600">Energy Costs Reduced</p>
                                </div>
                                <div className="flex items-center justify-center flex-col text-center">
                                    <p className="text-xl sm:text-2xl font-bold">99% Uptime</p>
                                    <p className="text-xs sm:text-sm text-gray-600">System Reliability</p>
                                </div>
                                <div className="flex items-center justify-center flex-col text-center">
                                    <p className="text-xl sm:text-2xl font-bold">50% Faster</p>
                                    <p className="text-xs sm:text-sm text-gray-600">Response Time</p>
                                </div> */}
                                {activeItem?.performance?.map((p, idx) => (
                                 <div key={idx} className="flex items-center justify-center flex-col text-center">
                                 <p className="text-xl sm:text-2xl font-bold">{p.stats}</p>
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
