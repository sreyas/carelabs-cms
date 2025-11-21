import React, { useEffect, useState } from 'react'
import client from '@/lib/appollo-client';
import { GET_WORLD_IMPACT } from '@/lib/api-Collection';


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
    
    <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4">
      
      {/* Heading */}
      <h1 className="text-xs sm:text-sm md:text-base px-6 py-2 rounded-full border border-blue-500">
        {/* Global Reach */}
        {impactData.badge}
      </h1>
      
      {/* Title */}
      <p className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      dangerouslySetInnerHTML={{ __html: impactData.title }}
      >
        {/* Worldwide Impact */}
      </p>
      
      {/* Description */}
      <p className="px-4 sm:px-8 text-lg  md:text-xl text-[#65758B]">
        {/* Operating across continents with local expertise and global standards. */}
        {impactData.description}
      </p>

    </div>

  </div>




        <div className="cover w-full flex  item-center justify-center p-5 2xl:mb-10">
            <div className="w-[90%] flex flex-col items-center justify-center rounded-2xl  2xl:w-[65%] p-4 navbar-shadow ">
     <div className="card-block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center sm:p-5">

              

                {impactData.projectsStat?.map((item, index) => (
              <div key={index} className="cards w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-2 p-3 rounded-2xl card-shadow">
                <p className='text-4xl font-bold'>{item.count}</p>
                <p>{item.title}</p>
                <hr className='w-[90%]' />
                <p className='text-[14px]'>{item.countryCount} Countries</p>
                <p className='text-[14px]'>{item.countryName}</p>
              </div>
            ))}

            </div>





     <div className="card-text grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center p-5">

       
                
                {impactData.successStat?.map((item, index) => (
              <div key={index} className="cards w-[90%] sm:w-[95%] flex flex-col items-center justify-center gap-3 p-3">
                <div className="w-[45px] h-[45px] flex items-center justify-center bg-blue-300 rounded-full">
                  <i className="fa-regular fa-moon" style={{ color: "#3b82f6" }}></i>
                </div>
                <p>{item.title}</p>
                <p className='text-2xl font-bold'>{item.value}</p>
              </div>
            ))}
               
            </div>



            </div>
       


        </div>
      
    </div>
  )
}

export default GlobalReach
