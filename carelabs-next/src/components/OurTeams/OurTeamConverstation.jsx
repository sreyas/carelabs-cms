import { ArrowRight, ChartBar } from 'lucide-react'
import React from 'react'

const OurTeamConverstation = () => {
  return (
    <div>
          <section className="w-full p-10 mt-20">
      <div className="w-full  flex items-center justify-center">
        <div className=" w-[95%] sm:w-[85%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%]  flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-10 bg-white shadow-lg rounded-[32px] ">

          {/* TITLE */}
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl montserrat-font font-bold text-center gradient-text leading-tight  line-clamp-2 ">
             Ready to Talk to the People Behind the Studies?
          </p>


          {/* SUBTITLE */}
          <p className="text-sm sm:text-base md:text-lg text-center w-[95%] sm:w-[85%] para-text leading-relaxed">
           Whether you're planning a power system study, need an electrical safety audit, or want to explore how we can support your team—we're here to help.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* BUTTON 1 */}
            <a href={"#"} className="w-full sm:w-auto">
              <button className="flex items-center justify-center rounded-full text-white secondary-bg  px-5 py-3 w-full sm:w-auto text-base sm:text-[14px] font-medium">
                Schedule a Conversation
                <ChartBar className="ml-2 h-5 w-5" />
              </button>
            </a>

            {/* BUTTON 2 */}
            <a href={"#"} className="w-full sm:w-auto">
              <button className="flex items-center justify-center rounded-full text-[#111827] border border-[#2575b6] px-5 py-3 w-full sm:w-auto text-base sm:text-[14px] font-medium">
               View Open Roles
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>

          </div>

        </div>
      </div>
    </section>

    </div>
  )
}

export default OurTeamConverstation
