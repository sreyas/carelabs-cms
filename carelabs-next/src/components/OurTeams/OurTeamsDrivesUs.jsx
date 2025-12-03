"use client";
import { Dot, Rocket, Target } from 'lucide-react';
import React from 'react'

const OurTeamsDrivesUs = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-20'>
        <h2 className='text-[36px] montserrat-font font-semibold text-center  my-10'>What Drives Us</h2>
            <div className="flex flex-col w-[85%] rounded-2xl 
               
                lg:flex-row
                2xl:w-[65%] ">
                <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full light-blue flex items-center justify-center">
                                 <Target size={24} color="#157de5"/>
                            </div>
                            <p className='montserrat-font text-[24px] font-semibold'>Why We Exist</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#157de5"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#ff7038"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>


                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#157de5"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#ff7038"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>


                

                      
                    </div>

                     <div className="rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full light-blue flex items-center justify-center">
                                 <Rocket size={24} color="#ff7038"/>
                            </div>
                            <p className='montserrat-font text-[24px] font-semibold'>Why We Exist</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#ff7038"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#157de5"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>


                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#ff7038"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>

                        <div className="flex mb-3">
                            <div className="">
                                <Dot size={45} color="#157de5"/>
                            </div>
                            <p className='para-text poppins-font text-[16px]'>Make electrical systems safer and more reliable for people and operations.</p>
                        </div>
                      
                    </div>
                    
                </div>
            </div> 
    </div>
  )
}

export default OurTeamsDrivesUs
