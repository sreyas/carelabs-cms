import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'


const OurTeamsWrkProjcet = () => {
  return (
    <div>
       <div className='w-full flex flex-col items-center justify-center mt-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[50%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'>Guiding the work on every project</h2>
                    <p className='text-[18px]   para-text  poppins-font'>Our leadership team brings decades of combined experience in electrical engineering, field operations, and compliance.</p>
                </div>

        <div className="flex flex-col w-[85%] p- rounded-2xl mt-10 
            2xl:w-[65%]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">

            <div className="glass-panel rounded-2xl">
                <img className='w-full xl:h-[280px] rounded-t-2xl montserrat-font' src={carelabzImage.src} alt="" />

                <div className="flex flex-col gap-2 p-5">
                   <h3 className='text-[20px] font-semibold '>Engineering Leadership</h3>
                   <h4 className='text-[16px] poppins-font primary-color'>Power Systems Engineering</h4>
                   <p className='text-[14px] poppins-font '>Arc-flash studies, relay coordination, and load flow analysis</p>
                </div>
              
            </div>

            <div className="glass-panel rounded-2xl">
                <img className='w-full xl:h-[280px] rounded-t-2xl montserrat-font' src={carelabzImage.src} alt="" />

                <div className="flex flex-col gap-2 p-5">
                   <h3 className='text-[20px] font-semibold '>Engineering Leadership</h3>
                   <h4 className='text-[16px] poppins-font primary-color'>Power Systems Engineering</h4>
                   <p className='text-[14px] poppins-font '>Arc-flash studies, relay coordination, and load flow analysis</p>
                </div>
              
            </div>

            <div className="glass-panel rounded-2xl">
                <img className='w-full xl:h-[280px] rounded-t-2xl montserrat-font' src={carelabzImage.src} alt="" />

                <div className="flex flex-col gap-2 p-5">
                   <h3 className='text-[20px] font-semibold '>Engineering Leadership</h3>
                   <h4 className='text-[16px] poppins-font primary-color'>Power Systems Engineering</h4>
                   <p className='text-[14px] poppins-font '>Arc-flash studies, relay coordination, and load flow analysis</p>
                </div>
              
            </div>

            <div className="glass-panel rounded-2xl">
                <img className='w-full xl:h-[280px] rounded-t-2xl montserrat-font' src={carelabzImage.src} alt="" />

                <div className="flex flex-col gap-2 p-5">
                   <h3 className='text-[20px] font-semibold '>Engineering Leadership</h3>
                   <h4 className='text-[16px] poppins-font primary-color'>Power Systems Engineering</h4>
                   <p className='text-[14px] poppins-font '>Arc-flash studies, relay coordination, and load flow analysis</p>
                </div>
              
            </div>
        </div>


        </div>       
       </div>
    </div>
  )
}

export default OurTeamsWrkProjcet
