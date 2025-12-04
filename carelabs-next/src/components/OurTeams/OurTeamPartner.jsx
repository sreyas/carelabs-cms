import React from 'react'
import * as Icons from "lucide-react";

const OurTeamPartner = ({data}) => {

    if(!data)return null;

     const items = data.How_We_Partner_Items || [];

  return (
    <div>
        <div className='w-full flex flex-col items-center justify-center mt-20 mb-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[65%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'
                      dangerouslySetInnerHTML={{ __html: data.title }}
                    ></h2>
                    <p className='text-[18px]   para-text  poppins-font'>{data.description}</p>
                </div>

              <div className="flex flex-col gap-5 w-[85%] py-5 rounded-2xl mt-10 glass-panel
                    lg:flex-row 2xl:w-[65%]">

      {items.map((item, index) => {
        const Icon = Icons[item.icon] || Icons.HelpCircle; // fallback icon

        return (
          <div key={index} className="flex items-center justify-around py-5 lg:flex-col">
            
            {/* ICON BLOCK */}
            <div className="w-[20%] flex items-center justify-center lg:w-full">
              <div className="w-[80px] h-[80px] rounded-full gradient-bg flex items-center justify-center">
                <Icon size={40} color="white" />
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="w-[60%] text-center p-4 lg:w-full">
              <p className="secondary-color text-[14px] font-medium">{item.step}</p>
              <h3 className="montserrat-font text-[20px] font-semibold">{item.title}</h3>
              <p className="text-[16px] poppins-font para-text">{item.description}</p>
            </div>

          </div>
        );
      })}

    </div>    
    </div>
    </div>
  )
}

export default OurTeamPartner
