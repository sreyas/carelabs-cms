"use client";

import React from 'react'
import * as LucideIcons from "lucide-react";


const OurTeamsWrkTogether = ({data}) => {
    console.log("WrkTogether",data);

    if(!data)return null
    
  return (
    <div className='w-full flex flex-col items-center justify-center mt-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[65%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'
                     dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                    <p className='text-[18px]  para-text  poppins-font'>{data.description}</p>
                </div>

        <div className="flex flex-col w-[85%] p- rounded-2xl mt-10
            2xl:w-[65%]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.Work_Together_Items?.map((item, index) => {
                            // Dynamically get icon from API using LucideIcons
                            const IconComponent = item.icon ? LucideIcons[item.icon] : null;

                            return (
                            <div
                                key={index}
                                className="p-8 flex flex-col justify-center gap-4 glass-panel"
                            >
                                <div className="w-[70px] h-[70px] rounded-xl flex items-center justify-center light-blue">
                                {IconComponent && <IconComponent size={24} color="#157de5" />}
                                </div>

                                <h3 className="montserrat-font font-semibold text-[20px]">
                                {item.title}
                                </h3>
                                <p className="poppins-font text-[16px] para-text">
                                {item.description}
                                </p>
                            </div>
                            );
                        })}
                </div>
        </div>       
    </div>
  )
}

export default OurTeamsWrkTogether
