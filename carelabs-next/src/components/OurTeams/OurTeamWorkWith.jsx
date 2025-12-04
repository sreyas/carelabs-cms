import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import * as Icons from "lucide-react";


const OurTeamWorkWith = ({data}) => {
  if(!data)return null;
  return (
    <div>
        <div className='w-full flex flex-col items-center justify-center mt-20'>
          <div className="w-[80%]">
              <h2 className='text-[36px] montserrat-font font-semibold text-center  my-10'
                  dangerouslySetInnerHTML={{ __html: data.title }}
              ></h2>
                <p className='text-[18px] text-center  para-text  poppins-font'>{data.description}</p>
          </div>
  

            <div className="flex flex-col w-[85%]  glass-panel  rounded-[16px]
               
                2xl:w-[65%] mt-10 ">

              <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-10">

                {data.Where_you_work_Items?.map((item, index) => {
                  // Fetch icon dynamically from lucide-react
                  const IconComponent = Icons[item.icon.trim()] || Icons.Map;

                  return (
                    <div key={index} className="p-10 md:p-5 flex flex-col justify-start gap-3">
                      
                      {/* Icon Box */}
                      <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] light-blue rounded-[16px] 
                                      flex items-center justify-center">
                        <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" />
                      </div>

                      {/* Title */}
                      <h3 className="text-[18px] montserrat-font font-semibold">
                        {item.title}
                      </h3>

                      {/* Countries */}
                      <div className="flex flex-wrap gap-5 text-[14px] para-text">
                        {item.Where_you_work_countries?.map((countryItem, i) => (
                          <p key={i}>{countryItem.country}</p>
                        ))}
                      </div>

                    </div>
                  );
                })}

              </div>

              
              <div className="w-full flex items-center justify-center pt-4 pb-8 ">
                     <div className="w-[80%]   flex items-center justify-center ">
                      <Link href={data.viewLink} className='flex items-center justify-center'>
                       <p className='montserrat-font primary-color font-semibold'>{data.viewText} </p>
                      <ArrowRight color='#2575b6'/>
                      </Link>
                     
              </div>

          
             </div>
               
            </div> 
    </div>
    </div>
  )
}

export default OurTeamWorkWith
