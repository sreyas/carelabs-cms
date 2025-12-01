import React from 'react'

const RegionCompliance = () => {
  return (
     <div className='w-full flex flex-col items-center justify-center mt-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[65%]    ">
                    <h2 className='text-[30px] montserrat-font font-semibold mb-4'>Standards & Codes We Work To in Canada</h2>
                    <p className='text-[18px]  para-text  poppins-font'>These values guide every study, inspection, and client interaction.</p>
                </div>

        <div className="flex flex-col w-[85%] p- rounded-2xl mt-10
            2xl:w-[65%]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

                 <div className="p-8 flex flex-col justify-center gap-4 glass-panel ">
                    <div className="w-[70px] h-[70px] rounded-xl flex items-center justify-center light-blue"></div>
                    <h2 className='montserrat-font font- text-[20px]'>CSA C22.1</h2>
                    <h3 className='montserrat-font font-semibold text-[20px]'>Canadian Electrical Code, Part I</h3>
                    <p className='poppins-font text-[16px] para-text'>Core wiring and installation requirements for Canadian electrical systems.</p>
                </div>

                 <div className="p-8 flex flex-col justify-center gap-4 glass-panel">
                   <div className="w-[70px] h-[70px] rounded-xl flex items-center justify-center light-blue"></div>
                    <h2 className='montserrat-font font- text-[20px]'>CSA Z462</h2>
                    <h3 className='montserrat-font font-semibold text-[20px]'>Workplace Electrical Safety</h3>
                    <p className='poppins-font text-[16px] para-text'>Canadian implementation aligned with NFPA 70E for arc-flash and shock protection.</p>
                </div>

                 <div className="p-8 flex flex-col justify-center gap-4 glass-panel">
                    <div className="w-[70px] h-[70px] rounded-xl flex items-center justify-center light-blue"></div>
                      <h2 className='montserrat-font font- text-[20px]'>NFPA 70E / IEEE 1584</h2>
                    <h3 className='montserrat-font font-semibold text-[20px]'>Arc-Flash Reference Standards</h3>
                    <p className='poppins-font text-[16px] para-text'>Supporting guidance for arc-flash hazard analysis and PPE selection.</p>
                </div>

                 <div className="p-8 flex flex-col justify-center gap-4 glass-panel ">
                    <div className="w-[70px] h-[70px] rounded-xl flex items-center justify-center light-blue"></div>
                    <h2 className='montserrat-font font- text-[20px]'>NERC Standards</h2>
                    <h3 className='montserrat-font font-semibold text-[20px]'>Reliability Standards</h3>
                    <p className='poppins-font text-[16px] para-text'>Every recommendation starts with protecting people and assets from electrical hazards.</p>
                </div>

                 <div className="p-8 flex flex-col justify-center gap-4 glass-panel ">
                    <div className="w-[70px] h-[70px] rounded-xl flex items-center justify-center light-blue"></div>
                    <h2 className='montserrat-font font- text-[20px]'>Provincial & AHJ</h2>
                    <h3 className='montserrat-font font-semibold text-[20px]'>Local Requirements</h3>
                    <p className='poppins-font text-[16px] para-text'>Following relevant provincial and local authority rules for jurisdiction-specific compliance.</p>
                </div>

            </div>
        </div>       
    </div>
  )
}

export default RegionCompliance
