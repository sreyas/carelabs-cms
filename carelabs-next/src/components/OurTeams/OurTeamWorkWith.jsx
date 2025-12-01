import { Building } from 'lucide-react'
import React from 'react'

const OurTeamWorkWith = () => {
  return (
    <div>
        <div className='w-full flex flex-col items-center justify-center mt-20'>
            <h2 className='text-[36px] montserrat-font font-semibold text-center  my-10'>Where you'll work with us</h2>
            <p className='text-[18px]   para-text  poppins-font'>From dedicated hubs to on-site coverage and remote engineering support—we're where you need us.</p>

            <div className="flex flex-col w-[85%] rounded-2xl 
                lg:flex-row
                2xl:w-[65%] ">

                <div className="">
                    <Building/>
                     <h3>Inspection hubs</h3>
                     <div className="flex ">
                        <p>UAE</p>
                        <p>Saudi Arabia</p>
                        <p>India</p>
                        <p>Canada
</p>
                     </div>
                </div>
               
            </div> 
    </div>
    </div>
  )
}

export default OurTeamWorkWith
