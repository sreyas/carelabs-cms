
import React, { useEffect, useState } from 'react'
import client from '@/lib/appollo-client';
import { GET_HOME_SERVICES_BY_LOCALE } from '@/lib/api-Collection';
import { CircleCheckBig, Zap, Check } from 'lucide-react';
import * as LucideIcons from "lucide-react";
import { useParams } from 'next/navigation';

const HomeServices = () => {

  const params = useParams();
  let locale = params.locale;

  if (locale == "CA" || locale == "ca") {
    locale = "en-CA"
  } else {
    locale = "en"
  }

  console.log("Local", locale);


  const [globalReachData, setGlobalReachData] = useState(null)
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)



  const fetchGlobalReach = async () => {
    try {
      const response = await client.query({
        query: GET_HOME_SERVICES_BY_LOCALE,
        variables: { locale },
      });
      console.log("globalData:", response.data.homeSerivices)

      setGlobalReachData(response.data.homeSerivices[0])
    } catch (error) {
      console.log("Error fetching Global Reach:", error);
    }
  };

  useEffect(() => {
    fetchGlobalReach()
  }, []);


  if (!globalReachData) return null;

  const items = globalReachData.home_service_items || [];

  const activeItem = items[activeServiceIndex];

  return (
    <div className=' w-full flex flex-col items-center justify-center py-5 mt-20 lg:mt-24 '>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        //className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4 not-odd:"
        className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4"
        
        >

        {/* Heading */}
        {/* <h1 className="text-xs flex mb-4 items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
          <div className="text-[#157de5]">
            <Zap size={18} />
          </div>

          {globalReachData.badge}
        </h1> */}

        <div className="flex justify-center items-center">
  <div
    className="
      inline-flex items-center justify-center
      w-auto h-[42px]
      px-[21px] py-[11px]
      gap-[8px]
      border border-[#157de5]
      rounded-[9999px]
      bg-white
      poppins-font text-[14px]
    "
  >
    <span className="text-[#157de5]">
      <Zap size={18} />
    </span>

    <span>
      {globalReachData.badge}
    </span>
  </div>
</div>


        <p
          className=" text-3xl mb-4 sm:text-4xl md:text-5xl lg:text-[60px] font-bold montserrat-font"
          dangerouslySetInnerHTML={{ __html: globalReachData.title || '' }}
        />



        <p className="px-4 sm:px-8 text-lg  md:text-xl poppins-font para-text">
          {globalReachData.description}
        </p>

      </div>

  <div className="w-[90%] md:w-[80%]
    2xl:w-[65%] 0 mt-10">
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-5">
        {/* <div className=" w-full lg:w-[50%]  2xl:w-[45%] flex flex-col items-center  gap-3">
            {items.map((item, index) => {
                // Get the icon component dynamically from lucide-react
                const IconComponent = LucideIcons[item.icon]; // item.icon must match the Lucide icon name exactly

                return (
                  <div
                    key={index}
                    onClick={() => setActiveServiceIndex(index)}
                    className={`w-full  lg:w-full  rounded-2xl p-2 2xl:p-4  flex justify-start gap-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer
                      ${activeServiceIndex === index ? "bg-[#dae9fd] border border-[#2575b6]" : "bg-[#f2f6fc]"}
                    `}
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

        </div> */}

    <div className="w-full lg:w-[50%] 2xl:w-[45%] flex flex-col items-center gap-3">
    {items.map((item, index) => {
    const IconComponent = LucideIcons[item.icon];

    return (
      <div
        key={index}
        onClick={() => setActiveServiceIndex(index)}
        className={`
          w-[417.49px] 
          h-[92.64px]
          max-w-full
          rounded-[16px]
          flex items-center 
          gap-4
          px-4
          shadow-md hover:shadow-lg transition-shadow cursor-pointer
          ${activeServiceIndex === index 
            ? "bg-[#dae9fd] border border-[#2575b6]" 
            : "bg-[#f2f6fc]"
          }
        `}
      >
        {/* Icon Section */}
        <div className="flex justify-center items-center">
          <div className="w-[49.44px] h-[49.44px] bg-[#dae9fd] rounded-[12px] flex items-center justify-center">
            {IconComponent ? <IconComponent size={28} color="#2575b6" /> : null}
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col">
          <p className="text-[16px] font-bold text-[#1f1f1f] leading-tight montserrat-font">
            {item.name}
          </p>
          <p className="text-[12px] text-gray-600 mt-1">
            Click to explore details
          </p>
        </div>
      </div>
    );
  })}
</div>

           <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                //className="w-full h-full rounded-3xl bg-white shadow-lg overflow-hidden flex flex-col" 

                className="
                w-full 
                max-w-[842.67px]     
                h-auto 
                lg:h-[694px]         
                rounded-3xl 
                bg-white 
                shadow-lg 
                overflow-hidden 
                flex flex-col
                "
                
                >

                {/* Hero Section */}
                <div

                  //className="relative w-full h-[250px] sm:h-[300px] lg:h-[40%] bg-cover bg-center flex flex-col justify-end p-5 sm:p-6 lg:p-8 gap-3"

                  className="
                  relative 
                  w-[840.67px] 
                  h-[256px] 
                  max-w-full       /* keeps it responsive on small screens */
                  bg-cover bg-center 
                  flex flex-col justify-end 
                  p-5 sm:p-6 lg:p-8 
                  gap-3
                  "
                  
                  // style={{ backgroundImage: `url('https://proper-hug-7f40206151.media.strapiapp.com/service2_9d7db5d882.jpg')` }}
                  style={{ backgroundImage: `url('${activeItem?.Image?.url}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-transparent z-10"></div>
                  <div className="z-20 mb-2 sm:mb-4 lg:mb-5 flex flex-col justify-end gap-2 sm:gap-3 lg:gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#dae9fd] rounded-[12px]">
                        {(() => {
                          const IconComponent = activeItem?.icon ? LucideIcons[activeItem.icon] : null;
                          return IconComponent ? <IconComponent size={30} className="text-[#2575b6]" /> : null;
                        })()}
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

                  <hr className="w-[15%] rounded-full h-[2px] bg-gradient-to-r from-[#2575B6] to-[#F15C30] border-none" />

                  {/* Key Features */}
                  <div>
                    <h4 className="mb-3 font-semibold text-[14px] primary-color">KEY FEATURES</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2  text-sm sm:text-base ">
                      {activeItem?.serviceFeatures?.map((feat, idx) => (
                        <div key={idx}
                          className="flex items-center  gap-2 ">
                          {/* <CircleCheckBig size={20} className='text-green-300' /> */}
                          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(5, 150, 105, 0.1)' }}>
                            <Check size={12} className="text-[#059669]" />
                          </div>
                          <li key={idx} className='poppins-font text-[16px] font-medium'> {feat.name}</li>
                        </div>

                      ))}
                    </ul>
                  </div>

                  {/* Performance Metrics */}

              <div>
             <p className="mb-3 font-semibold text-[14px] primary-color">
             PERFORMANCE METRICS
             </p>

             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:justify-evenly gap-4 sm:gap-2">
             {activeItem?.performance?.map((p, idx) => (
             <div 
             key={idx} 
             className="flex flex-col items-start text-left sm:items-center sm:text-center"
             >
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

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
  
  {/* Primary Button */}
  <a href={activeItem?.button1link}>
    <button
      className="
        w-[177px]
        h-[48px]
        bg-[#FF7038]
        text-white
        font-bold
        rounded-[9999px]
        flex items-center justify-center
        hover:bg-[#ff5722]
        transition-colors
        cursor-pointer
        monserrat-font
      "
    >
      {activeItem?.button1text}
    </button>
  </a>

  {/* Secondary Button */}
  <a href={activeItem?.button2link}>
    <button
      className="
        w-[177px]
        h-[48px]
        border-2 border-blue-400
        text-blue-400
        font-semibold
        rounded-[9999px]
        flex items-center justify-center
        hover:bg-blue-50
        transition-colors
        cursor-pointer
        monserrat-font
      "
    >
      {activeItem?.button2text}
    </button>
  </a>

</div>


                </div>
              </div>
        </div>
      </div>

    </div>




  )
}

export default HomeServices
