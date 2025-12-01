import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'
import { Dot, Zap } from 'lucide-react'


const OurTeamsAction = () => {
  return (
    <div>
         <div className='w-full flex flex-col items-center justify-center mt-20'>
              <div className="flex flex-col w-[85%] p-5 text-center
                      2xl:w-[50%]    ">
                          <h2 className='text-[30px] montserrat-font font-semibold mb-4'>Teams in Action</h2>
                          <p className='text-[18px]   para-text  poppins-font'>Our specialists work across field, office, and reporting to deliver comprehensive electrical safety solutions.</p>
                      </div>
      
                    <div className="flex flex-col w-[85%]  rounded-2xl mt-10 
                        2xl:w-[65%]">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                      
                            <div className="relative w-full h-[400px] lg:h-[550px] rounded-2xl "
                                style={{
                                    backgroundImage: `url(${carelabzImage.src})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>  {/* Adjust opacity */}

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-between h-full gap-4">
                                <div className="">
                                <div className="w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-xl flex items-center justify-center quotes-background mb-3  ">
                                    <Zap color='white' />
                                </div>
                                <h2 className="text-white montserrat-font font-semibold">On-site specialists</h2>
                                </div>
                            
                            
                            <div className="">
                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>
                            </div>
                            
                            </div>
                            </div>

                       
                            <div className="relative w-full h-[400px] lg:h-[550px] rounded-2xl "
                                style={{
                                    backgroundImage: `url(${carelabzImage.src})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>  {/* Adjust opacity */}

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-between h-full gap-4">
                                <div className="">
                                <div className="w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-xl flex items-center justify-center quotes-background mb-3  ">
                                    <Zap color='white' />
                                </div>
                                <h2 className="text-white montserrat-font font-semibold">On-site specialists</h2>
                                </div>
                            
                            
                            <div className="">
                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>
                            </div>
                            
                            </div>
                            </div>


                       
                            <div className="relative w-full h-[400px] lg:h-[550px] rounded-2xl "
                                style={{
                                    backgroundImage: `url(${carelabzImage.src})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>  {/* Adjust opacity */}

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-between h-full gap-4">
                                <div className="">
                                <div className="w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-xl flex items-center justify-center quotes-background mb-3  ">
                                    <Zap color='white' />
                                </div>
                                <h2 className="text-white montserrat-font font-semibold">On-site specialists</h2>
                                </div>
                            
                            
                            <div className="">
                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>

                                    <div className="flex items-center mb-3 gap-3">
                                        <Dot size={45} color="#FF7038"/>
                                        <p className='poppins-font text-[14px] text-white'>Live testing and commissioning</p>
                                    </div>
                            </div>
                            
                            </div>
                            </div>


                    </div>
            
                    </div>       
             </div>
    </div>
  )
}

export default OurTeamsAction
