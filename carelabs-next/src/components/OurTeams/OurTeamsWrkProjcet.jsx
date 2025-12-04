import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'


const OurTeamsWrkProjcet = ({data}) => {
    if(!data)return null;
  return (
    <div>
       <div className='w-full flex flex-col items-center justify-center mt-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[50%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'
                       dangerouslySetInnerHTML={{ __html: data.title }}
                    ></h2>
                    <p className='text-[18px]   para-text  poppins-font'>{data.description}</p>
                </div>

        <div className="flex flex-col w-[85%] p- rounded-2xl mt-10 
            2xl:w-[65%]">
        
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">

            {data.Guiding_Items?.map((item, index) => {
                const imageUrl = item.image?.url

                return (
                <div key={index} className="glass-panel rounded-2xl">
                    
                    {/* IMAGE */}
                    <img
                    className="w-full xl:h-[280px] rounded-t-2xl montserrat-font object-cover"
                    src={imageUrl}
                    alt={item.title}
                    />

                    {/* CONTENT */}
                    <div className="flex flex-col gap-2 p-5">
                    <h3 className="text-[20px] font-semibold">{item.title}</h3>
                    <h4 className="text-[16px] poppins-font primary-color">{item.subtitle}</h4>
                    <p className="text-[14px] poppins-font">{item.description}</p>
                    </div>

                </div>
                );
            })}
            
            </div>



        </div>       
       </div>
    </div>
  )
}

export default OurTeamsWrkProjcet
