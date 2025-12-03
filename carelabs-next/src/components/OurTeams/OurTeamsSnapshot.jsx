"use client";
import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'
import { Award,Globe,Activity,Users } from 'lucide-react';


const OurTeamsSnapshot = () => {
  return (
  <div className='w-full flex justify-center bg-geen-300'>

  <div className="
    flex flex-col w-[85%] p-5 rounded-2xl glass-panel
    sm:p-10
    lg:flex-row lg:justify-start lg:items-start
    2xl:w-[65%] bg-white mt-[120px]
  ">

    {/* LEFT DIV */}
    <div className="w-full lg:w-[60%] bg--400 lg:p-4">
      <h2 className='text-[36px] font-semibold montserrat-font leading-9 mb-5'>Who We Are in a Snapshot</h2>
      <p className='poppins-font para-text text-[16px] mb-5'>
        Carelabs is an electrical safety and power system study specialist. We focus on helping organizations understand and mitigate electrical risks before they become failures or compliance issues.
      </p>
      <p className='poppins-font para-text text-[16px] mb-5'>
        Our work spans multiple countries with a strong presence in the GCC, India, and Canada. We serve utilities, industrial facilities, commercial buildings, and critical infrastructure operators who need expert analysis and documentation.
      </p>
      <p className='poppins-font para-text text-[16px] mb-5'>
        From low voltage distribution to medium voltage systems, we deliver inspections, power system studies, thermography, relay coordination, and arc-flash analysis that meet international and local standards.
      </p>
    </div>

    {/* RIGHT DIV */}
    <div className="w-full lg:w-[40%] lg:p-5 bg--400 mt-5 lg:mt-0">
      <div className="img w-full h-[200px] sm:h-[300px] lg:h-[200px] rounded-2xl" 
           style={{ backgroundImage: `url(${carelabzImage.src})` }}></div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        <div className="p-6 rounded-2xl shadow-lg border border-transparent hover:border-[#dae9fd] transition-all duration-300">
          <Award size={36} color="#157de5"/>
          <p className='text-[36px] font-extrabold montserrat-font text-[#157de5]'>10+</p>
          <p className='text-[16px] lg:text-[14px] poppins-font'>Years in high-risk electrical environments</p>
        </div>
        <div className="p-6 rounded-2xl shadow-lg border border-transparent hover:border-[#dae9fd] transition-all duration-300">
          <Users size={36} color="#ff7038"/>
          <p className='text-[36px] font-extrabold montserrat-font text-[#ff7038]'>10+</p>
          <p className='text-[16px] lg:text-[14px] poppins-font'>Years in high-risk electrical environments</p>
        </div>
        <div className="p-6 rounded-2xl shadow-lg border border-transparent hover:border-[#dae9fd] transition-all duration-300">
          <Activity size={36} color="#157de5"/>
          <p className='text-[36px] font-extrabold montserrat-font text-[#157de5]'>10+</p>
          <p className='text-[16px] lg:text-[14px] poppins-font'>Years in high-risk electrical environments</p>
        </div>
        <div className="p-6 rounded-2xl shadow-lg border border-transparent hover:border-[#dae9fd] transition-all duration-300">
          <Globe size={36} color="#ff7038"/>
          <p className='text-[36px] font-extrabold montserrat-font text-[#ff7038]'>10+</p>
          <p className='text-[16px] lg:text-[14px] poppins-font'>Years in high-risk electrical environments</p>
        </div>
      </div>
    </div>

  </div>
</div>

  )
}

export default OurTeamsSnapshot