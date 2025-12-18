"use client";

import { MapPin, Shield, Zap } from 'lucide-react';
import React from 'react'
import { clientIcons } from "@/lib/clientIcons";

const HomeClient = ({data}) => {

    console.log("Data in client",data);
    

    if(!data)return null;
      const BadgeIcon =clientIcons[data.badgeicon.trim()];
     
  return (
    <div className=' w-full flex flex-col items-center justify-center py-5 mt-40 lg:mt-60 '>
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4 not-odd:">
            
                {/* Heading */}
                <div className="flex justify-center items-center">
                    <button className="px-4 flex items-center justify-center gap-2 py-2 border border-[#157de54d] rounded-full ">
                    <div className="text-[#157de5]">
                        <BadgeIcon size={18} />
                    </div>

                    <div>
                        <p className="curved-Text text-[14px] montserrat-font">{data.badge}</p>
                    </div>
                    
                    
                    </button>
                </div>
                
                {/* Title */}
                <h2 className="  text-3xl sm:text-4xl md:text-5xl lg:text-[60px] py-4 font-bold montserrat-font"
                  dangerouslySetInnerHTML={{ __html: data.title }}>
                
                </h2>
                
                {/* Description */}
                <p className="px-4 w-[80%] sm:px-8 text-lg  md:text-xl poppins-font para-text">
                  {data.description}
                </p>  
        </div>


        <div
         data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        
        className=" flex flex-col items-center lg:items-stretch justify-center p-5 sm:p-0  gap-10 mt-10
        lg:flex-row lg:w-[80%]
        2xl:w-[65%]"
           >

            <div 
             className=" w-full sm:w-[80%] lg:w-[50%]  p-10 rounded-[24px] glass-panel">
                <h3 className='mb-3 montserrat-font text-[24px] font-semibold '
                 dangerouslySetInnerHTML={{ __html: data.Partners.title }}></h3>
                <p className='mb-6 mt-5 text-gray-500 text-[15.5px] poppins-font leading-7'>{data.Partners.description}</p>
                    <p className='mb-3 text-gray-500 font-semibold text-[14px]'>{data.Partners.Recenttitle}</p>

                <div className="flex flex-col gap-3 lg:mt-5">
                    {data.Partners?.Partners_names?.map((partner) => (
                        <div
                        key={partner.id}
                        className="flex items-center p-4 bg-[#f5f7fb] border border-gray-200 rounded-2xl gap-3 transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-102"
                        >
                        <i className="primary-color">
                            <MapPin size={20}/>
                        </i>
                        <p className="montserrat-font text-sm font-semibold">{partner.countryName}</p>
                        <p>-</p>
                        <p className="poppins-font text-sm text-gray-500">{partner.description}</p>
                        </div>
                    ))}
                 </div>

            </div>
            <div className="w-full sm:w-[80%] lg:w-[50%] flex flex-col justify-center  p-10 rounded-[24px] glass-panel ">
                <h2 className='text-center mb-5 text-[24px] font-semibold montserrat-font '>{data.Clients.title}</h2>
               
            <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center">
                {data.Clients?.Clients_name?.map((client, index) => (
                    <div
                    key={index}
                    className=" flex flex-col items-center bg-[#f5f7fb] border border-gray-200 rounded-xl justify-center py-7 px-3 gap-2 transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-105 hover:bg-white hover:shadow-[0_8px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                    >
                    {client.logo ? <img src={client.logo} alt={client.name} /> : <Shield size={43} className="text-gray-500 hover:text-[#157de5]"  />}
                    <p className="text-[14px] text-gray-600">{client.name}</p>
                    </div>
                ))}
            </div>

            </div>

        </div>
 
       


    </div>
  )
}

export default HomeClient
