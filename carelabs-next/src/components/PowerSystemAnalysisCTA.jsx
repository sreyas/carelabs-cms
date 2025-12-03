"use client";

// import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PowerSystemAnalysisCTA = ({ service }) => {
  return (
    // <section className="w-full py-12 md:py-20">
    // <div className="w-full min-h-[50vh] flex items-center justify-center">
    //     <div className="w-[95%] sm:w-[85%] lg:w-[55%] rounded-4xl flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-10 gradient-bg">

    //     <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white leading-tight">
    //         Ready to run a Power System Analysis for your network?
    //     </p>

    //     <p className="text-sm sm:text-base md:text-lg text-center w-[95%] sm:w-[85%] text-white leading-relaxed">
    //         Get a comprehensive electrical engineering study tailored to your facility's unique requirements and operational goals.
    //     </p>

    //     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    //         <button className="flex items-center justify-center rounded-lg text-blue-600 bg-white px-5 py-3 w-full sm:w-auto text-base sm:text-lg font-medium">
    //         <a href="">Request a Quote</a>
    //         <ArrowRight className="ml-2 h-5 w-5" />
    //         </button>

    //         <button className="flex items-center justify-center rounded-lg text-white border border-white px-5 py-3 w-full sm:w-auto text-base sm:text-lg font-medium">
    //         <a href="">Speak with the Engineer</a>
    //         <ArrowRight className="ml-2 h-5 w-5" />
    //         </button>
    //     </div>

    //     </div>
    // </div>
    // </section>

    <section className="w-full py-12 md:py-20 bg-[#f9fbfe]">
      <div className="w-full min-h-[50vh] flex items-center justify-center">
        <div className=" w-[95%] sm:w-[85%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] rounded-4xl flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-10 bg-gradient-to-br from-[#4A88FF] via-[#4A88FF] to-[#F38A4C] ">

          {/* TITLE */}
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl montserrat-font font-bold text-center text-white leading-tight  line-clamp-2 ">
            {service?.readyTitle}
          </p>


          {/* SUBTITLE */}
          <p className="text-sm sm:text-base md:text-lg text-center w-[95%] sm:w-[85%] text-white leading-relaxed">
            {service?.readySubtitle}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* BUTTON 1 */}
            <a href={service?.readyButton1Link || "#"} className="w-full sm:w-auto">
              <button className="flex items-center justify-center rounded-lg text-blue-600 bg-white px-5 py-3 w-full sm:w-auto text-base sm:text-lg font-medium">
                {service?.readyButton1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>

            {/* BUTTON 2 */}
            <a href={service?.readyButton2Link || "#"} className="w-full sm:w-auto">
              <button className="flex items-center justify-center rounded-lg text-white border border-white px-5 py-3 w-full sm:w-auto text-base sm:text-lg font-medium">
                {service?.readyButton2}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>

          </div>

        </div>
      </div>
    </section>

  );
}

export default PowerSystemAnalysisCTA;
