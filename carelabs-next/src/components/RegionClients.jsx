"use client";

import { MapPin, Shield, Zap } from 'lucide-react';
import React from 'react'

const RegionClients = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center py-5 mt-40 lg:mt-60 '>
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
                    Our Clients
                
                </h1>
                
                {/* Title */}
                <h2 className="gradient-text  text-3xl sm:text-4xl md:text-5xl lg:text-[60px] py-4 font-semibold montserrat-font">
                {/* Comprehensive Power Solutions */}
                    Trusted by Canadian Leaders
                </h2>
                
                {/* Description */}
                <p className="px-4 w-[80%] sm:px-8 text-lg  md:text-xl poppins-font para-text">
                    {/* From analysis to optimization, we deliver end-to-end power system solutions backed by cutting-edge technology and decades of expertise. */}
                    Working with organizations across Canada — from utilities and industrial sites to campuses and commercial property portfolios.
                </p>  
        </div>


        <div className=" flex flex-col items-center lg:items-stretch justify-center p-5 sm:p-0  gap-10 mt-10
        lg:flex-row lg:w-[80%]
        2xl:w-[65%]">

            <div className=" w-full sm:w-[80%] lg:w-[50%]  p-10 rounded-2xl glass-panel">
                <h3 className='mb-3 montserrat-font text-[24px] font-semibold '>Partners in Safety & Reliability</h3>
                <p className='mb-3 poppins-font'>Carelabs partners with Canadian teams from feasibility 
                    through to ongoing maintenance, delivering power system studies and electrical safety 
                    solutions that meet CSA standards and support critical operations coast to coast.</p>
                    <p className='mb-3'>Recent Projects:</p>

            <div className="flex flex-col gap-3 lg:mt-5">
                <div className="flex items-center p-4 light-blue border border-[#2575b6]  rounded-2xl gap-3">
                    <i className='primary-color' ><MapPin /></i>
                    <p className='montserrat-font font-semibold'>Ontario</p>
                    <p>-</p>
                    <p className='poppins-font'>132 kV substation protection review</p>
                </div>
                  <div className="flex items-center p-4 light-blue border border-[#2575b6]  rounded-2xl gap-3">
                    <i className='primary-color' ><MapPin /></i>
                    <p className='montserrat-font font-semibold'>Alberta</p>
                    <p>-</p>
                    <p className='poppins-font'>Power quality audit for manufacturing plant</p>
                </div>
                  <div className="flex items-center p-4 light-blue border border-[#2575b6]  rounded-2xl gap-3">
                    <i className='primary-color' ><MapPin /></i>
                    <p className='montserrat-font font-semibold'>British Columbia</p>
                    <p>-</p>
                    <p className='poppins-font'>Arc-flash study for hospital campus</p>
                </div>
            </div>
            </div>
            <div className="w-full sm:w-[80%] lg:w-[50%] flex flex-col justify-center  p-10 rounded-2xl glass-panel">
                <h2 className='text-center mb-5 text-[24px] font-semibold montserrat-font '>Clients We've Partnered With</h2>
                <div className=" w-full grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center ">

                <div className=" glass-panel flex gap-3 flex-col items-center rounded-xl justify-center py-10">
                    <Shield size={44}/>
                    <p>Hydro One</p>
                </div>

                <div className=" glass-panel  flex gap-3 flex-col items-center rounded-xl justify-center py-10">
                <Shield size={44}/>
                <p>Canadian Manufacturer</p>
                </div>


                <div className=" glass-panel gap-3 flex flex-col items-center rounded-xl justify-center py-10">
                <Shield size={44}/>
                <p>Healthcare Provider</p>
                </div>


                <div className=" glass-panel flex flex-col items-center rounded-xl justify-center py-10">
                <Shield size={44}/>
                <p>Data Centre Operator</p>
                </div>


                <div className="glass-panel flex flex-col items-center rounded-xl justify-center py-10">
                <Shield size={44}/>
                <p>University Campus</p>
                </div>

                <div className=" glass-panel flex flex-col items-center rounded-xl justify-center py-10">
                <Shield size={44}/>
                <p>Industrial Facility</p>
                </div>


             
                </div>
            </div>

        </div>
 
       


    </div>
  )
}

export default RegionClients
