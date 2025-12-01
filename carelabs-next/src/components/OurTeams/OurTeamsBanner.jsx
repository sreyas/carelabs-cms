"use client";

import { ArrowDownFromLine } from 'lucide-react';
import carelabzImage from '@/assets/carlabz.jpg'
import React from 'react'

const OurTeamsBanner = () => {
  return (
    <div className=' w-full flex items-center justify-center mt-[]'>

        <div className="flex flex-col w-[85%] p-5 rounded-2xl glass-panel
            md:p-10
            lg:flex-row
            2xl:w-[65%]  bg-white  mt-[120px]">
            <div className="left_section w-full
                lg:w-[50%] lg:p-5">
                <h1 className=' text-[36px] montserrat-font font-semibold leading-10
                    md:text-[48px] md:leading-13
                    lg:text-[48px]
                    xl:text-[60px] xl:leading-14 mb-5 '>
                        The people behind safer electrical systems
                </h1>
                <p className='
                    text-[16px]
                    md:pe-5
                    lg:text-[18px] poppins-font para-text mb-5'>Carelabs is a cross-functional team of electrical engineers
                        , field technicians, and compliance specialists
                        working across 50+ countries to keep power systems safe, compliant, and optimized.
                </p>
                <div className="flex flex-col py-3  gap-3
                    sm:flex-row ">
                    <div className="flex items-center justify-center gap-2 card-shadow border border-[#dae9fd] bg-white px-4 py-2 rounded-4xl">
                        <p className='montserrat-font font-semibold text-[24px]'>10+</p>
                        <p className='poppins-font text-[14px]'>years in the field</p>
                    </div>
                      <div className="flex items-center justify-center  gap-2 card-shadow border border-[#dae9fd] bg-white px-4 py-2 rounded-4xl">
                        <p className='montserrat-font font-semibold text-[24px]'>25+</p>
                        <p className='poppins-font text-[14px]'>certified engineers</p>
                    </div>
                </div> 

                <div className="flex flex-col gap-3 py-3
                 sm:flex-row ">
                   <button className='py-2 px-5 text-[14px] secondary-bg border border-[#dae9fd] text-white rounded-4xl poppins-font '>Meet the Leadership</button>  
                   <button className='poppins-font text-[14px] p-2 px-5 bg-white rounded-4xl border border-[#dae9fd]'>Work With Our Team</button> 
                </div>   
                <div className="flex items-center gap-2 text-[14px] mt-5">
                    <p>Scroll to meet our team </p>
                <ArrowDownFromLine size={14}/>
                </div>
            </div>
            <div className="right_section flex items-center justify-center w-full  mt-[80px] lg:mt-0 lg:w-[50%] md:p-8 xl:p-14 ">
            <div
                className="Img relative w-full  h-[300px] md:h-[500px] lg:w-full lg:h-full bg-cover bg-center rounded-xl"
                style={{
                    backgroundImage: `url(${carelabzImage.src})`
                }}
                >
                    {/* Top-left */}
                    <div className="p-2 w-[130px] h-[100px] flex items-end justify-start rounded-2xl border-2 border-white  bg-amber-900 absolute rotate-12 -top-10 -right-1/12
                     sm:w-[160px] 
                     md:w-[180px] md:h-32  md:p-3    
                     "
                        style={{
                    backgroundImage: `url(${carelabzImage.src})`
                }}>
                    <p className='text-[14px] px-1 rounded-2xl bg-white md:px-3 '>On-site testing</p>
                    </div>

                    {/* Bottom-left */}
                    <div className="w-[130px] h-[100px] p-2 rounded-2xl border-2 border-white md:p-3  flex items-end justify-start  bg-amber-400 absolute -rotate-6 bottom-10 -left-1/12
                    md:w-[180px] md:h-32
                     "
                        style={{
                    backgroundImage: `url(${carelabzImage.src})`
                }}>
                      <p className='text-[14px] px-1 md:px-3 rounded-2xl bg-white'>On-site testing</p>
                    </div>

                    {/* Top-right */}
                    <div className="w-[130px] h-[80px] not-first-of-type: md:w-[160px] rounded-2xl border-2 border-white p-3  flex items-end justify-start  bg-amber-100 absolute rotate-12 bottom-1/4 -right-1/12
                    md:h-28 "
                       style={{
                    backgroundImage: `url(${carelabzImage.src})`
                }}>
                        <p className='text-[14px] px-1 md:px-3 rounded-2xl bg-white'>On-site testing</p>
                    </div>
            </div>

           </div>        
        </div>
        

        
     
    </div>
  )
}

export default OurTeamsBanner
