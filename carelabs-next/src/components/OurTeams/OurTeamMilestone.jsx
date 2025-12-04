import React from 'react'
import * as LucideIcons from "lucide-react";


const OurTeamMilestone = ({data}) => {

    if(!data)return null;

    const getIcon = (name) => {
        const IconComponent = LucideIcons[name.trim()];
        return IconComponent ? <IconComponent size={16} color={"#f15c30"} /> : null;
    };


    return (
        <div>
            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className="flex flex-col w-[85%] p-5 text-center
                      2xl:w-[50%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'
                       dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                    <p className='text-[18px]   para-text  poppins-font'>{data.description}</p>
                </div>
                <div className="flex flex-col w-[85%] rounded-2xl mt-10 2xl:w-[65%]">
      <div className="w-full flex flex-col gap-10 relative z-0">

        {/* Vertical Line */}
        <div className="absolute md:left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-black z-10"></div>

        {data?.Milestones_Items?.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index} 
              className="w-full quotes-background h-full md:mini-h-[200px] flex flex-col md:flex-row justify-between items-center relative"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-6 h-6 gradient-bg rounded-full z-20"></div>

              {/* LEFT BLOCK (if even) */}
              {isEven && (
                <div className=" w-[90%] md:w-[40%] bg-white card-shadow flex items-end justify-end rounded-2xl h-full">
                  <div className="w-full lg:w-[80%] text-right p-5 h-full">
                   
                         <div className="flex i justify-end gap-2">{getIcon(item.icon)}
                          <p className="text-[14px] poppins-font secondary-color">{item.year}</p>
                         </div>
                  
                    <h2 className="text-[20px] montserrat-font font-semibold">{item.title}</h2>
                    <p className="text-[14px] para-text poppins-font">{item.description}</p>

               
                  
                  </div>
                </div>
              )}

              {/* IMAGE BLOCK */}
              <div className="w-[90%] md:w-[40%] p-2 h-[200px] md:min-h-[250px]">
                <div
                  className="bg-cover bg-center bg-no-repeat h-full rounded-2xl"
                  style={{ backgroundImage: `url(${item.image?.url})` }}
                ></div>
              </div>

              {/* RIGHT BLOCK (if odd) */}
              {!isEven && (
                <div className="w-[90%] md:w-[40%] bg-white card-shadow flex items-end justify-end rounded-2xl h-full">
                  <div className="w-full  lg:w-[80%] text-right p-5 h-full">
                       <div className="flex i justify-end gap-2">{getIcon(item.icon)}
                          <p className="text-[14px] poppins-font secondary-color">{item.year}</p>
                         </div>
                    <h2 className="text-[20px] montserrat-font font-semibold">{item.title}</h2>
                    <p className="text-[14px] para-text poppins-font">{item.description}</p>

                  
                   
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
            </div>
        </div>
    )
}

export default OurTeamMilestone
