
import React, { useEffect, useState } from 'react'
import client from '@/lib/appollo-client';
import { GET_WORLD_IMPACT } from '@/lib/api-Collection';
import { Globe, Moon, Zap } from 'lucide-react';
import * as LucideIcons from "lucide-react";


const GlobalReach = () => {

 const [impactData, setImpactData] = useState(null);

 const fetchWorldImpact = async () => {
    try {
      const response = await client.query({
        query: GET_WORLD_IMPACT,
      });

      console.log("World Impact Data:", response.data.worldwideImpact);

      
      setImpactData(response.data.worldwideImpact);

    } catch (error) {
      console.log("Error fetching World Impact:", error);
    }
  };

  useEffect(() => {
    fetchWorldImpact();
  }, []);




  
  if (!impactData) return null;

 
  return (
    <div >
         
    <div className="text w-full h-auto flex flex-col items-center justify-center py-10">
    
    <div 
     data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%]  2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4">
      
      {/* Heading */}
      <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
        <div className="text-[#157de5]">
              <Globe size={18} />
          </div>
        {/* Global Reach */}
        {impactData.badge}
      </h1>
      
      
      {/* Title */}
      {/* Worldwide Impact */}
      <p 
      className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] montserrat-font"
      dangerouslySetInnerHTML={{ __html: impactData.title || '' }}
      />
      
      {/* Description */}
      <p className="px-4 sm:px-8 text-lg  md:text-xl para-text poppins-font ">
        {/* Operating across continents with local expertise and global standards. */}
        {impactData.description}
      </p>

    </div>

  </div>




        <div className="cover w-full flex  item-center justify-center p-5 2xl:mb-10">
            <div 
            data-aos="fade-up"
     data-aos-anchor-placement="top-center"
            className="w-[90%] flex flex-col items-center justify-center rounded-2xl md:w-[80%] lg:w-[85%] 2xl:w-[65%] p-4 navbar-shadow ">
     <div className="card-block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center sm:p-5">

              

              {/* {impactData.projectsStat?.map((item, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  key={index} className="cards w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-2 p-3 rounded-2xl card-shadow">
                  <p className='text-[36px] montserrat-font font-bold' dangerouslySetInnerHTML={{ __html: item.count }}></p>
                  <p className='poppins-font text-[14px]'>{item.title}</p>
                  <hr className='w-[90%]' />
                  <p className='text-[12px] poppins-font'>
                    <span dangerouslySetInnerHTML={{ __html: item.countryCount }} /> 
                  </p>
                  <p className='text-[12px] poppins-font'>{item.countryName}</p>

                  </div>
              ))} */}

              {impactData.projectsStat?.map((item, index) => (
  <div
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-delay={index * 100}
    key={index} 
    className="cards w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-2 p-3 rounded-2xl card-shadow transform transition-all duration-300 hover:scale-105"
  >
    <p className='text-[36px] montserrat-font font-bold' dangerouslySetInnerHTML={{ __html: item.count }}></p>
    <p className='poppins-font text-[14px]'>{item.title}</p>
    <hr className='w-[90%]' />
    <p className='text-[12px] poppins-font'>
      <span dangerouslySetInnerHTML={{ __html: item.countryCount }} /> 
    </p>
    <p className='text-[12px] poppins-font'>{item.countryName}</p>
  </div>
))}

 


                </div>





     <div className="card-text grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center p-5">

       

{/* {impactData.successStat?.map((item, index) => {
  const IconComponent = LucideIcons[item.icon]; // ← dynamic icon

  return (
    <div 
      key={index} 
      className="cards w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-3 p-3"
    >
      <div className="w-[45px] h-[45px] primary-color flex items-center justify-center light-blue rounded-full">
        {IconComponent ? <IconComponent /> : <LucideIcons.HelpCircle />} 
      </div>

      <p>{item.title}</p>

      <p 
        className="text-2xl font-bold poppins-font text-center" 
        dangerouslySetInnerHTML={{ __html: item.value }}
      ></p>
    </div>
  )
})} */}

{impactData.successStat?.map((item, index) => {
    const IconComponent = LucideIcons[item.icon];
    
    const colors = [
      { 
        icon: 'text-[#2575b6]', 
        text: 'text-[#2575b6]', 
        border: 'border-[#2575b6]',
        shadow: 'shadow-[0_4px_20px_rgba(37,117,182,0.3)]',
        bg: 'bg-[#2575b6]/10'
      }, // Blue
      { 
        icon: 'text-[#10b981]', 
        text: 'text-[#10b981]', 
        border: 'border-[#10b981]',
        shadow: 'shadow-[0_4px_20px_rgba(16,185,129,0.3)]',
        bg: 'bg-[#10b981]/10'
      }, // Green
      { 
        icon: 'text-[#2575b6]', 
        text: 'text-[#2575b6]', 
        border: 'border-[#2575b6]',
        shadow: 'shadow-[0_4px_20px_rgba(37,117,182,0.3)]',
        bg: 'bg-[#2575b6]/10'
      }, // Blue
      { 
        icon: 'text-[#f15c30]', 
        text: 'text-[#f15c30]', 
        border: 'border-[#f15c30]',
        shadow: 'shadow-[0_4px_20px_rgba(241,92,48,0.3)]',
        bg: 'bg-[#f15c30]/10'
      }, // Orange
    ];
    
    const colorScheme = colors[index] || colors[0];

    return (
      <div 
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay={index * 150}
        key={index} 
        className="cards w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-3 p-3 transform transition-all duration-300 hover:scale-105"
      >
        <div className={`w-[45px] h-[45px] ${colorScheme.icon} ${colorScheme.bg} ${colorScheme.shadow} flex items-center justify-center rounded-full transition-all duration-500`}>
          {IconComponent ? <IconComponent size={24} /> : <LucideIcons.HelpCircle size={24} />} 
        </div>

        <p className="text-sm text-gray-600">{item.title}</p>

        <div className="relative inline-block">
          <p 
            className={`text-2xl font-bold poppins-font text-center ${colorScheme.text}`}
            dangerouslySetInnerHTML={{ __html: item.value }}
          ></p>
          
          <div 
            className={`absolute bottom-0 left-0 right-0 h-[2px] ${colorScheme.border} border-b-2 animate-slide-up`}
            style={{
              animation: `slideUp 0.6s ease-out ${index * 150 + 800}ms forwards`,
              transform: 'translateY(10px)',
              opacity: 0
            }}
          ></div>
        </div>
      </div>
    );
})}
       
            </div>



            </div>
       


        </div>
      
    </div>
  )
}

export default GlobalReach
